// Reason: Structured logging needs should be able to take in anything.

import { Disposer, EventEmitter } from "@wox-team/wox-app-vitals";
import { isSomeError } from "../internal/is_some_error";

export class Logger {
  private static runtime: Nullable<Runtime> = null;
  public static attachChannel(channel: Channel): void {
    this.runtime ??= new Runtime();

    Logger.runtime?.attachChannel(channel);
  }

  public static on(
    event: Events,
    cb: (data: EventDispatchedData) => void
  ): Disposer {
    if (Logger.runtime == null)
      throw new Error("Logger runtime is not initialized");

    return Logger.runtime.on(event, cb);
  }

  public static off(
    event: Events,
    cb: (data: EventDispatchedData) => void
  ): void {
    if (Logger.runtime == null)
      throw new Error("Logger runtime is not initialized");

    Logger.runtime.off(event, cb);
  }

  constructor(private readonly ctx: string | null = null) {
    // Empty
  }

  // biome-ignore lint/suspicious/noExplicitAny: The args can be anything.
  public logVerbose(strTemplate: string, ...replaceArgs: any[]): void {
    this.createMessage(LogLevel.Verbose, strTemplate, ...replaceArgs);
  }

  // biome-ignore lint/suspicious/noExplicitAny: The args can be anything.
  public logDebug(strTemplate: string, ...replaceArgs: any[]): void {
    this.createMessage(LogLevel.Debug, strTemplate, ...replaceArgs);
  }

  // biome-ignore lint/suspicious/noExplicitAny: The args can be anything.
  public logInformation(strTemplate: string, ...replaceArgs: any[]): void {
    this.createMessage(LogLevel.Information, strTemplate, ...replaceArgs);
  }

  // biome-ignore lint/suspicious/noExplicitAny: The args can be anything.
  public logWarning(strTemplate: string, ...replaceArgs: any[]): void {
    this.createMessage(LogLevel.Warning, strTemplate, ...replaceArgs);
  }

  // biome-ignore lint/suspicious/noExplicitAny: The args can be anything.
  public logError(strTemplate: string, ...replaceArgs: any[]): void {
    this.createMessage(LogLevel.Error, strTemplate, ...replaceArgs);
  }

  // biome-ignore lint/suspicious/noExplicitAny: The args can be anything.
  public logFatal(strTemplate: string, ...replaceArgs: any[]): void {
    this.createMessage(LogLevel.Fatal, strTemplate, ...replaceArgs);
  }

  private createMessage(
    level: LogLevel,
    template: string,
    ...replaceArgs: string[]
  ): void {
    if (Logger.runtime == null) return;

    const message = {
      timestamp: Date.now(),
      ctx: this.ctx,
      level,
      template,
      data: replaceArgs,
    };

    Logger.runtime.enqueue(message);
  }
}

// prettier-ignore
export enum LogLevel {
	Verbose     = 1 << 6,
	Debug       = 1 << 5,
	Information = 1 << 4,
	Warning     = 1 << 3,
	Error       = 1 << 2,
	Fatal       = 1 << 1,
	None        = 0,
}

export interface Channel {
  out(str: string, msgRaw: Message): void;
}

export class StdOutChannel implements Channel {
  out(str: string, msgRaw: Message) {
    switch (msgRaw.level) {
      case LogLevel.Error:
      case LogLevel.Fatal: {
        console.error("%c " + str, "color: rgb(255, 117, 117)");
        break;
      }
      case LogLevel.Warning: {
        console.warn("%c " + str, "color: rgb(255, 182, 0)");
        break;
      }
      case LogLevel.Verbose: {
        console.log("%c " + str, "color: rgb(170, 170, 170)");
        break;
      }
      case LogLevel.Debug: {
        console.log("%c " + str, "color: rgb(0, 255, 164)");
        break;
      }
      default:
        console.log("%c " + str, "color: #1ca8fa");
    }
  }
}

export type Events = Lowercase<keyof typeof LogLevel>;
export type EventDispatchedData = [parsedMsg: string, msg: Message];

class Runtime extends EventEmitter<Record<Events, EventDispatchedData>> {
  private messages: Message[] = [];
  private isScheduledToPrint = false;
  private printIndex = 0;

  public level = LogLevel.Verbose;
  private channel: Nullable<Channel> = null;

  public attachChannel(channel: Channel): void {
    this.channel = channel;
  }

  private print(parsedMsg: string, msg: Message): void {
    this.channel?.out(parsedMsg, msg);
  }

  private dispatchEvent(parsedMsg: string, msg: Message): void {
    const level = LogLevel[msg.level].toLowerCase() as Lowercase<
      keyof typeof LogLevel
    >;
    this.emit(level, [parsedMsg, msg]);
  }

  public enqueue(msg: Message): void {
    this.messages.push(msg);

    if (this.isScheduledToPrint) return;

    this.isScheduledToPrint = true;

    queueMicrotask(() => {
      this.walk();
      this.isScheduledToPrint = false;
    });
  }

  private walk(): void {
    while (this.printIndex < this.messages.length) {
      const msg = this.messages[this.printIndex];
      this.printIndex++;

      if (msg.level > this.level) return;

      const parsedMsg = this.parseMessage(msg);
      this.dispatchEvent(parsedMsg, msg);
      this.print(parsedMsg, msg);
    }
  }

  private parseMessage(msg: Message): string {
    let extractedDataIndex = 0;

    let result = "";
    let walkerIndex = 0;
    while (walkerIndex < msg.template.length) {
      const openBraceIndex = msg.template.indexOf("{", walkerIndex);
      if (openBraceIndex === -1) {
        result += msg.template.slice(walkerIndex);
        break;
      }

      const closeBraceIndex = msg.template.indexOf("}", openBraceIndex + 1);
      if (closeBraceIndex === -1) {
        result += msg.template.slice(walkerIndex);
        break;
      }

      result += msg.template.slice(walkerIndex, openBraceIndex);
      // const key = msg.template.slice(openBraceIndex + 1, closeBraceIndex);

      const data = this.unwrapData(msg.data[extractedDataIndex]);

      result += data;
      extractedDataIndex++;

      walkerIndex = closeBraceIndex + 1;
    }

    return [
      "[" +
        new Date(msg.timestamp).toLocaleTimeString(navigator.language) +
        "]",
      this.getCtxSection(msg),
      result,
    ]
      .filter(Boolean)
      .join(" ");
  }

  // biome-ignore lint/suspicious/noExplicitAny: someValue can be anything.
  private unwrapData(someValue: any): string {
    if (isSomeError(someValue)) {
      return someValue.message;
    }

    if (someValue === null) return "null";
    if (someValue === undefined) return "undefined";

    return someValue.toString();
  }

  private getCtxSection(msg: Message): string | null {
    if (!msg.ctx) return null;

    return "[" + msg.ctx + "]";
  }
}

export interface Message {
  timestamp: number;
  ctx: string | null;
  level: LogLevel;
  template: string;
  data: string[];
}
