import React, { useState } from 'react';
import { FileText, ArrowUpRight, CheckCircle2, TrendingDown, TrendingUp } from 'lucide-react';
import { CASE_STUDIES } from '../data/clinicData';
import { CaseStudyItem } from '../types';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem>(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
            <span>Evidence & Outcome Documentation</span>
            <span aria-hidden="true">·</span>
            <span>Documented Medical Records</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Documented Clinical Case Studies
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Review detailed case trajectories from Dr. Mitra’s archives showcasing objective pre- and post-treatment laboratory benchmarks across refractory autoimmune, hematological, and chronic ailments.
          </p>
        </div>

        {/* 2-Column Layout: Left Case Selector List, Right In-Depth Documented Case Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selectable Case Thumbnails */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block px-1">
              Select Patient Case
            </span>
            {CASE_STUDIES.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  selectedCase.id === item.id
                    ? 'bg-white border-emerald-900 shadow-sm ring-1 ring-emerald-900/10'
                    : 'bg-white/70 border-stone-200 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span>{item.timeline}</span>
                  <span className="text-emerald-900 font-medium">Verified Case</span>
                </div>
                <h3 className="text-sm font-semibold text-stone-900">
                  {item.condition}
                </h3>
                <div className="text-xs text-stone-600 mt-1 line-clamp-1">
                  {item.patientAgeGender}
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Post-Treatment:</span>
                  <span className="font-semibold text-emerald-900 tabular-nums">
                    {item.finalMetrics.value}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: In-Depth Selected Case Study Deep Dive */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>Clinical Registry #CS-{selectedCase.id.slice(-4).toUpperCase()}</span>
                <span className="text-emerald-900 font-semibold">{selectedCase.timeline}</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900">
                {selectedCase.condition}
              </h3>
              <div className="text-xs font-medium text-stone-600 mt-1">
                Cohort: {selectedCase.patientAgeGender}
              </div>
            </div>

            {/* Quantitative Metrics Delta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 border border-stone-200 rounded-lg p-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-rose-700 font-medium">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{selectedCase.initialMetrics.label}</span>
                </div>
                <div className="text-lg font-mono font-bold text-stone-900 tabular-nums">
                  {selectedCase.initialMetrics.value}
                </div>
                <div className="text-xs text-stone-500">Pre-treatment clinical baseline</div>
              </div>

              <div className="space-y-1 sm:border-l sm:border-stone-200 sm:pl-4">
                <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{selectedCase.finalMetrics.label}</span>
                </div>
                <div className="text-lg font-mono font-bold text-emerald-950 tabular-nums">
                  {selectedCase.finalMetrics.value}
                </div>
                <div className="text-xs text-emerald-700 font-medium">Verified remission outcome</div>
              </div>
            </div>

            {/* Narrative Case Detail */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-700">
              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-1">
                  Presenting Clinical History & Symptoms
                </strong>
                <p className="text-stone-600 leading-relaxed">{selectedCase.presentingComplaint}</p>
              </div>

              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-1">
                  Prior Interventions & Conventional Failures
                </strong>
                <p className="text-stone-600 leading-relaxed">{selectedCase.priorTreatments}</p>
              </div>

              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-1">
                  Homeopathic Formulation Protocol Administered
                </strong>
                <p className="text-stone-600 leading-relaxed bg-stone-50 p-3 rounded border border-stone-200">
                  {selectedCase.remedyApproach}
                </p>
              </div>

              <div>
                <strong className="text-xs font-bold uppercase tracking-wider text-stone-900 block mb-1">
                  Clinical Outcome & Longevity
                </strong>
                <p className="text-stone-800 font-medium leading-relaxed">
                  {selectedCase.outcomeSummary}
                </p>
              </div>
            </div>

            {/* Verification Footer */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-stone-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>{selectedCase.verifiedStatus}</span>
              </div>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-900 hover:text-emerald-700 transition-colors"
              >
                Inquire For Similar Condition
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
