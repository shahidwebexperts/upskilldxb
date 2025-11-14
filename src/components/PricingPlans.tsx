import { Button } from './ui/button';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: '2,200',
    currency: 'AED',
    includes: [
      'All live classes',
      'Project sessions',
      'Community support',
      'Access to recordings for 3 months',
      'Course completion certificate'
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: '4,400',
    currency: 'AED',
    includes: [
      'Everything in Standard',
      'Resume & GitHub review',
      'Interview Preparation',
      '1-on-1 mentorship sessions',
      'Priority doubt resolution',
      'Career guidance calls'
    ],
    popular: true
  }
];

export function PricingPlans() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Pricing <span className="text-green-600">Plans</span>
          </h2>
          <p className="text-gray-600">
            Choose the plan that best fits your career goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'border-4 border-green-600' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-1 rounded-bl-lg flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">Most Popular</span>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-green-600 to-emerald-600 text-white' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl">{plan.price}</span>
                  <span className={`text-xl ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                    {plan.currency}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  {plan.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-green-600' : 'text-green-600'}`} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  Choose {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>💳 Flexible payment options available | 📧 Email us for corporate packages</p>
        </div>
      </div>
    </div>
  );
}
