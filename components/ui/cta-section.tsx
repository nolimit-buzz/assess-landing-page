'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Shield, Star, DollarSign } from 'lucide-react';

interface FreeTrialData {
  title: string;
  description: string;
  cta: string;
}

interface Achievement {
  value: string;
  benchmark: string;
}

interface OfferData {
  badge: string;
  title: string;
  subtitle: string;
  primary_cta: string;
  secondary_cta: string;
  achievements: Achievement[];
}

interface CTASectionProps {
  freeTrial: FreeTrialData;
  offer: OfferData;
}

export function CTASection({ freeTrial, offer }: CTASectionProps) {
  return (
    <section id="pricing" className="max-w-[1200px] rounded-xl mx-auto py-20 bg-gradient-to-br from-brand-navy to-brand-green">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Limited Time Offer Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-4 h-4 bg-gray-600 rounded-sm" />
            {offer.badge}
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {offer.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-white/90 max-w-xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {offer.subtitle}
          </motion.p>

          {/* Benefits List */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-white" />
              <span>No setup fees or hidden costs</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-5 h-5 text-white" />
              <span>Cancel anytime, no commitments</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <DollarSign className="w-5 h-5 text-white" />
              <span>Flexible plans tailored to your needs</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Shield className="w-5 h-5 text-white" />
              <span>Enterprise-grade security included</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a href="https://app.assess.ng" target="_blank">
            <button className="bg-white text-brand-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group flex items-center gap-2">
              {offer.primary_cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button></motion.a>
            <motion.a href="/contact">
            <button className="border-2 border-white text-white hover:bg-white hover:text-brand-green px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300">
              {offer.secondary_cta}
            </button></motion.a>
          </motion.div>

          {/* Social Proof Statistics */}
          <motion.div
            className="border-t border-white/20 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offer.achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-white" />
                    <div className="text-2xl font-bold text-white">
                      {achievement.value}
                    </div>
                  </div>
                  <div className="text-white/80 text-sm">
                    {achievement.benchmark}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}