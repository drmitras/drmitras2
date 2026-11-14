import React, { useState } from 'react';
import { Menu, X, PhoneCall, Calendar } from 'lucide-react';
import { CLINIC_CONTACT } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Conditions & Care', href: '#conditions' },
    { label: 'About Dr. Mitra', href: '#about-doctor' },
    { label: 'Nano-Research', href: '#research' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Clinic Locations', href: '#locations' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      {/* Top Clinical Announcement Strip */}
      <div className="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-emerald-400">Dr. Mitra's® Practice</span>
            <span className="hidden sm:inline text-stone-400">·</span>
            <span className="hidden sm:inline text-stone-300">National Institute of Homeopathy Alumnus</span>
            <span className="hidden md:inline text-stone-400">·</span>
            <span className="hidden md:inline text-stone-300">Kolkata & Bangkok Clinics</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark */}
        <a
          href="#"
          className="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 flex items-center"
        >
          <span className="font-jashvee text-[27px] sm:text-[30px] font-black tracking-[-1px] text-stone-900">Dr. Mitra's</span>
          <sup className="text-xs text-emerald-700 font-bold ml-0.5">®</sup>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
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

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
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
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-emerald-900 rounded-md"
            >
              <Calendar className="w-4 h-4" />
              Schedule Online or In-Clinic Visit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
