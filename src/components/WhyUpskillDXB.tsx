import { Zap, Code, Globe, Users, Briefcase, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Startup-style live learning',
    description: 'with energy and accountability.',
    color: 'text-green-600'
  },
  {
    icon: Code,
    title: 'Project-based learning',
    description: 'designed for real-world skills.',
    color: 'text-emerald-600'
  },
  {
    icon: Globe,
    title: 'Modern backend and full-stack stacks',
    description: 'used globally.',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Mentorship-driven approach',
    description: 'with practical implementation focus.',
    color: 'text-emerald-600'
  },
  {
    icon: Briefcase,
    title: 'Build portfolio-ready projects',
    description: 'that boost your career growth in Dubai\'s tech ecosystem.',
    color: 'text-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Career acceleration',
    description: 'designed specifically for Dubai professionals.',
    color: 'text-emerald-600'
  }
];

export function WhyUpskillDXB() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Why <span className="text-green-600">UpskillDXB</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're not just another bootcamp. We're your partner in career transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Icon className={`w-12 h-12 ${reason.color} mb-4`} />
                <h3 className="mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl mb-4">
              🚀 Join Dubai's Most Intensive Live Bootcamp
            </h3>
            <p className="text-lg text-green-100 mb-6">
              No recordings. No passive learning. Just pure, live, hands-on coding with real mentors, 
              real projects, and real career outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 bg-white/20 rounded-full">
                ✅ Daily Live Sessions
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full">
                ✅ Real-Time Feedback
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full">
                ✅ Dubai-Focused
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full">
                ✅ Production Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
