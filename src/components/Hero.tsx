import React from 'react';
import { ArrowRight, ShieldCheck, Award, HeartPulse, FileText } from 'lucide-react';
import { CLINIC_STATS } from '../data/clinicData';
import heroClinicImage from '../assets/images/hero_dr_mitra_clinic_1794455903171.jpg';

const SHAREPOINT_IMAGE_URL =
  'https://nanomedz4u-my.sharepoint.com/:i:/g/personal/nanomedz_nanomedz4u_onmicrosoft_com/IQDiBidA-hnfQI8g8q_ky_cLATjzUTUhPyjV2HpGz2xoDGI?e=QXN6Qn&download=1';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreCases }) => {
  return (
    <section className="relative bg-gradient-to-b from-stone-100/70 via-stone-50 to-stone-100/40 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Clinical Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Quiet Unboxed Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-stone-600 tracking-wide">
              <span>National Institute of Homeopathy (India)</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>30+ Years Clinical Practice</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Ainsworths UK Sourced</span>
            </div>

            {/* Headline with text-wrap balance in Plus Jakarta Sans */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15] max-w-2xl" style={{ textWrap: 'balance' }}>
              Scientific Nano-Medicine & Clinical Homeopathy for Chronic Illness
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-light">
              Led by <strong className="font-semibold text-stone-800">Dr. Somenath Mitra</strong> (BHMS, NIH), our practice develops research-guided homeopathic protocols targeting complex, autoimmune, oncological palliative, and treatment-resistant diseases with objective laboratory tracking.
            </p>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-md p-3">
                <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Zero corticosteroids or chemical immunosuppressants</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-md p-3">
                <Award className="w-4 h-4 text-emerald-800 shrink-0" />
                <span>Govt of Thailand Homeopathy Advisory Consultant</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-800 active:scale-[0.99] transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCases}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-700 bg-white hover:bg-stone-100 hover:text-stone-900 border border-stone-300 active:scale-[0.99] transition-all rounded-md whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-stone-500" />
                View Documented Case Studies
              </button>
            </div>

            {/* Emergency & Prescriptions Compliance Notice */}
            <p className="text-xs text-stone-500 pt-1">
              * Complementary medical care integrated with standard clinical diagnostics. We do not advise abruptly stopping vital prescription medications.
            </p>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] relative rounded-lg overflow-hidden border border-stone-200/90 shadow-md bg-stone-100">
              <img
                src={SHAREPOINT_IMAGE_URL}
                onError={(e) => {
                  if (e.currentTarget.src !== heroClinicImage) {
                    e.currentTarget.src = heroClinicImage;
                  }
                }}
                alt="Dr. Mitra's modern multispeciality clinic reception and medical consultation atmosphere"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1">
                  <HeartPulse className="w-3.5 h-3.5" />
                  <span>Kolkata Salt Lake & VIP Road Centers</span>
                </div>
                <p className="text-sm font-medium text-stone-100">
                  Patient-centered medical environment dedicated to root-cause restoration and long-term vitality.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI / Trust Proof Strip (Strictly below the hero split per guidelines) */}
        <div className="mt-14 pt-10 border-t border-stone-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {CLINIC_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-mono tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-stone-800">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
