import { Injectable } from "@wox-team/wox-inject";
import { createBrowserRouter } from "react-router-dom";

@Injectable()
export class Router {
  #activeRouter: Nullable<ReturnType<typeof createBrowserRouter>> = null;

  createBrowserRouter(...args: ArgumentTypes<typeof createBrowserRouter>) {
    if (this.#activeRouter == null) {
      this.#activeRouter ??= createBrowserRouter(...args);
    }

    return this.#activeRouter;
  }

  to(url: string) {
    if (this.#activeRouter == null) return;

    const matching =
      this.#activeRouter.state.matches[
        this.#activeRouter?.state.matches.length - 1
      ];

    const id = matching.route.id;

    this.#activeRouter.navigate(url, { fromRouteId: id });
  }
}
