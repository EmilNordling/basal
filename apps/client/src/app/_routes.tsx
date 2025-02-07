import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Injector, useResolve } from "@wox-team/wox-inject";
import { AuthService } from "internal/domain/account/auth/auth_service";
import { Desktop } from "@component/layout/desktop.v2";
import { RequireAuth } from "@component/require_auth";
import { SignIn } from "@application/sign_in/sign_in";
import { Tiles } from "@application/tiles/tiles";
import { Landing } from "@application/landing/ladning";
import { CompLib } from "@application/comp_lib/comp_lib";
import { Settings } from "./settings/settings";
import { Theming } from "./theming/theming";
import { TilesId } from "./tiles/tiles_id/tiles_id";

export function AppRoutes() {
  const injector = useResolve(Injector);

  return <RouterProvider router={router(injector)} />;
}

function router(injector: Injector) {
  return createBrowserRouter([
    {
      index: true,
      element: <Landing />,
    },
    {
      path: "/comp-lib",
      element: <CompLib />,
    },
    {
      path: "/login",
      element: <SignIn />,
    },
    {
      path: "/app",
      loader: async () => {
        const authService = injector.resolve(AuthService);

        await authService.load();

        return null;
      },
      element: (
        <RequireAuth>
          <Desktop />
        </RequireAuth>
      ),
      children: [
        {
          index: true,
          element: <Tiles />,
        },
        {
          path: "tiles",
          children: [
            {
              index: true,
              element: <Tiles />,
            },
            {
              path: ":id",
              element: <TilesId />,
            },
          ],
        },
        {
          path: "my-issues",
          element: <Tiles />,
        },
        {
          path: "theming",
          element: <Theming />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
  ]);
}
