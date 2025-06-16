'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Clock, 
  Shield,
  Zap,
  Star
} from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    text: 'No setup fees or hidden costs'
  },
  {
    icon: Users,
    text: '14-day free trial with full access'
  },
  {
    icon: Clock,
    text: 'Cancel anytime, no commitments'
  },
  {
    icon: Shield,
    text: 'Enterprise-grade security included'
  }
];

const testimonialStats = [
  { value: '4.9/5', label: 'Customer Rating' },
  { value: '10,000+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime SLA' }
];

export function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <Card className="bg-gradient-to-r from-brand-navy to-brand-green text-white border-0 shadow-2xl overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
              <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 left-20 w-12 h-12 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
            </div>
          </div>

          <CardContent className="p-12 md:p-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm mb-8">
                <Zap className="w-4 h-4 text-white mr-2" />
                <span className="text-white font-medium text-sm">Limited Time Offer</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform
                <span className="block">Your Hiring Process?</span>
              </h2>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Join thousands of companies who have revolutionized their talent acquisition 
                with our AI-powered assessment platform.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center text-white/90">
                      <IconComponent className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-left">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button 
                  size="lg" 
                  className="bg-white text-brand-navy hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                {testimonialStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-5 h-5 text-yellow-400 mr-1" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Trust Indicators */}
        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Trusted by companies worldwide • No credit card required • GDPR compliant
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-500 font-semibold">Microsoft</div>
            <div className="text-gray-500 font-semibold">Google</div>
            <div className="text-gray-500 font-semibold">Amazon</div>
            <div className="text-gray-500 font-semibold">Apple</div>
            <div className="text-gray-500 font-semibold">Meta</div>
            <div className="text-gray-500 font-semibold">Netflix</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}