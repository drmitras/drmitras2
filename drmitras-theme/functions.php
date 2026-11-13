<?php
/**
 * Dr. Mitra's Homeopathy Clinic & Nano-Medicine Theme Functions
 *
 * @package DrMitrasTheme
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function drmitras_theme_setup() {
    // Make theme available for translation.
    load_theme_textdomain( 'drmitras-theme', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Custom logo support.
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // Register navigation menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Navigation', 'drmitras-theme' ),
        'footer'  => __( 'Footer Navigation', 'drmitras-theme' ),
    ) );

    // Switch default core markup to output valid HTML5.
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );
}
add_action( 'after_setup_theme', 'drmitras_theme_setup' );

/**
 * Enqueue scripts and styles.
 */
function drmitras_enqueue_scripts() {
    // Google Fonts matching drmitras.com & jashvee.in exact typography
    wp_enqueue_style(
        'drmitras-google-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap',
        array(),
        null
    );

    // Compiled Production Tailwind CSS
    wp_enqueue_style(
        'drmitras-main-style',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        '1.0.0'
    );

    // Theme root stylesheet
    wp_enqueue_style(
        'drmitras-theme-style',
        get_stylesheet_uri(),
        array( 'drmitras-main-style' ),
        '1.0.0'
    );

    // Interactive Theme JS
    wp_enqueue_script(
        'drmitras-theme-script',
        get_template_directory_uri() . '/assets/js/theme.js',
        array(),
        '1.0.0',
        true
    );

    // Localize script for AJAX appointment handling
    wp_localize_script(
        'drmitras-theme-script',
        'drMitraAjax',
        array(
            'ajaxurl'   => admin_url( 'admin-ajax.php' ),
            'nonce'     => wp_create_nonce( 'drmitras_booking_nonce' ),
            'siteUrl'   => home_url(),
            'phone'     => '+91 87775 07722',
            'whatsapp'  => '918777507722',
        )
    );
}
add_action( 'wp_enqueue_scripts', 'drmitras_enqueue_scripts' );

/**
 * Handle AJAX Consultation Booking Submission
 */
function drmitras_handle_booking() {
    check_ajax_referer( 'drmitras_booking_nonce', 'nonce' );

    $patient_name = isset( $_POST['patientName'] ) ? sanitize_text_field( $_POST['patientName'] ) : '';
    $phone        = isset( $_POST['phone'] ) ? sanitize_text_field( $_POST['phone'] ) : '';
    $email        = isset( $_POST['email'] ) ? sanitize_email( $_POST['email'] ) : '';
    $age          = isset( $_POST['age'] ) ? sanitize_text_field( $_POST['age'] ) : '';
    $gender       = isset( $_POST['gender'] ) ? sanitize_text_field( $_POST['gender'] ) : '';
    $condition    = isset( $_POST['condition'] ) ? sanitize_text_field( $_POST['condition'] ) : '';
    $chamber      = isset( $_POST['chamber'] ) ? sanitize_text_field( $_POST['chamber'] ) : '';
    $date         = isset( $_POST['date'] ) ? sanitize_text_field( $_POST['date'] ) : '';
    $time_slot    = isset( $_POST['timeSlot'] ) ? sanitize_text_field( $_POST['timeSlot'] ) : '';
    $case_summary = isset( $_POST['caseSummary'] ) ? sanitize_textarea_field( $_POST['caseSummary'] ) : '';

    if ( empty( $patient_name ) || empty( $phone ) ) {
        wp_send_json_error( array( 'message' => 'Please provide the patient name and contact phone.' ) );
    }

    $ref_code = 'DM-' . wp_rand( 100000, 999999 );

    $booking_data = array(
        'id'            => 'apt-' . time(),
        'referenceCode' => $ref_code,
        'patientName'   => $patient_name,
        'phone'         => $phone,
        'email'         => $email,
        'age'           => $age,
        'gender'        => $gender,
        'condition'     => $condition,
        'chamber'       => $chamber,
        'date'          => $date,
        'timeSlot'      => $time_slot,
        'caseSummary'   => $case_summary,
        'status'        => 'Pending Review',
        'submittedAt'   => current_time( 'mysql' ),
    );

    // Save to WordPress options table
    $existing = get_option( 'drmitras_consultations', array() );
    array_unshift( $existing, $booking_data );
    update_option( 'drmitras_consultations', array_slice( $existing, 0, 200 ) );

    // Send email notification to site admin
    $admin_email = get_option( 'admin_email' );
    $subject     = "[Dr. Mitra's Clinic] New Consultation Request: {$ref_code} - {$patient_name}";
    $message     = "A new patient consultation request has been submitted:\n\n"
                 . "Reference: {$ref_code}\n"
                 . "Patient: {$patient_name} ({$age}y, {$gender})\n"
                 . "Phone: {$phone}\n"
                 . "Email: {$email}\n"
                 . "Condition: {$condition}\n"
                 . "Chamber / Mode: {$chamber}\n"
                 . "Preferred Date: {$date} ({$time_slot})\n"
                 . "Summary: {$case_summary}\n\n"
                 . "Review in WordPress Admin > Chamber Consultations.";

    @wp_mail( $admin_email, $subject, $message );

    wp_send_json_success( array(
        'referenceCode' => $ref_code,
        'message'       => 'Consultation request logged successfully.',
    ) );
}
add_action( 'wp_ajax_drmitras_book_appointment', 'drmitras_handle_booking' );
add_action( 'wp_ajax_nopriv_drmitras_book_appointment', 'drmitras_handle_booking' );

