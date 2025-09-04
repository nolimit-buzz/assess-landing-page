'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getAboutPageData } from '@/lib/api';
import { getIconComponent } from '@/lib/icon-mapping';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation navLinks={data.navbar.nav_links} logo={data.navbar.logo} />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                {data.hero.title}
                <span className="block text-brand-green">{data.hero.title_highlight}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {data.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={data.hero.primary_cta.link} className="bg-brand-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-green/90 transition-colors text-center">
                  {data.hero.primary_cta.text}
                </Link>
                <Link href={data.hero.secondary_cta.link} className="border border-brand-navy text-brand-navy px-8 py-4 rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-colors text-center">
                  {data.hero.secondary_cta.text}
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-brand-green/20 to-brand-navy/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {data.hero.hero_cards.map((card, index) => {
                    const IconComponent = getIconComponent(card.icon);
                    const iconColor = card.color === 'green' ? 'text-brand-green' : 'text-brand-navy';
                    return (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                        <IconComponent className={`w-12 h-12 ${iconColor} mb-4`} />
                        <h3 className="font-semibold text-brand-navy mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600">{card.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-navy mb-6">{data.services.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.services.services_list.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              const iconBgColor = service.color === 'green' ? 'bg-brand-green/10' : 'bg-brand-navy/10';
              const iconColor = service.color === 'green' ? 'text-brand-green' : 'text-brand-navy';
              
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.features.map((feature, index) => {
              const IconComponent = getIconComponent(feature.icon);
              const iconBgColor = feature.color === 'green' ? 'bg-brand-green/10' : 'bg-brand-navy/10';
              const iconColor = feature.color === 'green' ? 'text-brand-green' : 'text-brand-navy';
              
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {data.faqs.faqs_list && data.faqs.faqs_list.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-brand-navy mb-6">{data.faqs.title}</h2>
              <p className="text-xl text-gray-600">{data.faqs.subtitle}</p>
            </motion.div>

            <div className="space-y-4">
              {data.faqs.faqs_list.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="px-6 py-4">
                    <h3 className="text-lg font-semibold text-brand-navy mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer footer={data.footer} />
    </main>
  );
} 