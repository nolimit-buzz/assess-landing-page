'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Users, Shield, BarChart3 } from 'lucide-react';

interface ImpactCard {
  stat: string;
  label: string;
  title: string;
  description: string;
}

interface ImpactData {
  badge: string;
  title: string;
  subtitle: string;
  impact_cards: ImpactCard[];
}

interface BenefitsSectionProps {
  impact: ImpactData;
}

export function BenefitsSection({ impact }: BenefitsSectionProps) {
  const impactIcons = [TrendingUp, DollarSign, Target, Shield, Users, BarChart3];

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
            <TrendingUp className="w-4 h-4" />
            {impact.badge}
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-brand-navy mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {impact.title}
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {impact.subtitle}
          </motion.p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impact.impact_cards.map((card, index) => {
            const IconComponent = impactIcons[index] || TrendingUp;
            const iconColors = ['bg-brand-green', 'bg-gray-600', 'bg-gray-600', 'bg-brand-green', 'bg-gray-600', 'bg-gray-600'];
            const iconColor = iconColors[index] || 'bg-brand-green';
            
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  {/* Icon - Top Left */}
                  <div className={`w-12 h-12 ${iconColor} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Metric - Top Right */}
                  <div className="text-right">
                    <div className="text-4xl font-bold text-brand-green">
                      {card.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {card.label}
                    </div>
                    </div>
                  </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-brand-navy mb-3">
                  {card.title}
                  </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
                  {card.description}
                  </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}