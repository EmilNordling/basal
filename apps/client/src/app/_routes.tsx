import { RouterProvider } from "react-router-dom";
import { Injector, useResolve } from "@wox-team/wox-inject";
import { AuthService } from "internal/domain/account/auth/auth_service";
import { Desktop } from "@application/layout";
import { SignIn } from "@application/sign_in/sign_in";
import { Page as LandingPage } from "@application/landing/page";
import CustomerPage from "./customers/page";
import ChatPage from "./chat/page";
import SettingsPage from "./settings/settings";
import OnboardingPage from "./onboarding/page";
import CompLibPage from "@application/comp_lib/page";
import { Router } from "internal/ui/router";
import { useConstant } from "@wox-team/wox-app-vitals";

export function AppRoutes() {
  const injector = useResolve(Injector);
  const router = useResolve(Router);

  const definedRoutes = useConstant(() => {
    return router.createBrowserRouter([
      {
        path: "/landing",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnboardingPage />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/",
        loader: async () => {
          const authService = injector.resolve(AuthService);

          // await authService.load();

          return null;
        },
        element: <Desktop />,
        children: [
          {
            index: true,
            element: <ChatPage />,
          },
          {
            path: "/ds-playground",
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
