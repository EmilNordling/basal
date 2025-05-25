const promises: Promise<any>[] = [];
// if (import.meta.env.VITE_USE_MOCK === "true") {
//   try {
//     console.debug("[development] App is using mock data");
//     promises.push(
//       import("../mocks/browser").then(({ worker }) => {
//         worker.start({
//           quiet: true,
//         });
//       })
//     );
//   } catch (e) {
//     console.error(e);
//   }
// }

import "error_control_runtime";
import { App } from "components/app";
import { createRoot } from "react-dom/client";
import { Logger, StdOutChannel } from "utils/logger";

Logger.attachChannel(new StdOutChannel());

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

// Temp... Will remove for top-level await chenanigans.
Promise.all(promises).then(() => {
  root.render(<App />);
});
