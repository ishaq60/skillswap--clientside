import React, { useState } from 'react';
import { Star, Users } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import UseCart from '../../Hooks/UseCart';
import UseEnroll from '../../Hooks/UseEnroll';

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [activePage, setActivePage] = useState(0);
  const [data] = UseCart();
  const [enrolecart]=UseEnroll()
  console.log(enrolecart)

  const categories = ['All', 'Web Design', 'Programming', 'AI', 'Marketing', 'Language'];

  const filteredCourses = activeTab === 'All'
    ? data
    : data.filter(course => course.category.includes(activeTab));

  // Optional: Paginate later by slicing based on page
  const coursesToShow = filteredCourses.slice(activePage * 6, activePage * 6 + 6);

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            A Broad Selection Of Courses
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-blue-200 relative">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collect reviews from our users so you can get an honest opinion of what an experience with our website is really like!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="relative flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setActivePage(0);
              }}
              className={`relative px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === category
                  ? 'bg-white text-blue-600 shadow-md scale-105 border border-blue-500'
                  : 'bg-transparent text-gray-500 hover:bg-gray-100'
              }`}
            >
              {category}
              {activeTab === category && (
                <span className="absolute left-1/2 bottom-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2 translate-y-2"></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Panel for Courses */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coursesToShow.map((course) => (
              <Link to={`/courseDetails/${course._id}`}>
              <div key={course._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
                {/* Course Image */}
                <div className="relative">
                  <img
                    src={course.thumbnail || '/placeholder.jpg'}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* Course Content */}
                <div className="p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                      <img 
                        src={course.posted_by?.photo || '/default-user.png'} 
                        alt={course.posted_by?.name || 'Instructor'} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <span className="text-gray-700">{course.posted_by?.name || 'Unknown'}</span>
                    <span className="ml-auto text-blue-500 font-bold">${course.price}</span>
                  </div>

                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                  <div className="flex items-center justify-between border-t pt-3 mt-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{course.average_rating || 0} ({course.total_reviews || 0})</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm ml-1">{course.total_students_enrolled || 0} Students</span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        {filteredCourses.length > 6 && (
          <div className="flex justify-center mt-10">
            {[...Array(Math.ceil(filteredCourses.length / 6)).keys()].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${page === activePage ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
