import { useState } from 'react';
import { Star, MapPin, Linkedin, Github, Globe, Users, Calendar, Award, BookOpen, Mail, Contact, Contact2, ContactIcon, Contact2Icon } from 'lucide-react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';
import LoadingSpinner from '../shared/LoaderSpring';
import { useQuery } from '@tanstack/react-query';
import { div } from 'framer-motion/client';

export default function MentorDetails() {
    const [activeTab, setActiveTab] = useState('about');
   const {id}=useParams()
   console.log(id)


   const axiosPublic = UseAxiosPublic();

   const { data: mentor = [], refetch, isLoading } = useQuery({
    queryKey: ['men', id],
    enabled: !!id, // ✅ Only runs when id is not null/undefined
    queryFn: async () => {
      const res = await axiosPublic.get(`/mentorDetails/${id}`);
      console.log(res.data)
      return res.data;
    },
  });

if(isLoading) return <LoadingSpinner></LoadingSpinner>
//  

//   const joinDate = formatDa(mentor.created_at);

//   // Active tab state
//  
  
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-32"></div>
          <div className="px-6 py-4 sm:px-8 flex flex-col sm:flex-row">
            <div className="sm:mr-6 -mt-16 mb-4 sm:mb-0">
              <div className="w-32 h-32 bg-white p-1 rounded-full shadow-lg">
                <img 
                  src={mentor.photo} 
                  alt={mentor.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{mentor.name}</h1>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin size={16} className="mr-1" />
                    <span>{mentor.location}</span>
                    <span className="mx-2">•</span>
                    <span>Mentor ID: {mentor.mentor_id}</span>
                  </div>
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                    <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                    <span className="font-medium">{mentor.average_rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {mentor.expertise.map((exp, index) => (
                  <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {exp}
                  </span>
                ))}
              </div>
              <div className='flex justify-between'>
              <div className="flex space-x-3 mt-6">
                <a href={mentor.social_links.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={mentor.social_links.github} className="text-gray-500 hover:text-gray-900 transition-colors">
                  <Github size={20} />
                </a>
                <a href={mentor.social_links.website} className="text-gray-500 hover:text-indigo-600 transition-colors">
                  <Globe size={20} />
                </a>
              </div>
              <Link to='/contactpage' className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                  <Contact2Icon size={16} className="mr-2" />
                  Contact
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Students Mentored</p>
              <p className="text-xl font-bold">{mentor.total_students_mentored}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="p-3 rounded-full bg-green-50 text-green-600 mr-4">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Courses</p>
              <p className="text-xl font-bold">{mentor.courses_mentored.length}</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
            <div className="p-3 rounded-full bg-purple-50 text-purple-600 mr-4">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-xl font-bold">{new Date(mentor.created_at).getFullYear()}</p>
            </div>
          </div>
        </div>
        
        {/* Content Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('about')}
            >
              About
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium ${activeTab === 'courses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              onClick={() => setActiveTab('courses')}
            >
              Courses
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'about' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Biography</h2>
                <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>
                
                <div className="mt-6">
                  <h3 className="text-md font-semibold mb-2">Personal Information</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Location:</span>
                      <span className="text-gray-800">{mentor.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">Member Since:</span>
                      <span className="text-gray-800"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'skills' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Areas of Expertise</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {mentor.expertise.map((exp, index) => (
                    <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <Award size={20} className="text-blue-600 mr-3" />
                      <span className="text-gray-800">{exp}</span>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-lg font-semibold mb-4 mt-8">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mentor.skills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 border border-gray-100 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-800">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Courses Mentored</h2>
                {mentor.courses_mentored.map((course, index) => (
                  <div key={index} className="mb-4 p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 bg-indigo-50 rounded-md text-indigo-600 mr-3">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium">Course ID: {course}</h3>
                          <p className="text-sm text-gray-500">Click to view course details</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100 transition-colors">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  
  );
}