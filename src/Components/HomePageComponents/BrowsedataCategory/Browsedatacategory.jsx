import React, { useEffect } from "react";
import UseCart from "../../../Hooks/UseCart";
import { Link } from "react-router-dom";

const Browsedatacategory = () => {
  const [data, refetch] = UseCart();

  // Fetch cart data on mount
  useEffect(() => {
    refetch();
  }, [refetch]);

  // Group courses by category
  const categoryMap = data.reduce((acc, course) => {
    const category = course.category;
    if (!acc[category]) {
      acc[category] = {
        title: category,
        count: 0,
        thumbnail: course.thumbnail,
      };
    }
    acc[category].count += 1;
    return acc;
  }, {});

  const categories = Object.values(categoryMap);
console.log(categories)
  return (
    <div className="bg-[#f7fbff] py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800">
        Browse Courses By Category
      </h2>
      <p className="text-gray-600">144 Courses live - 20 added today.</p>

      <div className="w-28 h-1 mb-4 mt-4 mx-auto bg-blue-400 relative">
        <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2 left-8"></div>
      </div>

      {/* Category Cards - Non-clickable */}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link  key={cat.title}to={`/courses/${encodeURIComponent(cat.title)}`}>
          <div  className="border p-4 rounded-lg shadow-lg">
            <img
              src={cat.thumbnail}
              alt={cat.title}
              className="w-16 h-16 rounded-md object-cover"
            />
            <div className="text-left mt-2">
              <h3 className="text-lg font-semibold text-gray-800">{cat.title}</h3>
              <p className="text-sm text-gray-600">
                Over{" "}
                <span className="text-blue-600 font-medium">{cat.count}</span>{" "}
                Courses
              </p>
            </div>
          </div>
          </Link>
          
        ))}
      </div>

      <div className="mt-10">
        <span className="text-blue-600 font-medium hover:underline inline-flex items-center">
          Browse All Courses
        </span>
      </div>
    </div>
  );
};

export default Browsedatacategory;
