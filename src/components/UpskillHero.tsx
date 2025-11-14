'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calendar, Clock, Users, Mail, Phone, User } from 'lucide-react';
import logo from 'figma:asset/180345bec2d0d0bdd5339296779b8c49164c67f6.png';
import { useState } from 'react';

export function UpskillHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo */}
        <div className="mb-12">
          <img src={logo} alt="UpskillDXB" className="h-16 md:h-20" width={200} height={80} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              🚀 Limited Seats Available
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              3-Month Live <br />
              <span className="text-yellow-300">Backend + MERN</span> <br />
              Bootcamp
            </h1>
            
            <p className="text-lg text-green-100">
              Master backend and full-stack web development through real-world projects, 
              hands-on coding, and daily 1-hour live sessions designed for early working 
              professionals in Dubai.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-300" />
                <div>
                  <div className="text-sm text-green-200">Duration</div>
                  <div>3 Months</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-300" />
                <div>
                  <div className="text-sm text-green-200">Daily</div>
                  <div>1 Hour Live</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-yellow-300" />
                <div>
                  <div className="text-sm text-green-200">Format</div>
                  <div>100% Live</div>
                </div>
              </div>
            </div>
          </div>

          {/* Query Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl text-gray-900 mb-2">Start Your Journey Today</h3>
              <p className="text-gray-600 mb-6">Fill in your details and we'll get back to you</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Get Free Consultation
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our Terms & Privacy Policy
                </p>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>200+ Enrolled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Next Batch Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
