import { CheckCircle } from 'lucide-react';

const outcomes = [
  'Master HTML5, CSS3, and modern JavaScript ES6+ features',
  'Build responsive and accessible web interfaces using modern CSS frameworks',
  'Create dynamic single-page applications with React.js',
  'Implement state management solutions using Redux and Context API',
  'Develop RESTful APIs using Node.js and Express.js',
  'Work with both SQL and NoSQL databases (PostgreSQL, MongoDB)',
  'Implement authentication and authorization in web applications',
  'Deploy and manage applications on cloud platforms (AWS, Heroku, Vercel)',
  'Write clean, maintainable code following industry best practices',
  'Use Git for version control and collaborate using GitHub',
  'Build real-time applications using WebSockets',
  'Optimize web application performance and security'
];

export function LearningOutcomes() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-4">What You'll Learn</h2>
        <p className="text-gray-600 mb-8">
          This comprehensive program will equip you with all the skills needed to become a successful full stack developer
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
