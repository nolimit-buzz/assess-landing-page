'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Zap, Shield } from 'lucide-react';

interface CVRankingData {
  badge: string;
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  results: Array<{
    tag?: string;
    title?: string;
    name?: string;
    score?: number;
    initials?: string;
    matchLevel?: string;
  }>;
}

interface AICVSpotlightProps {
  cvRanking: CVRankingData;
}

export function AICVSpotlight({ cvRanking }: AICVSpotlightProps) {
  const featureIcons = [TrendingUp, Zap, Shield, CheckCircle];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
            {cvRanking.badge}
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div>AI CV Ranking</div>
              <div className="text-brand-green">That Actually Works</div>
            </div>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {cvRanking.subtitle}
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Features */}
            <div className="space-y-6">
              {cvRanking.features.map((feature, index) => {
                const IconComponent = featureIcons[index] || CheckCircle;
                return (
                <motion.div
                  key={index}
                    className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* 95% Accuracy Card - Floating Overlap */}
            <div className="absolute -top-4 -right-4 bg-brand-green text-white px-4 py-3 rounded-xl text-center shadow-lg z-10">
              <div className="text-lg font-bold">95%</div>
              <div className="text-xs">Accuracy</div>
            </div>

            {/* Results Container */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-brand-navy">
                  CV Ranking Results
                </h3>
                <div className="flex items-center gap-2 text-brand-green text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>AI Powered</span>
                </div>
              </div>
              
              {/* Results List */}
              <div className="space-y-4">
                {cvRanking.results.slice(1).map((result, index) => {
                  const colors = ['bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-orange-500'];
                  const color = colors[index] || 'bg-gray-500';
                  
                  return (
                  <motion.div
                    key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-sm">
                          {result.initials || 'NA'}
                      </div>
                      <div>
                          <h4 className="font-semibold text-brand-navy">
                            {result.name || 'Candidate'}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {result.matchLevel || 'Match Level'}
                          </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                          <div className="text-lg font-bold text-brand-navy">
                            {result.score || 0}%
                          </div>
                        </div>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${color} transition-all duration-1000`}
                            style={{ width: `${result.score || 0}%` }}
                          />
                      </div>
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-navy/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}