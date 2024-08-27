import { useAuth } from "shared/providers";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";
import { RouteNames } from "shared/model/route-names";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  const location = useLocation();

  console.log("PrivateRoute", user);

  return user ? (
    children
  ) : (
    <Navigate to={RouteNames.signIn} state={{ from: location }} replace />
  );
}
