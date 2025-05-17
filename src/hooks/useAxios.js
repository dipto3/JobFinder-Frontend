import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";

const useAxios = () => {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    //request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.token;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    return () => {
      api.interceptors.request.eject(requestIntercept);
    };

    //response interceptor (when use refreshtoken)
  }, [auth.token]);
  return { api };
};
export default useAxios;
