import React, { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaPlusSquare,
  FaCog,
  FaUsers,
  FaEnvelope,
  FaBlog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  // Handle navigation to different pages
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    setIsMenuOpen(false); // Close the menu after navigation
  };

  // Handle logout
  const handleLogout = () => {
    // Clear the JWT token from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <>
      {/* Hamburger Icon for Mobile */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-white bg-[#1a1f1e] p-2 rounded focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Sidebar Dropdown */}
      <aside
        className={`fixed top-0 right-0 h-screen w-3/4 bg-[#1a1f1e] z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-6 text-xl font-bold text-white text-right">
          JOYA PROPERTIES
        </div>
        <nav className="space-y-6 p-4">
          {[{
            label: "Home", 
            icon: <FaHome size={20} />, 
            path: "/DashboardHome"
          },
          {
            label: "Properties", 
            icon: <FaBuilding size={20} />, 
            path: "/properties"
          },
          {
            label: "Add Off Plan", 
            icon: <FaPlusSquare size={20} />, 
            path: "/add-of-plan"
          },
          {
            label: "Add Luxury", 
            icon: <FaPlusSquare size={20} />, 
            path: "/add-luxury"
          },
          {
            label: "Add Feature",  
            icon: <FaPlusSquare size={20} />, 
            path: "/add-feature"
          },
          {
            label: "Services", 
            icon: <FaCog size={20} />, 
            path: "/services"
          },
          {
            label: "Team", 
            icon: <FaUsers size={20} />, 
            path: "/team"
          },
          {
            label: "Contact Us", 
            icon: <FaEnvelope size={20} />, 
            path: "/contact-us"
          },
          {
            label: "Blogs", 
            icon: <FaBlog size={20} />, 
            path: "/blogs"
          },
          {
            label: "Logout", 
            icon: <FaSignOutAlt size={20} />, 
            path: "#", // Just for the logout action
            onClick: handleLogout // Call the handleLogout function
          }].map((item) => (
            <div
              key={item.label}
              className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
              onClick={() => item.onClick ? item.onClick() : handleNavigation(item.path)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:block md:w-1/5 bg-[#1a1f1e] p-4">
        <div className="text-center text-xl font-bold mb-8 text-white">
          JOYA PROPERTIES
        </div>
        <nav className="space-y-6">
          {[{
            label: "Home", 
            icon: <FaHome size={20} />, 
            path: "/DashboardHome"
          },
          {
            label: "Properties", 
            icon: <FaBuilding size={20} />, 
            path: "/properties"
          },
          {
            label: "Add Off Plan", 
            icon: <FaPlusSquare size={20} />, 
            path: "/add-of-plan"
          },
          {
            label: "Add Luxury", 
            icon: <FaPlusSquare size={20} />, 
            path: "/add-luxury"
          },
          {
            label: "Add Feature", 
            icon: <FaPlusSquare size={20} />, 
            path: "/add-feature"
          },
          {
            label: "Services", 
            icon: <FaCog size={20} />, 
            path: "/edit-services"
          },
          {
            label: "Team", 
            icon: <FaUsers size={20} />, 
            path: "/team"
          },
          {
            label: "Contact Us", 
            icon: <FaEnvelope size={20} />, 
            path: "/contact-us"
          },
          {
            label: "About Us", 
            icon: <FaEnvelope size={20} />, 
            path: "/about-us"
          },
          {
            label: "Blogs", 
            icon: <FaBlog size={20} />, 
            path: "/blogs"
          },
          {
            label: "Logout", 
            icon: <FaSignOutAlt size={20} />, 
            path: "#", // Just for the logout action
            onClick: handleLogout // Call the handleLogout function
          }].map((item) => (
            <div
              key={item.label}
              className="text-white flex items-center space-x-4 p-3 hover:bg-[#3d6a64] rounded-md cursor-pointer"
              onClick={() => item.onClick ? item.onClick() : handleNavigation(item.path)}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
