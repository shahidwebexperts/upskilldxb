import { Video, Code, Clock, Shield, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    label: 'Duration',
    value: '3 Months',
    color: 'text-green-600'
  },
  {
    icon: Video,
    label: 'Format',
    value: 'Live Classes (1 hour daily) + Project Sessions',
    color: 'text-emerald-600'
  },
  {
    icon: Code,
    label: 'Tools',
    value: 'Node.js, Express, NestJS, MongoDB, Kafka, Redis, React, Vite, TypeScript',
    color: 'text-green-600'
  },
  {
    icon: Shield,
    label: 'Timings',
    value: 'Finalized post-registration',
    color: 'text-emerald-600'
  },
  {
    icon: Zap,
    label: 'Access',
    value: 'No lifetime access - 100% live sessions',
    color: 'text-green-600'
  }
];

export function BootcampOverview() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="text-green-600">Overview</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            UpskillDXB brings a 3-month intensive bootcamp designed for early working professionals 
            in Dubai. Master backend and full-stack web development through real-world projects, 
            hands-on coding, and daily 1-hour live sessions. No lifetime access — everything happens 
            live for immersive learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100 hover:shadow-lg transition-shadow"
              >
                <Icon className={`w-10 h-10 ${feature.color} mb-4`} />
                <div className="text-sm text-gray-600 mb-1">{feature.label}</div>
                <div className="text-gray-900">{feature.value}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg p-8 text-white text-center">
          <TrendingUp className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h3 className="text-2xl mb-3">Designed for Early Working Professionals</h3>
          <p className="text-green-100 max-w-2xl mx-auto">
            Perfect for professionals in Dubai who want to upskill without quitting their day job. 
            Our daily 1-hour live format fits your schedule while ensuring consistent progress.
          </p>
        </div>
      </div>
    </div>
  );
}
