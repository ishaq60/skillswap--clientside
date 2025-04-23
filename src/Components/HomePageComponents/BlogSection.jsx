import React from 'react';
import { ChevronRight, MessageSquare, Calendar } from 'lucide-react';

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Interview Question: Why Dont You Have a Degree?",
      image: "/api/placeholder/600/400",
      category: "Marketing",
      comments: 40,
      date: "21 Jan, 2023",
    },
    {
      id: 2,
      title: "How to Make a Perfect CV That Attracts the Attention",
      image: "/api/placeholder/600/400",
      category: "Marketing",
      comments: 30,
      date: "20 Jan, 2023",
    },
    {
      id: 3,
      title: "39 Strengths and Weaknesses To Discuss in a Courses",
      image: "/api/placeholder/600/400",
      category: "Marketing",
      comments: 50,
      date: "22 Jan, 2023",
    },
  ];

  return (
    <div className="w-full bg-[#FFFF] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">From Our Blogs</h2>
            <div className="w-28 h-1 bg-blue-400 mt-2 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 transform -translate-y-1/2 left-8"></div>
            </div>
            <p className="text-gray-600 mt-4 max-w-lg">
              We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!
            </p>
          </div>
          <a href="#" className="flex items-center text-blue-800 font-medium">
            Browse All Blogs
            <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              
              <div className="p-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                  {blog.category}
                </span>
                
                <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    <span>{blog.comments} Comments</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                
                <h3 className="mt-3 text-lg font-semibold">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}