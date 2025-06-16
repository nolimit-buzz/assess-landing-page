'use client';

import { Brain, Code, Users, Target, Lightbulb, Shield } from 'lucide-react';

const assessmentTypes = [
  {
    icon: Brain,
    title: 'Cognitive Assessments',
    description: 'Evaluate critical thinking, problem-solving abilities, and mental agility with scientifically-backed cognitive tests.',
    gradient: 'from-purple-500 via-purple-600 to-indigo-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    features: ['Logic & Reasoning', 'Memory Tests', 'Pattern Recognition']
  },
  {
    icon: Code,
    title: 'Technical Skills',
    description: 'Comprehensive coding challenges and technical evaluations across multiple programming languages and frameworks.',
    gradient: 'from-blue-500 via-blue-600 to-cyan-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    features: ['Live Coding', 'System Design', 'Code Review']
  },
  {
    icon: Users,
    title: 'Behavioral Analysis',
    description: 'Assess personality traits, work styles, and cultural fit through advanced behavioral science methodologies.',
    gradient: 'from-emerald-500 via-green-600 to-teal-600',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    features: ['Personality Mapping', 'Team Dynamics', 'Leadership Style']
  },
  {
    icon: Target,
    title: 'Role-Specific Tests',
    description: 'Tailored assessments designed for specific job roles, industries, and seniority levels with precision targeting.',
    gradient: 'from-orange-500 via-red-500 to-pink-600',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    features: ['Custom Scenarios', 'Industry Focus', 'Role Simulation']
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    description: 'Measure innovation potential, creative problem-solving, and out-of-the-box thinking capabilities.',
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    features: ['Innovation Tests', 'Design Thinking', 'Creative Solutions']
  },
  {
    icon: Shield,
    title: 'Integrity & Ethics',
    description: 'Evaluate moral reasoning, ethical decision-making, and integrity through scenario-based assessments.',
    gradient: 'from-slate-500 via-gray-600 to-zinc-600',
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-600',
    features: ['Ethical Scenarios', 'Integrity Checks', 'Value Alignment']
  }
];

export function AssessmentTypes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Comprehensive Assessment Suite
          </h2>
          <p className="text-xl text-brand-navy/70 max-w-3xl mx-auto leading-relaxed">
            Every Skill, Every Role, Every Assessment
          </p>
          <div className="w-24 h-1 bg-brand-green mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Assessment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assessmentTypes.map((assessment, index) => {
            const IconComponent = assessment.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${assessment.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${assessment.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${assessment.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                    {assessment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-brand-navy/70 mb-6 leading-relaxed">
                    {assessment.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {assessment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-brand-green rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-sm text-brand-navy/80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${assessment.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${assessment.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-brand-navy">500+ Assessment Types</p>
              <p className="text-xs text-brand-navy/60">Covering every skill and role</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}