import { UserAuth } from "@/app/store";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = UserAuth((state) => state.user);

  if (!accessToken?.accessToken) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
