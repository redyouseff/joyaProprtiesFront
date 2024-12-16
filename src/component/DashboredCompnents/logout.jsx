import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div>
      <button onClick={handleLogout} className="btn-logout">
        Logout
      </button>
    </div>
  );
};

export default Logout;
