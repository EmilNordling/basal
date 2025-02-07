import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Injector, useResolve } from "@wox-team/wox-inject";
import { AuthService } from "internal/domain/account/auth/auth_service";
import { Desktop } from "@component/layout/desktop.v2";
import { RequireAuth } from "@component/require_auth";
import { SignIn } from "@view/sign_in/sign_in";
import { Tiles } from "@view/tiles/tiles";
import { Landing } from "@view/landing/ladning";
import { CompLib } from "@view/comp_lib/comp_lib";
import { Settings } from "./views/settings/settings";
import { Theming } from "./views/theming/theming";
import { TilesId } from "./views/tiles/tiles_id/tiles_id";

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
