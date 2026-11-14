import React from 'react';
import { MapPin, Clock, Phone, Globe, Navigation, Building2 } from 'lucide-react';
import { CLINIC_LOCATIONS, CLINIC_CONTACT } from '../data/clinicData';
import clinicInteriorImage from '../assets/images/clinic_location_7XO35d.jpg';

const SHAREPOINT_LOCATION_IMAGE_URL =
  'https://nanomedz4u-my.sharepoint.com/:i:/g/personal/nanomedz_nanomedz4u_onmicrosoft_com/IQDeVX9QRgR2R5bL1BR2NFoSAcW1LQHrhVMV6eF0ZeGhWkI?e=7XO35d&download=1';

interface LocationsSectionProps {
  onSelectLocationForBooking: (locationName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onSelectLocationForBooking }) => {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
            <span>Clinical Facilities & Global Access</span>
            <span aria-hidden="true">·</span>
            <span>Kolkata & Southeast Asia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Clinic Centers & International Telehealth
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed font-light">
            Consult Dr. Somenath Mitra in person at our established clinics in Kolkata or connect from anywhere across the globe through our dedicated telemedicine portal with direct international remedy dispatch.
          </p>
        </div>

        {/* 2-Column Split: Clinical Facility Showcase Image + Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Facility Showcase Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-lg overflow-hidden border border-stone-300 shadow-sm bg-white">
              <img
                src={SHAREPOINT_LOCATION_IMAGE_URL}
                onError={(e) => {
                  if (e.currentTarget.src !== clinicInteriorImage) {
                    e.currentTarget.src = clinicInteriorImage;
                  }
                }}
                alt="Dr. Mitra's tranquil clinic interior and holistic consultation suite"
                referrerPolicy="no-referrer"
                className="w-full aspect-4/3 object-cover"
              />
              <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600 space-y-1">
                <div className="font-semibold text-stone-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-800" />
                  <span>Serene, Hygiene-Monitored Consultation Suites</span>
                </div>
                <p>Designed for peaceful diagnostic case-taking, comprehensive physical examinations, and temperature-controlled botanical storage.</p>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-stone-900 text-stone-100 rounded-lg p-6 space-y-3">
              <div className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                Direct Appointment Hotline
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white tabular-nums">
                {CLINIC_CONTACT.primaryPhone}
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Our clinical coordinator is available Monday to Saturday to assist with scheduling, medical records review, and prescription dispatch.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${CLINIC_CONTACT.primaryPhone.replace(/\s+/g, '')}`}
                  className="px-4 py-2 text-xs font-semibold bg-emerald-700 hover:bg-emerald-600 text-white rounded transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Clinic
                </a>
                <a
                  href={CLINIC_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 rounded transition-colors inline-flex items-center gap-1.5"
                >
                  WhatsApp Assist
                </a>
              </div>
            </div>
          </div>

          {/* Location Cards Column */}
          <div className="lg:col-span-7 space-y-4">
            {CLINIC_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="bg-white border border-stone-200 rounded-lg p-6 hover:border-emerald-800/40 transition-colors shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <div>
                    <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">
                      {loc.type} · {loc.city}, {loc.country}
                    </span>
                    <h3 className="text-lg font-bold text-stone-900">
                      {loc.name}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-stone-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-800 block">Address:</strong>
                      <span>{loc.address}</span>
                      <span className="block text-stone-500 mt-0.5">({loc.landmark})</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-800 block">Consultation Timings:</strong>
                      <span>{loc.timings}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap items-center gap-1.5 text-stone-500">
                    <strong className="text-stone-700">Services:</strong>
                    {loc.consultationModes.map((mode, i) => (
                      <span key={i} className="bg-stone-50 px-2 py-0.5 rounded border border-stone-200">
                        {mode}
                      </span>
                    ))}
                  </div>
                  <div className="text-stone-600 font-medium tabular-nums flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
