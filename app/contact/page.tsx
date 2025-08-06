'use client';

import { motion } from 'framer-motion';
import { Search, Check, ArrowRight, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
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
              <Link href="/about" className="text-gray-600 hover:text-brand-navy transition-colors">About Us</Link>
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Services</Link>
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Assessment</Link>
              <Link href="/contact" className="bg-brand-navy text-white px-4 py-2 rounded-lg">Contact Us</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-600 hover:text-brand-navy transition-colors">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
                Get in Touch and
                <span className="block text-brand-green">Let&apos;s Discuss</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Our platform helps you simplify talent acquisition, retention and management enabling &quot;You&quot; to build high-performing teams
              </p>
            </motion.div>

            {/* Contact Details */}
            <div className="max-w-2xl mx-auto mb-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">Call Us</h3>
                    <p className="text-lg font-bold text-brand-navy">(+234) 807 2690 085</p>
                    <p className="text-sm text-gray-600">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">Email Us</h3>
                    <p className="text-lg font-bold text-brand-navy">info@assess.ng</p>
                    <p className="text-sm text-gray-600">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">Visit Us</h3>
                    <p className="text-gray-600">3 Adetoro Adelaja, Magodo Phase 2, Lagos</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-brand-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="mailto:info@assess.ng?subject=Contact%20Request%20-%20Assess.ng&body=Hello%2C%0A%0AI%20would%20like%20to%20get%20in%20touch%20regarding%20your%20assessment%20services.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D"
                className="bg-brand-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-green/90 transition-colors flex items-center gap-2 group"
              >
                Send Email
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-brand-navy mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by Leading Organizations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The Smarter Way to Find, Hire and Retain Top Talent
          </motion.p>
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
                The Smarter Way to Find, Hire and Retain Top Talent
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Careers</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Blog</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Help Center</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Documentation</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">API</Link></li>
                <li><Link href="#" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-white/60 text-sm mb-4">
                We will send you updates on the latest developments in the assessment and recruitment space.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
                <button className="bg-brand-green text-white px-4 py-2 rounded-r-lg hover:bg-brand-green/90 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Assess.ng. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
} 