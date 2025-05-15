import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
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
