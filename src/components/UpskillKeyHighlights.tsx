import { Video, Clock, Users, Target, MessageSquare, Trophy, Calendar, Headphones } from 'lucide-react';

const highlights = [
  {
    icon: Video,
    title: 'Daily Live Sessions',
    description: '1-hour intensive live classes every day with real-time interaction and coding',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description: 'Limited to 30 students per batch for personalized attention and mentorship',
    color: 'text-emerald-600'
  },
  {
    icon: Target,
    title: 'Project-Based Learning',
    description: 'Learn by building 5 production-ready projects from scratch',
    color: 'text-green-600'
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    description: 'Evening sessions designed for working professionals in Dubai',
    color: 'text-emerald-600'
  },
  {
    icon: MessageSquare,
    title: 'Instant Doubt Resolution',
    description: 'Get your queries resolved in real-time during live sessions',
    color: 'text-green-600'
  },
  {
    icon: Trophy,
    title: 'Industry-Ready Skills',
    description: 'Master technologies used by top companies globally',
    color: 'text-emerald-600'
  },
  {
    icon: Calendar,
    title: 'Weekly Project Reviews',
    description: 'Get detailed feedback on your code and project implementations',
    color: 'text-green-600'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Access to mentors and community support throughout the bootcamp',
    color: 'text-emerald-600'
  }
];

export function UpskillKeyHighlights() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Key <span className="text-green-600">Highlights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to become a successful full-stack developer
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Icon className={`w-10 h-10 ${highlight.color} mb-4`} />
                <h3 className="text-lg mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
