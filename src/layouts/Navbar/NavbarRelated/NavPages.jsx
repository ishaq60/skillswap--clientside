import { ChevronDown } from 'lucide-react';
import React from 'react';

const NavPages = ({toggleDropdown,openDropdown}) => {
    return (
        <div className="relative">
        <button
          onClick={() => toggleDropdown("pages")}
          className="px-3 py-2 rounded-md text-md font-medium flex items-center text-gray-700 hover:text-blue-500"
        >
          Pages
          <ChevronDown
            size={16}
            className={`ml-1 transition-transform ${
              openDropdown === "pages" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openDropdown === "pages" && (
          <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
            <a
              href="/pages/about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              About Us
            </a>
            <a
              href="/pages/faq"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              FAQ
            </a>
            <a
              href="/pages/pricing"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              Pricing
            </a>
            <a
              href="/pages/testimonials"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              Testimonials
            </a>
          </div>
        )}
      </div>
    );
};

export default NavPages;