import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

const skills = [
  { name: 'HTML', icon: '📄', color: 'text-orange-500' },
  { name: 'CSS', icon: '🎨', color: 'text-blue-500' },
  { name: 'Python', icon: '🐍', color: 'text-yellow-500' },
  { name: 'React JS', icon: '⚛️', color: 'text-cyan-500' },
  { name: 'Git', icon: '📦', color: 'text-red-500' },
  { name: 'JavaScript', icon: '💛', color: 'text-yellow-400' },
  { name: 'Node JS', icon: '💚', color: 'text-green-600' },
  { name: 'Express JS', icon: '🚂', color: 'text-gray-600' },
  { name: 'Mongo DB', icon: '🍃', color: 'text-green-500' }
];

export function SkillsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl mb-4">Skills You Will Learn</h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          By mastering the following technologies and tools, you will gain the essential skills to become a proficient backend developer:
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center text-3xl mb-3 bg-gray-50 rounded-lg">
                  {skill.icon}
                </div>
                <span className={skill.color}>{skill.name}</span>
              </div>
            ))}
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&h=500&fit=crop"
              alt="Developer illustration"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <span className="text-gray-700">Next batch starts tomorrow</span>
        </div>

        <div className="mt-8">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Book a Free Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
