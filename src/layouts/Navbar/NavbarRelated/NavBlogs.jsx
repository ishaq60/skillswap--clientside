import React from 'react';
import { useSearchParams } from 'react-router-dom';

const NavBlogs = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "";
  console.log(selectedCategory);
    return (
        <div className="absolute z-10 text-md mt-1 w-48 bg-white rounded-md shadow-lg py-1">
        <a
          href="/blog/latest"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
        >
          Latest Posts
        </a>
        <a
          href="/blog/categories"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
        >
          Categories
        </a>
        <a
          href="/blog/authors"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
        >
          Authors
        </a>
      </div>
    );
};

export default NavBlogs;