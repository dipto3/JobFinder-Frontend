import { useEffect, useState } from "react";
import { ProfileContext } from "../context";

export default function ProfileProvider({ children }) {
  const [profileState, setProfileState] = useState(() => {
    const savedProfile = localStorage.getItem("savedProfile");
    return savedProfile ? JSON.parse(savedProfile) : null;
  });
  useEffect(() => {
    if (profileState) {
      localStorage.setItem("savedProfile", JSON.stringify(profileState));
    } else {
      localStorage.removeItem("savedProfile");
    }
  }, [profileState]);
  return (
    <>
      <ProfileContext.Provider value={{ profileState, setProfileState }}>
        {children}
      </ProfileContext.Provider>
    </>
  );
}
