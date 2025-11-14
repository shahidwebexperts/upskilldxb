import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Mansouri',
    role: 'Full Stack Developer at Careem',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'UpskillDXB transformed my career. The live sessions were intense and practical. Within 2 months of completing the bootcamp, I landed a role at Careem. The instructors really know their stuff!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    company: 'Careem'
  },
  {
    id: 2,
    name: 'Sara Ibrahim',
    role: 'Backend Developer at Noon',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The project-based approach made all the difference. I built real applications that I could showcase in interviews. The daily live sessions kept me accountable and motivated throughout.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    company: 'Noon'
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    role: 'MERN Stack Developer at Talabat',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Best investment I made in my career. The microservices module with Kafka was particularly valuable. Now I\'m working on production systems handling millions of requests daily.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    company: 'Talabat'
  },
  {
    id: 4,
    name: 'Fatima Hassan',
    role: 'Junior Full Stack Developer',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'Coming from a non-tech background, I was nervous. But the instructors were patient and the curriculum was well-structured. I can now build full-stack applications confidently!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    company: 'Tech Startup'
  },
  {
    id: 5,
    name: 'Mohammad Ali',
    role: 'Node.js Developer at Emirates Group',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The NestJS module alone was worth the bootcamp fee. The emphasis on clean code and best practices prepared me well for enterprise development. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    company: 'Emirates Group'
  },
  {
    id: 6,
    name: 'Priya Sharma',
    role: 'Full Stack Developer',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'The mentorship and career guidance were exceptional. The Pro plan helped me optimize my resume and GitHub profile. I got 3 interview calls within a week of completing the bootcamp!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    company: 'FinTech Company'
  }
];

export function UpskillTestimonials() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Success <span className="text-green-600">Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our alumni working at top companies in Dubai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100 hover:shadow-xl transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-green-200" />
              
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-green-200">
                <ImageWithFallback
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-green-600">{testimonial.company} • {testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl mb-2">Join 200+ Successful Graduates</h3>
          <p className="text-green-100 mb-6">
            Our alumni are working at leading tech companies across Dubai and beyond
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div>
              <div className="text-3xl">200+</div>
              <div className="text-green-200">Graduates</div>
            </div>
            <div>
              <div className="text-3xl">85%</div>
              <div className="text-green-200">Placement Rate</div>
            </div>
            <div>
              <div className="text-3xl">4.9/5</div>
              <div className="text-green-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
