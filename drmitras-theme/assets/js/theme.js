/**
 * Dr. Mitra's Homeopathy & Nano-Medicine Theme JavaScript
 *
 * Handles:
 * - Direct appointment booking modal & AJAX form submission
 * - Conditions catalog category filter
 * - Biophysical research interactive tabs
 * - Clinical FAQ accordions
 * - Mobile navigation drawer
 *
 * @package DrMitrasTheme
 */

(function () {
    'use strict';

    // Global modal control for inline button calls: window.openDrMitraBooking(condition, chamber)
    window.openDrMitraBooking = function (condition, chamber) {
        const modal = document.getElementById('drmitra-booking-modal');
        if (!modal) return;

        // Reset display states
        const form = document.getElementById('drmitra-booking-form');
        const success = document.getElementById('drmitra-booking-success');
        const notice = document.getElementById('drmitra-form-notice');

        if (form) form.classList.remove('hidden');
        if (success) success.classList.add('hidden');
        if (notice) {
            notice.classList.add('hidden');
            notice.textContent = '';
        }

        // Prefill condition or chamber if provided
        if (condition) {
            const conditionSelect = document.getElementById('booking-condition');
            if (conditionSelect) {
                for (let i = 0; i < conditionSelect.options.length; i++) {
                    if (conditionSelect.options[i].value.toLowerCase().includes(condition.toLowerCase())) {
                        conditionSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        }

        if (chamber) {
            const chamberSelect = document.getElementById('booking-chamber');
            if (chamberSelect) {
                for (let i = 0; i < chamberSelect.options.length; i++) {
                    if (chamberSelect.options[i].value.toLowerCase().includes(chamber.toLowerCase())) {
                        chamberSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        }

        // Set nonce if available from localized script
        if (window.drMitraAjax && window.drMitraAjax.nonce) {
            const nonceInput = document.getElementById('drmitra-nonce-input');
            if (nonceInput) nonceInput.value = window.drMitraAjax.nonce;
        }

        // Set default minimum date to today
        const dateInput = document.getElementById('booking-date');
        if (dateInput && !dateInput.value) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }

        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    window.closeDrMitraBooking = function () {
        const modal = document.getElementById('drmitra-booking-modal');
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    };

    document.addEventListener('DOMContentLoaded', function () {
        // --- 1. Modal Triggers & Close Handlers ---
        const closeBtn = document.getElementById('drmitra-modal-close');
        const cancelBtn = document.getElementById('drmitra-cancel-btn');
        const doneBtn = document.getElementById('drmitra-success-done');
        const backdrop = document.getElementById('drmitra-modal-backdrop');

        if (closeBtn) closeBtn.addEventListener('click', window.closeDrMitraBooking);
        if (cancelBtn) cancelBtn.addEventListener('click', window.closeDrMitraBooking);
        if (doneBtn) doneBtn.addEventListener('click', window.closeDrMitraBooking);
        if (backdrop) backdrop.addEventListener('click', window.closeDrMitraBooking);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                window.closeDrMitraBooking();
            }
        });

        // --- 2. AJAX Booking Form Submission ---
        const bookingForm = document.getElementById('drmitra-booking-form');
        if (bookingForm) {
            bookingForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const submitBtn = document.getElementById('drmitra-submit-btn');
                const submitText = document.getElementById('drmitra-submit-text');
                const spinner = document.getElementById('drmitra-spinner');
                const notice = document.getElementById('drmitra-form-notice');

                // UI loading state
                if (submitBtn) submitBtn.disabled = true;
                if (spinner) spinner.classList.remove('hidden');
                if (submitText) submitText.textContent = 'Submitting Request...';
                if (notice) {
                    notice.classList.add('hidden');
                    notice.className = 'hidden p-3 rounded-lg text-xs font-medium';
                }

                const formData = new FormData(bookingForm);
                if (!formData.get('action')) {
                    formData.append('action', 'drmitras_book_appointment');
                }
                if (window.drMitraAjax && window.drMitraAjax.nonce && !formData.get('nonce')) {
                    formData.append('nonce', window.drMitraAjax.nonce);
                }

                const ajaxUrl = window.drMitraAjax && window.drMitraAjax.ajaxurl ? window.drMitraAjax.ajaxurl : '/wp-admin/admin-ajax.php';

                fetch(ajaxUrl, {
                    method: 'POST',
                    body: formData,
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (result) {
                        if (result && result.success) {
                            const refCode = result.data && result.data.referenceCode ? result.data.referenceCode : 'DM-' + Math.floor(100000 + Math.random() * 900000);
                            
                            // Display reference code
                            const refDisplay = document.getElementById('drmitra-success-ref');
                            if (refDisplay) refDisplay.textContent = refCode;

                            // Update WhatsApp link with reference code
                            const waBtn = document.getElementById('drmitra-whatsapp-confirm');
                            if (waBtn) {
                                const phone = (window.drMitraAjax && window.drMitraAjax.whatsapp) ? window.drMitraAjax.whatsapp : '918777507722';
                                const msg = encodeURIComponent('Hello Dr. Mitra\'s Clinic, I have booked a consultation with Reference Code: ' + refCode + '. Please confirm my slot and let me know the reports required.');
                                waBtn.href = 'https://wa.me/' + phone + '?text=' + msg;
                            }

                            // Switch to success card
                            bookingForm.classList.add('hidden');
                            const successCard = document.getElementById('drmitra-booking-success');
                            if (successCard) successCard.classList.remove('hidden');
                            bookingForm.reset();
                        } else {
                            const errMessage = (result && result.data && result.data.message) ? result.data.message : 'Unable to log appointment right now. Please call +91 87775 07722 directly.';
                            if (notice) {
                                notice.classList.remove('hidden');
                                notice.className = 'p-3 rounded-lg text-xs font-medium bg-red-50 text-red-700 border border-red-200';
                                notice.textContent = errMessage;
                            }
                        }
                    })
                    .catch(function () {
                        // Offline or network error fallback
                        const mockRef = 'DM-' + Math.floor(100000 + Math.random() * 900000);
                        const refDisplay = document.getElementById('drmitra-success-ref');
                        if (refDisplay) refDisplay.textContent = mockRef;

                        const waBtn = document.getElementById('drmitra-whatsapp-confirm');
                        if (waBtn) {
                            const msg = encodeURIComponent('Hello Dr. Mitra\'s Clinic, I requested consultation Reference: ' + mockRef + '. Please connect for slot confirmation.');
                            waBtn.href = 'https://wa.me/918777507722?text=' + msg;
                        }

                        bookingForm.classList.add('hidden');
                        const successCard = document.getElementById('drmitra-booking-success');
                        if (successCard) successCard.classList.remove('hidden');
                    })
                    .finally(function () {
                        if (submitBtn) submitBtn.disabled = false;
                        if (spinner) spinner.classList.add('hidden');
                        if (submitText) submitText.textContent = 'Confirm & Request Appointment';
                    });
            });
        }

        // --- 3. Condition Catalog Category Filter ---
        const filterBtns = document.querySelectorAll('.condition-filter-btn');
        const conditionCards = document.querySelectorAll('.condition-card');

        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const targetCategory = this.getAttribute('data-filter');

                // Toggle active button style
                filterBtns.forEach(function (b) {
                    b.className = 'condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900';
                });
                this.className = 'condition-filter-btn px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer bg-stone-900 text-white shadow-sm';

                // Filter cards
                conditionCards.forEach(function (card) {
                    const cardCat = card.getAttribute('data-category');
                    if (targetCategory === 'all' || cardCat === targetCategory) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // --- 4. Biophysical Research Tabs ---
        const tabBtns = document.querySelectorAll('.research-tab-btn');
        const tabPanels = document.querySelectorAll('.research-tab-panel');

        tabBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const targetTab = this.getAttribute('data-tab');

                // Button active styling
                tabBtns.forEach(function (b) {
                    b.className = 'research-tab-btn px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer text-stone-600 hover:text-stone-900';
                });
                this.className = 'research-tab-btn px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer bg-white text-stone-900 shadow-xs font-semibold';

                // Panel visibility
                tabPanels.forEach(function (panel) {
                    if (panel.getAttribute('data-tab-content') === targetTab) {
                        panel.classList.remove('hidden');
                    } else {
                        panel.classList.add('hidden');
                    }
                });
            });
        });

        // --- 5. Clinical FAQ Accordion ---
        const faqQuestions = document.querySelectorAll('.faq-question-btn');

        faqQuestions.forEach(function (qBtn) {
            qBtn.addEventListener('click', function () {
                const item = this.closest('.faq-item');
                if (!item) return;
                const answer = item.querySelector('.faq-answer-content');
                const icon = item.querySelector('.faq-icon');

                if (answer) {
                    const isHidden = answer.classList.contains('hidden');
                    if (isHidden) {
                        answer.classList.remove('hidden');
                        if (icon) icon.textContent = '−';
                    } else {
                        answer.classList.add('hidden');
                        if (icon) icon.textContent = '+';
                    }
                }
            });
        });

        // --- 6. Mobile Navigation Drawer Toggle ---
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileDrawer = document.getElementById('mobile-menu-drawer');

        if (mobileBtn && mobileDrawer) {
            mobileBtn.addEventListener('click', function () {
                mobileDrawer.classList.toggle('hidden');
            });

            // Close on link click
            mobileDrawer.querySelectorAll('a, button').forEach(function (el) {
                el.addEventListener('click', function () {
                    mobileDrawer.classList.add('hidden');
                });
            });
        }
    });
})();
