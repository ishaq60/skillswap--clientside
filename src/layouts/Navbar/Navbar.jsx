import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import NavCourse from "./NavbarRelated/NavCourse";
import NavSkill from "./NavbarRelated/NavSkill";
import NavPages from "./NavbarRelated/NavPages";
import MobileNav from "./NavbarRelated/MobileNav";

import useAuth from "../../Hooks/UseAuth";
import CartButton from "../../Components/CartButton";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);
  const { user, logOut } = useAuth();

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const menuItems = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Analytics", path: "/analytics" },
    { title: "Profile", path: "/profile" },
    { title: "Settings", path: "/settings" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogOut = () => {
    logOut();
    toast.success("Logged out successfully");
  };const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => {
    setIsClicked(true);
    
    // Reset the clicked state after animation completes
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };


  return (
    <div className="w-full bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                <path d="M4 7l8 5 8-5" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M12 12v10" fill="none" stroke="white" strokeWidth="1.5" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-800">SkillBridge</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-500">
              Home
            </NavLink>
            <NavCourse toggleDropdown={toggleDropdown} openDropdown={openDropdown} ChevronDown={ChevronDown} />
            <NavSkill toggleDropdown={toggleDropdown} openDropdown={openDropdown} ChevronDown={ChevronDown} />
            <NavPages toggleDropdown={toggleDropdown} openDropdown={openDropdown} ChevronDown={ChevronDown} />

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("blog")}
                className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-gray-700 hover:text-blue-500"
              >
                Blog
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform ${
                    openDropdown === "blog" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "blog" && (
                <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
                  <NavLink
                    to="/blog/latest"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                  >
                    Latest Posts
                  </NavLink>
                  <NavLink
                    to="/blog/categories"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                  >
                    Categories
                  </NavLink>
                  <NavLink
                    to="/blog/authors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                  >
                    Authors
                  </NavLink>
                </div>
              )}
            </div>

            <NavItem text="Contact" />
          </div>
          <div className="ml-24">
      <button 
        className={`
          relative flex items-center justify-center
          w-12 h-12 rounded-full 
          bg-gradient-to-br from-blue-500 to-blue-700
          hover:from-blue-600 hover:to-blue-800
          shadow-md hover:shadow-lg
          transform transition-all duration-300
          ${isClicked ? 'scale-90' : isHovered ? 'scale-105' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <ShoppingCart 
          size={16} 
          className="text-white transition-all duration-300"
        />
        
        {/* Cart item count badge */}
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          
        </span>
        
        {/* Animation ring on click */}
        {isClicked && (
          <span className="absolute w-full h-full rounded-full animate-ping bg-blue-400 opacity-30"></span>
        )}
      </button>
    </div>
          {/* User Auth Area */}
          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 focus:ring-2"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <img
                  src={user.PhotoURL || "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"}
                  alt="User avatar"
                  className="w-full h-full rounded-full"
                />
              </button>
              <ul
                className={`absolute top-14 right-0 w-52 bg-white border rounded-md shadow-md transition-all duration-200 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {menuItems.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.path}
                      className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
                <button
                  className="w-full text-left px-4 py-3 text-gray-600 hover:text-gray-900 border-t hover:bg-gray-100"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <NavLink
                to="/login"
                className="px-5 py-2 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Login
              </NavLink>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <MobileNav
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        mobileMenuOpen={mobileMenuOpen}
        ChevronDown={ChevronDown}
      />
    </div>
  );
}

// Navigation item without dropdown
function NavItem({ text, active = false }) {
  return (
    <NavLink
      to={`/${text.toLowerCase().replace(/\s+/g, "-")}`}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        active ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
      }`}
    >
      {text}
    </NavLink>
  );
}
