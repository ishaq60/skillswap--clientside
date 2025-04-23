import { useEffect, useState } from "react";
import { Star, Users, Calendar, Clock, Award, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Courseform from "./Courseform";
import useAuth from "../../Hooks/UseAuth";
import { div } from "framer-motion/client";
import EnrolledCard from "./EnrolledCard";

const CourseDetails = () => {
  const course = useLoaderData();
  const navigate = useNavigate();
  const {user}=useAuth()
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [enrollmentForm, setEnrollmentForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    expectations: ""
  });

  // Course description
  const fullDescription = `${course.description}`;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Render stars for rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i <= fullStars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  // Handle enrollment button click
  const handleEnroll = () => {
    setShowEnrollmentModal(true);
  };

  // Close enrollment modal
  const closeEnrollmentModal = () => {
    setShowEnrollmentModal(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentForm({
      ...enrollmentForm,
      [name]: value
    });
  };

  // Handle enrollment form submission
  const handleEnrollmentSubmit = (e) => {
    e.preventDefault();
    
    // Here you would save the enrollment details
    // Then redirect to payment page with course and user details
    
    // For demonstration, we'll just log the form data and redirect
    console.log("Enrollment form data:", enrollmentForm);
    console.log("Course details:", course);
    
    // Navigate to payment page with course ID and enrollment ID (you would get this from your backend)
    navigate(`/payment?courseId=${course._id}&enrollmentId=temp123456`);
  };

  // Toggle description show/hide
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Course Info */}
            <div className="md:w-2/3">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-blue-700 text-xs px-2 py-1 rounded">{course.category}</span>
                <span className="bg-blue-700 text-xs px-2 py-1 rounded">{course.subcategory}</span>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(course.average_rating)}
                  <span className="ml-1">{course.average_rating} ({course.total_reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span>{course.total_students_enrolled} students</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src={course.posted_by.photo || "/api/placeholder/40/40"} 
                  alt={course.posted_by.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{course.posted_by.name}</p>
                  <p className="text-sm opacity-80">{course.posted_by.type}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {course.hashtags.map((tag, index) => (
                  <span key={index} className="bg-blue-500 rounded-full px-3 py-1 text-sm">{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Enrollment Card - Desktop */}
            <EnrolledCard formatDate={formatDate} course={course} handleEnroll={handleEnroll}></EnrolledCard>
            
          </div>
        </div>
      </div>
      
      {/* Mobile Enrollment Card */}
      <div className="md:hidden bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-xl text-gray-800">${course.price}</p>
          </div>
          {
            user ? <button 
            onClick={handleEnroll}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            Enroll Now
          </button>:
          <link to='/login'>
           </link>
          }
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Course Content */}
          <div className="md:w-2/3">
            {/* Tabs */}
            <div className="flex border-b mb-8">
              <button 
                onClick={() => setActiveTab("overview")}
                className={`py-3 px-5 font-medium ${activeTab === 'overview' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab("curriculum")}
                className={`py-3 px-5 font-medium ${activeTab === 'curriculum' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
              >
                Curriculum
              </button>
              <button 
                onClick={() => setActiveTab("instructor")}
                className={`py-3 px-5 font-medium ${activeTab === 'instructor' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
              >
                Instructor
              </button>
              <button 
                onClick={() => setActiveTab("reviews")}
                className={`py-3 px-5 font-medium ${activeTab === 'reviews' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
              >
                Reviews
              </button>
            </div>
            
            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">Course Description</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 whitespace-pre-line">
                      {showFullDescription ? fullDescription : course.description}
                    </p>
                    <button 
                      onClick={toggleDescription} 
                      className="flex items-center text-blue-500 mt-4 font-medium"
                    >
                      {showFullDescription ? (
                        <>Show Less <ChevronUp size={16} className="ml-1" /></>
                      ) : (
                        <>Show More <ChevronDown size={16} className="ml-1" /></>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p>Build responsive, accessible websites using HTML5 and CSS3</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p>Create interactive user interfaces with JavaScript</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p>Develop full-stack applications with React and Node.js</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p>Build and connect to MongoDB databases</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p>Implement authentication and authorization</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <p>Deploy applications to production environments</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "curriculum" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Course Curriculum</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 font-medium">
                      Module 1: HTML & CSS Fundamentals
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3">1</div>
                          <span>Introduction to HTML</span>
                        </div>
                        <span className="text-sm text-gray-500">45 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3">2</div>
                          <span>CSS Styling Basics</span>
                        </div>
                        <span className="text-sm text-gray-500">60 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3">3</div>
                          <span>Responsive Design</span>
                        </div>
                        <span className="text-sm text-gray-500">75 min</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 font-medium">
                      Module 2: JavaScript Essentials
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3">1</div>
                          <span>JavaScript Fundamentals</span>
                        </div>
                        <span className="text-sm text-gray-500">90 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3">2</div>
                          <span>DOM Manipulation</span>
                        </div>
                        <span className="text-sm text-gray-500">60 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center mr-3">3</div>
                          <span>Events and Listeners</span>
                        </div>
                        <span className="text-sm text-gray-500">45 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "instructor" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">About the Instructor</h2>
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img 
                    src={course.posted_by.photo || "/api/placeholder/120/120"} 
                    alt={course.posted_by.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">{course.posted_by.name}</h3>
                    <p className="text-sm mb-4">{course.posted_by.type}</p>
                    <p className="text-gray-700 mb-4">{course.posted_by.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                        <Award size={14} className="mr-1" />
                        <span>5+ years teaching</span>
                      </div>
                      <div className="flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                        <Users size={14} className="mr-1" />
                        <span>10,000+ students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "reviews" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
                <div className="flex items-center mb-6">
                  <div className="text-5xl font-bold text-gray-800 mr-6">{course.average_rating}</div>
                  <div>
                    <div className="flex mb-1">
                      {renderStars(course.average_rating)}
                    </div>
                    <p className="text-gray-600">{course.total_reviews} total reviews</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <img 
                        src="/api/placeholder/40/40" 
                        alt="Student"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">Sarah K.</p>
                        <div className="flex text-yellow-400">
                          {renderStars(5)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2">
                      This course exceeded my expectations! The instructor explains complex concepts in an easy-to-understand way. 
                      I've gone from knowing almost nothing about web development to building my own projects.
                    </p>
                  </div>
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <img 
                        src="/api/placeholder/40/40" 
                        alt="Student"
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">Michael T.</p>
                        <div className="flex text-yellow-400">
                          {renderStars(4)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mt-2">
                      Great course with lots of practical examples. I would have liked more exercises, but overall I'm very satisfied 
                      with what I learned. The instructor is knowledgeable and responsive to questions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar - Desktop */}
          <div className="hidden md:block md:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h2 className="text-lg font-bold mb-4">Course Features</h2>
                <div className="space-y-3">
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">12 weeks</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600">Lectures</span>
                    <span className="font-medium">48</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600">Skill Level</span>
                    <span className="font-medium">Beginner to Advanced</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b">
                    <span className="text-gray-600">Language</span>
                    <span className="font-medium">English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-medium mb-2">Share this course</h3>
                <div className="flex space-x-3">
                  <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full">f</button>
                  <button className="w-8 h-8 flex items-center justify-center bg-blue-400 text-white rounded-full">t</button>
                  <button className="w-8 h-8 flex items-center justify-center bg-red-600 text-white rounded-full">in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enrollment Modal */}
      {showEnrollmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Course Enrollment</h2>
                <button 
                  onClick={closeEnrollmentModal}
                  className="text-red-600 text-4xl hover:text-gray-600"
                >
                  &times;
                </button>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Course Summary</h3>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-medium">{course.title}</h4>
                  <div className="flex justify-between mt-2">
                    <span>Price:</span>
                    <span className="font-bold">${course.price}</span>
                  </div>
                </div>
              </div>
              <Courseform course={course} ></Courseform>
             
              <Link to={`/payment/${course._id}`}>
                  <button 
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-medium transition-colors"
                  >
                    Continue to Payment
                  </button>
                  </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;