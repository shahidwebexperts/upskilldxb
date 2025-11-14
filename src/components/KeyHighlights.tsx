import { Video, Users, Target, Briefcase, MessageSquare, GraduationCap, Layers, HeadphonesIcon } from 'lucide-react';

const highlights = [
  {
    icon: Video,
    title: 'Live Sessions (Monday to Friday)',
    description: 'Discuss doubts, get interview advice, discover best practices for coding, and more.',
    color: 'text-red-500'
  },
  {
    icon: Users,
    title: 'Dedicated Success Coach for Every Student',
    description: 'To guide you and ensure a smooth learning journey',
    color: 'text-orange-500'
  },
  {
    icon: Users,
    title: 'Placement Success Manager',
    description: 'A dedicated placement manager with personalized feedback to ace interviews with confidence.',
    color: 'text-blue-500'
  },
  {
    icon: Briefcase,
    title: 'Mega Offline Placement Drives',
    description: 'Mega offline placement drives are held every 3 months in major metro cities across India.',
    color: 'text-purple-500'
  },
  {
    icon: Target,
    title: 'AI-Powered Mock Interviews',
    description: 'Unlimited practice with AI mock interviews through NextMock prepares you for the job market.',
    color: 'text-cyan-500'
  },
  {
    icon: GraduationCap,
    title: 'Masterclasses by Industry Experts',
    description: 'To keep you updated with the latest trends and industry-aligned knowledge.',
    color: 'text-green-500'
  },
  {
    icon: Users,
    title: 'Mentorship from Successful Seniors',
    description: 'Ace placements with 9 AM - 9 PM doubt support, 1500+ mentors, and alumni from 200+ top companies.',
    color: 'text-indigo-500'
  },
  {
    icon: MessageSquare,
    title: 'Effortless Revision with NxtBytes',
    description: 'Where you master key concepts through engaging reels and quizzes',
    color: 'text-pink-500'
  },
  {
    icon: Layers,
    title: 'Portfolio Building',
    description: 'Build an impressive portfolio with real-world projects to showcase your skills',
    color: 'text-yellow-600'
  },
  {
    icon: HeadphonesIcon,
    title: 'Placement Support',
    description: '24/7 dedicated placement support to help you land your dream job',
    color: 'text-teal-500'
  }
];

export function KeyHighlights() {
  return (
    <div className="py-16 bg-white border-t-4 border-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-12">Key Highlights</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className={`flex-shrink-0 ${highlight.color}`}>
                  <Icon className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
