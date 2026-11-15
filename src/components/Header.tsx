import React, { useState } from 'react';
import { Menu, X, PhoneCall, Globe } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';
import { useLanguage } from '../i18n/LanguageContext';
import { Language } from '../i18n/translations';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
}

const LANGUAGE_OPTIONS: { code: Language; label: string; nativeName: string }[] = [
  { code: 'en', label: 'EN', nativeName: 'English' },
  { code: 'th', label: 'ไทย', nativeName: 'ภาษาไทย' },
  { code: 'bn', label: 'বাংলা', nativeName: 'বাংলা' },
  { code: 'hi', label: 'हिन्दी', nativeName: 'हिन्दी' },
];

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.header.navConditions, href: '#conditions' },
    { label: t.header.navDoctor, href: '#about-doctor' },
    { label: t.header.navResearch, href: '#research' },
    { label: t.header.navCaseStudies, href: '#case-studies' },
    { label: t.header.navLocations, href: '#locations' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Top Clinical Announcement Strip */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-emerald-400">{t.header.practiceLabel}</span>
            <span className="hidden sm:inline text-stone-400">·</span>
            <span className="hidden sm:inline text-stone-300">{t.header.alumnusLabel}</span>
            <span className="hidden md:inline text-stone-400">·</span>
            <span className="hidden md:inline text-stone-300">{t.header.clinicsLabel}</span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-stone-300">
            <a
              href={`tel:${CLINIC_CONTACT.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium tabular-nums">{CLINIC_CONTACT.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Top Bar (Strict 3-zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand title wordmark */}
        <a
          href="#"
          className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 flex items-center"
        >
          <span className="font-jashvee text-[27px] sm:text-[30px] font-black tracking-[-1px] text-stone-900">Dr. Mitra's</span>
          <sup className="text-xs text-emerald-700 font-bold ml-0.5">®</sup>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-emerald-800"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            role="group"
            aria-label={t.header.languageLabel}
            className="inline-flex items-center rounded-md border border-stone-200 bg-white p-0.5 shadow-2xs"
          >
            <Globe className="hidden sm:block w-3.5 h-3.5 text-stone-400 ml-1.5 mr-1 shrink-0" aria-hidden="true" />
            {LANGUAGE_OPTIONS.map((opt) => {
              const isActive = language === opt.code;
              return (
                <button
                  key={opt.code}
                  type="button"
                  onClick={() => setLanguage(opt.code)}
                  aria-pressed={isActive}
                  title={opt.nativeName}
                  className={`px-1.5 sm:px-2 py-1 text-[11px] sm:text-xs rounded transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-900 text-white font-semibold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100 font-medium'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-stone-800 hover:text-emerald-900 border-b border-stone-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = `tel:${CLINIC_CONTACT.primaryPhone.replace(/\s+/g, '')}`;
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-emerald-900 rounded-md"
            >
              <PhoneCall className="w-4 h-4" />
              {t.header.mobileCallCta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
