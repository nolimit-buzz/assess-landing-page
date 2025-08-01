'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Settings, Users, BarChart3, ArrowRight, Target, Zap, CheckCircle2 } from 'lucide-react';

interface ProcessCard {
  step: string;
  title: string;
  duration: string;
  features: string[];
  description: string;
}

interface SummaryCard {
  title: string;
  subtitle: string;
  icon?: string;
}

interface SetupData {
  badge: string;
  title: string;
  subtitle: string;
  process_cards: ProcessCard[];
  summary_cards: SummaryCard[];
}

interface ProcessSectionProps {
  setup: SetupData;
}

export function ProcessSection({ setup }: ProcessSectionProps) {
  const stepIcons = [Settings, Users, Clock, BarChart3];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Clock className="w-4 h-4" />
            {setup.badge}
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div>From Setup to Insights in</div>
              <div className="text-brand-green">Under 10 Minutes</div>
          </div>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {setup.subtitle}
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green via-brand-navy to-brand-green transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {setup.process_cards.map((card, index) => {
              const IconComponent = stepIcons[index] || Settings;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                    {/* Step Number */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-brand-green text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {card.step}
                    </div>

                    {/* Icon */}
                  <div className="w-16 h-16 bg-brand-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                    </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">
                    {card.title}
                    </h3>

                  {/* Duration */}
                  <p className="text-brand-green font-semibold mb-4">
                    {card.duration}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {card.description}
                    </p>

                    {/* Features */}
                  <ul className="space-y-2">
                    {card.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                      ))}
                  </ul>

                  {/* Arrow - Shows on hover */}
                  {index < setup.process_cards.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-8 h-8 bg-white rounded-full border-2 border-brand-green flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-4 h-4 text-brand-green" />
                        </div>
                      </div>
                    )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {setup.summary_cards.map((card, index) => {
            const summaryIcons = [Target, Zap, CheckCircle2];
            const IconComponent = summaryIcons[index] || Target;
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
          </div>
                <h3 className="text-3xl font-bold text-gray-700 mb-2">
                  {card.title}
            </h3>
                <p className="text-gray-600 font-medium">
                  {card.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}