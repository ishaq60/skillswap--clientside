import { ChevronDown, Link } from 'lucide-react';
import React from 'react';

const NavCourse = ({toggleDropdown,openDropdown}) => {
  
    return (
  
         <div className="relative">
         <button
           onClick={() => toggleDropdown("courses")}
           className="px-3 py-2 rounded-md text-md font-medium flex items-center text-gray-700 hover:text-blue-500"
         >
           Courses
           <ChevronDown
             size={16}
             className={`ml-1 transition-transform ${
               openDropdown === "courses" ? "rotate-180" : ""
             }`}
           />
         </button>
         {openDropdown === "courses" && (
           <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg py-1">
             <Link
               to="/courses/design"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
             >
               Design
             </Link>
             <a
               href="/courses/coding"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
             >
               Coding
             </a>
             <a
               href="/courses/business"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
             >
               Business
             </a>
             <a
               href="/courses/marketing"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
             >
               Marketing
             </a>
           </div>
         )}
       </div>
    );
};

export default NavCourse;