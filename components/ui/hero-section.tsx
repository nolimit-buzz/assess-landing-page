'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, TrendingUp, CheckCircle } from 'lucide-react';

interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  primary_cta: string;
  secondary_cta: string;
  clients: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
}

interface HeroSectionProps {
  hero: HeroData;
}

export function HeroSection({ hero }: HeroSectionProps) {
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
            {hero.badge}
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy mb-8 leading-tight">
            {hero.title.split('Find, Hire').map((part, index, array) => (
              <span key={index}>
                {part}
                {index < array.length - 1 && (
                  <span className="text-brand-green">Find, Hire</span>
                )}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-brand-navy/70 mb-12 leading-relaxed max-w-3xl mx-auto">
            {hero.subtitle}
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            {hero.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2 text-brand-navy">
                  {index === 0 && <Users className="w-6 h-6 text-brand-green" />}
                  {index === 1 && <Clock className="w-6 h-6 text-brand-green" />}
                  {index === 2 && <TrendingUp className="w-6 h-6 text-brand-green" />}
                  <span className="text-3xl font-bold">{stat.value}</span>
                </div>
                <span className="text-brand-navy/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="https://assess.ng">
            <Button 
              size="lg" 
              className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {hero.primary_cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <p className="text-brand-navy/60 text-sm font-medium">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {hero.clients.map((client, index) => (
                <div key={index} className="flex items-center gap-2 text-brand-navy font-semibold">
                  <CheckCircle className="w-5 h-5 text-brand-green" />
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}