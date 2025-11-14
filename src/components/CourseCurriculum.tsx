'use client';

import { ChevronRight, Lock } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  'Web Development',
  'JavaScript',
  'Frontend Development',
  'Backend & Databases',
  'Full Stack Development'
];

const modules = {
  'Frontend Development': [
    { id: 1, title: 'Understanding Frontend Development', locked: false },
    { id: 2, title: 'Introducing React', locked: false },
    { id: 3, title: 'React Fundamentals', locked: false },
    { id: 4, title: 'Rendering Lists', locked: false },
  ],
  'Web Development': [
    { id: 1, title: 'HTML & CSS Basics', locked: false },
    { id: 2, title: 'Responsive Web Design', locked: false },
    { id: 3, title: 'CSS Flexbox & Grid', locked: false },
    { id: 4, title: 'Web Accessibility', locked: false },
  ],
  'JavaScript': [
    { id: 1, title: 'JavaScript Fundamentals', locked: false },
    { id: 2, title: 'ES6+ Features', locked: false },
    { id: 3, title: 'Asynchronous JavaScript', locked: false },
    { id: 4, title: 'DOM Manipulation', locked: false },
  ],
  'Backend & Databases': [
    { id: 1, title: 'Node.js Fundamentals', locked: false },
    { id: 2, title: 'Express.js Framework', locked: false },
    { id: 3, title: 'MongoDB & NoSQL', locked: false },
    { id: 4, title: 'RESTful API Design', locked: false },
  ],
  'Full Stack Development': [
    { id: 1, title: 'MERN Stack Integration', locked: false },
    { id: 2, title: 'Authentication & Authorization', locked: false },
    { id: 3, title: 'Deployment & DevOps', locked: false },
    { id: 4, title: 'Final Capstone Project', locked: false },
  ]
};

const advancedTopics = [
  'Mastering React Router',
  'State Management at Scale using Redux',
  'Styling React Apps using Tailwind CSS',
  'Responsive Web Design & Theme Management',
];

export function CourseCurriculum() {
  const [activeTab, setActiveTab] = useState('Frontend Development');

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl md:text-4xl mb-12">Course Curriculum</h2>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 divide-x">
            {/* Left: Advanced Topics */}
            <div className="p-6">
              <h3 className="mb-4">Data Management and Advanced Patterns</h3>
              <div className="space-y-2">
                {advancedTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <div>
                      <div className="text-xs text-gray-500">Module{index + 5}</div>
                      <div>{topic}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Module Lectures */}
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                {modules[activeTab as keyof typeof modules]?.map((lecture) => (
                  <div
                    key={lecture.id}
                    className="flex items-center justify-between p-3 bg-white rounded shadow-sm"
                  >
                    <div className="flex-1">
                      <div className="text-sm">Lecture {lecture.id}: {lecture.title}</div>
                    </div>
                    {lecture.locked && <Lock className="w-4 h-4 text-gray-400" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
