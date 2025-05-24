import { RouterProvider } from "react-router-dom";
import { Injector, useResolve } from "@wox-team/wox-inject";
import { AuthService } from "internal/domain/account/auth/auth_service";
import { Desktop } from "@application/(manage)/layout";
import { Page as LandingPage } from "@application/(manage)/landing/page";
import { Router } from "internal/ui/router";
import { useConstant } from "@wox-team/wox-app-vitals";
import SignInPage from "@application/(manage)/sign_in/page";
import CustomerPage from "@application/(manage)/customers/page";
import ChatPage from "@application/(manage)/chat/page";
import Asset from "@application/(manage)/asset/page";
import SettingsPage from "@application/(manage)/settings/settings";
import OnboardingPage from "@application/(manage)/onboarding/page";
import CompLibPage from "@application/(manage)/comp_lib/page";
import { UserDesktop } from "@application/(users)/layout";
import ForYouPage from "@application/(users)/for_you_page/page";

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
        path: "/app",
        element: <UserDesktop />,
        children: [
          {
            index: true,
            element: <ForYouPage />,
          },
        ],
      },
      {
        path: "/manage",
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
            path: "ds-playground",
            element: <CompLibPage />,
          },
          {
            path: "onboarding",
            element: <OnboardingPage />,
          },
          {
            path: "assets",
            element: <Asset />,
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
