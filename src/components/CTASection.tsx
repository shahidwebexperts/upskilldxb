import { Button } from './ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <div className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of successful developers who have transformed their careers with our comprehensive Full Stack Development program
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black">
            Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" className="border-white text-white hover:bg-white/10">
            Schedule a Call
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div>
            <div className="text-4xl mb-2">10,000+</div>
            <div className="text-blue-200">Students Enrolled</div>
          </div>
          <div>
            <div className="text-4xl mb-2">95%</div>
            <div className="text-blue-200">Placement Rate</div>
          </div>
          <div>
            <div className="text-4xl mb-2">4.8/5</div>
            <div className="text-blue-200">Average Rating</div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 1800-123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>support@fullstackdevelopment.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
