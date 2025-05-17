import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";

export default function PrivateRoutes() {
  const { auth } = useAuth();

  return (
    <>
      
        {auth.user ? <Outlet /> : <Navigate to="/login" />}
      
    </>
  );
}
