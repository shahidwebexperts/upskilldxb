import { Button } from './ui/button';
import { ArrowRight, Mail, MessageCircle, Clock } from 'lucide-react';

export function UpskillCTA() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-yellow-400 text-green-900 rounded-full mb-6">
            🔥 Limited Seats | Registration Open
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Join UpskillDXB's intensive 3-month bootcamp and become a full-stack developer 
            sought after by Dubai's top tech companies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-green-900">
              Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" className="border-white text-white hover:bg-white/10">
              Book Free Consultation
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 pt-12 border-t border-white/20">
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <div className="text-3xl mb-2">12 Weeks</div>
            <div className="text-green-200">Intensive Training</div>
          </div>
          <div className="text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <div className="text-3xl mb-2">100% Live</div>
            <div className="text-green-200">No Pre-recorded Content</div>
          </div>
          <div className="text-center">
            <ArrowRight className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <div className="text-3xl mb-2">5 Projects</div>
            <div className="text-green-200">Portfolio Ready</div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl mb-2">Have Questions?</h3>
            <p className="text-green-200 text-sm">Get in touch with our team</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="mailto:hello@upskillDXB.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <Mail className="w-4 h-4" />
              <span>hello@upskillDXB.com</span>
            </a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-green-200">
          <p>🇦🇪 Designed for Dubai Professionals | Made with ❤️ by developers, for developers</p>
        </div>
      </div>
    </div>
  );
}
