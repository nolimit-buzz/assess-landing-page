'use client';

import { Navigation } from '@/components/ui/navigation';
import { HeroSection } from '@/components/ui/hero-section';
import { AssessmentTypes } from '@/components/ui/assessment-types';
import { AICVSpotlight } from '@/components/ui/ai-cv-spotlight';
import { DashboardShowcase } from '@/components/ui/dashboard-showcase';
import { ProcessSection } from '@/components/ui/process-section';
import { BenefitsSection } from '@/components/ui/benefits-section';
import { FAQSection } from '@/components/ui/faq-section';
import { CTASection } from '@/components/ui/cta-section';
import { Footer } from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AssessmentTypes />
      <AICVSpotlight />
      <DashboardShowcase />
      <ProcessSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}