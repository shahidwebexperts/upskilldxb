import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare, FileCheck, Users, Mail, BookOpen, Briefcase, Code, Target } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    icon: MessageSquare,
    title: 'Doubt Clearing Sessions',
    color: 'text-green-500'
  },
  {
    icon: Briefcase,
    title: 'Industry Relevant Projects',
    color: 'text-green-500'
  },
  {
    icon: FileCheck,
    title: 'Assignment Evaluation & Solution',
    color: 'text-green-500'
  },
  {
    icon: Code,
    title: 'PW Lab For Your Code Practice',
    color: 'text-green-500'
  },
  {
    icon: Users,
    title: 'Industry Experts Led Live Sessions',
    color: 'text-green-500'
  },
  {
    icon: Target,
    title: '3+ Career Guidance Sessions',
    color: 'text-green-500'
  },
  {
    icon: Mail,
    title: 'Email Support',
    color: 'text-green-500'
  }
];

export function WhyCertification() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Why Get <span className="text-green-400">Full Stack Development</span> Certification From PhysicsWallah?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg">
                  <Icon className={`w-8 h-8 flex-shrink-0 ${feature.color}`} />
                  <span className="text-sm">{feature.title}</span>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg transform rotate-3"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
              alt="Developer coding"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black">
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
}
