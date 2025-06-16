'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Users, 
  Clock, 
  Award,
  Target,
  Zap,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: 'Companies Trust Us',
    description: 'From startups to Fortune 500 companies worldwide',
    color: 'bg-brand-green'
  },
  {
    icon: BarChart3,
    value: '1M+',
    label: 'Assessments Completed',
    description: 'Comprehensive evaluations across all industries',
    color: 'bg-brand-navy'
  },
  {
    icon: Clock,
    value: '60%',
    label: 'Faster Hiring',
    description: 'Average reduction in time-to-hire process',
    color: 'bg-gray-600'
  },
  {
    icon: Target,
    value: '95%',
    label: 'Accuracy Rate',
    description: 'Predictive accuracy for job performance',
    color: 'bg-brand-green'
  },
  {
    icon: Award,
    value: '4.9/5',
    label: 'Customer Rating',
    description: 'Based on 5,000+ verified reviews',
    color: 'bg-brand-navy'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Cost Reduction',
    description: 'Average savings on recruitment expenses',
    color: 'bg-gray-600'
  }
];

const achievements = [
  {
    title: 'Industry Leader',
    description: 'Recognized as the #1 assessment platform by HR Tech Awards 2024',
    icon: Award
  },
  {
    title: 'Global Reach',
    description: 'Serving companies in 50+ countries across 6 continents',
    icon: Users
  },
  {
    title: 'Innovation Award',
    description: 'Winner of Best AI-Powered HR Solution 2024',
    icon: Zap
  }
];

export function StatsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6">
            <BarChart3 className="w-4 h-4 text-brand-green mr-2" />
            <span className="text-brand-green font-medium text-sm">Proven Track Record</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Numbers That Speak
            <span className="block text-brand-green">Louder Than Words</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform has transformed hiring processes for thousands of companies worldwide. 
            Here's the impact we've made together.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-gray-200 hover:border-brand-green/30">
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Award-Winning Platform
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognized by industry leaders and trusted by companies worldwide for innovation and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-brand-green group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-navy to-brand-green rounded-2xl p-8 text-white">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join the Success Stories
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Be part of the thousands of companies who have transformed their hiring process and achieved remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Success Story
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}