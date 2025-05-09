// SellerDashboard.jsx
import React from 'react';
import { Users, Star, DollarSign, ChevronDown, PlusCircle } from 'lucide-react';
import { Clock, Award, BookMarked } from 'lucide-react';
// Custom Calendar icon component
function Calendar({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

export default function SellerDashboard({ courses, userData }) {
  // Stats for seller role
  const stats = [
    { title: "Total Students", value: userData.totalStudents, icon: <Users className="text-blue-500" /> },
    { title: "Total Courses", value: userData.totalCourses, icon: <BookMarked className="text-indigo-500" /> },
    { title: "Total Earnings", value: `$${userData.earnings.toFixed(2)}`, icon: <DollarSign className="text-green-500" /> },
    { title: "Average Rating", value: userData.rating, icon: <Star className="text-yellow-500 fill-yellow-500" /> }
  ];
  
  return (
    <>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
            <div className="p-3 rounded-full bg-gray-50">
              {stat.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Seller-specific content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Course Performance</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="space-y-6">
              {courses.map(course => (
                <div key={course.id} className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <img src={course.image} alt={course.title} className="w-20 h-16 rounded-lg object-cover" />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-gray-800">{course.title}</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center text-sm text-gray-500 mr-4">
                        <Users size={14} className="mr-1" />
                        <span>{course.students} students</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-green-600 font-medium">${course.earnings.toFixed(2)}</span>
                      <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">View details</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                <span className="font-medium flex items-center">
                  <PlusCircle size={18} className="mr-2" />
                  Create New Course
                </span>
                <ChevronDown size={16} />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100">
                <span className="font-medium flex items-center">
                  <Users size={18} className="mr-2" />
                  View Student Analytics
                </span>
                <ChevronDown size={16} />
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100">
                <span className="font-medium flex items-center">
                  <DollarSign size={18} className="mr-2" />
                  Withdraw Earnings
                </span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Common bottom content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {userData.recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="p-2 rounded-full bg-blue-50 text-blue-600 mt-1">
                  {activity.type === "course_progress" && <Clock size={16} />}
                  {activity.type === "course_completed" && <Award size={16} />}
                  {activity.type === "review_received" && <Star size={16} />}
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-800">
                    {activity.type === "course_progress" && `Made progress on ${activity.title}`}
                    {activity.type === "course_completed" && `Completed ${activity.title}`}
                    {activity.type === "review_received" && `Received a ${activity.rating}-star review on ${activity.title}`}
                  </p>
                  <p className="text-xs text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {userData.upcomingEvents.map(event => (
              <div key={event.id} className="flex items-start border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                <div className="p-2 rounded-full bg-indigo-50 text-indigo-600 mt-1">
                  <Calendar size={16} />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-800">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Add missing imports
