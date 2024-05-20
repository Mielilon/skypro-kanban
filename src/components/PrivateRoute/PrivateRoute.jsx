import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

export default function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}
