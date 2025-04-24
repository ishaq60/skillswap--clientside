import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ChevronUp } from 'lucide-react';

const Footer=()=> {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
      {/* Top Wave Divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg className="w-full h-12 text-white block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-6 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-lg p-2 mr-3">
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                <path d="M4 7l8 5 8-5" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M12 12v10" fill="none" stroke="white" strokeWidth="1.5" />
              </svg>
              </div>
              <h3 className="text-2xl font-bold">Skillbridge</h3>
            </div>
            <p className="text-blue-100 mb-4">
              SkillBridge is a community-driven platform where people can learn, teach, and exchange skills. Our mission is to make quality education accessible and collaborative.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Find Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Become a Tutor
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Skill Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Community
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">Popular Categories</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> UX/UI Design
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Data Science
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white flex items-center">
                  <ArrowRight size={16} className="mr-2" /> Language Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 border-b border-blue-700 pb-2">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <p className="text-blue-100">123 Learning Street, Education Valley, CA 90210</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0" />
                <p className="text-blue-100">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0" />
                <p className="text-blue-100">support@skillswap.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-blue-900/50 rounded-lg p-6 mb-8">
          <div className="md:flex items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold">Subscribe to Our Newsletter</h4>
              <p className="text-blue-100">Get the latest updates on new courses and features</p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-gray-800 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm text-blue-200">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-700 hover:bg-blue-600 p-2 rounded-full transition-colors"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
export default Footer