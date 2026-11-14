import React, { useState } from 'react';
import { ArrowRight, Activity, CheckCircle, ChevronRight, X, Clock, Users } from 'lucide-react';
import { CONDITIONS } from '../data/clinicData';
import { ConditionItem } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface ConditionsSectionProps {
  onSelectConditionForBooking: (conditionName: string) => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onSelectConditionForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCondition, setSelectedCondition] = useState<ConditionItem | null>(null);
  const { t } = useLanguage();

  const filterTabs = [
    { id: 'all', label: t.conditions.filters.all },
    { id: 'oncology', label: t.conditions.filters.oncology },
    { id: 'autoimmune', label: t.conditions.filters.autoimmune },
    { id: 'respiratory', label: t.conditions.filters.respiratory },
    { id: 'chronic', label: t.conditions.filters.chronic },
    { id: 'metabolic', label: t.conditions.filters.metabolic },
  ];

  const filteredConditions = activeFilter === 'all'
    ? CONDITIONS
    : CONDITIONS.filter((c) => c.category === activeFilter);

  return (
    <section id="conditions" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
            <span>{t.conditions.kickerLeft}</span>
            <span aria-hidden="true">·</span>
            <span>{t.conditions.kickerRight}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            {t.conditions.heading}
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            {t.conditions.description}
          </p>
        </div>

        {/* Functional Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-stone-100">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Bento Grid of Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredConditions.map((condition) => (
            <div
              key={condition.id}
              className="group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
            >
              <div className="space-y-4">
                {/* Quiet unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span className="capitalize">{condition.category} {t.conditions.careSuffix}</span>
                  <div className="flex items-center gap-1 text-stone-600">
                    <Users className="w-3.5 h-3.5" />
                    <span className="tabular-nums">{condition.caseCount}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                  {condition.name}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {condition.summary}
                </p>

                {/* Key Symptoms / Focus Points */}
                <div className="pt-2 border-t border-stone-200/60 space-y-1.5">
                  <span className="text-xs font-semibold text-stone-700 block">{t.conditions.focusAreas}</span>
                  <div className="space-y-1">
                    {condition.symptoms.slice(0, 3).map((sym, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                        <span className="truncate">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCondition(condition)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-900 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  {t.conditions.clinicalProtocol}
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectConditionForBooking(condition.name)}
                  className="px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 hover:text-stone-900 border border-stone-300 rounded transition-colors cursor-pointer"
                >
                  {t.conditions.bookCare}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Condition Detail Modal */}
        {selectedCondition && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-fadeIn">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                    {t.conditions.clinicalProtocol} · {selectedCondition.category}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">
                    {selectedCondition.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCondition(null)}
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-stone-700">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 mb-1">{t.conditions.modalRationale}</h4>
                  <p className="leading-relaxed text-stone-600">{selectedCondition.description}</p>
                </div>

                <div className="bg-stone-50 border border-stone-200 rounded-md p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-950">
                    <Activity className="w-4 h-4 text-emerald-800" />
                    <span>{t.conditions.modalStrategy}</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedCondition.protocolApproach}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 mb-2">{t.conditions.modalSymptoms}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCondition.symptoms.map((sym, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-stone-600 bg-stone-50 p-2 rounded border border-stone-100">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 mb-2">{t.conditions.modalMetrics}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCondition.monitoringMetrics.map((metric, idx) => (
                      <span key={idx} className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded border border-stone-200">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-stone-100 text-xs text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-stone-400" />
                    <span>{t.conditions.modalDuration} <strong className="text-stone-800">{selectedCondition.avgDuration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-stone-400" />
                    <span>{t.conditions.modalCohort} <strong className="text-stone-800">{selectedCondition.caseCount}</strong></span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCondition(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  {t.conditions.modalClose}
                </button>
                <button
                  onClick={() => {
                    const name = selectedCondition.name;
                    setSelectedCondition(null);
                    onSelectConditionForBooking(name);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-md transition-colors"
                >
                  {t.conditions.modalBook}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
