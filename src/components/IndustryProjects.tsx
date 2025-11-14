import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, ShoppingCart, MessageCircle, Calendar, Briefcase, Globe } from 'lucide-react';

const projects = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce Platform',
    description: 'Build a full-featured online shopping platform with cart, payments, and order management',
    color: 'text-blue-600'
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Chat Application',
    description: 'Create a messaging app with real-time communication using WebSockets',
    color: 'text-green-600'
  },
  {
    icon: Calendar,
    title: 'Task Management System',
    description: 'Develop a project management tool with task tracking and team collaboration',
    color: 'text-purple-600'
  },
  {
    icon: Briefcase,
    title: 'Job Portal',
    description: 'Build a job listing platform with application tracking and user profiles',
    color: 'text-orange-600'
  },
  {
    icon: Globe,
    title: 'Social Media Dashboard',
    description: 'Create an analytics dashboard with data visualization and reporting',
    color: 'text-pink-600'
  },
  {
    icon: Code,
    title: 'Code Collaboration Platform',
    description: 'Develop a platform for developers to share and collaborate on code snippets',
    color: 'text-cyan-600'
  }
];

export function IndustryProjects() {
  return (
    <div className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-4 text-center">Build Industry-Level Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Gain hands-on experience by building real-world projects that you can showcase in your portfolio and impress potential employers
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                <Icon className={`w-12 h-12 ${project.color} mb-4`} />
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="mb-4">Capstone Project</h3>
              <p className="text-gray-700 mb-4">
                At the end of the program, you'll work on a comprehensive capstone project where you'll apply everything you've learned. You'll design, develop, and deploy a full-stack application from scratch, following industry best practices and agile methodologies.
              </p>
              <p className="text-gray-700">
                This project will be the centerpiece of your portfolio, demonstrating your ability to handle complex, real-world development challenges.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
