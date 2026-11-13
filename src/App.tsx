import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ConditionsSection } from './components/ConditionsSection';
import { DoctorProfile } from './components/DoctorProfile';
import { ResearchSection } from './components/ResearchSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { GlobalOutreach } from './components/GlobalOutreach';
import { LocationsSection } from './components/LocationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminPortal } from './components/AdminPortal';
import { WordPressDownloadModal } from './components/WordPressDownloadModal';
import { CLINIC_CONTACT } from './data/clinicData';
import { MessageSquare, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isWpDownloadOpen, setIsWpDownloadOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Check if URL hash is #admin or #login or #portal
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin' || hash === '#login' || hash === '#doctor' || hash === '#portal') {
        setIsAdminOpen(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);

    // Keyboard shortcut: Ctrl + Shift + A (or Cmd + Shift + A) to open admin
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkHash);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOpenBooking = (condition = '', location = '') => {
    setSelectedCondition(condition);
    setSelectedLocation(location);
    setIsBookingOpen(true);
  };

  const handleExploreCases = () => {
    const el = document.getElementById('case-studies');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans-clean flex flex-col selection:bg-emerald-900 selection:text-white">
      {/* Primary Navigation Bar (3-Zone Contract) */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenWordPressDownload={() => setIsWpDownloadOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section with Clinic Overview & Metrics */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreCases={handleExploreCases}
        />

        {/* Specialised Conditions & Protocols Catalog */}
        <ConditionsSection
          onSelectConditionForBooking={(condition) => handleOpenBooking(condition)}
        />

        {/* Doctor Biography & Credentials (Dr. Somenath Mitra) */}
        <DoctorProfile
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Scientific Foundations: Nano-Dilutions & Ainsworths UK Standards */}
        <ResearchSection />

        {/* Documented Clinical Case Studies & Laboratory Metrics */}
        <CaseStudiesSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Global Outreach, Thailand Government Advisory & Humanitarian Relief */}
        <GlobalOutreach />

        {/* Verified Patient Outcomes & Reviews */}
        <TestimonialsSection />

        {/* Clinic Locations: Kolkata Salt Lake, VIP Road & Bangkok */}
        <LocationsSection
          onSelectLocationForBooking={(location) => handleOpenBooking('', location)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Compliant Medical Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenWordPressDownload={() => setIsWpDownloadOpen(true)}
      />

      {/* Interactive Consultation Booking Engine */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedCondition={selectedCondition}
        preselectedLocation={selectedLocation}
      />

      {/* Physician & Chamber Administration Portal */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        userEmail="drsunshine@gmail.com"
      />

      {/* WordPress Theme Package (.ZIP) Download & Installation Modal */}
      <WordPressDownloadModal
        isOpen={isWpDownloadOpen}
        onClose={() => setIsWpDownloadOpen(false)}
      />

      {/* Floating WhatsApp Quick Clinical Assist Pill (Quiet bottom right) */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2">
        <a
          href={CLINIC_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-xs font-semibold"
          aria-label="Direct WhatsApp message to clinic"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>WhatsApp Clinic Assist</span>
        </a>
      </aside>
    </div>
  );
}
