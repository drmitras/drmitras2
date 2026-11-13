import React from 'react';
import { Globe, Heart, Award, Users2, Newspaper } from 'lucide-react';

export const GlobalOutreach: React.FC = () => {
  const initiatives = [
    {
      title: 'Thailand Ministry of Public Health',
      role: 'Consultant & Committee Member',
      description: 'Appointed to the Project on Development of Homeopathy by the Ministry of Public Health, Government of Thailand. Drafted integration protocols for public clinics and hospital settings.',
      icon: Award,
      badge: 'Government Advisory',
    },
    {
      title: 'Sangklaburi Refugee Health Program',
      role: 'Chief Medical Volunteer',
      description: 'Established mobile clinics delivering free homeopathic care and preventative prophylaxis to thousands of displaced families and children in Kanchanaburi border provinces.',
      icon: Heart,
      badge: 'Humanitarian Relief',
    },
    {
      title: 'Mother Teresa’s Missionaries of Charity',
      role: 'Honorary Medical Consultant (Kolkata)',
      description: 'Decades of continuous philanthropic medical consultations for destitute patients and children across Kolkata care homes run by the Missionaries of Charity.',
      icon: Users2,
      badge: 'Charity Practice',
    },
    {
      title: 'Global Drug Discovery & Research',
      role: 'Scientific Liaison',
      description: 'Collaborating with international research bodies and laboratories to publish observational case registries and nano-pharmacological analytical papers on potentised remedies.',
      icon: Globe,
      badge: 'Clinical Research',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 tracking-wider uppercase mb-2">
            <span>International Engagement & Philanthropy</span>
            <span aria-hidden="true" className="text-stone-600">·</span>
            <span>Global Public Health</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Advancing Healing Across Borders
          </h2>
          <p className="mt-3 text-base text-stone-400 leading-relaxed font-light">
            Beyond private practice, Dr. Somenath Mitra has dedicated significant clinical time to governmental healthcare development, humanitarian medicine for underserved populations, and charitable foundations.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-stone-800/80 border border-stone-700/80 rounded-lg p-6 flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded bg-emerald-950/80 border border-emerald-800 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-emerald-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-400">
                    {item.role}
                  </div>

                  <p className="text-xs text-stone-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Foundation & Philanthropy Banner */}
        <div className="mt-12 p-6 rounded-lg bg-stone-800/50 border border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Dr. Somenath Mitra Homeopathy Foundation
            </h4>
            <p className="text-xs text-stone-400 max-w-2xl font-light">
              Dedicated to making research-based homeopathic nano-medicines accessible to financially disadvantaged communities, organizing free medical camps, and funding independent clinical trials.
            </p>
          </div>
          <div className="shrink-0 text-xs text-stone-400 border border-stone-600 px-4 py-2 rounded">
            Non-Profit Trust Registration #WB-IV-02841
          </div>
        </div>
      </div>
    </section>
  );
};
