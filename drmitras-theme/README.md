# Dr. Mitra's Multispeciality Homeopathy & Nano-Medicine WordPress Theme

A custom, medical-grade, research-backed WordPress theme built for **Dr. Mitra's Clinic** (`https://www.drmitras.com/`), featuring the distinctive typography of Jashvee (`www.jashvee.in`), comprehensive clinical condition archives, biophysical research documentation, interactive consultation scheduling, and an integrated physician administration queue in `wp-admin`.

---

## 📦 Theme Package Structure

```
drmitras-theme/
├── style.css                  # WordPress theme header metadata & base styling
├── functions.php              # Navigation menus, assets enqueue, AJAX booking API, admin consultation dashboard
├── header.php                 # Global clinical header, emergency helpline, brand wordmark, navigation & mobile drawer
├── footer.php                 # 5-column clinical footer, compliance notice, direct contact, WhatsApp assist
├── front-page.php             # Full homepage: Hero (30+ yrs), conditions catalog, Dr. Somenath Mitra biography, research, case studies, clinics, FAQs
├── index.php                  # Fallback WordPress template loop
├── screenshot.png             # WordPress theme directory preview screenshot
├── README.md                  # Theme installation & administration guide
├── assets/
│   ├── css/
│   │   └── main.css           # Compiled Tailwind CSS (43.95 kB, zero external build dependencies needed on host)
│   ├── js/
│   │   └── theme.js           # Modal handler, AJAX booking engine, category filters, research tabs & accordion logic
│   └── images/
│       ├── hero-clinic.jpg
│       ├── dr-somenath-mitra.jpg
│       ├── research-lab.jpg
│       └── clinic-interior.jpg
└── template-parts/
    └── booking-modal.php      # Clinical appointment booking modal with reference code generation
```

---

## 🚀 How to Install in WordPress

### Option A: Direct WordPress Admin Upload (Recommended)
1. Download the file **`drmitras-theme.zip`**.
2. Log into your WordPress Admin Dashboard (`your-domain.com/wp-admin`).
3. Navigate to **Appearance** → **Themes**.
4. Click the **Add New Theme** button at the top, then click **Upload Theme**.
5. Choose `drmitras-theme.zip` from your computer and click **Install Now**.
6. Once the installation completes, click **Activate**.

### Option B: Direct FTP / File Manager Upload
1. Extract `drmitras-theme.zip` to obtain the `drmitras-theme` folder.
2. Upload the `drmitras-theme` folder into your WordPress server directory:  
   `/wp-content/themes/drmitras-theme/`
3. Go to WordPress Admin → **Appearance** → **Themes** and click **Activate** on **Dr. Mitra's Multispeciality Clinic**.

---

## ⚙️ Recommended WordPress Settings

1. **Set Static Front Page**:
   - In WordPress Admin, navigate to **Settings** → **Reading**.
   - Under **Your homepage displays**, select **A static page**.
   - Choose your homepage page (or leave default, as `front-page.php` automatically serves as the homepage).
2. **Consultation Requests Queue**:
   - The theme automatically registers a dedicated menu item in the left sidebar:  
     **wp-admin → Chamber Consultations**.
   - Whenever a patient submits an appointment request through the website, it is securely stored in the WordPress database and displayed in this dashboard with:
     - Reference Code (`DM-XXXXXX`)
     - Patient Name, Age, Gender
     - Phone / WhatsApp number
     - Chamber / Mode (ARC Clinic Salt Lake, VIP Road, Bangkok, or Video)
     - Condition Concern
     - Date & Time Slot
     - Brief Clinical History
     - Email alert automatically dispatched to the site administrator (`admin_email`).

---

## 🎨 Typography & Design Specs

- **Wordmark ("Dr. Mitra's")**: Inter font (`font-size: 27px; font-weight: 900; letter-spacing: -1px`), exactly matching the styling of `www.jashvee.in`.
- **Primary Body & Headings**: Plus Jakarta Sans.
- **Editorial Clinical Pullquotes**: Cormorant Garamond Serif.
- **Diagnostics & Medical Data**: IBM Plex Mono.
- **Color Palette**: Deep Emerald (`#064e3b`, `#065f46`), Clinical Stone (`#0c0a09`, `#1c1917`, `#78716c`), and Gold/Amber accents.

---

## 📞 Support & Inquiries
- Official Practice: Dr. Somenath Mitra (BHMS, NIH Alumnus)
- Direct Helpline: `+91 87775 07722` / `+91 98300 24891`
- Chamber: ARC Clinic, GD-16, Sector - 3, Salt Lake City, Kolkata - 700106
