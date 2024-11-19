import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  city: string;
  text: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah M.",
    city: "Stephenville",
    text: "The custom solutions provided were exactly what our ranch needed. Their attention to detail and understanding of agricultural requirements is outstanding."
  },
  {
    id: 2,
    name: "John R.",
    city: "Fort Worth",
    text: "I've been using their products for my construction business, and the quality is unmatched. Their delivery is always on time, and the customer service is exceptional."
  },
  {
    id: 3,
    name: "Michael B.",
    city: "Granbury",
    text: "As a local business owner, I appreciate their commitment to sustainability. Their eco-friendly options have helped us reduce our environmental impact while maintaining quality."
  },
  {
    id: 4,
    name: "Emily W.",
    city: "Weatherford",
    text: "The team went above and beyond to help us find the perfect solution for our needs. Their expertise and professionalism made the whole process seamless."
  },
  {
    id: 5,
    name: "David K.",
    city: "Glen Rose",
    text: "Outstanding product quality and excellent customer support. They truly understand the needs of Texas businesses and deliver accordingly."
  },
  {
    id: 6,
    name: "Lisa P.",
    city: "Cleburne",
    text: "Their sustainable practices and local focus really set them apart. It's great to work with a company that cares about our community."
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000); // Change review every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Review Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg min-h-[250px] transition-opacity duration-500">
            <div className="mb-6">
              <p className="text-lg text-gray-700 italic">"{reviews[currentIndex].text}"</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">{reviews[currentIndex].name}</p>
                <p className="text-gray-600">{reviews[currentIndex].city}, TX</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={prevReview}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
