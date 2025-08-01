'use client';

import { motion } from 'framer-motion';
import { Search, Check, Users, Award, Shield, BarChart3, ArrowRight, Star, Building, Globe, Zap, Play, Car, Cross, ShoppingCart, Settings, ChevronRight, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of assessments do you offer?",
      answer: "We offer comprehensive assessment solutions including recruitment and talent sourcing, entry and promotion exams, and certification exams tailored to your organization's needs."
    },
    {
      question: "How accurate are your AI-powered assessments?",
      answer: "Our AI-powered assessments achieve 95% accuracy in predicting job performance and candidate fit, backed by extensive research and validation."
    },
    {
      question: "Can I integrate Assess.ng with my existing HR tools?",
      answer: "Yes, we offer seamless integration with popular HR platforms and provide API access for custom integrations with your existing systems."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including 24/7 technical assistance, dedicated account managers, training sessions, and detailed documentation."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-6 h-6 text-brand-navy" />
                <Check className="w-3 h-3 text-brand-green absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-brand-navy">assess.ng</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-brand-navy transition-colors">Home</Link>
              <Link href="/about" className="text-brand-navy font-medium">About Us</Link>
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Services</Link>
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Assessment</Link>
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Contact Us</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Login</Link>
              <Link href="#" className="border border-brand-navy text-brand-navy px-4 py-2 rounded-lg hover:bg-brand-navy hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

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
                Unlock Talent Potential,
                <span className="block text-brand-green">Choose Expert Assessment</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At assess.ng, we are your partners in unlocking the true potential of your workforce. Our comprehensive assessment services are tailored to cater to your organization's specific needs, ensuring you make the right decisions when it matters the most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#" className="bg-brand-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-green/90 transition-colors text-center">
                  Get Started
                </Link>
                <Link href="#" className="border border-brand-navy text-brand-navy px-8 py-4 rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-colors text-center">
                  Request Quote
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
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Users className="w-12 h-12 text-brand-green mb-4" />
                    <h3 className="font-semibold text-brand-navy mb-2">Talent Assessment</h3>
                    <p className="text-sm text-gray-600">Comprehensive candidate evaluation</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Award className="w-12 h-12 text-brand-navy mb-4" />
                    <h3 className="font-semibold text-brand-navy mb-2">Performance Metrics</h3>
                    <p className="text-sm text-gray-600">Data-driven insights</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Shield className="w-12 h-12 text-brand-green mb-4" />
                    <h3 className="font-semibold text-brand-navy mb-2">Secure Platform</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade security</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <BarChart3 className="w-12 h-12 text-brand-navy mb-4" />
                    <h3 className="font-semibold text-brand-navy mb-2">Analytics</h3>
                    <p className="text-sm text-gray-600">Advanced reporting</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Collaboration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              We collaborate across diverse industry landscapes
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Play, title: "Media", description: "Entertainment and broadcasting" },
              { icon: Car, title: "Automotive", description: "Manufacturing and sales" },
              { icon: Cross, title: "Healthcare", description: "Medical and pharmaceutical" },
              { icon: Shield, title: "Insurance", description: "Risk management and protection" },
              { icon: ShoppingCart, title: "Ecommerce & Retail", description: "Online and offline commerce" },
              { icon: Settings, title: "Technology", description: "Software and hardware solutions" }
            ].map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <industry.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-navy">{industry.title}</h3>
                      <p className="text-sm text-gray-600">{industry.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-green transition-colors" />
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Our Assessment Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recruitment and Talent Sourcing */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Recruitment & Talent Sourcing</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Finding the perfect match for your organization is essential. We go beyond resumes to assess candidates' skills, competencies, and personalities.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Entry and Promotion Exams */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-navy/10 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Entry & Promotion Exams</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Promote from within with confidence. Our exams provide a fair and unbiased evaluation of candidates' knowledge and abilities.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Certification Exams */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Certification Exams</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                In today's competitive landscape, certifications are a mark of excellence. Our exams accurately assess candidates' proficiency.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Tailored Solutions</h3>
              <p className="text-gray-600">
                We understand your unique needs and customize our assessments to align with your specific objectives.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-navy/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Proven Expertise</h3>
              <p className="text-gray-600">
                Our team of experienced HR professionals and psychologists ensures the highest level of accuracy.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Data Security</h3>
              <p className="text-gray-600">
                Rest assured that your data is treated with the utmost confidentiality and will only be shared with authorized personnel.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-brand-navy/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Actionable Insights</h3>
              <p className="text-gray-600">
                Our user-friendly reports provide actionable insights, empowering you to make informed decisions with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our assessment services</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-brand-navy pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <Minus className="w-6 h-6 text-brand-green flex-shrink-0" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-brand-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Spread all over the world, get assessment services easily
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of companies worldwide who trust Assess.ng for their talent assessment needs.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-brand-green mb-2">100+</div>
              <div className="text-gray-600">The best locations in the world</div>
            </motion.div>
            <motion.div
              className="bg-gray-50 rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-brand-green mb-2">18</div>
              <div className="text-gray-600">Proven in many countries</div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="bg-brand-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-green/90 transition-colors">
              Get Started
            </Link>
            <Link href="#" className="border border-brand-navy text-brand-navy px-8 py-4 rounded-lg font-semibold hover:bg-brand-navy hover:text-white transition-colors">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <Search className="w-6 h-6 text-white" />
                  <Check className="w-3 h-3 text-brand-green absolute -top-1 -right-1" />
                </div>
                <span className="text-xl font-bold text-white">assess.ng</span>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Your Trusted Source for Expert Assessment Services. Explore Our Insights.
              </p>
              <p className="text-white/60 text-sm">
                Copyright 2024 - Assess.ng - Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Assessments</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Analytics</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Integrations</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">INSIGHTS</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Insights</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Case Studies</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Our Team</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Career Growth</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Legal</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Security</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 