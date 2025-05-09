// MainDashboard.jsx
import { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Heart, 
  Star, 
  Clock, 
  ShoppingBag, 
  Users, 
  MessageSquare, 
  DollarSign, 
  Settings, 
  Bell, 
  HelpCircle, 
  Search, 
  User, 
  LogOut,
  ChevronDown
} from 'lucide-react';


import UserDashboard from './User/UserDashboard';
import SellerDashboard from './Saller/SellerDashboard';
import AdminDashboard from './Admin/AdminDashboard ';
import { courses, userData } from './Commondata/userData';

export default function SkillBridgeDashboard() {
  const [activeRole, setActiveRole] = useState('seller'); // 'user', 'seller', 'admin'
  const [activeTab, setActiveTab] = useState('overview');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Role-specific sidebar items
  const getSidebarItems = () => {
    const commonItems = [
      { icon: <Home size={20} />, label: "Overview", id: "overview" },
      { icon: <BookOpen size={20} />, label: "My Courses", id: "courses" },
      { icon: <Heart size={20} />, label: "Wishlist", id: "wishlist" },
      { icon: <Star size={20} />, label: "Reviews", id: "reviews" },
      { icon: <MessageSquare size={20} />, label: "Messages", id: "messages" },
      { icon: <ShoppingBag size={20} />, label: "Purchase History", id: "purchases" },
      { icon: <Settings size={20} />, label: "Settings", id: "settings" },
    ];
    
    switch(activeRole) {
      case 'seller':
        return [
          ...commonItems.slice(0, 5),
          { icon: <Users size={20} />, label: "My Students", id: "students" },
          { icon: <DollarSign size={20} />, label: "Earnings", id: "earnings" },
          { icon: <Home size={20} />, label: "Course Creation", id: "create" },
          ...commonItems.slice(6)
        ];
      case 'admin':
        return [
          { icon: <Home size={20} />, label: "Dashboard", id: "overview" },
          { icon: <Users size={20} />, label: "Users", id: "users" },
          { icon: <BookOpen size={20} />, label: "Courses", id: "courses" },
          { icon: <User size={20} />, label: "Instructors", id: "instructors" },
          { icon: <DollarSign size={20} />, label: "Transactions", id: "transactions" },
          { icon: <MessageSquare size={20} />, label: "Support", id: "support" },
          { icon: <ChevronDown size={20} />, label: "Reports", id: "reports" },
          { icon: <Settings size={20} />, label: "Settings", id: "settings" },
        ];
      default:
        return commonItems;
    }
  };

  // Role specific main content
  const renderMainContent = () => {
    if (activeTab !== 'overview') {
      return (
        <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-500">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} content will be displayed here</p>
        </div>
      );
    }
    
    // Render dashboard based on active role
    switch(activeRole) {
      case 'user':
        return <UserDashboard courses={courses} userData={userData} />;
      case 'seller':
        return <SellerDashboard courses={courses} userData={userData} />;
      case 'admin':
        return <AdminDashboard userData={userData} />;
      default:
        return <UserDashboard courses={courses} userData={userData} />;
    }
  };

  // Rendering the Calendar icon component
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
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-blue-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">Skill<span className="text-blue-600">Bridge</span></span>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for courses, topics, instructors..." 
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm"
              />
            </div>
          </div>
          
          {/* Right Navigation */}
          <div className="flex items-center space-x-4">
            {/* Role selector */}
            <div className="hidden md:block">
              <select 
                value={activeRole}
                onChange={(e) => setActiveRole(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">Student</option>
                <option value="seller">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button 
                className="p-2 text-gray-600 hover:text-gray-800 relative" 
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <h3 className="px-4 py-2 font-medium text-gray-800 border-b border-gray-100">Notifications</h3>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-0">
                        <p className="text-sm text-gray-800">{notification.content}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-100">
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-800">View all notifications</a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Help */}
            <button className="p-2 text-gray-600 hover:text-gray-800 hidden md:block">
              <HelpCircle size={20} />
            </button>
            
            {/* User Menu */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2" 
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <img 
                  src={userData.avatar} 
                  alt={userData.name} 
                  className="w-8 h-8 rounded-full object-cover border border-gray-200" 
                />
                <span className="hidden md:block text-sm font-medium text-gray-700">{userData.name}</span>
                <ChevronDown size={16} className="text-gray-500" />
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">{userData.name}</p>
                    <p className="text-xs text-gray-500">student@example.com</p>
                  </div>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <User size={16} className="mr-2" />
                    My Profile
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    <Settings size={16} className="mr-2" />
                    Account Settings
                  </a>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-gray-200 bg-white hidden md:block flex-shrink-0">
          <nav className="px-4 py-4">
            <div className="space-y-1">
              {getSidebarItems().map(item => (
                <button
                  key={item.id}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                    activeTab === item.id 
                      ? 'bg-blue-50 text-blue-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <span className={activeTab === item.id ? 'text-blue-600' : 'text-gray-500'}>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile role selector */}
            <div className="mt-6 md:hidden">
              <label className="block text-sm font-medium text-gray-700 mb-2">Switch Role</label>
              <select 
                value={activeRole}
                onChange={(e) => setActiveRole(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">Student</option>
                <option value="seller">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {activeTab === 'overview' 
                  ? (activeRole === 'admin' ? 'Admin Dashboard' : 'Dashboard') 
                  : (activeTab.charAt(0).toUpperCase() + activeTab.slice(1))}
              </h1>
              
              {activeRole === 'seller' && activeTab === 'courses' && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  Create New Course
                </button>
              )}
              
              {activeRole === 'user' && activeTab === 'overview' && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  Browse Courses
                </button>
              )}
            </div>
            
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
}