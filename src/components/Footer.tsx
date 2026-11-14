import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-extrabold tracking-tight text-white">Dr. Mitra's</span>
              <sup className="text-xs text-emerald-400 font-bold">®</sup>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
              Official medical practice of Dr. Somenath Mitra (BHMS, NIH). Pioneering research-backed nano-dilution protocols for oncology palliative support, refractory autoimmune disorders, and chronic pathological illnesses.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Formulated with 100% Ainsworths (London, UK) Remedies</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Practicing with Ethical Care & Objective Diagnostic Audits</span>
              </div>
            </div>
          </div>

          {/* Clinical Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinical Spectrum
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#conditions" className="hover:text-emerald-400 transition-colors">Oncology Palliative Protocols</a></li>
              <li><a href="#conditions" className="hover:text-emerald-400 transition-colors">Myelodysplastic Syndrome (MDS)</a></li>
              <li><a href="#conditions" className="hover:text-emerald-400 transition-colors">Psoriasis & Atopic Eczema</a></li>
              <li><a href="#conditions" className="hover:text-emerald-400 transition-colors">Rheumatoid Arthritis Care</a></li>
              <li><a href="#conditions" className="hover:text-emerald-400 transition-colors">Severe Bronchial Asthma</a></li>
              <li><a href="#conditions" className="hover:text-emerald-400 transition-colors">Renal Creatinine Support</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Practice & Research
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#about-doctor" className="hover:text-emerald-400 transition-colors">About Dr. Somenath Mitra</a></li>
              <li><a href="#research" className="hover:text-emerald-400 transition-colors">Nano-Medicine Physics</a></li>
              <li><a href="#case-studies" className="hover:text-emerald-400 transition-colors">Documented Case Studies</a></li>
              <li><a href="#locations" className="hover:text-emerald-400 transition-colors">Kolkata & Bangkok Clinics</a></li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  Schedule Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Clinics
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium tabular-nums">{CLINIC_CONTACT.primaryPhone}</div>
                  <div className="text-[11px] text-stone-500 tabular-nums">{CLINIC_CONTACT.altPhone}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <a href="mailto:drmitras4u@gmail.com" className="hover:text-white transition-colors">
                  drmitras4u@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  GD-16, Sector-3, Salt Lake City, Kolkata - 700091
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ethical Medical Notice & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 space-y-4">
          <div className="text-[11px] text-stone-400 leading-relaxed font-light">
            <strong className="text-stone-300 font-semibold">Important Medical Notice:</strong> The information provided on this website is for educational and clinical awareness purposes and does not constitute independent medical self-prescription. Dr. Somenath Mitra conducts individualized evaluations for each patient. We strictly advise patients never to discontinue or alter ongoing essential prescription medications without the explicit direction of their managing physician.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              © {new Date().getFullYear()} Dr. Mitra's® Multispeciality Homeopathy Clinic. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>National Institute of Homeopathy Alumnus</span>
              <span aria-hidden="true">·</span>
              <a href="#about-doctor" className="hover:text-stone-300 transition-colors">Privacy & Records Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
