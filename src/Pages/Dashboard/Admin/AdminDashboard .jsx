// AdminDashboard.jsx
import React from 'react';
import { User, DollarSign, MessageSquare, BookMarked } from 'lucide-react';
import { Users, Clock, Award, Star } from 'lucide-react';
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

export default function AdminDashboard({ userData }) {
  // Stats for admin role
  const stats = [
    { title: "Total Users", value: "2,456", icon: <Users className="text-blue-500" /> },
    { title: "Total Courses", value: "387", icon: <BookMarked className="text-indigo-500" /> },
    { title: "Total Revenue", value: "$34,567.89", icon: <DollarSign className="text-green-500" /> },
    { title: "Support Tickets", value: "12", icon: <MessageSquare className="text-orange-500" /> }
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
      
      {/* Admin-specific content */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Platform Overview</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-medium text-gray-800 mb-4">User Registrations</h3>
          <div className="h-64 bg-gray-50 rounded flex items-center justify-center">
            <p className="text-gray-500">User registration chart will be displayed here</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-medium text-gray-800 mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center pb-2 border-b border-gray-100">
              <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                <User size={16} />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">New user registered</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center pb-2 border-b border-gray-100">
              <div className="p-2 rounded-full bg-green-50 text-green-600">
                <DollarSign size={16} />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">New course purchase</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center pb-2 border-b border-gray-100">
              <div className="p-2 rounded-full bg-yellow-50 text-yellow-600">
                <MessageSquare size={16} />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">New support ticket</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 rounded-full bg-purple-50 text-purple-600">
                <BookMarked size={16} />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-800">New course submitted</p>
                <p className="text-xs text-gray-500">Yesterday</p>
              </div>
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
