import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const { auth } = useDebugValue(auth, (auth) =>
    auth?.user ? "User Logged In" : "user Logged out"
  );
  return useContext(AuthContext);
};
