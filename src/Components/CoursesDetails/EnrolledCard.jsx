import { Calendar, Clock } from 'lucide-react';
import React from 'react';

const EnrolledCard = ({ course, handleEnroll, formatDate }) => {
  return (
    <div className="hidden md:block md:w-1/3">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-[400px] mx-auto">
        {/* Course Thumbnail */}
        <div className="mb-4">
          <img
            src={course.thumbnail || "/api/placeholder/400/225"}
            alt={course.title}
            className="w-full h-[225px] object-cover rounded-lg"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <p className="text-3xl font-bold text-gray-800">${course.price}</p>
        </div>

        {/* Enroll Button */}
        <button
          onClick={handleEnroll}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
        >
          Enroll Now
        </button>

        {/* Metadata */}
        <div className="mt-6 text-sm text-gray-500">
          <div className="flex items-center space-x-2 mb-2">
            <Calendar size={16} />
            <span>Created: {formatDate(course.created_at)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Last updated: {formatDate(course.updated_at)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCard;
