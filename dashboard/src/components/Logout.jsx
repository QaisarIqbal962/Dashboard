import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("isAuthenticated");
    // optionally remove userData if you want full sign-out: localStorage.removeItem('userData')
    navigate("/auth", { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
