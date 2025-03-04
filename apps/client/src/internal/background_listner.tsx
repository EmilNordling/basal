import { register, isRegistered } from "@tauri-apps/plugin-global-shortcut";
import { readText } from "@tauri-apps/plugin-clipboard-manager";
import { Injectable } from "@wox-team/wox-inject";
import { KeyBindings } from "./key_bindings";
import { Router } from "./ui/router";

// const script = `
// tell application "System Events"
//     keystroke "c" using {command down}
// end tell
// `;

// const args = script
//   .trim()
//   .split("\n")
//   .flatMap((line) => ["-e", line]);

// const command = Command.create("exec-osascript", args);

// async function sleep(ms: number) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function getSelectedText() {
//   const initialClipboardContent = await readText();

//   try {
//     await command.spawn();

//     await new Promise((resolve) => {
//       command.on("close", resolve);
//     });

//     let attempts = 10;
//     let currentClipboardContent = initialClipboardContent;

//     while (
//       attempts > 0 &&
//       currentClipboardContent === initialClipboardContent
//     ) {
//       await sleep(100);
//       currentClipboardContent = await readText();
//       attempts--;
//     }

//     return currentClipboardContent;
//   } finally {
//     if (initialClipboardContent) {
//       await writeText(initialClipboardContent);
//     }
//   }
// }

@Injectable()
export class BackgroundListner {
  constructor(
    private readonly keyBindings: KeyBindings,
    private readonly router: Router
  ) {
    this.register();
  }

  async register() {
    const shortcut = this.keyBindings["workspace::New"];

    if (!(await isRegistered(shortcut))) {
      await register(shortcut, async (e) => {
        if (e.state === "Pressed") {
          const _ = await readText();

          this.router.to("/settings");
        }
      });
    }
  }
}
