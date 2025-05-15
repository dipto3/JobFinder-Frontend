import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  function handleLogout() {
    setAuth({});
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
