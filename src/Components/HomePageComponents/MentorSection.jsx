import React from "react";
import { Star, Users } from "lucide-react";
import UseMentor from "../../Hooks/UseMentor";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function MentorSection() {
  const [courseMentor] = UseMentor();
console.log(courseMentor)
  return (
    <section className="bg-indigo-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Logo in top left corner */}
      <div className="absolute top-4 left-4">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-l-full"></div>
          <div className="absolute inset-0 border-2 border-white rounded-l-full"></div>
        </div>
      </div>

      {/* Chart graphic in bottom right */}
      <div className="absolute bottom-4 right-4">
        <svg width="120" height="40" viewBox="0 0 120 40" className="text-white">
          <path
            d="M0,30 L20,25 L40,28 L60,15 L80,20 L100,5 L120,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M0,30 L20,25 L40,28 L60,15 L80,20 L100,5 L120,10"
            fill="none"
            stroke="#FACC15"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Meet Our Professional Mentor
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-blue-200 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <p className="text-gray-300 max-w-xl mx-auto">
            They are highly qualified and trained in their areas
          </p>
        </div>

        {/* Swiper Mentor Cards */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="pb-10"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courseMentor.map((mentor) => (
            <SwiperSlide key={mentor.id}>
              <Link to={`/mentorDetails/${mentor._id}`}>
              <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg">
                {/* Mentor Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mentor Info */}
                <div className="p-4">
                  <h3 className="font-bold text-lg">{mentor.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {mentor.skills[0]} {mentor.skills[1]}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">
                        {mentor.average_rating} ({mentor.reviews})
                      </span>
                    </div>
                    <div className="flex items-center text-blue-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm ml-1">
                        {mentor.total_students_mentored} Students
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
