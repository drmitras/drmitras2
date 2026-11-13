import React from 'react';
import { Award, BookOpen, Globe2, Heart, CheckCircle2 } from 'lucide-react';
import drMitraPortraitImage from '../assets/images/regenerated_image_1794468808723.jpg';

const SHAREPOINT_DOCTOR_IMAGE_URL =
  'https://nanomedz4u-my.sharepoint.com/:i:/g/personal/nanomedz_nanomedz4u_onmicrosoft_com/IQDiBidA-hnfQI8g8q_ky_cLATjzUTUhPyjV2HpGz2xoDGI?e=QXN6Qn&download=1';

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ onOpenBooking }) => {
  const credentials = [
    {
      title: 'National Institute of Homeopathy (NIH)',
      subtitle: '5½-Year Full-time BHMS Degree & Clinical Internship',
      description: "Graduated from Asia's premier central government homeopathy institute (Kolkata, India), operating under the Ministry of Ayush / Ministry of Health & Family Welfare.",
      icon: BookOpen,
    },
    {
      title: 'Ministry of Public Health, Thailand',
      subtitle: 'Official Consultant & Developmental Committee Member',
      description: 'Appointed by the Royal Thai Government to structure national standards, clinical guidelines, and integrative training programs for homeopathic medicine.',
      icon: Globe2,
    },
    {
      title: 'Humanitarian & Philanthropic Service',
      subtitle: 'Missionaries of Charity & Sangklaburi Refugee Relief',
      description: 'Decades of free clinical care provided in collaboration with Mother Teresa’s Missionaries of Charity in Kolkata, and cross-border charitable mobile camps in Thailand.',
      icon: Heart,
    },
    {
      title: 'Pharmacopoeial Integrity & Purity',
      subtitle: 'Ainsworths (London, UK) Direct Formulation Sourcing',
      description: 'Utilising original, certified remedies prepared according to British Homeopathic Pharmacopoeia standards by Royal Warrant holder Ainsworths.',
      icon: Award,
    },
  ];

  return (
    <section id="about-doctor" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Doctor Portrait & Quick Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-lg overflow-hidden border border-stone-300/80 shadow-md bg-white">
              <img
                src={SHAREPOINT_DOCTOR_IMAGE_URL}
                onError={(e) => {
                  if (e.currentTarget.src !== drMitraPortraitImage) {
                    e.currentTarget.src = drMitraPortraitImage;
                  }
                }}
                alt="Dr. Somenath Mitra, Founder and Senior Consultant Homeopathic Physician"
                referrerPolicy="no-referrer"
                className="w-full aspect-3/4 object-cover"
              />
              <div className="p-6 bg-white border-t border-stone-200">
                <div className="text-xl font-bold text-stone-900">
                  Dr. Somenath Mitra
                </div>
                <div className="text-xs font-semibold text-emerald-900 tracking-wide mt-0.5">
                  BHMS (National Institute of Homeopathy, Kolkata)
                </div>
                <div className="text-xs text-stone-600 mt-2">
                  Founder & Chief Medical Consultant · 30+ Years Clinical Research Experience
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                  <span>Reg. Practitioner #18422</span>
                  <span>Kolkata · Bangkok</span>
                </div>
              </div>
            </div>

            {/* Doctor's Stated Philosophy Quote Box */}
            <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block">
                Clinical Philosophy
              </span>
              <blockquote className="text-base italic font-serif text-stone-800 leading-relaxed font-medium">
                “True medical healing does not consist of subduing symptoms with escalating pharmaceutical doses. It requires deciphering the body’s innate biological signals and administering calibrated micro-stimuli to trigger permanent cellular repair.”
              </blockquote>
              <div className="text-xs text-stone-600 font-medium pt-1 text-right">
                — Dr. Somenath Mitra
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Biography & Institutional Credentials */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
                <span>The Physician Behind The Practice</span>
                <span aria-hidden="true">·</span>
                <span>Established 1998</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Pioneering Evidence-Monitored Homeopathic Science
              </h2>
              <div className="mt-4 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  With more than three decades dedicated to clinical practice and drug discovery research, <strong className="font-semibold text-stone-800">Dr. Somenath Mitra</strong> has treated over 18,500 patients grappling with chronic, autoimmune, and life-threatening medical conditions.
                </p>
                <p>
                  Trained rigorously at the <strong className="font-semibold text-stone-800">National Institute of Homeopathy (NIH)</strong> in Kolkata—Asia’s largest central government teaching hospital for homeopathic medicine—Dr. Mitra spearheaded research bridging classical single-remedy constitutional analysis with modern ultra-dilution physics and nanomedicine.
                </p>
                <p>
                  His clinical expertise was recognized internationally when he was invited by the <strong className="font-semibold text-stone-800">Ministry of Public Health, Royal Government of Thailand</strong>, to serve as a consultant and committee member for the national development and formal integration of homeopathy.
                </p>
              </div>
            </div>

            {/* 4 Landmark Institutional Credentials */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-900">
                Institutional Milestones & Accreditations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-stone-200/90 rounded-md p-4 space-y-2 hover:border-emerald-800/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-emerald-900">
                        <Icon className="w-4 h-4 shrink-0" />
                        <h4 className="text-xs font-bold text-stone-900 truncate">{cred.title}</h4>
                      </div>
                      <div className="text-xs font-semibold text-emerald-950">
                        {cred.subtitle}
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Clinical Practice Hallmarks */}
            <div className="pt-2 border-t border-stone-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                Core Consultation Tenets
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Comprehensive 45-60 minute initial diagnostic intake</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Objective serial blood & radiographic parameter audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Zero mixing of poly-pharmacy cocktails</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Direct patient communication & follow-up tracking</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-800 rounded-md transition-colors shadow-xs cursor-pointer"
              >
                Schedule Appointment With Dr. Mitra
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
