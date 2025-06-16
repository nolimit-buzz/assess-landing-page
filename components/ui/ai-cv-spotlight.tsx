'use client';

import { motion } from 'framer-motion';
import { Brain, Star, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './button';

export function AICVSpotlight() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze CVs with 95% accuracy"
    },
    {
      icon: Star,
      title: "Smart Ranking",
      description: "Automatically ranks candidates based on job requirements and skills match"
    },
    {
      icon: TrendingUp,
      title: "Predictive Scoring",
      description: "Predicts candidate success probability using historical data patterns"
    },
    {
      icon: Users,
      title: "Bias-Free Selection",
      description: "Eliminates unconscious bias with objective, data-driven evaluations"
    }
  ];

  const benefits = [
    "Reduce screening time by 80%",
    "Improve hire quality by 65%",
    "Eliminate manual CV review",
    "Scale recruitment effortlessly"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Brain className="w-4 h-4" />
            Feature Spotlight
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
          >
            AI CV Ranking
            <span className="block text-brand-green">That Actually Works</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your recruitment process with our revolutionary AI that understands context, 
            evaluates skills, and ranks candidates with unprecedented accuracy.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-brand-green" />
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
              ))}
            </div>
          </motion.div>

          {/* Right: Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold text-brand-navy">CV Ranking Results</h4>
                <div className="flex items-center gap-2 text-sm text-brand-green">
                  <Brain className="w-4 h-4" />
                  AI Powered
                </div>
              </div>
              
              {/* Mock CV Rankings */}
              <div className="space-y-4">
                {[
                  { name: "Sarah Johnson", score: 96, match: "Excellent Match", color: "bg-green-500" },
                  { name: "Michael Chen", score: 89, match: "Strong Match", color: "bg-blue-500" },
                  { name: "Emily Rodriguez", score: 82, match: "Good Match", color: "bg-yellow-500" },
                  { name: "David Kim", score: 75, match: "Fair Match", color: "bg-orange-500" }
                ].map((candidate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium text-brand-navy">{candidate.name}</p>
                        <p className="text-sm text-gray-500">{candidate.match}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-bold text-brand-navy">{candidate.score}%</p>
                        <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${candidate.color} transition-all duration-1000`}
                            style={{ width: `${candidate.score}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -right-4 bg-brand-green text-white p-4 rounded-xl shadow-lg"
            >
              <div className="text-center">
                <p className="text-2xl font-bold">95%</p>
                <p className="text-sm opacity-90">Accuracy</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}