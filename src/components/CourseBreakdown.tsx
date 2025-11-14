import { CheckCircle } from 'lucide-react';

const weeks = [
  {
    title: 'Week 1-2: Foundations',
    description: 'JavaScript deep dive, Node.js setup, async patterns, REST APIs, and Express architecture.',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Week 3-4: Databases & Advanced Backend',
    description: 'MongoDB, Mongoose, schema design, Redis caching, authentication & JWTs.',
    gradient: 'from-emerald-500 to-emerald-600'
  },
  {
    title: 'Week 5-6: Microservices & Kafka',
    description: 'Building event-driven systems with Kafka, inter-service communication, Docker basics.',
    gradient: 'from-green-600 to-green-700'
  },
  {
    title: 'Week 7: NestJS Mastery',
    description: 'Modular architecture, dependency injection, DTOs, guards, interceptors, Swagger documentation.',
    gradient: 'from-emerald-600 to-emerald-700'
  },
  {
    title: 'Week 8-9: Full Stack Integration',
    description: 'React + Vite + TypeScript frontends integrated with backend APIs, environment management.',
    gradient: 'from-green-700 to-green-800'
  },
  {
    title: 'Week 10-11: Scaling & Deployment',
    description: 'Monolithic vs Microservices setup, PM2, NGINX, Docker Compose, Digital Ocean deploy.',
    gradient: 'from-emerald-700 to-emerald-800'
  },
  {
    title: 'Week 12: Final Project & Career Prep',
    description: 'Capstone project completion, GitHub review, resume & interview prep (Pro plan).',
    gradient: 'from-green-800 to-green-900'
  }
];

export function CourseBreakdown() {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Course Breakdown <span className="text-green-600">(Week-by-Week)</span>
          </h2>
          <p className="text-gray-600">
            A structured 12-week journey from fundamentals to production-ready full-stack development
          </p>
        </div>

        <div className="grid gap-6">
          {weeks.map((week, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${week.gradient} p-1`}>
                <div className="bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${week.gradient} flex items-center justify-center text-white`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{week.title}</h3>
                      <p className="text-gray-600">{week.description}</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
