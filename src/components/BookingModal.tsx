import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, AlertCircle, Upload, Shield, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { CLINIC_CONTACT, CONDITIONS } from '../data/clinicData';
import { BookingFormData } from '../types';
import { saveNewAppointment } from '../services/appointmentStore';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCondition?: string;
  preselectedLocation?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCondition = '',
  preselectedLocation = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    consultationType:
      preselectedLocation.includes('Bangkok') || preselectedLocation.includes('Telehealth')
        ? 'virtual-video'
        : 'clinic-saltlake',
    conditionCategory: preselectedCondition || 'Psoriasis, Eczema & Chronic Dermatoses',
    patientName: '',
    age: '',
    gender: 'Male',
    phone: '',
    email: '',
    city: '',
    preferredDate: '',
    preferredTimeSlot: 'Morning (10:30 AM – 1:30 PM)',
    caseSummary: '',
    uploadedReportsCount: 0,
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedCondition) {
      setFormData((prev) => ({ ...prev, conditionCategory: preselectedCondition }));
    }
    if (preselectedLocation) {
      if (preselectedLocation.includes('Bangkok')) {
        setFormData((prev) => ({ ...prev, consultationType: 'virtual-video' }));
      } else {
        setFormData((prev) => ({ ...prev, consultationType: 'clinic-saltlake' }));
      }
    }
  }, [preselectedCondition, preselectedLocation]);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (step === 1) {
      if (!formData.conditionCategory) {
        setErrorMsg('Please choose or enter your primary medical concern.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.patientName.trim()) {
        setErrorMsg('Please enter the patient’s full legal name.');
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        setErrorMsg('Please provide a valid contact phone number.');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMsg('Please provide a valid email address.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Final submission
      const code = `DM-${Math.floor(100000 + Math.random() * 900000)}`;
      saveNewAppointment(formData, code);
      setConfirmationCode(code);
      setBookingConfirmed(true);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        uploadedReportsCount: prev.uploadedReportsCount + (e.target.files?.length || 0),
      }));
    }
  };

  const resetAndClose = () => {
    setBookingConfirmed(false);
    setStep(1);
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-stone-200">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-200 bg-stone-50">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-900">
              Dr. Mitra's® Official Clinic Portal
            </div>
            <h3 className="text-lg font-bold text-stone-900">
              {bookingConfirmed ? 'Consultation Scheduled' : 'Request Medical Consultation'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded hover:bg-stone-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {bookingConfirmed ? (
            /* Confirmation View */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-bold text-stone-900">
                  Appointment Request Registered
                </h4>
                <p className="text-xs text-stone-600">
                  Booking Reference: <strong className="font-mono text-emerald-950">{confirmationCode}</strong>
                </p>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-left text-xs text-stone-700 space-y-2">
                <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                  <span className="text-stone-500">Patient:</span>
                  <span className="font-semibold text-stone-900">{formData.patientName}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                  <span className="text-stone-500">Clinical Focus:</span>
                  <span className="font-semibold text-stone-900">{formData.conditionCategory}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                  <span className="text-stone-500">Consultation Mode:</span>
                  <span className="font-semibold text-stone-900">
                    {formData.consultationType === 'clinic-saltlake'
                      ? 'In-Person: Salt Lake City Clinic, Kolkata'
                      : 'High-Definition Telehealth Video Consultation'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Time Window:</span>
                  <span className="font-semibold text-stone-900">{formData.preferredTimeSlot}</span>
                </div>
              </div>

              <div className="text-xs text-stone-600 leading-relaxed text-left bg-emerald-50/60 p-3.5 rounded border border-emerald-100">
                <strong className="text-emerald-950 block mb-1">Next Clinical Steps:</strong>
                Our clinical coordinator will contact you via WhatsApp or phone ({formData.phone}) within 4 business hours to confirm your final appointment slot and guide you on presenting previous pathological reports.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/918777507722?text=Hello%20Dr.%20Mitra%27s%20Clinic,%20I%20have%20scheduled%20appointment%20ref%20${confirmationCode}%20for%20${encodeURIComponent(formData.patientName)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-md transition-colors text-center"
                >
                  Confirm Via WhatsApp (+91-8777507722)
                </a>
                <button
                  onClick={resetAndClose}
                  className="py-3 px-5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step consultation booking form */
            <form onSubmit={handleNextStep} className="space-y-5">
              {/* Step indicator breadcrumbs */}
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-200 pb-3">
                <span className={step >= 1 ? 'font-semibold text-emerald-900' : ''}>1. Consultation Care</span>
                <span>→</span>
                <span className={step >= 2 ? 'font-semibold text-emerald-900' : ''}>2. Patient Details</span>
                <span>→</span>
                <span className={step >= 3 ? 'font-semibold text-emerald-900' : ''}>3. Schedule & Reports</span>
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* STEP 1: Consultation Type & Health Condition */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-2">
                      Select Preferred Consultation Setting
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <label
                        className={`p-3 rounded-md border text-left cursor-pointer transition-all ${
                          formData.consultationType === 'clinic-saltlake'
                            ? 'bg-emerald-50/50 border-emerald-900 ring-1 ring-emerald-900/10'
                            : 'bg-white border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value="clinic-saltlake"
                          checked={formData.consultationType === 'clinic-saltlake'}
                          onChange={() => setFormData({ ...formData, consultationType: 'clinic-saltlake' })}
                          className="sr-only"
                        />
                        <div className="text-xs font-bold text-stone-900">Salt Lake Clinic</div>
                        <div className="text-[11px] text-stone-500 mt-0.5">GD-16, Sector 3, Kolkata</div>
                      </label>

                      <label
                        className={`p-3 rounded-md border text-left cursor-pointer transition-all ${
                          formData.consultationType === 'virtual-video'
                            ? 'bg-emerald-50/50 border-emerald-900 ring-1 ring-emerald-900/10'
                            : 'bg-white border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultationType"
                          value="virtual-video"
                          checked={formData.consultationType === 'virtual-video'}
                          onChange={() => setFormData({ ...formData, consultationType: 'virtual-video' })}
                          className="sr-only"
                        />
                        <div className="text-xs font-bold text-stone-900">Video Telehealth</div>
                        <div className="text-[11px] text-stone-500 mt-0.5">Global / Bangkok</div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Primary Medical Concern / Condition
                    </label>
                    <select
                      value={formData.conditionCategory}
                      onChange={(e) => setFormData({ ...formData, conditionCategory: e.target.value })}
                      className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900 bg-white"
                    >
                      {CONDITIONS.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="General Chronic Ailment Consultation">General Chronic Ailment Consultation</option>
                      <option value="Second Opinion on Oncology Protocol">Second Opinion on Oncology Protocol</option>
                      <option value="Other Condition">Other Condition / Undiagnosed Symptoms</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Brief Symptoms or Duration of Illness
                    </label>
                    <textarea
                      rows={3}
                      value={formData.caseSummary}
                      onChange={(e) => setFormData({ ...formData, caseSummary: e.target.value })}
                      placeholder="e.g. 5-year history of plaque psoriasis, worsening on limbs. Currently trying to discontinue steroid creams..."
                      className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900"
                    />
                  </div>
                </div>
              )}

              {/* STEP 2: Patient Demographics & Contact */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Patient Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      placeholder="e.g. S. K. Bose"
                      className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Age (Years)
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="110"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 45"
                        className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900 bg-white"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other / Pediatric</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Phone Number (with WhatsApp capability) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900 tabular-nums"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="patient@example.com"
                        className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        City / Country
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Kolkata / Bangkok"
                        className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Slot selection & Report uploads */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTimeSlot}
                        onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                        className="w-full text-xs p-2.5 rounded border border-stone-300 focus:outline-none focus:border-emerald-900 bg-white"
                      >
                        <option value="Morning (10:30 AM – 1:30 PM)">Morning (10:30 AM – 1:30 PM)</option>
                        <option value="Evening (5:30 PM – 8:30 PM)">Evening (5:30 PM – 8:30 PM)</option>
                        <option value="Virtual Video Window (Flexible)">Virtual Video Window (Flexible)</option>
                      </select>
                    </div>
                  </div>

                  {/* Diagnostic Report Upload Simulator */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-800 mb-1.5">
                      Upload Relevant Diagnostic Reports (Optional)
                    </label>
                    <div className="border border-dashed border-stone-300 rounded-lg p-4 text-center hover:bg-stone-50 transition-colors">
                      <Upload className="w-5 h-5 text-stone-400 mx-auto mb-1.5" />
                      <label className="cursor-pointer text-xs font-semibold text-emerald-900 hover:text-emerald-700">
                        <span>Click to attach lab reports / imaging PDFs</span>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="sr-only"
                        />
                      </label>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Supported: PDF, JPG, PNG (Max 25MB). Confidential medical records.
                      </p>
                    </div>
                    {formData.uploadedReportsCount > 0 && (
                      <div className="mt-2 text-xs text-emerald-900 font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{formData.uploadedReportsCount} report file(s) queued for clinical intake.</span>
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs text-stone-600 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                    <span>Your medical records are strictly protected under patient confidentiality guidelines and reviewed only by Dr. Somenath Mitra.</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setErrorMsg('');
                      setStep((step - 1) as 1 | 2);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-stone-700 hover:text-stone-900"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={resetAndClose}
                    className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                )}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-800 rounded-md transition-colors cursor-pointer"
                >
                  {step === 3 ? 'Confirm Appointment Request' : 'Proceed to Next Step'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
