import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Injector, useResolve } from "@wox-team/wox-inject";
import { AuthService } from "internal/domain/account/auth/auth_service";
import { Desktop } from "@application/layout";
import { RequireAuth } from "@component/require_auth";
import { SignIn } from "@application/sign_in/sign_in";
import { Tiles } from "@application/tiles/tiles";
import { Page as LandingPage } from "@application/landing/page";
import { CompLib } from "@application/comp_lib/comp_lib";
import ChatPage from "./chat/page";
import SettingsPage from "./settings/settings";

export function AppRoutes() {
  const injector = useResolve(Injector);

  return <RouterProvider router={router(injector)} />;
}

function router(injector: Injector) {
  return createBrowserRouter([
    {
      index: true,
      element: <LandingPage />,
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

        // await authService.load();

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
          path: "chat",
          element: <ChatPage />,
        },
        {
          path: "settings",
          element: <SettingsPage />,
        },
      ],
    },
  ]);
}
