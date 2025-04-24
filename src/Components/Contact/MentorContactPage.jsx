import { useState } from 'react';
import { MessageCircle, Phone, Video, ChevronLeft, Calendar, Clock, Send, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentorContactPage() {
  const mentor = {
    name: "Rahim Ahmed",
    photo: "https://i.ibb.co.com/Dfmpzvqh/admin.jpg",
    expertise: ['Web Development', 'JavaScript', 'React', 'Node.js'],
    average_rating: 4.8,
    mentor_id: "MTR001",
  };
  
  // Active communication method
  const [activeMethod, setActiveMethod] = useState('message'); // message, call, video
  
  // States for scheduling
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  
  // Available time slots
  const timeSlots = [
    '09:00 AM - 09:30 AM',
    '10:00 AM - 10:30 AM',
    '11:00 AM - 11:30 AM',
    '01:00 PM - 01:30 PM',
    '02:00 PM - 02:30 PM',
    '03:00 PM - 03:30 PM',
  ];
  
  // Generate next 7 days for scheduling
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      
      dates.push({
        date: formattedDate,
        value: date.toISOString().split('T')[0]
      });
    }
    
    return dates;
  };
  
  const availableDates = generateDates();
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with back button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center">
          <Link to={-1} className="mr-4 p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-semibold">Contact Mentor</h1>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Mentor Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center">
            <div className="mr-4">
              <img 
                src="/api/placeholder/80/80" 
                alt={mentor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">{mentor.name}</h2>
              <div className="flex items-center text-sm text-gray-600">
                <span>ID: {mentor.mentor_id}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="ml-1">{mentor.average_rating}</span>
                </div>
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                {mentor.expertise.slice(0, 2).map((exp, index) => (
                  <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    {exp}
                  </span>
                ))}
                {mentor.expertise.length > 2 && (
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    +{mentor.expertise.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Communication Methods Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="flex border-b">
            <button
              className={`flex-1 py-4 text-center font-medium ${activeMethod === 'message' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveMethod('message')}
            >
              <div className="flex items-center justify-center">
                <MessageCircle size={18} className="mr-2" />
                <span>Message</span>
              </div>
            </button>
            
            <button
              className={`flex-1 py-4 text-center font-medium ${activeMethod === 'call' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveMethod('call')}
            >
              <div className="flex items-center justify-center">
                <Phone size={18} className="mr-2" />
                <span>Call</span>
              </div>
            </button>
            
            <button
              className={`flex-1 py-4 text-center font-medium ${activeMethod === 'video' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveMethod('video')}
            >
              <div className="flex items-center justify-center">
                <Video size={18} className="mr-2" />
                <span>Video Call</span>
              </div>
            </button>
          </div>
          
          {/* Content based on active method */}
          <div className="p-6">
            {activeMethod === 'message' && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <div className="text-right">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center ml-auto">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            )}
            
            {(activeMethod === 'call' || activeMethod === 'video') && (
              <div>
                <div className="text-center mb-6">
                  <div className="p-4 bg-blue-50 inline-block rounded-full mb-4">
                    {activeMethod === 'call' ? (
                      <Phone size={32} className="text-blue-600" />
                    ) : (
                      <Video size={32} className="text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-lg font-medium mb-2">Schedule a {activeMethod === 'call' ? 'Call' : 'Video Call'}</h3>
                  <p className="text-gray-600">Select a date and time that works for you</p>
                </div>
                
                <div className="mb-6">
                  <button 
                    onClick={() => setShowScheduleModal(true)}
                    className="w-full py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 flex items-center justify-center"
                  >
                    <Calendar size={18} className="mr-2" />
                    Select Date & Time
                  </button>
                </div>
                
                {selectedDate && selectedTimeSlot && (
                  <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <h4 className="font-medium mb-2">Your Selected Slot</h4>
                    <div className="flex items-center text-gray-700 mb-2">
                      <Calendar size={16} className="mr-2 text-gray-500" />
                      <span>{selectedDate}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={16} className="mr-2 text-gray-500" />
                      <span>{selectedTimeSlot}</span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <button 
                        onClick={() => {setSelectedDate(''); setSelectedTimeSlot('');}}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Clear Selection
                      </button>
                      
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                        Confirm {activeMethod === 'call' ? 'Call' : 'Video Call'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Communication Guidelines</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Please be respectful and professional in all communications.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Mentors typically respond to messages within 24-48 hours.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>For calls and video sessions, be on time and prepare your questions in advance.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>If you need to cancel or reschedule, please do so at least 6 hours in advance.</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-medium">Schedule {activeMethod === 'call' ? 'Call' : 'Video Call'}</h3>
              <button onClick={() => setShowScheduleModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Select Date</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableDates.map((dateObj, index) => (
                    <button
                      key={index}
                      className={`p-2 text-center border rounded-md text-sm ${selectedDate === dateObj.date ? 'bg-blue-50 border-blue-500 text-blue-700' : 'hover:bg-gray-50'}`}
                      onClick={() => setSelectedDate(dateObj.date)}
                    >
                      {dateObj.date}
                    </button>
                  ))}
                </div>
              </div>
              
              {selectedDate && (
                <div className="mt-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Select Time Slot</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        className={`p-2 text-center border rounded-md text-sm ${selectedTimeSlot === slot ? 'bg-blue-50 border-blue-500 text-blue-700' : 'hover:bg-gray-50'}`}
                        onClick={() => setSelectedTimeSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex justify-end mt-6">
                <button 
                  onClick={() => setShowScheduleModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 mr-2"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => {
                    if (selectedDate && selectedTimeSlot) {
                      setShowScheduleModal(false);
                    }
                  }}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md ${selectedDate && selectedTimeSlot ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'}`}
                  disabled={!selectedDate || !selectedTimeSlot}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}