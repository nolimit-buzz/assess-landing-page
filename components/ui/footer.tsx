'use client';

import { motion } from 'framer-motion';
import { Search, Check, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
  link?: string;
  href?: string;
  title: string;
}

interface FooterLinks {
  Company: FooterLink[];
  Product: FooterLink[];
  Support: FooterLink[];
}

interface FooterData {
  nav_links: {
    links: FooterLinks;
    description: string;
    social?: Array<{
      platform: string;
      url: string;
      icon?: 'Twitter' | 'Linkedin' | 'Instagram' | 'Facebook' | string;
      ariaLabel?: string;
    }>;
  };
  logo: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
}

interface FooterProps {
  footer: FooterData;
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src={footer.logo.formats.thumbnail.url} 
                alt="Assess.ng Logo" 
                width={245} 
                height={53} 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md">
              {footer.nav_links?.description || "The smarter way to find, hire & retain top talent with AI-powered assessments."}
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-brand-navy mb-6">Product</h3>
            <ul className="space-y-3">
              {footer.nav_links?.links?.Product?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href || link.link}
                    className="text-gray-600 hover:text-brand-navy transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-brand-navy mb-6">Company</h3>
            <ul className="space-y-3">
              {footer.nav_links?.links?.Company?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link || link.href}
                    className="text-gray-600 hover:text-brand-navy transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-brand-navy mb-6">Support</h3>
            <ul className="space-y-3">
              {footer.nav_links?.links?.Support?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link || link.href}
                    className="text-gray-600 hover:text-brand-navy transition-colors duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Assess.ng. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {(footer.nav_links?.social && footer.nav_links.social.length > 0
                ? footer.nav_links.social
                : [
                    { platform: 'Twitter', url: 'https://x.com/assess_ng?s=21', icon: 'Twitter' },
                    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/assess-ng/', icon: 'Linkedin' },
                    { platform: 'Instagram', url: 'https://www.instagram.com/assess.ng/', icon: 'Instagram' },
                    { platform: 'Facebook', url: 'https://www.facebook.com/share/1JYZ8UovXy/?mibextid=wwXIfr', icon: 'Facebook' },
                  ]
              ).map((s, idx) => {
                const Icon =
                  s.icon === 'Linkedin' ? Linkedin :
                  s.icon === 'Instagram' ? Instagram :
                  s.icon === 'Facebook' ? Facebook :
                  Twitter;
                return (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.ariaLabel || `Follow Assess.ng on ${s.platform}`}
                    className="text-gray-600 hover:text-brand-navy transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}