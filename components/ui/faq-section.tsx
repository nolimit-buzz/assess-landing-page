'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does Assess.ng reduce recruitment time by 60%?",
    answer: "Our AI-powered assessment platform automates the initial screening process, instantly evaluating candidates against your specific requirements. This eliminates manual resume screening and allows you to focus only on qualified candidates, dramatically reducing time-to-hire."
  },
  {
    question: "What types of assessments can I create?",
    answer: "Assess.ng supports multiple assessment types including technical skills tests, cognitive ability assessments, personality evaluations, situational judgment tests, and custom assessments tailored to your specific role requirements."
  },
  {
    question: "Is the platform suitable for small businesses?",
    answer: "Absolutely! Assess.ng is designed to scale with your business. Whether you're a startup hiring your first employees or an enterprise managing hundreds of positions, our platform adapts to your needs with flexible pricing and features."
  },
  {
    question: "How accurate are the AI-powered assessments?",
    answer: "Our assessments are built on validated psychometric principles and continuously refined through machine learning. We maintain high accuracy rates with regular calibration against real-world performance data to ensure reliable candidate evaluation."
  },
  {
    question: "Can I integrate Assess.ng with my existing HR tools?",
    answer: "Yes! Assess.ng offers seamless integrations with popular ATS systems, HRIS platforms, and other HR tools. Our API allows for custom integrations to fit your existing workflow perfectly."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including onboarding assistance, training resources, dedicated customer success managers for enterprise clients, and 24/7 technical support to ensure you get the most out of our platform."
  }
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-brand-green" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our assessment platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-brand-green text-white font-semibold rounded-lg hover:bg-brand-green/90 transition-colors duration-200">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}