import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-green-500 rounded-full">
              ⭐ Rated 4.8/5 by 10,000+ Students
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Become a <span className="text-green-400">Full Stack Developer</span> in 6 Months
            </h1>
            <p className="text-lg text-blue-100">
              Master front-end and back-end technologies with hands-on projects, expert mentorship, and guaranteed placement support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>100% Live Interactive Classes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Build 15+ Real-World Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Dedicated Career Guidance & Placement Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Industry-Recognized Certification</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black">
                Enroll Now - ₹1,27,499
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Syllabus
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div>
                <div className="text-2xl">₹5,967</div>
                <div className="text-blue-200">per month EMI</div>
              </div>
              <div className="h-12 w-px bg-blue-400" />
              <div>
                <div className="text-2xl">6 Months</div>
                <div className="text-blue-200">Duration</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
              alt="Full Stack Development"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
