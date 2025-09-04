import type { ComponentType } from 'react';
import { ContactInfo } from '@/components/ui/contact-info';
import { ContactForm } from '@/components/ui/contact-form';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { getContactPageData, ContactDetailItem } from '@/lib/api';

export default async function ContactPage() {
  const data = await getContactPageData();

  return (
    <main className="min-h-screen bg-white">
      <Navigation navLinks={data.navbar.nav_links} />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactInfo contactDetails={data.contact_details} />
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer footer={data.footer} />
    </main>
  );
}