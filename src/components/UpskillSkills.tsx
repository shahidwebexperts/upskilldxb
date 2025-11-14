import { Code2, Database, Server, Globe, Boxes, Lock, Rocket, GitBranch } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend Development',
    icon: Globe,
    skills: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'State Management'],
    color: 'from-green-500 to-green-600'
  },
  {
    category: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'NestJS', 'RESTful APIs', 'GraphQL'],
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    category: 'Database Management',
    icon: Database,
    skills: ['MongoDB', 'Mongoose', 'Redis', 'Schema Design', 'Optimization'],
    color: 'from-green-600 to-green-700'
  },
  {
    category: 'Microservices',
    icon: Boxes,
    skills: ['Kafka', 'Event-Driven Architecture', 'Service Communication', 'Message Queues'],
    color: 'from-emerald-600 to-emerald-700'
  },
  {
    category: 'Authentication & Security',
    icon: Lock,
    skills: ['JWT', 'OAuth', 'Encryption', 'Authorization', 'Best Practices'],
    color: 'from-green-700 to-green-800'
  },
  {
    category: 'DevOps & Deployment',
    icon: Rocket,
    skills: ['Docker', 'NGINX', 'PM2', 'Digital Ocean', 'CI/CD'],
    color: 'from-emerald-700 to-emerald-800'
  },
  {
    category: 'Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Branching', 'Collaboration', 'Code Review'],
    color: 'from-green-800 to-green-900'
  },
  {
    category: 'Advanced Concepts',
    icon: Code2,
    skills: ['Async Patterns', 'WebSockets', 'Caching', 'Performance', 'Scalability'],
    color: 'from-emerald-800 to-emerald-900'
  }
];

export function UpskillSkills() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Skills You'll <span className="text-green-600">Master</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set covering the entire modern web development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-lg p-6 text-white hover:scale-105 transition-transform`}
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-purple-100">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3">
            {['JavaScript', 'TypeScript', 'Node.js', 'React', 'MongoDB', 'Docker', 'Kafka', 'NestJS', 'Redis', 'Express'].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 shadow-sm border border-green-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
