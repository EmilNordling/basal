import { useUser } from "internal/domain/account/auth/use_user";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export function RequireAuth(props: Props) {
  const user = useUser();
  const location = useLocation();

  if (user == null) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return props.children;
}
