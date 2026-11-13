<?php
/**
 * Footer template for Dr. Mitra's Theme
 *
 * @package DrMitrasTheme
 */
?>
<footer class="bg-stone-950 text-stone-300 border-t border-stone-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <!-- Brand & Overview -->
            <div class="lg:col-span-2 space-y-4">
                <div class="flex items-center gap-1">
                    <span class="font-jashvee text-2xl font-black tracking-[-1px] text-white">Dr. Mitra's</span>
                    <sup class="text-xs text-emerald-400 font-bold">®</sup>
                </div>
                <p class="text-xs text-stone-400 leading-relaxed max-w-sm font-light">
                    Official medical practice of Dr. Somenath Mitra (BHMS, NIH). Pioneering research-backed nano-dilution protocols for oncology palliative support, refractory autoimmune disorders, and chronic pathological illnesses.
                </p>
                <div class="pt-2 text-xs text-stone-400 space-y-1.5">
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                        <span>Formulated with 100% Ainsworths (London, UK) Remedies</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        <span>Practicing with Ethical Care & Objective Diagnostic Audits</span>
                    </div>
                </div>
            </div>

            <!-- Clinical Spectrum -->
            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase tracking-wider text-white">
                    Clinical Spectrum
                </h4>
                <ul class="space-y-2 text-xs text-stone-400">
                    <li><a href="#conditions" class="hover:text-emerald-400 transition-colors">Oncology Palliative Protocols</a></li>
                    <li><a href="#conditions" class="hover:text-emerald-400 transition-colors">Myelodysplastic Syndrome (MDS)</a></li>
                    <li><a href="#conditions" class="hover:text-emerald-400 transition-colors">Psoriasis & Atopic Eczema</a></li>
                    <li><a href="#conditions" class="hover:text-emerald-400 transition-colors">Rheumatoid Arthritis Care</a></li>
                    <li><a href="#conditions" class="hover:text-emerald-400 transition-colors">Severe Bronchial Asthma</a></li>
                    <li><a href="#conditions" class="hover:text-emerald-400 transition-colors">Renal Creatinine Support</a></li>
                </ul>
            </div>

            <!-- Quick Links -->
            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase tracking-wider text-white">
                    Practice & Research
                </h4>
                <ul class="space-y-2 text-xs text-stone-400">
                    <li><a href="#about-doctor" class="hover:text-emerald-400 transition-colors">About Dr. Somenath Mitra</a></li>
                    <li><a href="#research" class="hover:text-emerald-400 transition-colors">Nano-Medicine Physics</a></li>
                    <li><a href="#case-studies" class="hover:text-emerald-400 transition-colors">Documented Case Studies</a></li>
                    <li><a href="#locations" class="hover:text-emerald-400 transition-colors">Kolkata & Bangkok Clinics</a></li>
                    <li><button type="button" onclick="window.openDrMitraBooking()" class="hover:text-emerald-400 transition-colors text-left cursor-pointer">Schedule Consultation</button></li>
                    <li><a href="<?php echo esc_url( admin_url() ); ?>" class="text-emerald-400/90 hover:text-emerald-300 font-medium transition-colors text-left flex items-center gap-1.5"><span>Physician & Staff Portal (Login)</span></a></li>
                </ul>
            </div>

            <!-- Direct Contact Channels -->
            <div class="space-y-3">
                <h4 class="text-xs font-bold uppercase tracking-wider text-white">
                    Contact & Chambers
                </h4>
                <div class="space-y-2.5 text-xs text-stone-400">
                    <div class="flex items-start gap-2">
                        <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <div>
                            <div class="text-white font-medium font-mono tabular-nums">+91 87775 07722</div>
                            <div class="text-[11px] text-stone-500 font-mono tabular-nums">+91 98300 24891</div>
                        </div>
                    </div>
                    <div class="flex items-start gap-2">
                        <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <a href="mailto:consult@drmitras.com" class="hover:text-white transition-colors">consult@drmitras.com</a>
                    </div>
                    <div class="flex items-start gap-2">
                        <svg class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span class="text-[11px] leading-relaxed">
                            ARC Clinic, GD-16, Sector - 3, Salt Lake City, Kolkata - 700106, West Bengal, India
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ethical Medical Notice & Disclaimer -->
        <div class="mt-12 pt-8 border-t border-stone-800/80 space-y-4">
            <div class="text-[11px] text-stone-400 leading-relaxed font-light">
                <strong class="text-stone-300 font-semibold">Important Medical Notice:</strong> The information provided on this website is for educational and clinical awareness purposes and does not constitute independent medical self-prescription. Dr. Somenath Mitra conducts individualized evaluations for each patient. We strictly advise patients never to discontinue or alter ongoing essential prescription medications without the explicit direction of their managing physician.
            </div>

            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
                <div>
                    © <?php echo date( 'Y' ); ?> Dr. Mitra's® Multispeciality Homeopathy Clinic. All rights reserved.
                </div>
                <div class="flex items-center gap-4">
                    <span>National Institute of Homeopathy Alumnus</span>
                    <span aria-hidden="true">·</span>
                    <a href="<?php echo esc_url( admin_url() ); ?>" class="hover:text-emerald-400 transition-colors">Physician Login</a>
                    <span aria-hidden="true">·</span>
                    <a href="#about-doctor" class="hover:text-stone-300 transition-colors">Privacy & Records Ethics</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Interactive Booking Engine Modal Template -->
<?php get_template_part( 'template-parts/booking-modal' ); ?>

<!-- Floating WhatsApp Quick Consultation Assist Pill -->
<aside aria-label="Quick contact" class="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2">
    <a href="https://wa.me/918777507722?text=Hello%20Dr.%20Mitra%27s%20Clinic,%20I%20would%20like%20to%20inquire%20about%20a%20consultation" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all text-xs font-semibold" aria-label="Direct WhatsApp message to clinic">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.838.835 2.791.835 3.18 0 5.767-2.587 5.768-5.766 0-3.182-2.587-5.767-5.768-5.767zm3.385 8.175c-.145.411-.741.777-1.026.827-.275.048-.636.075-1.04-.055-.251-.081-.577-.189-1.002-.372-1.782-.77-2.94-2.58-3.031-.2.091-.12.723-.889.723-1.688 0-.799-.414-1.192-.561-1.344-.147-.152-.321-.19-.427-.19-.107 0-.214.002-.307.007-.099.006-.231.037-.352.167-.122.13-.464.453-.464 1.106s.475 1.284.542 1.372c.067.089.935 1.428 2.266 2.003 1.331.575 1.331.383 1.57.36.239-.023.774-.316.883-.621.109-.305.109-.567.076-.622-.033-.055-.122-.089-.267-.162z"/></svg>
        <span>WhatsApp Clinic Assist</span>
    </a>
</aside>

<?php wp_footer(); ?>
</body>
</html>
