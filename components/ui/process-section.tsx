'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  UserPlus, 
  Settings, 
  Send, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Zap
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Create Assessment',
    description: 'Design custom assessments or choose from our extensive library of pre-built tests tailored to specific roles and skills.',
    features: ['Custom Questions', 'Template Library', 'Multi-format Support'],
    time: '5 minutes'
  },
  {
    step: '02',
    icon: Settings,
    title: 'Configure Settings',
    description: 'Set time limits, difficulty levels, and evaluation criteria. Customize the assessment experience to match your requirements.',
    features: ['Time Controls', 'Difficulty Scaling', 'Custom Branding'],
    time: '3 minutes'
  },
  {
    step: '03',
    icon: Send,
    title: 'Invite Candidates',
    description: 'Send assessment invitations via email or share direct links. Track delivery status and candidate engagement in real-time.',
    features: ['Email Integration', 'Link Sharing', 'Delivery Tracking'],
    time: '2 minutes'
  },
  {
    step: '04',
    icon: BarChart3,
    title: 'Analyze Results',
    description: 'Get comprehensive reports with detailed analytics, performance insights, and AI-powered recommendations for each candidate.',
    features: ['Detailed Reports', 'AI Insights', 'Comparison Tools'],
    time: 'Instant'
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6">
            <Zap className="w-4 h-4 text-brand-green mr-2" />
            <span className="text-brand-green font-medium text-sm">Simple 4-Step Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Setup to Insights in
            <span className="block text-brand-green">Under 10 Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it incredibly easy to create, deploy, and analyze assessments. 
            No technical expertise required.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green via-brand-navy to-brand-green transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-gray-200 hover:border-brand-green/30">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <Badge className="bg-brand-green/10 text-brand-green border-brand-green/20 text-lg font-bold px-3 py-1">
                        {step.step}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.time}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-green to-brand-navy rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Arrow for larger screens */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-white rounded-full border-2 border-brand-green flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-4 h-4 text-brand-green" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <Target className="w-8 h-8 text-brand-green mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">10 Min</div>
            <div className="text-gray-600">Average Setup Time</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <Zap className="w-8 h-8 text-brand-green mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">Instant</div>
            <div className="text-gray-600">Results & Analytics</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <CheckCircle className="w-8 h-8 text-brand-green mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600">Platform Uptime</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-navy to-brand-green rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Streamline Your Hiring?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of companies who have simplified their assessment process with our platform.
            </p>
            <button className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}