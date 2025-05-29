import { RouterProvider } from "react-router-dom";
import { Injector, useResolve } from "@wox-team/wox-inject";
import { AuthService } from "internal/domain/account/auth/auth_service";
import { Desktop } from "@application/[org]/layout";
import { Page as LandingPage } from "@application/landing/page";
import { Router } from "internal/router";
import { useConstant } from "@wox-team/wox-app-vitals";
import { RequireAuth } from "@component/require_auth";
import SignInPage from "@application/sign_in/page";
import CustomerPage from "@application/customers/page";
import ChatPage from "@application/[org]/chat/[threadId]/page";
import SettingsPage from "@application/settings/settings";
import CompLibPage from "@application/comp_lib/page";
import HomePage from "@application/[org]/home/page";

export function AppRoutes() {
  const injector = useResolve(Injector);
  const router = useResolve(Router);

  const definedRoutes = useConstant(() => {
    return router.createBrowserRouter([
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <SignInPage />,
      },
      {
        path: "/:id",
        loader: async (args) => {
          const _ = injector.resolve(AuthService);

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
            element: <HomePage />,
          },
          {
            path: "ds-playground",
            element: <CompLibPage />,
          },
          {
            path: "customers",
            element: <CustomerPage />,
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
  });

  return <RouterProvider router={definedRoutes} />;
}
