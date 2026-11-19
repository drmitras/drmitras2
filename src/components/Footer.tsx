import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

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
              {t.footer.overview}
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.footer.ainsworthsNote}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.footer.ethicsNote}</span>
              </div>
            </div>
            <div className="pt-2 flex items-center gap-2.5" aria-label="Social media profiles">
              <a
                href="https://www.facebook.com/drmitras"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-9 h-9 rounded-md bg-stone-900 border border-stone-800 hover:border-emerald-500/60 hover:bg-stone-800 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.5l.375-3H13.5V8.625c0-.867.24-1.458 1.484-1.458H16.5V4.492A20.34 20.34 0 0 0 14.175 4.37c-2.3 0-3.875 1.404-3.875 3.982V10.5H7.75v3h2.55V21h3.2Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/feed/foryou/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-9 h-9 rounded-md bg-stone-900 border border-stone-800 hover:border-emerald-500/60 hover:bg-stone-800 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@psoriasisheal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="w-9 h-9 rounded-md bg-stone-900 border border-stone-800 hover:border-emerald-500/60 hover:bg-stone-800 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.12V8.88L15.4 12 10 15.12Z" />
                </svg>
              </a>
              <a
                href="https://x.com/drmitras"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="w-9 h-9 rounded-md bg-stone-900 border border-stone-800 hover:border-emerald-500/60 hover:bg-stone-800 text-stone-300 hover:text-emerald-400 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Clinical Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.spectrumHeading}
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
              {t.footer.researchHeading}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#about-doctor" className="hover:text-emerald-400 transition-colors">{t.header.navDoctor}</a></li>
              <li><a href="#research" className="hover:text-emerald-400 transition-colors">{t.header.navResearch}</a></li>
              <li><a href="#case-studies" className="hover:text-emerald-400 transition-colors">{t.header.navCaseStudies}</a></li>
              <li><a href="#locations" className="hover:text-emerald-400 transition-colors">{t.header.clinicsLabel}</a></li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {t.footer.scheduleLink}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium tabular-nums">{CLINIC_CONTACT.primaryPhone}</div>
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
            <strong className="text-stone-300 font-semibold">{t.footer.noticePrefix}</strong> {t.footer.noticeBody}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              © {new Date().getFullYear()} {t.footer.rightsReserved}
            </div>
            <div className="flex items-center gap-4">
              <span>{t.header.alumnusLabel}</span>
              <span aria-hidden="true">·</span>
              <a href="#about-doctor" className="hover:text-stone-300 transition-colors">{t.footer.privacyLink}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
