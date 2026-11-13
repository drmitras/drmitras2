<?php
/**
 * Consultation Request Booking Modal
 *
 * @package DrMitrasTheme
 */
?>
<div id="drmitra-booking-modal" class="fixed inset-0 z-50 overflow-y-auto hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Backdrop overlay -->
    <div id="drmitra-modal-backdrop" class="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"></div>

    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-stone-200">
            <!-- Modal Header -->
            <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 px-6 py-5 text-white flex items-center justify-between">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span class="text-[11px] font-mono tracking-wider uppercase text-emerald-300">Direct Physician Chamber</span>
                    </div>
                    <h3 class="text-xl font-bold tracking-tight text-white mt-1" id="modal-title">
                        Book Dr. Mitra's Consultation
                    </h3>
                </div>
                <button type="button" id="drmitra-modal-close" class="text-stone-400 hover:text-white rounded-lg p-1.5 hover:bg-white/10 transition-colors" aria-label="Close dialog">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <!-- Form State Body -->
            <form id="drmitra-booking-form" class="p-6 space-y-4">
                <input type="hidden" name="action" value="drmitras_book_appointment">
                <input type="hidden" name="nonce" id="drmitra-nonce-input" value="">

                <!-- Feedback notification banner -->
                <div id="drmitra-form-notice" class="hidden p-3 rounded-lg text-xs font-medium"></div>

                <!-- Chamber & Clinical Condition -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="booking-chamber" class="block text-xs font-semibold text-stone-700 mb-1">Clinic Chamber / Mode *</label>
                        <select id="booking-chamber" name="chamber" required class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white">
                            <option value="ARC Clinic, Salt Lake Sector 3, Kolkata">ARC Clinic (Salt Lake Sector 3, Kolkata)</option>
                            <option value="VIP Road Chamber, Kolkata">VIP Road Chamber, Kolkata</option>
                            <option value="Bangkok International Consultation Clinic">Bangkok Clinic (International)</option>
                            <option value="Online Video Consultation (Outstation/Global)">Online Video Consultation (Outstation/Global)</option>
                        </select>
                    </div>

                    <div>
                        <label for="booking-condition" class="block text-xs font-semibold text-stone-700 mb-1">Clinical Condition / Concern *</label>
                        <select id="booking-condition" name="condition" required class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white">
                            <option value="Oncology Palliative Support">Oncology Palliative Support</option>
                            <option value="Myelodysplastic Syndrome (MDS)">Myelodysplastic Syndrome (MDS)</option>
                            <option value="Psoriasis & Severe Dermatitis">Psoriasis & Severe Dermatitis</option>
                            <option value="Rheumatoid & Autoimmune Arthritis">Rheumatoid & Autoimmune Arthritis</option>
                            <option value="Chronic Renal Dysfunction (Creatinine Support)">Chronic Renal Dysfunction (Creatinine)</option>
                            <option value="Bronchial Asthma & Pulmonary Allergies">Bronchial Asthma & Allergies</option>
                            <option value="Pediatric Developmental / Recurrent Illness">Pediatric Care</option>
                            <option value="Other Chronic Disease Consultation">Other Chronic Pathology</option>
                        </select>
                    </div>
                </div>

                <!-- Patient Basic Info -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div class="sm:col-span-2">
                        <label for="booking-patient-name" class="block text-xs font-semibold text-stone-700 mb-1">Patient Full Name *</label>
                        <input type="text" id="booking-patient-name" name="patientName" required placeholder="e.g. Ananya Sen" class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700">
                    </div>
                    <div>
                        <label for="booking-age" class="block text-xs font-semibold text-stone-700 mb-1">Age *</label>
                        <input type="number" id="booking-age" name="age" required min="1" max="110" placeholder="e.g. 48" class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700">
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label for="booking-phone" class="block text-xs font-semibold text-stone-700 mb-1">Phone / WhatsApp Number *</label>
                        <input type="tel" id="booking-phone" name="phone" required placeholder="+91 98300 00000" class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-mono">
                    </div>
                    <div>
                        <label for="booking-email" class="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                        <input type="email" id="booking-email" name="email" placeholder="patient@example.com" class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700">
                    </div>
                </div>

                <!-- Date & Slot -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label for="booking-date" class="block text-xs font-semibold text-stone-700 mb-1">Preferred Date *</label>
                        <input type="date" id="booking-date" name="date" required class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 font-mono">
                    </div>
                    <div>
                        <label for="booking-slot" class="block text-xs font-semibold text-stone-700 mb-1">Preferred Time Slot *</label>
                        <select id="booking-slot" name="timeSlot" required class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white">
                            <option value="Morning Session (10:30 AM – 01:30 PM)">Morning Session (10:30 AM – 01:30 PM)</option>
                            <option value="Evening Session (05:30 PM – 08:30 PM)">Evening Session (05:30 PM – 08:30 PM)</option>
                            <option value="Online Slot (Flexible / IST Evening)">Online Video (Flexible / IST Evening)</option>
                        </select>
                    </div>
                </div>

                <!-- Brief Medical History -->
                <div>
                    <label for="booking-summary" class="block text-xs font-semibold text-stone-700 mb-1">Brief Medical History / Diagnosis (Optional)</label>
                    <textarea id="booking-summary" name="caseSummary" rows="2" placeholder="Mention previous diagnosis, key medications, or primary symptoms..." class="w-full text-xs rounded-lg border border-stone-300 px-3 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-emerald-700"></textarea>
                </div>

                <!-- Terms & Disclaimer -->
                <div class="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                    Strict ethical protocol: All consultations are reviewed directly by Dr. Somenath Mitra. Your patient records and diagnostic data are kept strictly confidential.
                </div>

                <!-- Actions -->
                <div class="pt-2 flex items-center justify-end gap-3 border-t border-stone-100">
                    <button type="button" id="drmitra-cancel-btn" class="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors">
                        Cancel
                    </button>
                    <button type="submit" id="drmitra-submit-btn" class="px-5 py-2.5 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer">
                        <span id="drmitra-submit-text">Confirm & Request Appointment</span>
                        <svg id="drmitra-spinner" class="hidden w-4 h-4 animate-spin text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path></svg>
                    </button>
                </div>
            </form>

            <!-- Success State Screen (hidden initially) -->
            <div id="drmitra-booking-success" class="hidden p-8 text-center space-y-4">
                <div class="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                    <span class="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">Consultation Slot Requested</span>
                    <h4 class="text-xl font-bold text-stone-900 mt-1">Appointment Logged Successfully</h4>
                    <p class="text-xs text-stone-600 mt-2 max-w-sm mx-auto">
                        Your consultation has been submitted to Dr. Mitra's clinical desk. Our coordinator will contact you to confirm the exact time and diagnostic paperwork.
                    </p>
                </div>

                <!-- Reference Card -->
                <div class="bg-stone-50 border border-stone-200 rounded-xl p-4 max-w-sm mx-auto text-left">
                    <div class="text-[10px] text-stone-400 font-mono uppercase">Booking Reference Code</div>
                    <div id="drmitra-success-ref" class="text-xl font-black font-mono text-emerald-800 tracking-wider mt-0.5">DM-000000</div>
                    <div class="text-[11px] text-stone-500 mt-2">
                        Helpline: <strong class="text-stone-800 font-mono">+91 87775 07722</strong>
                    </div>
                </div>

                <!-- Direct WhatsApp button with prefilled ref -->
                <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a id="drmitra-whatsapp-confirm" href="https://wa.me/918777507722" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2">
                        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.838.835 2.791.835 3.18 0 5.767-2.587 5.768-5.766 0-3.182-2.587-5.767-5.768-5.767zm3.385 8.175c-.145.411-.741.777-1.026.827-.275.048-.636.075-1.04-.055-.251-.081-.577-.189-1.002-.372-1.782-.77-2.94-2.58-3.031-.2.091-.12.723-.889.723-1.688 0-.799-.414-1.192-.561-1.344-.147-.152-.321-.19-.427-.19-.107 0-.214.002-.307.007-.099.006-.231.037-.352.167-.122.13-.464.453-.464 1.106s.475 1.284.542 1.372c.067.089.935 1.428 2.266 2.003 1.331.575 1.331.383 1.57.36.239-.023.774-.316.883-.621.109-.305.109-.567.076-.622-.033-.055-.122-.089-.267-.162z"/></svg>
                        <span>Send Reports via WhatsApp</span>
                    </a>
                    <button type="button" id="drmitra-success-done" class="w-full sm:w-auto px-4 py-2.5 text-stone-700 hover:text-stone-900 border border-stone-200 rounded-lg text-xs font-semibold hover:bg-stone-50 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
