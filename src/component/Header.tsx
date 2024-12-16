import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition.ts";
import icon from "./Mask group.svg";
import "./../css/header.css";

const navigationLinks = [
  { name: "Home", href: "/" },
  {
    name: "Projects",
    href: "/projects",
    subLinks: [
      { name: "Off Plan", href: "/Projects/Off-Plan" },
      { name: "Features", href: "/Projects/Features" },
      { name: "Luxury", href: "/Projects/Luxury" },
    ],
  },
  { name: "Services", href: "/Services" },
  { name: "NEWS & BLOG", href: "/Blog" },
  { name: "About Us", href: "/About" },
  { name: "Contact Us", href: "/Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const scrollPosition = useScrollPosition();
  const pathName = window.location.pathname;
  const isScrolled = scrollPosition > 0;

  // Close the dropdown or menu when the path changes
  React.useEffect(() => {
    setActiveDropdown(null); // Close dropdown menu
    setIsMenuOpen(false); // Close the main menu
  }, [pathName]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-t from-[#111612]/90 to-[#111612]/95 backdrop-blur-md h-[80px]"
          : "bg-gradient-to-t from-[#111612]/70 to-transparent h-[140px]"
      } shadow-lg`}
    >
      <div className="relative h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#111612] to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>
        <div className="container mx-auto px-2 py-5 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex items-center justify-center ml-4">
            <Link to="/">
              <img
                src={icon}
                alt="Joya properties"
                className={`rounded-full transition-all duration-300 ${
                  isScrolled ? "h-24 w-24" : "h-32 w-32"
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 header-nav">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`${
                    isScrolled ? "text-[#f1f0ec]" : "text-[#f0ede6]"
                  } hover:text-[#a0b3b1] hover:font-bold transition-colors font-semibold text-l link ${
                    pathName === link.href ? "link-active" : ""
                  }`}
                >
                  <span className={pathName === link.href ? "active" : ""}>
                    {link.name}
                  </span>
                </Link>
                {/* Dropdown Menu */}
                {link.subLinks && activeDropdown === link.name && (
                  <div className="absolute w-[200px] left-0 pt-5 bg-[#111612]/90 text-[#f1f0ec] rounded-lg shadow-lg transition-opacity duration-300 ease-in-out opacity-100 backdrop-blur-md">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={`block link py-2 px-4 hover:bg-[#3d6a64] ${
                          pathName === subLink.href ? "link-active" : ""
                        }`}
                      >
                        <span
                          className={pathName === subLink.href ? "active" : ""}
                        >
                          {subLink.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div>
              <a
                href="https://wa.me/+9710585734777"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands text-base fa-whatsapp"></i>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isScrolled ? "text-[#f1f0ec]" : "text-[#9da5a4]"
              } hover:text-[#a0b3b1] transition-colors`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#041d1a] shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4 text-[#f1f0ec]">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onClick={() =>
                  activeDropdown === link.name
                    ? setActiveDropdown(null)
                    : setActiveDropdown(link.name)
                }
              >
                <Link
                  to={link.href}
                  className={`hover:text-[#a0b3b1] transition-colors font-semibold ${
                    pathName === link.href ? "link-active" : ""
                  }`}
                >
                  <span className={pathName === link.href ? "active" : ""}>
                    {link.name}
                  </span>
                </Link>
                {/* Mobile Dropdown Menu */}
                {link.subLinks && activeDropdown === link.name && (
                  <div className="pl-6 pt-2 space-y-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.href}
                        className={`block px-4 py-2 hover:bg-[#698f8c] transition-colors ${
                          pathName === subLink.href ? "font-bold" : ""
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
