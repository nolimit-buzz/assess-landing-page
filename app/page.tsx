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
import { getHomePageData } from '@/lib/api';

export default async function Home() {
  const data = await getHomePageData();

  return (
    <main className="min-h-screen bg-white">
      <Navigation navLinks={data.navbar.nav_links} />
      <HeroSection hero={data.hero} />
      <AssessmentTypes assessmentSuite={data.assessment_suite} />
      <AICVSpotlight cvRanking={data.cv_ranking} />
      <DashboardShowcase platform={data.platform} />
      <ProcessSection setup={data.setup} />
      <BenefitsSection impact={data.impact} />
      <FAQSection faqs={data.faqs} />
      <CTASection freeTrial={data.free_trial} offer={data.offer} />
      <Footer footer={data.footer} />
    </main>
  );
}