/**
 * Add WordPress Admin Menu Page: "Chamber Consultations"
 */
function drmitras_add_admin_menu() {
    add_menu_page(
        __( 'Chamber Consultations', 'drmitras-theme' ),
        __( 'Chamber Desk', 'drmitras-theme' ),
        'manage_options',
        'drmitras-consultations',
        'drmitras_render_admin_page',
        'dashicons-clipboard',
        25
    );
}
add_action( 'admin_menu', 'drmitras_add_admin_menu' );

/**
 * Render WordPress Admin Page for Consultation Queue
 */
function drmitras_render_admin_page() {
    if ( ! current_user_can( 'manage_options' ) ) {
        return;
    }

    // Handle status update
    if ( isset( $_POST['drmitras_action'] ) && $_POST['drmitras_action'] === 'update_status' && check_admin_referer( 'drmitras_update_status' ) ) {
        $apt_id     = sanitize_text_field( $_POST['apt_id'] );
        $new_status = sanitize_text_field( $_POST['new_status'] );
        $all        = get_option( 'drmitras_consultations', array() );
        foreach ( $all as &$item ) {
            if ( $item['id'] === $apt_id ) {
                $item['status'] = $new_status;
                break;
            }
        }
        update_option( 'drmitras_consultations', $all );
        echo '<div class="notice notice-success is-dismissible"><p>Appointment status updated.</p></div>';
    }

    $bookings = get_option( 'drmitras_consultations', array() );
    ?>
    <div class="wrap">
        <h1 style="display:flex;align-items:center;gap:8px;">
            <span>Dr. Mitra's® Chamber & Consultation Queue</span>
        </h1>
        <p style="color:#64748b;">Manage online consultation requests, Salt Lake / VIP Road walk-ins, and patient follow-ups.</p>

        <div style="background:#fff;border:1px solid #ccd0d4;padding:15px;margin:20px 0;border-radius:6px;display:flex;gap:30px;">
            <div><strong>Total Consultations:</strong> <?php echo count( $bookings ); ?></div>
            <div><strong>ARC Clinic Salt Lake:</strong> GD-16, Sector-3, Kolkata 700106</div>
            <div><strong>Hotline:</strong> +91 87775 07722</div>
        </div>

        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th width="110">Ref ID</th>
                    <th>Patient Details</th>
                    <th>Condition</th>
                    <th>Chamber / Setting</th>
                    <th>Date & Slot</th>
                    <th>Status</th>
                    <th width="180">Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php if ( empty( $bookings ) ) : ?>
                    <tr><td colspan="7">No consultation requests logged yet.</td></tr>
                <?php else : ?>
                    <?php foreach ( $bookings as $b ) : ?>
                        <tr>
                            <td><code><?php echo esc_html( $b['referenceCode'] ); ?></code></td>
                            <td>
                                <strong><?php echo esc_html( $b['patientName'] ); ?></strong><br>
                                <small><?php echo esc_html( $b['phone'] ); ?> · <?php echo esc_html( $b['email'] ); ?></small>
                            </td>
                            <td><?php echo esc_html( $b['condition'] ); ?></td>
                            <td><?php echo esc_html( $b['chamber'] ); ?></td>
                            <td><?php echo esc_html( $b['date'] . ' (' . $b['timeSlot'] . ')' ); ?></td>
                            <td>
                                <form method="post" style="display:inline;">
                                    <?php wp_nonce_field( 'drmitras_update_status' ); ?>
                                    <input type="hidden" name="drmitras_action" value="update_status">
                                    <input type="hidden" name="apt_id" value="<?php echo esc_attr( $b['id'] ); ?>">
                                    <select name="new_status" onchange="this.form.submit()" style="font-size:12px;">
                                        <option value="Pending Review" <?php selected( $b['status'], 'Pending Review' ); ?>>Pending Review</option>
                                        <option value="Confirmed" <?php selected( $b['status'], 'Confirmed' ); ?>>Confirmed</option>
                                        <option value="Contacted via WhatsApp" <?php selected( $b['status'], 'Contacted via WhatsApp' ); ?>>Contacted via WhatsApp</option>
                                        <option value="Consultation Completed" <?php selected( $b['status'], 'Consultation Completed' ); ?>>Completed</option>
                                    </select>
                                </form>
                            </td>
                            <td>
                                <a href="https://wa.me/<?php echo esc_attr( preg_replace( '/[^0-9]/', '', $b['phone'] ) ); ?>?text=<?php echo urlencode( 'Hello ' . $b['patientName'] . ", this is Dr. Mitra's Clinic regarding your appointment request (" . $b['referenceCode'] . ').' ); ?>" target="_blank" class="button button-small" style="background:#10b981;color:#fff;border-color:#059669;">WhatsApp</a>
                                <a href="tel:<?php echo esc_attr( $b['phone'] ); ?>" class="button button-small">Call</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
    <?php
}
