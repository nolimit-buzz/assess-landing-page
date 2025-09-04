'use client';

import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import type { ContactDetailItem } from '@/lib/api';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

function DetailIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] || MessageCircle;
  return <Icon className={className} />;
}

function colorClasses(color: string) {
  return color === 'green'
    ? { bg: 'bg-brand-green/10', text: 'text-brand-green' }
    : { bg: 'bg-brand-navy/10', text: 'text-brand-navy' };
}

export function ContactInfo({ contactDetails }: { contactDetails: ContactDetailItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 leading-tight">
        Get in Touch and
        <span className="block text-brand-green">Let's Discuss</span>
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-12">
        Our platform helps you simplify talent acquisition, retention and management enabling "You" to build high-performing teams
      </p>

      <div className="space-y-8 mb-12">
        {contactDetails.map((item, idx) => {
          const colors = colorClasses(item.color);
          const content = (
            <div>
              <h3 className="text-lg font-semibold text-brand-navy mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-brand-navy">{item.main_info}</p>
              {item.description && (
                <p className="text-gray-600">{item.description}</p>
              )}
            </div>
          );

          const inner = (
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <DetailIcon name={item.icon} className={`w-6 h-6 ${colors.text}`} />
              </div>
              {content}
            </div>
          );

          if (item.action_type && item.action_value) {
            const href =
              item.action_type === 'tel'
                ? `tel:${item.action_value}`
                : item.action_type === 'mailto'
                ? `mailto:${item.action_value}`
                : item.action_type === 'map'
                ? item.action_value
                : undefined;
            return href ? (
              <a key={idx} href={href} className="block hover:opacity-90 transition-opacity">
                {inner}
              </a>
            ) : (
              <div key={idx}>{inner}</div>
            );
          }
          return <div key={idx}>{inner}</div>;
        })}
      </div>
    </motion.div>
  );
}

