'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function DashboardShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scaling with more dramatic effect
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 4]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [200, -150, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Experience Our Platform
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how our intuitive dashboard transforms the way you manage assessments, 
            track candidate progress, and make data-driven hiring decisions.
          </motion.p>
        </div>

        {/* Dashboard Container with Enhanced Scaling */}
        <div ref={containerRef} className="relative h-[120vh] flex items-center justify-center">
          <motion.div
            style={{ 
              scale,
              rotateY,
              y,
              opacity
            }}
            className="relative w-full max-w-6xl mx-auto"
          >
            {/* Enhanced Glow Effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-brand-green/20 via-transparent to-brand-navy/20 rounded-3xl blur-2xl transform scale-110" /> */}
            
            {/* Main Dashboard Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
              {/* Dashboard Image with Maximum Quality */}
              <div className="relative">
                <Image
                  src="/demo.png"
                  alt="Assess.ng Dashboard Interface"
                  className="w-full h-auto object-cover object-top"
                  width={1920}
                  height={1080}
                  priority
                  style={{
                    imageRendering: 'crisp-edges',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                  }}
                />
                
                {/* Subtle Overlay for Better Card Visibility */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" /> */}
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Real-time Analytics Card */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 max-w-xs"
                  initial={{ opacity: 0, x: 50, y: -20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-brand-green rounded-full animate-pulse" />
                    <span className="text-sm font-semibold text-brand-navy">Real-time Analytics</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Track candidate performance and assessment completion rates in real-time
                  </p>
                </motion.div>

                {/* AI-Powered Insights Card */}
                <motion.div
                  className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 max-w-xs"
                  initial={{ opacity: 0, x: -50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-green to-brand-navy rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <span className="text-sm font-semibold text-brand-navy">Smart Recommendations</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Get AI-powered insights to optimize your hiring process and improve candidate matching
                  </p>
                </motion.div>

                {/* Quick Actions Card */}
                <motion.div
                  className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 max-w-xs"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">⚡</span>
                    </div>
                    <span className="text-sm font-semibold text-brand-navy">One-Click Actions</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Send assessments, schedule interviews, and manage candidates with simple one-click actions
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Shadow Effects */}
            <div className="absolute inset-0 rounded-3xl shadow-2xl pointer-events-none" style={{
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)'
            }} />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-brand-green hover:bg-brand-green/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Try Interactive Demo
          </button>
        </motion.div> */}
      </div>
    </section>
  );
}