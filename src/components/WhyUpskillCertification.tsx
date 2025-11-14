'use client';

import { MessageSquare, FileCheck, Users, Mail, Briefcase, Target } from 'lucide-react';
import { Button } from './ui/button';
import certificationImage from 'figma:asset/f6905a29fd1a1c2be57d0a4df391e884ade5140a.png';

const features = [
  {
    icon: MessageSquare,
    title: 'Doubt Clearing Sessions',
    position: 'left',
    color: 'text-green-600'
  },
  {
    icon: FileCheck,
    title: 'Assignment Evaluation & Solution',
    position: 'left',
    color: 'text-green-600'
  },
  {
    icon: Users,
    title: 'Industry Experts Led Live Sessions',
    position: 'left',
    color: 'text-green-600'
  },
  {
    icon: Briefcase,
    title: 'Industry Relevant Projects',
    position: 'right',
    color: 'text-green-600'
  },
  {
    icon: Target,
    title: 'PW Lab For Your Code Practice',
    position: 'right',
    color: 'text-green-600'
  },
  {
    icon: Target,
    title: '3+ Career Guidance Sessions',
    position: 'right',
    color: 'text-green-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    position: 'bottom',
    color: 'text-green-600'
  }
];

export function WhyUpskillCertification() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Why Get <span className="text-green-400">Backend + MERN Stack</span> Certification From UpskillDXB?
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Left Side Features */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-6 w-64">
              {features.filter(f => f.position === 'left').map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                    <span className="text-sm">{feature.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Center Image */}
            <div className="flex justify-center py-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
                <img 
                  src={certificationImage} 
                  alt="Developer coding" 
                  className="relative rounded-2xl w-96 h-96 object-cover border-4 border-dashed border-green-400"
                />
              </div>
            </div>

            {/* Right Side Features */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6 w-64">
              {features.filter(f => f.position === 'right').map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                    <span className="text-sm">{feature.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Bottom Feature */}
            <div className="flex justify-center mt-8">
              {features.filter(f => f.position === 'bottom').map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                    <span className="text-sm">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="mb-8">
            <img 
              src={certificationImage} 
              alt="Developer coding" 
              className="rounded-2xl w-full max-w-md mx-auto border-4 border-dashed border-green-400"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                  <span className="text-sm">{feature.title}</span>
                </div>
              );
            })}
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
