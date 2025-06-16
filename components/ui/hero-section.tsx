'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-8 border border-brand-green/20">
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            Live Platform • 10,000+ Active Users
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy mb-8 leading-tight">
            The Smarter Way to{' '}
            <span className="text-brand-green">Find, Hire</span>{' '}
            & Retain Top Talent
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-brand-navy/70 mb-12 leading-relaxed max-w-3xl mx-auto">
            Revolutionary assessment platform that helps you simplify talent acquisition, 
            retention and management. Reduce recruitment time by 60% with AI-powered assessments.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-brand-navy">
                <Users className="w-6 h-6 text-brand-green" />
                <span className="text-3xl font-bold">10K+</span>
              </div>
              <span className="text-brand-navy/60 text-sm">Companies Trust Us</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-brand-navy">
                <Clock className="w-6 h-6 text-brand-green" />
                <span className="text-3xl font-bold">60%</span>
              </div>
              <span className="text-brand-navy/60 text-sm">Faster Hiring</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-brand-navy">
                <TrendingUp className="w-6 h-6 text-brand-green" />
                <span className="text-3xl font-bold">95%</span>
              </div>
              <span className="text-brand-navy/60 text-sm">Success Rate</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Free Assessment
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <p className="text-brand-navy/60 text-sm font-medium">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-brand-navy font-semibold">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                Microsoft
              </div>
              <div className="flex items-center gap-2 text-brand-navy font-semibold">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                Google
              </div>
              <div className="flex items-center gap-2 text-brand-navy font-semibold">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                Amazon
              </div>
              <div className="flex items-center gap-2 text-brand-navy font-semibold">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                Meta
              </div>
              <div className="flex items-center gap-2 text-brand-navy font-semibold">
                <CheckCircle className="w-5 h-5 text-brand-green" />
                Apple
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}