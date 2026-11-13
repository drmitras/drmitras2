import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
            <span>Patient Perspectives & Outcomes</span>
            <span aria-hidden="true">·</span>
            <span>Verified Recoveries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Trusted by Patients Across Continents
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Read first-hand accounts from patients who found sustainable relief and restored quality of life under Dr. Somenath Mitra’s clinical care.
          </p>
        </div>

        {/* 2x2 Grid of In-Depth Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-stone-50 border border-stone-200/90 rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-stone-300 transition-colors"
            >
              <div className="space-y-3">
                {/* Header: Rating & Condition */}
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-emerald-900">{item.duration}</span>
                </div>

                <div className="text-xs font-semibold text-stone-700">
                  Condition: {item.condition}
                </div>

                <blockquote className="text-stone-700 text-sm sm:text-base leading-relaxed italic font-serif font-medium">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Patient Attribution Footer */}
              <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-stone-900">
                    {item.author}
                  </div>
                  <div className="text-xs text-stone-500">
                    {item.location}
                  </div>
                </div>

                {item.verifiedPatient && (
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-800" />
                    <span>Verified Patient</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
