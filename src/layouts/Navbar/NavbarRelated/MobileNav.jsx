import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../../Hooks/UseAuth';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const MobileNav = ({toggleDropdown,mobileMenuOpen,openDropdown,ChevronDown}) => {
    const [isOpen, setIsOpen] = useState(false);
      const profileRef = useRef(null);
      const { user, logOut } = useAuth();
    
   
    
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
    
      const handaleLogOut = () => {
        logOut();
        toast.success("LogOut successfully");
      };
    
    return (
        <div>
             {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-base font-medium text-blue-500 hover:bg-gray-50">
              Home
            </a>
            
            {/* Mobile Courses Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('mobile-courses')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              >
                <span>Courses</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'mobile-courses' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-courses' && (
                <div className="pl-6 space-y-1">
                  <a href="/courses/design" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Design
                  </a>
                  <a href="/courses/coding" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Coding
                  </a>
                  <a href="/courses/business" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Business
                  </a>
                  <a href="/courses/marketing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Marketing
                  </a>
                </div>
              )}
            </div>
            
            {/* Mobile Skill Swaps Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('mobile-swaps')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              >
                <span>Skill Swaps</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'mobile-swaps' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-swaps' && (
                <div className="pl-6 space-y-1">
                  <a href="/skill-swaps/browse" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Browse Requests
                  </a>
                  <a href="/skill-swaps/post" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Post Your Skills
                  </a>
                  <a href="/skill-swaps/matches" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    My Matches
                  </a>
                </div>
              )}
            </div>
            
            {/* Mobile Pages Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('mobile-pages')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              >
                <span>Pages</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'mobile-pages' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-pages' && (
                <div className="pl-6 space-y-1">
                  <a href="/pages/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    About Us
                  </a>
                  <a href="/pages/faq" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    FAQ
                  </a>
                  <a href="/pages/pricing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Pricing
                  </a>
                  <a href="/pages/testimonials" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Testimonials
                  </a>
                </div>
              )}
            </div>
            
            {/* Mobile Blog Dropdown */}
            <div>
              <button 
                onClick={() => toggleDropdown('mobile-blog')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500"
              >
                <span>Blog</span>
                <ChevronDown size={16} className={`transition-transform ${openDropdown === 'mobile-blog' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-blog' && (
                <div className="pl-6 space-y-1">
                  <a href="/blog/latest" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Latest Posts
                  </a>
                  <a href="/blog/categories" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Categories
                  </a>
                  <a href="/blog/authors" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-500">
                    Authors
                  </a>
                </div>
              )}
            </div>
            
            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-500">
              Contact
            </a>
            
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
                  onClick={handaleLogOut}
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
          </div>
        </div>
      )}
        </div>
    );
};

export default MobileNav;