import React from 'react';
import { Laptop, Users, BookOpen } from 'lucide-react'
import image from '../../../assets/Screenshot 2025-04-20 201742.png'
import { Link } from 'react-router-dom';
export default function Demand() {
  return (
    <section className="bg-blue-500 w-full h-[650px] overflow-hidden relative">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          
          {/* Left side - Image + Floating Cards */}
          <div className="relative flex justify-center md:justify-start">
            {/* Main Image Container */}
            <div className="bg-white rounded-3xl p-4 shadow-lg z-10">
              <img 
                src={image}
                alt="Student with laptop" 
                className="rounded-2xl w-[300px] md:w-[350px] lg:w-[400px]"
              />
            </div>

            {/* Floating Card - Top Left */}
          

            {/* Floating Card - Mid Right */}
       

            {/* Floating Card - Bottom Left */}
            
          </div>

          {/* Right side - Text + Buttons */}
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-blue-700 px-2 rounded-md">Build in-demand</span> tech skills in half the time
            </h1>
            <p className="text-lg mb-8">
              Do you want to move on next step? Choose your most popular learning mentors, it will help you to achieve your professional goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to='/signUp' className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Register Now
              </Link>
              <Link to='/login' className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg transition duration-300">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute left-0 top-0 w-24 h-24 md:w-40 md:h-40">
        <div className="w-full h-full border-2 border-blue-400 rounded-full opacity-20"></div>
        <div className="absolute inset-0 m-4 border-2 border-blue-400 rounded-full opacity-20"></div>
        <div className="absolute inset-0 m-8 border-2 border-blue-400 rounded-full opacity-20"></div>
        <div className="absolute inset-0 m-12 border-2 border-blue-400 rounded-full opacity-20"></div>
        <div className="absolute inset-0 m-16 border-2 border-blue-400 rounded-full opacity-20"></div>
      </div>

      {/* Background Diamond */}
      <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20">
        <div className="w-full h-full border-2 border-blue-400 transform rotate-45"></div>
      </div>
    </section>
  );
}
