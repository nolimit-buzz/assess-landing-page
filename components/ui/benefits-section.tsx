'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Award
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Save 60% Time',
    description: 'Reduce your hiring timeline from weeks to days with automated assessments and instant results.',
    metric: '60%',
    metricLabel: 'Time Saved',
    color: 'bg-brand-green'
  },
  {
    icon: DollarSign,
    title: 'Cut Costs by 40%',
    description: 'Lower recruitment costs through efficient screening and reduced time-to-hire.',
    metric: '40%',
    metricLabel: 'Cost Reduction',
    color: 'bg-brand-navy'
  },
  {
    icon: TrendingUp,
    title: 'Improve Quality by 85%',
    description: 'Make better hiring decisions with data-driven insights and comprehensive candidate profiles.',
    metric: '85%',
    metricLabel: 'Quality Improvement',
    color: 'bg-gray-600'
  },
  {
    icon: Shield,
    title: 'Reduce Bias',
    description: 'Eliminate unconscious bias with standardized, objective assessment criteria.',
    metric: '90%',
    metricLabel: 'Bias Reduction',
    color: 'bg-brand-green'
  },
  {
    icon: Users,
    title: 'Scale Effortlessly',
    description: 'Handle hundreds of candidates simultaneously without compromising assessment quality.',
    metric: '10x',
    metricLabel: 'Scalability',
    color: 'bg-brand-navy'
  },
  {
    icon: Target,
    title: 'Increase Accuracy',
    description: 'Predict job performance with 95% accuracy using our AI-powered assessment algorithms.',
    metric: '95%',
    metricLabel: 'Accuracy Rate',
    color: 'bg-gray-600'
  }
];

const companyLogos = [
  'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix'
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6">
            <Award className="w-4 h-4 text-brand-green mr-2" />
            <span className="text-brand-green font-medium text-sm">Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Hiring with
            <span className="block text-brand-green">Measurable Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies who have revolutionized their talent acquisition process 
            and achieved remarkable results with our platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-gray-200 hover:border-brand-green/30">
                <CardContent className="p-6">
                  {/* Icon and Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl ${benefit.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-brand-green">{benefit.metric}</div>
                      <div className="text-xs text-gray-500">{benefit.metricLabel}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Proof */}
        {/* <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600">
              Join 10,000+ companies worldwide who trust Assess.ng for their talent assessment needs
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="text-lg font-bold text-gray-700">{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* ROI Calculator Teaser */}
        {/* <div className="bg-gradient-to-r from-brand-navy to-brand-green rounded-2xl p-8 text-white text-center">
          <Zap className="w-12 h-12 mx-auto mb-4 text-white" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Calculate Your ROI
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            See how much time and money you could save with our assessment platform. 
            Most companies see ROI within the first month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-navy hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Calculate Savings
              <ArrowRight className="ml-2 w-5 h-5 inline" />
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div> */}

        {/* Bottom Stats */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">10,000+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">1M+</div>
            <div className="text-gray-600">Assessments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">95%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-green mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}