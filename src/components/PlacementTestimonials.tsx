'use client';

'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    rating: 4,
    title: 'Secured a remote job at Algobulls',
    text: 'I took this course to strengthen my back-end skills. The instructors were supportive and cleared all doubts timely. With help from the placement team, I secured a remote job.',
    name: 'Pratham',
    role: 'Front-end Web Developer, Algobulls',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    rating: 4.2,
    title: 'Secured two internships along with campus placement',
    text: 'The course was really helpful especially the timely doubt-clearing sessions. The projects were excellent and played a key role in cracking my interviews. I\'ve got 2 internships offer and on-campus offers too.',
    name: 'Varis',
    role: 'Associate Web Developer, Brimo Software Solutions',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    rating: 4.3,
    title: 'Easily cracked interviews with strong placement support',
    text: 'The best part from this course was the quick doubt support and hands-on assignments. Also projects like building ecommerce site boosted my skills, and strong placement guidance helped me crack the interview.',
    name: 'Gagan Ganapathy',
    role: 'Software Developer Intern, Mammeto',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    rating: 4.5,
    title: 'Landed my dream job at a product company',
    text: 'The comprehensive curriculum and real-world projects helped me build a strong portfolio. The mock interviews and resume building sessions were incredibly valuable.',
    name: 'Priya Sharma',
    role: 'Full Stack Developer, TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    rating: 4.6,
    title: 'Switched from non-tech to tech successfully',
    text: 'Coming from a non-tech background, this course made the transition smooth. The mentors were patient and the learning pace was perfect for beginners.',
    name: 'Rahul Verma',
    role: 'Junior Developer, StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  }
];

export function PlacementTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl mb-12">
          Your Seniors Got Placed. It's Your Turn Now!
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                <span>{testimonial.rating}</span>
              </div>
              <h3 className="mb-3">{testimonial.title}</h3>
              <p className="text-gray-600 mb-6 text-sm">{testimonial.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div>{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="p-2 rounded-full hover:bg-white shadow-md transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full hover:bg-white shadow-md transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
