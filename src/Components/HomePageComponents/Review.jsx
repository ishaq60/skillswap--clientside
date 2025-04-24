import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, User, Award, Briefcase } from 'lucide-react';
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import LoadingSpinner from '../../shared/LoaderSpring';
import { useQuery } from '@tanstack/react-query';

export default function Review() {
  const [activeIndex, setActiveIndex] = useState(0);
  
const axiosPublic=UseAxiosPublic()
  const { data:reviews = [], refetch, isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosPublic.get('/publicreview');
      console.log(res.data)
      return res.data;
    },
  });
console.log(reviews)
 
if(isLoading)return <LoadingSpinner/>


  // const reviews = [
  //   {
  //     id: 1,
  //     name: "Hannah Schmitt",
  //     role: "Lead Designer",
  //     avatar: "/api/placeholder/120/120",
  //     comment: "The UX/UI course on SkillSwap transformed my design approach completely. The instructor's attention to detail and practical exercises helped me improve my portfolio and land my dream job at a top design agency. I particularly enjoyed the collaborative projects with other learners!",
  //     rating: 5,
  //     bgColor: "bg-gradient-to-r from-purple-500 to-pink-500"
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Torres",
  //     role: "Full Stack Developer",
  //     avatar: "/api/placeholder/120/120",
  //     comment: "As someone transitioning from traditional backend to full stack development, this platform was exactly what I needed. The JavaScript and React courses were comprehensive and up-to-date with the latest industry practices. The mentorship feature was invaluable for my growth.",
  //     rating: 5,
  //     bgColor: "bg-gradient-to-r from-blue-500 to-teal-400"
  //   },
  //   {
  //     id: 3,
  //     name: "Priya Sharma",
  //     role: "Data Scientist",
  //     avatar: "/api/placeholder/120/120",
  //     comment: "The machine learning pathway on SkillSwap offers the perfect balance between theoretical knowledge and hands-on application. The community challenges pushed me to apply my skills in real-world scenarios and the feedback system helped me refine my approach to complex problems.",
  //     rating: 5,
  //     bgColor: "bg-gradient-to-r from-amber-500 to-orange-500"
  //   }
  // ];
  
  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };
  
  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };
  
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={24} 
        className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    ));
  };
  
  return (
    <div className="min-h-screen  from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Reviews From Our Users</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            They are highly qualified. We collect reviews from our users so you can get an honest opinion of what an
            experience with our website are really like! and trained in their areas
          </p>
        </div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Review Cards */}
        <div className="relative ">
          <button 
            onClick={prevReview} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-sm xt-gray-700 hover:bg-gray-100 z-10 md:-left-6"
          >
           
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.id}>
                <div  className="w-full flex-shrink-0 px-4  bg-gradient-to-r from-blue-500 to-teal-400">
                  <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className={`bg-gradient-to-r from-amber-500 to-orange-500 h-16 w-full relative`}>
                      <div className="absolute -bottom-10 left-8">
                        <img 
                          src={review.photo} 
                          alt={review.student_name}
                          className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-lg"
                        />
                      </div>
                      <div className="absolute top-4 right-6 flex space-x-1">
                        <Quote size={24} className="text-white opacity-70" />
                      </div>
                    </div>
                    
                    <div className="pt-14 px-8 pb-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{review.name}</h3>
                          <p className="text-blue-600 flex items-center">
                            <Briefcase size={16} className="mr-2" />
                            {review.role}
                          </p>
                        </div>
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                        <Quote size={20} className="absolute top-3 left-3 text-blue-300 opacity-40" />
                        <p className="text-gray-700 leading-relaxed">
                          {review.comment}
                        </p>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <Award size={20} className="text-amber-500 mr-2" />
                          <span className="text-gray-600 text-sm">Verified Learner</span>
                        </div>
                        <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-full text-sm font-medium transition-colors">
                          View Full Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextReview} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg text-gray-700 hover:bg-gray-100 z-10 md:-right-6"
          >
          
          </button>
        </div>
        
        </Swiper>
        
        {/* CTA Section */}
       
      </div>
    </div>
  );
}