import { ChevronDown } from 'lucide-react';
import React from 'react';

const NavSkill = ({toggleDropdown,openDropdown}) => {
    return (
        <div className="relative">
        <button
          onClick={() => toggleDropdown("swaps")}
          className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-gray-700 hover:text-blue-500"
        >
          Skill Swaps
          <ChevronDown
            size={16}
            className={`ml-1 transition-transform ${
              openDropdown === "swaps" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openDropdown === "swaps" && (
          <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
            <a
              href="/skill-swaps/browse"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              Browse Requests
            </a>
            <a
              href="/skill-swaps/post"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              Post Your Skills
            </a>
            <a
              href="/skill-swaps/matches"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
            >
              My Matches
            </a>
          </div>
        )}
      </div>
    );
};

export default NavSkill;