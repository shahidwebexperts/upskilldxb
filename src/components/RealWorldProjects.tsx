import { ShoppingCart, MessageSquare, Wallet, GraduationCap, Rocket } from 'lucide-react';

const projects = [
  {
    number: 1,
    icon: ShoppingCart,
    title: 'E-Commerce API',
    description: 'REST + MongoDB + Authentication',
    color: 'from-green-500 to-green-600'
  },
  {
    number: 2,
    icon: MessageSquare,
    title: 'Chat App',
    description: 'using WebSocket and Redis',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    number: 3,
    icon: Wallet,
    title: 'Microservices Wallet System',
    description: 'using Kafka',
    color: 'from-green-600 to-green-700'
  },
  {
    number: 4,
    icon: GraduationCap,
    title: 'College Management Portal',
    description: 'using NestJS + React',
    color: 'from-emerald-600 to-emerald-700'
  },
  {
    number: 5,
    icon: Rocket,
    title: 'Capstone: Production-Ready SaaS Clone',
    description: 'with Dockerized Deployment',
    color: 'from-green-700 to-green-900',
    featured: true
  }
];

export function RealWorldProjects() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Real-World <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build 5 production-grade projects that showcase your skills and boost your portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.number}
                className={`${
                  project.featured ? 'md:col-span-2 lg:col-span-3' : ''
                } bg-gradient-to-br ${project.color} rounded-lg p-6 text-white hover:scale-105 transition-transform`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
                    {project.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-xl">{project.title}</h3>
                    </div>
                    <p className="text-purple-100">{project.description}</p>
                  </div>
                </div>
                {project.featured && (
                  <div className="mt-4 inline-block px-3 py-1 bg-yellow-400 text-green-900 rounded-full text-sm">
                    ⭐ Final Capstone Project
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
