type Fn = (...args: any) => unknown;

export class Timer {
  private disposers = new Map<number, Timer.Disposer>();
  private registeredId = 0;

  public wait(duration: number, callback: Fn): Timer.Disposer {
    const timeout = setTimeout(callback, duration);

    const disposer = (): void => {
      clearTimeout(timeout);
    };

    return this.registerDisposer(disposer);
  }

  public repeat(duration: number, callback: Fn, callOnceOnInvoke = false): Timer.Disposer {
    if (callOnceOnInvoke) {
      callback();
    }

    const interval = setInterval(callback, duration);

    const disposer = (): void => {
      clearInterval(interval);
    };

    return this.registerDisposer(disposer);
  }

  public dispose(): void {
    this.disposers.forEach((disposer) => disposer());
  }

  private registerDisposer(disposer: Timer.Disposer): Timer.Disposer {
    const localUid = this.registeredId++;

    this.disposers.set(localUid, disposer);

    return () => {
      this.disposers.delete(localUid);

      disposer();
    };
  }
}

/**
 * Wrapper around JavaScript's setTimeout and setInterval to provide a more
 * intuitive api interface
 */
export namespace Timer {
  export type Disposer = () => void;
  type GetArgumentTypes<T extends Fn> = T extends (...x: infer argumentsType) => unknown ? argumentsType : never;

  export function wait(...args: GetArgumentTypes<Timer['wait']>): Disposer {
    const time = new Timer();

    time.wait(...args);

    return time.dispose.bind(time);
  }

  export function repeat(...args: GetArgumentTypes<Timer['repeat']>): Disposer {
    const time = new Timer();

    time.repeat(...args);

    return time.dispose.bind(time);
  }
}
