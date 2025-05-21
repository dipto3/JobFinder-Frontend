import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { setProfileState } = useProfile();
  function handleLogout() {
    setAuth({});
    setProfileState(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("savedProfile");
    navigate("/");
  }
  return (
    <>
      <button
        onClick={handleLogout}
        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        Logout
      </button>
    </>
  );
}
