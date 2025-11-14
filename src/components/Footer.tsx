import { ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'PhysicsWallah Full Stack Course',
    url: 'https://pwskills.com/web-development/full-stack-web-development-course/'
  },
  {
    title: 'Internshala Full Stack Training',
    url: 'https://trainings.internshala.com/full-stack-web-development-placement-guarantee-course/'
  },
  {
    title: 'NareshIT React Training',
    url: 'https://nareshit.com/courses/ui-full-stack-web-development-with-react-online-training'
  },
  {
    title: 'CCBP Backend Developer Course',
    url: 'https://www.ccbp.in/intensive/backend-developer-course'
  }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-xl mb-4">Read More about our Course Content Idea</h3>
          <p className="text-gray-400 mb-6">
            Explore comprehensive learning resources and detailed course information from leading educational platforms
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{resource.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Full Stack Development</a></li>
                <li><a href="#" className="hover:text-white">Frontend Development</a></li>
                <li><a href="#" className="hover:text-white">Backend Development</a></li>
                <li><a href="#" className="hover:text-white">Data Science</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Tutorials</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Full Stack Development Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
