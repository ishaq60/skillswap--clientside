import { useState } from 'react';
import { Star } from 'lucide-react';

export default function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Hannah Schmitt",
      position: "Lead Designer",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim",
      rating: 5,
      image: "/api/placeholder/80/80"
    }
  ]);

  return (
    <div className="min-h-screen bg-white">
     
      

      {/* Reviews Section */}
      <div className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Reviews From Our Users
            </h2>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-blue-500 rounded"></div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              They are highly qualified. We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like! and trained in their areas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-blue-600">{review.position}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-center mb-4">
                  {review.review}
                </p>

                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill={i < review.rating ? "#FFD700" : "none"}
                      color={i < review.rating ? "#FFD700" : "#D1D5DB"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}