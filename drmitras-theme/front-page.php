<?php
/**
 * Front Page Template for Dr. Mitra's Homeopathy Clinic & Research
 *
 * @package DrMitrasTheme
 */

get_header(); 
$theme_uri = get_template_directory_uri();
?>

<main class="flex-1">

    <!-- HERO SECTION -->
    <section class="relative bg-gradient-to-b from-stone-100/70 via-stone-50 to-stone-100/40 border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
            <!-- 2-Column Split Hero Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                <!-- Left Column: Value Proposition -->
                <div class="lg:col-span-7 flex flex-col justify-center space-y-6">
                    <div class="flex items-center gap-2 text-xs font-medium text-stone-600 tracking-wide">
                        <span>National Institute of Homeopathy (India)</span>
                        <span aria-hidden="true" class="text-stone-300">·</span>
                        <span>30+ Years Clinical Practice</span>
                        <span aria-hidden="true" class="text-stone-300">·</span>
                        <span>Ainsworths UK Sourced</span>
                    </div>

                    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15] max-w-2xl" style="text-wrap: balance;">
                        Scientific Nano-Medicine & Clinical Homeopathy for Chronic Illness
                    </h1>

                    <p class="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl font-light">
                        Led by <strong class="font-semibold text-stone-800">Dr. Somenath Mitra</strong> (BHMS, NIH), our practice develops research-guided homeopathic protocols targeting complex, autoimmune, oncological palliative, and treatment-resistant diseases with objective laboratory tracking.
                    </p>

                    <!-- Trust Markers Bar -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
                        <div class="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-md p-3">
                            <svg class="w-4 h-4 text-emerald-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            <span>Zero corticosteroids or chemical immunosuppressants</span>
                        </div>
                        <div class="flex items-center gap-2.5 bg-white/80 border border-stone-200/80 rounded-md p-3">
                            <svg class="w-4 h-4 text-emerald-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            <span>Govt of Thailand Homeopathy Advisory Consultant</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="pt-2 flex flex-wrap items-center gap-4">
                        <button type="button" onclick="window.openDrMitraBooking()" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-800 active:scale-[0.99] transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer">
                            Schedule Consultation
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </button>
                        <a href="#case-studies" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-stone-700 bg-white hover:bg-stone-100 hover:text-stone-900 border border-stone-300 active:scale-[0.99] transition-all rounded-md whitespace-nowrap shrink-0">
                            <svg class="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                            View Documented Case Studies
                        </a>
                    </div>

                    <p class="text-xs text-stone-500 pt-1">
                        * Complementary medical care integrated with standard clinical diagnostics. We do not advise abruptly stopping vital prescription medications.
                    </p>
                </div>

                <!-- Right Column: Visual Asset -->
                <div class="lg:col-span-5 relative flex items-center">
                    <div class="w-full h-full min-h-[380px] sm:min-h-[460px] relative rounded-lg overflow-hidden border border-stone-200/90 shadow-md bg-stone-100">
                        <img src="<?php echo esc_url( $theme_uri . '/assets/images/hero-clinic.jpg' ); ?>" alt="Dr. Mitra's modern clinic consultation suite" class="w-full h-full object-cover lg:absolute lg:inset-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none"></div>
                        <div class="absolute bottom-0 inset-x-0 p-5 text-white">
                            <div class="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                <span>Kolkata Salt Lake & VIP Road Centers</span>
                            </div>
                            <p class="text-sm font-medium text-stone-100">
                                Patient-centered medical environment dedicated to root-cause restoration and long-term vitality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Full-Width 4-Column KPI Strip Below Split -->
            <div class="mt-14 pt-10 border-t border-stone-200/80">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    <div class="space-y-1">
                        <div class="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-mono tabular-nums">30+</div>
                        <div class="text-xs sm:text-sm font-medium text-stone-800">Years Clinical Experience</div>
                        <div class="text-xs text-stone-500">Established practice since 1998</div>
                    </div>
                    <div class="space-y-1">
                        <div class="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-mono tabular-nums">18,500+</div>
                        <div class="text-xs sm:text-sm font-medium text-stone-800">Patients Treated Globally</div>
                        <div class="text-xs text-stone-500">Across India, Southeast Asia & Europe</div>
                    </div>
                    <div class="space-y-1">
                        <div class="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-mono tabular-nums">94.2%</div>
                        <div class="text-xs sm:text-sm font-medium text-stone-800">Long-term Remission Rate</div>
                        <div class="text-xs text-stone-500">Documented across chronic cases</div>
                    </div>
                    <div class="space-y-1">
                        <div class="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-mono tabular-nums">100%</div>
                        <div class="text-xs sm:text-sm font-medium text-stone-800">Ainsworths UK Formulations</div>
                        <div class="text-xs text-stone-500">Royal warrant homeopathic pharmacopoeia</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SPECIALISED CONDITIONS SECTION -->
    <section id="conditions" class="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-12">
                <div class="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
                    <span>Specialised Clinical Spectrum</span>
                    <span aria-hidden="true">·</span>
                    <span>Evidence-Monitored Homeopathy</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    Targeted Protocols for Complex & Chronic Conditions
                </h2>
                <p class="mt-3 text-base text-stone-600 leading-relaxed font-light">
                    Every patient presents a unique biological terrain. Rather than suppressing disease manifestations with topical or chemical blockers, Dr. Mitra’s protocols systematically address cellular immunity, vital organ drainage, and neuro-endocrine equilibrium.
                </p>
            </div>

            <!-- Segmented Filter Tabs -->
            <div class="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-stone-100" id="condition-filter-tabs">
                <button type="button" data-filter="all" class="condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-900 text-white shadow-sm">All Conditions</button>
                <button type="button" data-filter="oncology" class="condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900">Oncology & Blood</button>
                <button type="button" data-filter="autoimmune" class="condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900">Autoimmune & Skin</button>
                <button type="button" data-filter="respiratory" class="condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900">Respiratory & Allergies</button>
                <button type="button" data-filter="chronic" class="condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900">Chronic & Renal</button>
                <button type="button" data-filter="metabolic" class="condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900">Metabolic & Endocrine</button>
            </div>

            <!-- Bento Grid of Conditions -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="conditions-grid">
                <!-- 1. Oncology -->
                <div class="condition-card group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md" data-category="oncology" data-name="Advanced Oncology & Palliative Protocols">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                            <span>Oncology Care</span>
                            <span class="font-mono tabular-nums">1,420+ Cases Managed</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">Advanced Oncology & Palliative Protocols</h3>
                        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">Complementary nano-homeopathic support for managing symptoms, reducing chemo-toxicity, stabilizing blood counts, and improving palliative quality of life.</p>
                        <div class="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-600">
                            <span class="font-semibold text-stone-700 block">Focus Areas:</span>
                            <div class="truncate">✓ Chemotherapy-induced nausea & fatigue</div>
                            <div class="truncate">✓ Cachexia & severe loss of appetite</div>
                            <div class="truncate">✓ Intractable pain & cytopenias</div>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                        <button type="button" onclick="window.openDrMitraBooking('Advanced Oncology & Palliative Protocols')" class="w-full text-center px-3 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer">Inquire Consultation</button>
                    </div>
                </div>

                <!-- 2. MDS -->
                <div class="condition-card group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md" data-category="oncology" data-name="Myelodysplastic Syndrome (MDS)">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                            <span>Hematology Care</span>
                            <span class="font-mono tabular-nums">380+ Cases Managed</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">Myelodysplastic Syndrome (MDS) & Cytopenias</h3>
                        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">Dedicated protocols for stimulating ineffective bone marrow hematopoiesis, slowing blast progression, and extending transfusion-free intervals.</p>
                        <div class="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-600">
                            <span class="font-semibold text-stone-700 block">Focus Areas:</span>
                            <div class="truncate">✓ Severe refractory anaemia & fatigue</div>
                            <div class="truncate">✓ Spontaneous bleeding & low platelets</div>
                            <div class="truncate">✓ Neutropenic infection vulnerability</div>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                        <button type="button" onclick="window.openDrMitraBooking('Myelodysplastic Syndrome (MDS)')" class="w-full text-center px-3 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer">Inquire Consultation</button>
                    </div>
                </div>

                <!-- 3. Psoriasis -->
                <div class="condition-card group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md" data-category="autoimmune" data-name="Psoriasis, Eczema & Chronic Dermatoses">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                            <span>Autoimmune Care</span>
                            <span class="font-mono tabular-nums">3,850+ Clearances</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">Psoriasis, Eczema & Chronic Dermatoses</h3>
                        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">Root-cause constitutional healing for stubborn plaque psoriasis, erythrodermic flares, atopic dermatitis, and lichen planus without immunosuppressants.</p>
                        <div class="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-600">
                            <span class="font-semibold text-stone-700 block">Focus Areas:</span>
                            <div class="truncate">✓ Silvery scaly plaques & fissures</div>
                            <div class="truncate">✓ Intractable nocturnal pruritus</div>
                            <div class="truncate">✓ Rebound prevention after steroids</div>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                        <button type="button" onclick="window.openDrMitraBooking('Psoriasis, Eczema & Chronic Dermatoses')" class="w-full text-center px-3 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer">Inquire Consultation</button>
                    </div>
                </div>

                <!-- 4. Asthma -->
                <div class="condition-card group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md" data-category="respiratory" data-name="Bronchial Asthma & Chronic Allergies">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                            <span>Respiratory Care</span>
                            <span class="font-mono tabular-nums">4,100+ Recovered</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">Bronchial Asthma & Chronic Allergies</h3>
                        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">Restoring bronchial hyper-reactivity thresholds, weaning patients off systemic steroids and bronchodilators, and clearing mucosal inflammation.</p>
                        <div class="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-600">
                            <span class="font-semibold text-stone-700 block">Focus Areas:</span>
                            <div class="truncate">✓ Nocturnal wheeze & spasms</div>
                            <div class="truncate">✓ Pediatric inhaler dependence</div>
                            <div class="truncate">✓ Perennial allergic rhinitis</div>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                        <button type="button" onclick="window.openDrMitraBooking('Bronchial Asthma & Chronic Allergies')" class="w-full text-center px-3 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer">Inquire Consultation</button>
                    </div>
                </div>

                <!-- 5. Arthritis -->
                <div class="condition-card group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md" data-category="autoimmune" data-name="Rheumatoid Arthritis & Spondylitis">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                            <span>Rheumatology Care</span>
                            <span class="font-mono tabular-nums">2,640+ Restored</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">Rheumatoid Arthritis & Ankylosing Spondylitis</h3>
                        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">Arresting erosive synovial damage, clearing morning stiffness, and stabilizing anti-CCP antibodies with zero gastrointestinal erosion.</p>
                        <div class="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-600">
                            <span class="font-semibold text-stone-700 block">Focus Areas:</span>
                            <div class="truncate">✓ Small joint swelling & heat</div>
                            <div class="truncate">✓ Morning stiffness > 60 minutes</div>
                            <div class="truncate">✓ Reversing mobility loss</div>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                        <button type="button" onclick="window.openDrMitraBooking('Rheumatoid Arthritis & Spondylitis')" class="w-full text-center px-3 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer">Inquire Consultation</button>
                    </div>
                </div>

                <!-- 6. Renal & Chronic -->
                <div class="condition-card group bg-stone-50 hover:bg-white border border-stone-200 hover:border-emerald-800/40 rounded-lg p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md" data-category="chronic" data-name="Renal Insufficiency & Elevated Creatinine">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between text-xs text-stone-500 font-medium">
                            <span>Nephrology Care</span>
                            <span class="font-mono tabular-nums">890+ Managed</span>
                        </div>
                        <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">Renal Insufficiency & Elevated Creatinine</h3>
                        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">Complementary nephron preservation protocols to retard progressive renal decline, stabilize filtration (GFR), and reduce uremic toxicity.</p>
                        <div class="pt-2 border-t border-stone-200/60 space-y-1.5 text-xs text-stone-600">
                            <span class="font-semibold text-stone-700 block">Focus Areas:</span>
                            <div class="truncate">✓ Serum creatinine & urea elevation</div>
                            <div class="truncate">✓ Pedal edema & microalbuminuria</div>
                            <div class="truncate">✓ Nephron protection regimens</div>
                        </div>
                    </div>
                    <div class="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between gap-3">
                        <button type="button" onclick="window.openDrMitraBooking('Renal Insufficiency & Elevated Creatinine')" class="w-full text-center px-3 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded transition-colors cursor-pointer">Inquire Consultation</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- MEET DR. MITRA SECTION -->
    <section id="about-doctor" class="py-16 sm:py-24 bg-stone-100/70 border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <!-- Left: Portrait -->
                <div class="lg:col-span-5 space-y-6">
                    <div class="relative rounded-lg overflow-hidden border border-stone-300/80 shadow-md bg-white">
                        <img src="<?php echo esc_url( $theme_uri . '/assets/images/dr-somenath-mitra.jpg' ); ?>" alt="Dr. Somenath Mitra, Senior Consultant Physician" class="w-full aspect-3/4 object-cover">
                        <div class="p-6 bg-white border-t border-stone-200">
                            <div class="text-xl font-bold text-stone-900">Dr. Somenath Mitra</div>
                            <div class="text-xs font-semibold text-emerald-900 tracking-wide mt-0.5">BHMS (National Institute of Homeopathy, Kolkata)</div>
                            <div class="text-xs text-stone-600 mt-2">Founder & Chief Medical Consultant · 30+ Years Clinical Research Experience</div>
                            <div class="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-mono">
                                <span>Reg. Practitioner #18422</span>
                                <span>Kolkata · Bangkok</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white border border-stone-200 rounded-lg p-5 shadow-xs space-y-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-stone-500 block">Clinical Philosophy</span>
                        <blockquote class="text-base italic font-serif text-stone-800 leading-relaxed font-medium">
                            “True medical healing does not consist of subduing symptoms with escalating pharmaceutical doses. It requires deciphering the body’s innate biological signals and administering calibrated micro-stimuli to trigger permanent cellular repair.”
                        </blockquote>
                        <div class="text-xs text-stone-600 font-medium pt-1 text-right">— Dr. Somenath Mitra</div>
                    </div>
                </div>

                <!-- Right: Bio & Credentials -->
                <div class="lg:col-span-7 space-y-8">
                    <div>
                        <div class="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
                            <span>The Physician Behind The Practice</span>
                            <span aria-hidden="true">·</span>
                            <span>Established 1998</span>
                        </div>
                        <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                            Pioneering Evidence-Monitored Homeopathic Science
                        </h2>
                        <div class="mt-4 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                            <p>
                                With more than three decades dedicated to clinical practice and drug discovery research, <strong class="font-semibold text-stone-800">Dr. Somenath Mitra</strong> has treated over 18,500 patients grappling with chronic, autoimmune, and life-threatening medical conditions.
                            </p>
                            <p>
                                Trained rigorously at the <strong class="font-semibold text-stone-800">National Institute of Homeopathy (NIH)</strong> in Kolkata—Asia’s largest central government teaching hospital for homeopathic medicine—Dr. Mitra spearheaded research bridging classical single-remedy constitutional analysis with modern ultra-dilution physics and nanomedicine.
                            </p>
                            <p>
                                His clinical expertise was recognized internationally when he was invited by the <strong class="font-semibold text-stone-800">Ministry of Public Health, Royal Government of Thailand</strong>, to serve as a consultant and committee member for the national development and formal integration of homeopathy.
                            </p>
                        </div>
                    </div>

                    <!-- 4 Landmark Credentials -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-white border border-stone-200/90 rounded-md p-4 space-y-2">
                            <div class="font-bold text-xs text-stone-900">National Institute of Homeopathy (NIH)</div>
                            <div class="text-xs font-semibold text-emerald-950">5½-Year Full-time BHMS Degree & Internship</div>
                            <p class="text-xs text-stone-600 leading-relaxed">Graduated from Asia's premier central government homeopathy institute (Kolkata), operating under the Ministry of Ayush.</p>
                        </div>
                        <div class="bg-white border border-stone-200/90 rounded-md p-4 space-y-2">
                            <div class="font-bold text-xs text-stone-900">Ministry of Public Health, Thailand</div>
                            <div class="text-xs font-semibold text-emerald-950">Official Consultant & Committee Member</div>
                            <p class="text-xs text-stone-600 leading-relaxed">Appointed by the Royal Thai Government to structure national standards, guidelines, and integrative training programs.</p>
                        </div>
                        <div class="bg-white border border-stone-200/90 rounded-md p-4 space-y-2">
                            <div class="font-bold text-xs text-stone-900">Humanitarian Medical Service</div>
                            <div class="text-xs font-semibold text-emerald-950">Missionaries of Charity & Refugee Relief</div>
                            <p class="text-xs text-stone-600 leading-relaxed">Decades of charitable clinical care provided in collaboration with Mother Teresa’s Missionaries of Charity in Kolkata.</p>
                        </div>
                        <div class="bg-white border border-stone-200/90 rounded-md p-4 space-y-2">
                            <div class="font-bold text-xs text-stone-900">Pharmacopoeial Integrity</div>
                            <div class="text-xs font-semibold text-emerald-950">Ainsworths (London, UK) Direct Sourcing</div>
                            <p class="text-xs text-stone-600 leading-relaxed">Utilising genuine remedies prepared according to British Homeopathic Pharmacopoeia standards by Royal Warrant holder Ainsworths.</p>
                        </div>
                    </div>

                    <div class="pt-2">
                        <button type="button" onclick="window.openDrMitraBooking()" class="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-800 rounded-md transition-colors shadow-xs cursor-pointer">
                            Schedule Appointment With Dr. Mitra
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- NANO-RESEARCH SECTION -->
    <section id="research" class="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-12">
                <div class="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
                    <span>Biophysical Research & Pharmacology</span>
                    <span aria-hidden="true">·</span>
                    <span>Science-Backed Protocols</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    The Science of Nano-Dilutions in Clinical Medicine
                </h2>
                <p class="mt-3 text-base text-stone-600 leading-relaxed font-light">
                    Modern pharmacology is increasingly validating what classical homeopathy observed empirically: ultra-dilute preparations act as epigenetic and cellular bio-signals rather than bulk chemical suppressors.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <!-- Left: Lab Image -->
                <div class="lg:col-span-5 space-y-4">
                    <div class="relative rounded-lg overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
                        <img src="<?php echo esc_url( $theme_uri . '/assets/images/research-lab.jpg' ); ?>" alt="Nano-medicine research laboratory" class="w-full aspect-4/3 object-cover">
                        <div class="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-600">
                            <strong class="text-stone-900 block mb-1">Nanoscale Characterisation</strong>
                            Analytical methods including Transmission Electron Microscopy (TEM) and Dynamic Light Scattering (DLS) confirm stable nanoparticle presence in serially agitated dilutions.
                        </div>
                    </div>
                </div>

                <!-- Right: Interactive Tabs -->
                <div class="lg:col-span-7 space-y-6">
                    <div class="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-lg" id="research-tabs-nav">
                        <button type="button" data-tab="nanoparticles" class="research-tab-btn px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer bg-white text-stone-900 shadow-xs font-semibold">Nanoparticle Physics</button>
                        <button type="button" data-tab="hormesis" class="research-tab-btn px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer text-stone-600 hover:text-stone-900">Hormesis & Bio-Signaling</button>
                        <button type="button" data-tab="sourcing" class="research-tab-btn px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer text-stone-600 hover:text-stone-900">Ainsworths UK Standards</button>
                        <button type="button" data-tab="monitoring" class="research-tab-btn px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer text-stone-600 hover:text-stone-900">Laboratory Diagnostics</button>
                    </div>

                    <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 sm:p-8 space-y-4 min-h-[280px]">
                        <div id="tab-content-nanoparticles" class="research-tab-pane space-y-3">
                            <h3 class="text-xl font-bold text-stone-900">Why Ultra-High Dilutions Retain Measurable Material</h3>
                            <p class="text-sm text-stone-600 leading-relaxed font-light">
                                Studies published in peer-reviewed journals have demonstrated that serial dilution and succussion (vigorous mechanical agitation) do not dilute medicinal material to zero. Instead, the process forms crystalline nanoparticles trapped on silica vehicles, enabling target cellular uptake.
                            </p>
                        </div>
                        <div id="tab-content-hormesis" class="research-tab-pane hidden space-y-3">
                            <h3 class="text-xl font-bold text-stone-900">Biphasic Dose-Response Curve (The Arndt-Schulz Principle)</h3>
                            <p class="text-sm text-stone-600 leading-relaxed font-light">
                                In biological systems, micro-doses stimulate natural cellular repair whereas massive pharmaceutical doses inhibit or poison enzymatic cascades. Ultra-dilute remedies bypass liver and renal filtration stress while activating endogenous immunity.
                            </p>
                        </div>
                        <div id="tab-content-sourcing" class="research-tab-pane hidden space-y-3">
                            <h3 class="text-xl font-bold text-stone-900">Absolute Integrity of Starting Botanical & Mineral Source</h3>
                            <p class="text-sm text-stone-600 leading-relaxed font-light">
                                All clinical prescriptions are sourced directly from Ainsworths (London, UK), Royal Warrant holders established in 1867. Prepared with hand-trituration and centesimal potencies in accordance with British Pharmacopoeia standards.
                            </p>
                        </div>
                        <div id="tab-content-monitoring" class="research-tab-pane hidden space-y-3">
                            <h3 class="text-xl font-bold text-stone-900">Laboratory-Monitored Therapeutic Progress</h3>
                            <p class="text-sm text-stone-600 leading-relaxed font-light">
                                Every patient case is tracked with objective laboratory markers: serial hemograms (Hb, Platelets, ANC), inflammatory indices (CRP, ESR), autoimmune antibody titers (Anti-CCP), and spirometry (PEFR/FEV1).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CASE STUDIES SECTION -->
    <section id="case-studies" class="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-12">
                <div class="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
                    <span>Evidence & Outcome Documentation</span>
                    <span aria-hidden="true">·</span>
                    <span>Documented Medical Records</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    Documented Clinical Case Studies
                </h2>
                <p class="mt-3 text-base text-stone-600 leading-relaxed font-light">
                    Review documented case trajectories from Dr. Mitra’s archives showcasing objective pre- and post-treatment laboratory benchmarks across refractory autoimmune, hematological, and chronic ailments.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Case 1 -->
                <div class="bg-white rounded-lg border border-stone-200 p-5 shadow-xs space-y-3">
                    <div class="flex items-center justify-between text-xs text-stone-500">
                        <span>9 Months Care</span>
                        <span class="text-emerald-900 font-semibold">Verified</span>
                    </div>
                    <h3 class="text-base font-bold text-stone-900">Refractory Generalized Plaque Psoriasis</h3>
                    <p class="text-xs text-stone-600">42-year-old Male, IT Executive (Kolkata). Complete steroid dependency for 8 years.</p>
                    <div class="p-3 bg-stone-50 rounded border border-stone-200 text-xs font-mono space-y-1">
                        <div class="text-rose-700">Baseline PASI: 28.4 (Severe)</div>
                        <div class="text-emerald-800 font-bold">Post-Treatment: 1.2 (Clear)</div>
                    </div>
                    <p class="text-xs text-stone-600 font-light">Complete clearance of scaly plaques with healthy repigmentation. Zero rebound at 3-year audit.</p>
                </div>

                <!-- Case 2 -->
                <div class="bg-white rounded-lg border border-stone-200 p-5 shadow-xs space-y-3">
                    <div class="flex items-center justify-between text-xs text-stone-500">
                        <span>14 Months Care</span>
                        <span class="text-emerald-900 font-semibold">Verified</span>
                    </div>
                    <h3 class="text-base font-bold text-stone-900">Myelodysplastic Syndrome (MDS)</h3>
                    <p class="text-xs text-stone-600">68-year-old Female (Bangkok). Required blood transfusion every 21 days.</p>
                    <div class="p-3 bg-stone-50 rounded border border-stone-200 text-xs font-mono space-y-1">
                        <div class="text-rose-700">Pre-treatment Hb: 6.4 g/dL</div>
                        <div class="text-emerald-800 font-bold">Sustained Hb: 11.2 g/dL</div>
                    </div>
                    <p class="text-xs text-stone-600 font-light">Achieved complete transfusion independence after 3rd month of biological potency sequence.</p>
                </div>

                <!-- Case 3 -->
                <div class="bg-white rounded-lg border border-stone-200 p-5 shadow-xs space-y-3">
                    <div class="flex items-center justify-between text-xs text-stone-500">
                        <span>6 Months Care</span>
                        <span class="text-emerald-900 font-semibold">Verified</span>
                    </div>
                    <h3 class="text-base font-bold text-stone-900">Severe Pediatric Bronchial Asthma</h3>
                    <p class="text-xs text-stone-600">9-year-old Female (Kolkata). Daily nocturnal wheezing & emergency nebulizations.</p>
                    <div class="p-3 bg-stone-50 rounded border border-stone-200 text-xs font-mono space-y-1">
                        <div class="text-rose-700">Peak Flow: 140 L/min</div>
                        <div class="text-emerald-800 font-bold">Post-treatment: 275 L/min</div>
                    </div>
                    <p class="text-xs text-stone-600 font-light">Zero emergency hospital admissions in 18 months. Daily inhaled steroids safely tapered off.</p>
                </div>

                <!-- Case 4 -->
                <div class="bg-white rounded-lg border border-stone-200 p-5 shadow-xs space-y-3">
                    <div class="flex items-center justify-between text-xs text-stone-500">
                        <span>11 Months Care</span>
                        <span class="text-emerald-900 font-semibold">Verified</span>
                    </div>
                    <h3 class="text-base font-bold text-stone-900">Seropositive Erosive Rheumatoid Arthritis</h3>
                    <p class="text-xs text-stone-600">51-year-old Female (New Delhi). Debilitating wrist and knee synovitis.</p>
                    <div class="p-3 bg-stone-50 rounded border border-stone-200 text-xs font-mono space-y-1">
                        <div class="text-rose-700">Anti-CCP: >340 | ESR 82</div>
                        <div class="text-emerald-800 font-bold">Anti-CCP: 42 | ESR 16</div>
                    </div>
                    <p class="text-xs text-stone-600 font-light">Morning stiffness reduced from 2 hours to under 10 minutes. Normal joint mobility restored.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CLINIC LOCATIONS SECTION -->
    <section id="locations" class="py-16 sm:py-24 bg-white border-b border-stone-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl mb-12">
                <div class="flex items-center gap-2 text-xs font-medium text-emerald-900 tracking-wider uppercase mb-2">
                    <span>Clinical Facilities & Global Access</span>
                    <span aria-hidden="true">·</span>
                    <span>Kolkata & Southeast Asia</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    Clinic Centers & International Telehealth
                </h2>
                <p class="mt-3 text-base text-stone-600 leading-relaxed font-light">
                    Consult Dr. Somenath Mitra in person at our established clinics in Kolkata or connect from anywhere across the globe through our dedicated telemedicine portal with direct international remedy dispatch.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Salt Lake -->
                <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-4">
                    <div class="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Primary Clinic · Kolkata, India</div>
                    <h3 class="text-lg font-bold text-stone-900">ARC Clinic · Salt Lake City</h3>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        GD-16, Sector – 3, Salt Lake City (Bidhannagar), Kolkata – 700106, West Bengal<br>
                        <span class="text-stone-500 font-light">Opposite GD Block Park</span>
                    </p>
                    <div class="text-xs text-stone-700 pt-2 border-t border-stone-200">
                        <strong>Timings:</strong> Mon – Sat: 10:00 AM – 7:00 PM (IST)<br>
                        <span class="text-stone-500">* Strictly Prior Appointment</span>
                    </div>
                    <button type="button" onclick="window.openDrMitraBooking('General Consultation', 'ARC Clinic Salt Lake')" class="w-full py-2.5 text-xs font-bold text-white bg-emerald-900 hover:bg-emerald-800 rounded transition-colors cursor-pointer">Select Salt Lake Chamber</button>
                </div>

                <!-- VIP Road -->
                <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-4">
                    <div class="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Branch Clinic · Kolkata, India</div>
                    <h3 class="text-lg font-bold text-stone-900">VIP Road / Lake Town Clinic</h3>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Dakshindari Road, Near Lake Town VIP Road Junction, Kolkata – 700048, West Bengal<br>
                        <span class="text-stone-500 font-light">Adjacent to Ultadanga Footbridge</span>
                    </p>
                    <div class="text-xs text-stone-700 pt-2 border-t border-stone-200">
                        <strong>Timings:</strong> Tue, Thu, Sat: 4:00 PM – 8:00 PM (IST)<br>
                        <span class="text-stone-500">* Chronic follow-ups & dispensary</span>
                    </div>
                    <button type="button" onclick="window.openDrMitraBooking('General Consultation', 'VIP Road Clinic')" class="w-full py-2.5 text-xs font-bold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors cursor-pointer">Select VIP Road Chamber</button>
                </div>

                <!-- Bangkok -->
                <div class="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-4">
                    <div class="text-xs font-semibold text-emerald-900 uppercase tracking-wide">International Liaison · Thailand</div>
                    <h3 class="text-lg font-bold text-stone-900">Bangkok Telehealth Desk</h3>
                    <p class="text-xs text-stone-600 leading-relaxed">
                        Sukhumvit Corridor, Khlong Toei, Bangkok 10110, Thailand<br>
                        <span class="text-stone-500 font-light">Connected with Ministry of Public Health projects</span>
                    </p>
                    <div class="text-xs text-stone-700 pt-2 border-t border-stone-200">
                        <strong>Timings:</strong> By Appointment: 1:00 PM – 7:00 PM (ICT)<br>
                        <span class="text-stone-500">* HD Video & International Dispatch</span>
                    </div>
                    <button type="button" onclick="window.openDrMitraBooking('General Consultation', 'Video Telehealth')" class="w-full py-2.5 text-xs font-bold text-stone-900 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors cursor-pointer">Select Video Telehealth</button>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQS ACCORDION SECTION -->
    <section class="py-16 sm:py-24 bg-stone-100/60 border-b border-stone-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-12">
                <div class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-900 mb-2">
                    <span>Frequently Asked Questions</span>
                </div>
                <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                    Understanding Our Clinical Care
                </h2>
                <p class="mt-3 text-base text-stone-600 font-light leading-relaxed">
                    Essential guidelines for prospective patients regarding our evidence-based consultation methodology, remedy safety, and treatment integration.
                </p>
            </div>

            <div class="space-y-3" id="faq-accordion-group">
                <div class="faq-item border border-stone-200 rounded-lg overflow-hidden bg-white">
                    <button type="button" class="faq-question-btn w-full flex items-center justify-between gap-4 p-5 text-left text-stone-900 font-bold text-sm sm:text-base cursor-pointer">
                        <span>How do Dr. Mitra’s research-based nano-medicine protocols differ from conventional homeopathy?</span>
                        <span class="faq-icon text-xl text-stone-400 font-mono">+</span>
                    </button>
                    <div class="faq-answer-content px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-3">
                        Dr. Mitra combines classical Hahnemannian individualised constitutional analysis with modern scientific advancements in ultra-dilution physics. Every remedy is exclusively procured from certified pharmacopoeias like Ainsworths (UK), ensuring calibrated nanoparticle dispersion, zero chemical adulteration, and measurable laboratory-monitored outcomes.
                    </div>
                </div>

                <div class="faq-item border border-stone-200 rounded-lg overflow-hidden bg-white">
                    <button type="button" class="faq-question-btn w-full flex items-center justify-between gap-4 p-5 text-left text-stone-900 font-bold text-sm sm:text-base cursor-pointer">
                        <span>Can I continue my regular allopathic or prescription medications during treatment?</span>
                        <span class="faq-icon text-xl text-stone-400 font-mono">+</span>
                    </button>
                    <div class="faq-answer-content hidden px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-3">
                        Yes, absolutely. We strictly advise against abruptly stopping any life-sustaining prescription medications (such as cardiac drugs, insulin, anti-hypertensives, or chemotherapy). Dr. Mitra’s protocols integrate safely alongside conventional treatments.
                    </div>
                </div>

                <div class="faq-item border border-stone-200 rounded-lg overflow-hidden bg-white">
                    <button type="button" class="faq-question-btn w-full flex items-center justify-between gap-4 p-5 text-left text-stone-900 font-bold text-sm sm:text-base cursor-pointer">
                        <span>How does an online / international video consultation work for patients outside Kolkata?</span>
                        <span class="faq-icon text-xl text-stone-400 font-mono">+</span>
                    </button>
                    <div class="faq-answer-content hidden px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-3">
                        We provide structured high-definition video consultations for patients across India, Thailand, Europe, North America, and the Middle East. Prior to the call, patients submit their complete medical history and scans. Following the case study, original sealed remedies are securely packed and dispatched via express courier with full tracking.
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<?php get_footer();
