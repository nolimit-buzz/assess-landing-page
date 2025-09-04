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
  ndpc_certification?: {
    text: string;
    logo?: {
      formats?: { thumbnail?: { url: string } };
      url?: string;
      name?: string | null;
    };
  } | null;
  clients: Array<{
    formats?: { thumbnail?: { url: string } };
    url?: string;
    name?: string;
  }>;
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
            <div className="relative overflow-hidden py-4">
              <div className="marquee flex items-center gap-10 will-change-transform">
                {[...hero.clients, ...hero.clients].map((client, index) => {
                  const img = client.formats?.thumbnail?.url || client.url;
                  if (img) {
                    return (
                      <img
                        key={`marquee-${index}`}
                        src={img}
                        alt={client.name || 'Client logo'}
                        className="h-16 w-auto object-contain shrink-0"
                      />
                    );
                  }
                  return (
                    <div key={`marquee-${index}`} className="flex items-center text-brand-navy font-semibold shrink-0">
                      <CheckCircle className="w-5 h-5 text-brand-green mr-2" />
                      {client.name || 'Client'}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* NDPC Certification (placed after client logos) */}
            {hero.ndpc_certification && (
              <div className="flex flex-col items-center justify-center gap-2" style={{ marginTop: '60px' }}>
                {(() => {
                  const ndpcLogo = hero.ndpc_certification?.logo?.formats?.thumbnail?.url || hero.ndpc_certification?.logo?.url;
                  return ndpcLogo ? (
                    <img
                      src={ndpcLogo}
                      alt={hero.ndpc_certification?.logo?.name || 'NDPC certification'}
                      className="h-20 w-auto object-contain"
                    />
                  ) : null;
                })()}
                <span className="text-sm text-brand-navy/70 text-center">
                  {hero.ndpc_certification.text}
                </span>
              </div>
            )}
            <style jsx>{`
              @keyframes scrollX {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee {
                width: max-content;
                animation: scrollX 12s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}