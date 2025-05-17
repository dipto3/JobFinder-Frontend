import { useContext } from "react";
import { ProfileContext } from "../context";

export const useProfile = () => {
  //   const { profileState } = useContext(ProfileContext);

  return useContext(ProfileContext);
};
