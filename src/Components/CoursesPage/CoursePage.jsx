import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { Star, Users } from "lucide-react";
import LoadingSpinner from "../../shared/LoaderSpring";

const CoursePage = () => {
  const { category } = useParams();
  const axiosPublic = UseAxiosPublic();

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['course', category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/course/${category}`);
      return res.data;
    },
  });
console.log(data)
  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
    <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            All course of <span className="text-blue-500">{category}</span>
          </h2>
          <div className="w-28 h-1 bg-blue-400 mt-2 relative">
            <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-1/2 transform -translate-y-1/2 left-8"></div>
          </div>
        </div>
        <p className="text-gray-600 mt-4">They are highly rated and popular among learners</p>
      </div>

      {/* Courses grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((course) => (
         <Link to={`/courseDetails/${course._id}`}>
          <div
            key={course._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transition-transform hover:shadow-xl hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium ml-1">{course.average_rating}</span>
                <span className="text-gray-500 text-sm ml-1">({course.total_reviews})</span>
                <div className="ml-auto flex items-center">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-500 text-sm ml-1">
                    {course.total_students_enrolled} Students
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{course.description}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={course.posted_by?.photo || '/default-user.png'}
                      alt={course.posted_by?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-700 ml-2">
                    {course.posted_by?.name}
                  </span>
                </div>
                <span className="text-lg font-bold text-blue-500">${course.price}</span>
              </div>
            </div>
          </div>
         
         </Link>
        ))}
      </div>
    </section>
     
    </div>
  );
};

export default CoursePage;
