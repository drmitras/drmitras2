<?php
/**
 * Header template for Dr. Mitra's Theme
 *
 * @package DrMitrasTheme
 */
?><!doctype html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-stone-50 text-stone-900 antialiased selection:bg-emerald-800 selection:text-white font-sans' ); ?>>
<?php wp_body_open(); ?>

<header class="sticky top-0 z-50 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
    <!-- Top Clinical Announcement Strip -->
    <div class="bg-stone-900 text-stone-200 text-xs py-1.5 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div class="flex items-center gap-2 truncate">
                <span class="font-semibold text-emerald-400">Dr. Mitra's® Practice</span>
                <span class="hidden sm:inline text-stone-400">·</span>
                <span class="hidden sm:inline text-stone-300">National Institute of Homeopathy Alumnus</span>
                <span class="hidden md:inline text-stone-400">·</span>
                <span class="hidden md:inline text-stone-300">Kolkata & Bangkok Clinics</span>
            </div>
            <div class="flex items-center gap-4 shrink-0 text-stone-300">
                <a href="tel:8777507722" class="flex items-center gap-1.5 hover:text-white transition-colors">
                    <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span class="font-medium font-mono tabular-nums">+91 87775 07722</span>
                </a>
                <span class="text-stone-600 hidden sm:inline">|</span>
                <a href="<?php echo esc_url( admin_url() ); ?>" class="hidden sm:flex items-center gap-1.5 text-[11px] text-stone-400 hover:text-emerald-300 transition-colors" title="Physician / Chamber Login">
                    <svg class="w-3 h-3 text-emerald-400/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    <span>Doctor / Staff Login</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Primary Top Bar (3-Zone Contract) -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        <!-- Zone 1: Brand title wordmark with exact jashvee.in font -->
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 flex items-center">
            <span class="font-jashvee text-[27px] sm:text-[30px] font-black tracking-[-1px] text-stone-900">Dr. Mitra's</span>
            <sup class="text-xs text-emerald-700 font-bold ml-0.5">®</sup>
        </a>

        <!-- Zone 2: 4-5 single-line clean navigation links -->
        <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <a href="#conditions" class="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-emerald-800">Conditions & Care</a>
            <a href="#about-doctor" class="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-emerald-800">About Dr. Mitra</a>
            <a href="#research" class="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-emerald-800">Nano-Research</a>
            <a href="#case-studies" class="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-emerald-800">Case Studies</a>
            <a href="#locations" class="hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-emerald-800">Clinic Locations</a>
        </nav>

        <!-- Zone 3: 1 primary action -->
        <div class="hidden sm:flex items-center gap-4 shrink-0">
            <button type="button" onclick="window.openDrMitraBooking()" class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-800 active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                Book Consultation
            </button>
        </div>

        <!-- Mobile menu toggle button -->
        <div class="flex items-center gap-2 lg:hidden">
            <button type="button" onclick="window.openDrMitraBooking()" class="sm:hidden px-3 py-1.5 text-xs font-medium text-white bg-emerald-900 rounded-md">
                Consult
            </button>
            <button type="button" id="mobile-menu-btn" aria-label="Toggle menu" class="p-2 text-stone-700 hover:text-stone-900 focus:outline-none cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu-drawer" class="hidden lg:hidden border-t border-stone-200 bg-stone-50 px-4 pt-3 pb-6 space-y-3">
        <div class="flex flex-col space-y-2">
            <a href="#conditions" class="py-2 text-base font-medium text-stone-800 hover:text-emerald-900 border-b border-stone-100">Conditions & Care</a>
            <a href="#about-doctor" class="py-2 text-base font-medium text-stone-800 hover:text-emerald-900 border-b border-stone-100">About Dr. Mitra</a>
            <a href="#research" class="py-2 text-base font-medium text-stone-800 hover:text-emerald-900 border-b border-stone-100">Nano-Research</a>
            <a href="#case-studies" class="py-2 text-base font-medium text-stone-800 hover:text-emerald-900 border-b border-stone-100">Case Studies</a>
            <a href="#locations" class="py-2 text-base font-medium text-stone-800 hover:text-emerald-900 border-b border-stone-100">Clinic Locations</a>
        </div>
        <div class="pt-2 space-y-2">
            <button type="button" onclick="window.openDrMitraBooking()" class="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-emerald-900 rounded-md">
                Schedule Online or In-Clinic Visit
            </button>
            <a href="<?php echo esc_url( admin_url() ); ?>" class="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-stone-700 bg-stone-200/80 rounded-md hover:bg-stone-300">
                Physician & Staff Portal
            </a>
        </div>
    </div>
</header>
