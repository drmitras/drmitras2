import React, { useState } from 'react';
import { Microscope, Shield, Dna, FileCheck, Layers, Sparkles } from 'lucide-react';
import researchLabImage from '../assets/images/nano_homeopathy_research_lab_1794455905369.jpg';

const SHAREPOINT_RESEARCH_IMAGE_URL =
  'https://nanomedz4u-my.sharepoint.com/:i:/g/personal/nanomedz_nanomedz4u_onmicrosoft_com/IQBsRRhB0AhdSI3HlHQmjWzRAUMPltTRAlMTJSvp4KI3KmU?e=vnpZz7&download=1';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'nanoparticles' | 'hormesis' | 'sourcing' | 'monitoring'>('nanoparticles');

  const tabs = [
    { id: 'nanoparticles', label: 'Nanoparticle Physics' },
    { id: 'hormesis', label: 'Hormesis & Bio-Signaling' },
    { id: 'sourcing', label: 'Ainsworths UK Standards' },
    { id: 'monitoring', label: 'Laboratory Diagnostics' },
  ] as const;

  return (
    <section id="research" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
            <span>Biophysical Research & Pharmacology</span>
            <span aria-hidden="true">·</span>
            <span>Science-Backed Protocols</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            The Science of Nano-Dilutions in Clinical Medicine
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Modern pharmacology is increasingly validating what classical homeopathy observed empirically: ultra-dilute preparations act as epigenetic and cellular bio-signals rather than bulk chemical suppressors.
          </p>
        </div>

        {/* 2-Column Split: Visual Lab + Interactive Scientific Exploration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Research Lab Asset */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
              <img
                src={SHAREPOINT_RESEARCH_IMAGE_URL}
                onError={(e) => {
                  if (e.currentTarget.src !== researchLabImage) {
                    e.currentTarget.src = researchLabImage;
                  }
                }}
                alt="Nano-medicine research laboratory testing botanical potentisations and high-dilution solutions"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600">
                <div className="flex items-center gap-2 font-semibold text-stone-900 mb-1">
                  <Microscope className="w-4 h-4 text-emerald-800" />
                  <span>Nanoscale Characterisation</span>
                </div>
                Analytical methods including Transmission Electron Microscopy (TEM) and Dynamic Light Scattering (DLS) confirm stable nanoparticle presence in serially agitated dilutions.
              </div>
            </div>

            {/* Sourcing Badge Box */}
            <div className="p-4 rounded-md border border-stone-200 bg-stone-50 flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-900 shrink-0 mt-0.5" />
              <div className="text-xs text-stone-700">
                <strong className="text-stone-900 font-semibold block">Exclusive Sourcing from Ainsworths (London, UK)</strong>
                Established in 1867, Ainsworths holds Royal Warrants to HM The King and HM Queen Elizabeth The Queen Mother. All preparations are strictly non-genetically modified and verified pure.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scientific Pillar Selector */}
          <div className="lg:col-span-7 space-y-6">
            {/* Functional Tabs */}
            <div className="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-stone-900 shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4 min-h-[300px]">
              {activeTab === 'nanoparticles' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Nanoparticle Dispersion & Retention</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Why Ultra-High Dilutions Retain Measurable Material
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    Seminal studies published in peer-reviewed journals (such as research led by the Indian Institute of Technology / IIT-B) have proven that serial dilution and succussion (vigorous shaking) do not dilute substance to zero. Instead, the process generates nanoscale crystalline structures trapped on the meniscus and within the silica vehicle.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
                    <div className="p-3 bg-white rounded border border-stone-200">
                      <strong className="text-stone-900 block font-semibold mb-1">Epitaxy & Hydration Shells</strong>
                      Water and alcohol molecules form permanent ordered nanoclusters around starting active mineral ions.
                    </div>
                    <div className="p-3 bg-white rounded border border-stone-200">
                      <strong className="text-stone-900 block font-semibold mb-1">Cellular Endocytosis</strong>
                      Nanoparticles bypass degraded gut absorption barriers, directly reaching immune cell receptors.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'hormesis' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                    <Dna className="w-4 h-4" />
                    <span>Hormetic Cellular Bio-Signaling</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Biphasic Dose-Response Curve (The Arndt-Schulz Principle)
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    In biological systems, high doses of a compound often inhibit or poison cellular function, whereas ultra-low micro-doses stimulate adaptive repair mechanisms. Dr. Mitra applies this biological truth to stimulate suppressed marrow cells, repair damaged synovial membranes, and reset overactive immune responses.
                  </p>
                  <div className="p-3 bg-white rounded border border-stone-200 text-xs text-stone-600 space-y-1">
                    <div className="font-semibold text-stone-800">Zero Toxicity Advantage:</div>
                    <p>Because molecules act through signaling rather than mass chemical displacement, there is zero metabolic burden on hepatic cytochrome P450 enzymes or glomerular renal filtration.</p>
                  </div>
                </div>
              )}

              {activeTab === 'sourcing' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Pharmacopoeial Rigour: Ainsworths (UK)</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Absolute Integrity of Starting Botanical & Mineral Source
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    Clinical efficacy depends entirely on the genuine purity of the original Mother Tinctures and manual potentisation techniques. Commercial mass-manufactured remedies frequently suffer from batch variations or industrial contamination.
                  </p>
                  <ul className="space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>Certified British & European Homeopathic Pharmacopoeia compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>Individual hand-succussed centesimal (CH) and millesimal (LM) potencies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                      <span>Organic non-GMO sucrose pillules with verified uniform absorption porosity</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'monitoring' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-900 font-semibold text-sm">
                    <FileCheck className="w-4 h-4" />
                    <span>Objective Clinical Parameter Verification</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Laboratory-Monitored Therapeutic Progress
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed font-light">
                    We reject subjective placebo assertions. Every treatment protocol is mapped to rigorous objective diagnostic endpoints evaluated across standardized intervals:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                    <div className="p-2.5 bg-white rounded border border-stone-200">
                      <strong className="block text-stone-900">Hematology:</strong>
                      Hb, Platelets, Absolute Neutrophil Count (ANC)
                    </div>
                    <div className="p-2.5 bg-white rounded border border-stone-200">
                      <strong className="block text-stone-900">Autoimmune:</strong>
                      Anti-CCP, ANA profile, ESR, hs-CRP
                    </div>
                    <div className="p-2.5 bg-white rounded border border-stone-200">
                      <strong className="block text-stone-900">Renal & Liver:</strong>
                      Serum Creatinine, eGFR, SGOT/SGPT
                    </div>
                    <div className="p-2.5 bg-white rounded border border-stone-200">
                      <strong className="block text-stone-900">Pulmonary:</strong>
                      Spirometry (FEV1, FVC), PEFR morning tracking
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
