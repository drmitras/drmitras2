export type Language = 'en' | 'th' | 'bn';

export interface TranslationStrings {
  header: {
    practiceLabel: string;
    alumnusLabel: string;
    clinicsLabel: string;
    navConditions: string;
    navDoctor: string;
    navResearch: string;
    navCaseStudies: string;
    navLocations: string;
    mobileCallCta: string;
    languageLabel: string;
  };
  hero: {
    kickerInst: string;
    kickerExp: string;
    kickerSource: string;
    headline: string;
    subtitlePrefix: string;
    doctorName: string;
    subtitleSuffix: string;
    trust1: string;
    trust2: string;
    ctaCases: string;
    complianceNote: string;
    badgeLocation: string;
    imageCaption: string;
    stats: {
      expLabel: string;
      expSub: string;
      patientsLabel: string;
      patientsSub: string;
      remissionLabel: string;
      remissionSub: string;
      ainsworthsLabel: string;
      ainsworthsSub: string;
    };
  };
  conditions: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    description: string;
    filters: {
      all: string;
      oncology: string;
      autoimmune: string;
      respiratory: string;
      chronic: string;
      metabolic: string;
    };
    careSuffix: string;
    focusAreas: string;
    clinicalProtocol: string;
    bookCare: string;
    modalRationale: string;
    modalStrategy: string;
    modalSymptoms: string;
    modalMetrics: string;
    modalDuration: string;
    modalCohort: string;
    modalClose: string;
    modalBook: string;
  };
  doctor: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    roleSubtitle: string;
    regNumber: string;
    cities: string;
    philosophyLabel: string;
    philosophyQuote: string;
    bio1: string;
    bio2: string;
    bio3: string;
    milestonesHeading: string;
    tenetsHeading: string;
    tenets: [string, string, string, string];
  };
  research: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    description: string;
    captionTitle: string;
    captionDesc: string;
    sourcingTitle: string;
    sourcingDesc: string;
    tabs: {
      nanoparticles: string;
      hormesis: string;
      sourcing: string;
      monitoring: string;
    };
  };
  caseStudies: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    description: string;
    selectCase: string;
    verifiedCase: string;
    postTreatment: string;
    baselineSub: string;
    remissionSub: string;
    historyHeading: string;
    priorHeading: string;
    protocolHeading: string;
    outcomeHeading: string;
    inquireCta: string;
  };
  outreach: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    description: string;
    foundationTitle: string;
    foundationDesc: string;
  };
  testimonials: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    description: string;
    conditionPrefix: string;
    verifiedPatient: string;
  };
  locations: {
    kickerLeft: string;
    kickerRight: string;
    heading: string;
    description: string;
    suiteTitle: string;
    suiteDesc: string;
    hotlineLabel: string;
    hotlineDesc: string;
    callClinic: string;
    whatsappAssist: string;
    addressLabel: string;
    timingsLabel: string;
    servicesLabel: string;
  };
  faq: {
    kicker: string;
    heading: string;
    description: string;
  };
  footer: {
    overview: string;
    ainsworthsNote: string;
    ethicsNote: string;
    spectrumHeading: string;
    researchHeading: string;
    scheduleLink: string;
    contactHeading: string;
    noticePrefix: string;
    noticeBody: string;
    rightsReserved: string;
    privacyLink: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  en: {
    header: {
      practiceLabel: "Dr. Mitra's® Practice",
      alumnusLabel: 'National Institute of Homeopathy Alumnus',
      clinicsLabel: 'Kolkata & Bangkok Clinics',
      navConditions: 'Conditions & Care',
      navDoctor: 'About Dr. Mitra',
      navResearch: 'Nano-Research',
      navCaseStudies: 'Case Studies',
      navLocations: 'Clinic Locations',
      mobileCallCta: 'Call / WhatsApp - 8777507722',
      languageLabel: 'Language',
    },
    hero: {
      kickerInst: 'National Institute of Homeopathy (India)',
      kickerExp: '30+ Years Clinical Practice',
      kickerSource: 'Ainsworths UK Sourced',
      headline: 'Scientific Nano-Medicine & Clinical Homeopathy for Chronic Illness',
      subtitlePrefix: 'Led by ',
      doctorName: 'Dr. Somenath Mitra',
      subtitleSuffix:
        ' (BHMS, NIH), our practice develops research-guided homeopathic protocols targeting complex, autoimmune, oncological palliative, and treatment-resistant diseases with objective laboratory tracking.',
      trust1: 'Zero corticosteroids or chemical immunosuppressants',
      trust2: 'Govt of Thailand Homeopathy Advisory Consultant',
      ctaCases: 'View Documented Case Studies',
      complianceNote:
        '* Complementary medical care integrated with standard clinical diagnostics. We do not advise abruptly stopping vital prescription medications.',
      badgeLocation: 'Kolkata Salt Lake & Bangkok Telehealth',
      imageCaption:
        'Patient-centered medical environment dedicated to root-cause restoration and long-term vitality.',
      stats: {
        expLabel: 'Years Clinical Experience',
        expSub: 'Established practice since 1998',
        patientsLabel: 'Patients Treated Globally',
        patientsSub: 'Across India, Southeast Asia & Europe',
        remissionLabel: 'Long-term Remission Rate',
        remissionSub: 'Documented across chronic cases',
        ainsworthsLabel: 'Ainsworths UK Formulations',
        ainsworthsSub: 'Royal warrant homeopathic pharmacopoeia',
      },
    },
    conditions: {
      kickerLeft: 'Specialised Clinical Spectrum',
      kickerRight: 'Evidence-Monitored Homeopathy',
      heading: 'Targeted Protocols for Complex & Chronic Conditions',
      description:
        'Every patient presents a unique biological terrain. Rather than suppressing disease manifestations with topical or chemical blockers, Dr. Mitra’s protocols systematically address cellular immunity, vital organ drainage, and neuro-endocrine equilibrium.',
      filters: {
        all: 'All Conditions',
        oncology: 'Oncology & Blood',
        autoimmune: 'Autoimmune & Skin',
        respiratory: 'Respiratory & Allergies',
        chronic: 'Chronic & Renal',
        metabolic: 'Metabolic & Endocrine',
      },
      careSuffix: 'Care',
      focusAreas: 'Common Focus Areas:',
      clinicalProtocol: 'Clinical Protocol',
      bookCare: 'Call / WhatsApp - 8777507722',
      modalRationale: 'Clinical Rationale & Pathology',
      modalStrategy: 'Therapeutic Formulation Strategy',
      modalSymptoms: 'Primary Symptom Spectrum Addressed',
      modalMetrics: 'Monitored Diagnostic Parameters',
      modalDuration: 'Typical Duration:',
      modalCohort: 'Documented Cohort:',
      modalClose: 'Close Window',
      modalBook: 'Book Case Review',
    },
    doctor: {
      kickerLeft: 'The Physician Behind The Practice',
      kickerRight: 'Established 1998',
      heading: 'Pioneering Evidence-Monitored Homeopathic Science',
      roleSubtitle: 'Founder & Chief Medical Consultant · 30+ Years Clinical Research Experience',
      regNumber: 'Reg. Practitioner 21794',
      cities: 'Kolkata · Bangkok',
      philosophyLabel: 'Clinical Philosophy',
      philosophyQuote:
        '“True medical healing does not consist of subduing symptoms with escalating pharmaceutical doses. It requires deciphering the body’s innate biological signals and administering calibrated micro-stimuli to trigger permanent cellular repair.”',
      bio1: 'With more than three decades dedicated to clinical practice and drug discovery research, Dr. Somenath Mitra has treated over 18,500 patients grappling with chronic, autoimmune, and life-threatening medical conditions.',
      bio2: 'Trained rigorously at the National Institute of Homeopathy (NIH) in Kolkata—Asia’s largest central government teaching hospital for homeopathic medicine—Dr. Mitra spearheaded research bridging classical single-remedy constitutional analysis with modern ultra-dilution physics and nanomedicine.',
      bio3: 'His clinical expertise was recognized internationally when he was invited by the Ministry of Public Health, Royal Government of Thailand, to serve as a consultant and committee member for the national development and formal integration of homeopathy.',
      milestonesHeading: 'Institutional Milestones & Accreditations',
      tenetsHeading: 'Core Consultation Tenets',
      tenets: [
        'Comprehensive 45-60 minute initial diagnostic intake',
        'Objective serial blood & radiographic parameter audits',
        'Zero mixing of poly-pharmacy cocktails',
        'Direct patient communication & follow-up tracking',
      ],
    },
    research: {
      kickerLeft: 'Biophysical Research & Pharmacology',
      kickerRight: 'Science-Backed Protocols',
      heading: 'The Science of Nano-Dilutions in Clinical Medicine',
      description:
        'Modern pharmacology is increasingly validating what classical homeopathy observed empirically: ultra-dilute preparations act as epigenetic and cellular bio-signals rather than bulk chemical suppressors.',
      captionTitle: 'Nanoscale Characterisation',
      captionDesc:
        'Analytical methods including Transmission Electron Microscopy (TEM) and Dynamic Light Scattering (DLS) confirm stable nanoparticle presence in serially agitated dilutions.',
      sourcingTitle: 'Exclusive Sourcing from Ainsworths (London, UK)',
      sourcingDesc:
        'Established in 1867, Ainsworths holds Royal Warrants to HM The King and HM Queen Elizabeth The Queen Mother. All preparations are strictly non-genetically modified and verified pure.',
      tabs: {
        nanoparticles: 'Nanoparticle Physics',
        hormesis: 'Hormesis & Bio-Signaling',
        sourcing: 'Ainsworths UK Standards',
        monitoring: 'Laboratory Diagnostics',
      },
    },
    caseStudies: {
      kickerLeft: 'Evidence & Outcome Documentation',
      kickerRight: 'Documented Medical Records',
      heading: 'Documented Clinical Case Studies',
      description:
        'Review detailed case trajectories from Dr. Mitra’s archives showcasing objective pre- and post-treatment laboratory benchmarks across refractory autoimmune, hematological, and chronic ailments.',
      selectCase: 'Select Patient Case',
      verifiedCase: 'Verified Case',
      postTreatment: 'Post-Treatment:',
      baselineSub: 'Pre-treatment clinical baseline',
      remissionSub: 'Verified remission outcome',
      historyHeading: 'Presenting Clinical History & Symptoms',
      priorHeading: 'Prior Interventions & Conventional Failures',
      protocolHeading: 'Homeopathic Formulation Protocol Administered',
      outcomeHeading: 'Clinical Outcome & Longevity',
      inquireCta: 'Inquire For Similar Condition',
    },
    outreach: {
      kickerLeft: 'International Engagement & Philanthropy',
      kickerRight: 'Global Public Health',
      heading: 'Advancing Healing Across Borders',
      description:
        'Beyond private practice, Dr. Somenath Mitra has dedicated significant clinical time to governmental healthcare development, humanitarian medicine for underserved populations, and charitable foundations.',
      foundationTitle: 'Dr. Somenath Mitra Homeopathy Foundation',
      foundationDesc:
        'Dedicated to making research-based homeopathic nano-medicines accessible to financially disadvantaged communities, organizing free medical camps, and funding independent clinical trials.',
    },
    testimonials: {
      kickerLeft: 'Patient Perspectives & Outcomes',
      kickerRight: 'Verified Recoveries',
      heading: 'Trusted by Patients Across Continents',
      description:
        'Read first-hand accounts from patients who found sustainable relief and restored quality of life under Dr. Somenath Mitra’s clinical care.',
      conditionPrefix: 'Condition:',
      verifiedPatient: 'Verified Patient',
    },
    locations: {
      kickerLeft: 'Clinical Facilities & Global Access',
      kickerRight: 'Kolkata & Southeast Asia',
      heading: 'Clinic Centers & International Telehealth',
      description:
        'Consult Dr. Somenath Mitra in person at our established clinics in Kolkata or connect from anywhere across the globe through our dedicated telemedicine portal with direct international remedy dispatch.',
      suiteTitle: 'Serene, Hygiene-Monitored Consultation Suites',
      suiteDesc:
        'Designed for peaceful diagnostic case-taking, comprehensive physical examinations, and temperature-controlled botanical storage.',
      hotlineLabel: 'Direct Appointment Hotline',
      hotlineDesc:
        'Our clinical coordinator is available Monday to Saturday to assist with scheduling, medical records review, and prescription dispatch.',
      callClinic: 'Call Clinic',
      whatsappAssist: 'WhatsApp Assist',
      addressLabel: 'Address:',
      timingsLabel: 'Consultation Timings:',
      servicesLabel: 'Services:',
    },
    faq: {
      kicker: 'Frequently Asked Questions',
      heading: 'Understanding Our Clinical Care',
      description:
        'Essential guidelines for prospective patients regarding our evidence-based consultation methodology, remedy safety, and treatment integration.',
    },
    footer: {
      overview:
        'Official medical practice of Dr. Somenath Mitra (BHMS, NIH). Pioneering research-backed nano-dilution protocols for oncology palliative support, refractory autoimmune disorders, and chronic pathological illnesses.',
      ainsworthsNote: 'Formulated with 100% Ainsworths (London, UK) Remedies',
      ethicsNote: 'Practicing with Ethical Care & Objective Diagnostic Audits',
      spectrumHeading: 'Clinical Spectrum',
      researchHeading: 'Practice & Research',
      scheduleLink: 'Schedule Consultation',
      contactHeading: 'Contact & Clinics',
      noticePrefix: 'Important Medical Notice:',
      noticeBody:
        'The information provided on this website is for educational and clinical awareness purposes and does not constitute independent medical self-prescription. Dr. Somenath Mitra conducts individualized evaluations for each patient. We strictly advise patients never to discontinue or alter ongoing essential prescription medications without the explicit direction of their managing physician.',
      rightsReserved: "Dr. Mitra's® Multispeciality Homeopathy Clinic. All rights reserved.",
      privacyLink: 'Privacy & Records Ethics',
    },
  },
  th: {
    header: {
      practiceLabel: "คลินิก Dr. Mitra's®",
      alumnusLabel: 'ศิษย์เก่าสถาบันโฮมีโอพาธีแห่งชาติ (NIH)',
      clinicsLabel: 'คลินิกกัลกัตตา และกรุงเทพฯ',
      navConditions: 'กลุ่มโรคและการรักษา',
      navDoctor: 'เกี่ยวกับ นพ. มิตรา',
      navResearch: 'งานวิจัยนาโน',
      navCaseStudies: 'กรณีศึกษา',
      navLocations: 'ที่ตั้งคลินิก',
      mobileCallCta: 'โทร / WhatsApp - 8777507722',
      languageLabel: 'ภาษา',
    },
    hero: {
      kickerInst: 'สถาบันโฮมีโอพาธีแห่งชาติ (อินเดีย)',
      kickerExp: 'ประสบการณ์คลินิก 30+ ปี',
      kickerSource: 'ตำรับมาตรฐาน Ainsworths UK',
      headline: 'นาโนเมดิซีนเชิงวิทยาศาสตร์และโฮมีโอพาธีคลินิกสำหรับโรคเรื้อรัง',
      subtitlePrefix: 'นำโดย ',
      doctorName: 'นพ. โสมนาถ มิตรา',
      subtitleSuffix:
        ' (BHMS, NIH) คลินิกของเราพัฒนาแนวทางการรักษาแบบโฮมีโอพาธีที่อ้างอิงงานวิจัย สำหรับโรคซับซ้อน โรคแพ้ภูมิตัวเอง การดูแลประคับประคองผู้ป่วยมะเร็ง และโรคดื้อยา พร้อมติดตามผลตรวจทางห้องปฏิบัติการอย่างเป็นระบบ',
      trust1: 'ปราศจากสเตียรอยด์และยากดภูมิคุ้มกันสังเคราะห์',
      trust2: 'ที่ปรึกษากรมการแพทย์แผนไทยฯ กระทรวงสาธารณสุข',
      ctaCases: 'ดูกรณีศึกษาที่บันทึกผลแล้ว',
      complianceNote:
        '* การดูแลรักษาแบบผสมผสานควบคู่กับการวินิจฉัยมาตรฐาน ไม่แนะนำให้หยุดยาประจำที่จำเป็นโดยพลการ',
      badgeLocation: 'กัลกัตตา ซอลต์เลก และเทเลเฮลท์ กรุงเทพฯ',
      imageCaption:
        'สภาพแวดล้อมทางการแพทย์ที่อบอุ่น มุ่งเน้นการฟื้นฟูที่ต้นเหตุและความแข็งแรงระยะยาว',
      stats: {
        expLabel: 'ปีประสบการณ์ทางคลินิก',
        expSub: 'ก่อตั้งคลินิกตั้งแต่ปี 1998',
        patientsLabel: 'ผู้ป่วยที่ดูแลทั่วโลก',
        patientsSub: 'อินเดีย เอเชียตะวันออกเฉียงใต้ และยุโรป',
        remissionLabel: 'อัตราอาการสงบระยะยาว',
        remissionSub: 'บันทึกผลในกลุ่มโรคเรื้อรัง',
        ainsworthsLabel: 'ตำรับยา Ainsworths จากอังกฤษ',
        ainsworthsSub: 'เภสัชตำรับมาตรฐานราชสำนักอังกฤษ',
      },
    },
    conditions: {
      kickerLeft: 'ขอบเขตการรักษาเฉพาะทาง',
      kickerRight: 'โฮมีโอพาธีที่ติดตามผลทางคลินิก',
      heading: 'แนวทางเฉพาะบุคคลสำหรับโรคซับซ้อนและโรคเรื้อรัง',
      description:
        'ผู้ป่วยแต่ละรายมีพื้นฐานทางชีววิทยาเฉพาะตัว แทนที่จะกดอาการด้วยยาทาหรือยาเคมี แนวทางของ นพ. มิตรา มุ่งปรับสมดุลภูมิคุ้มกันระดับเซลล์ การขับสารพิษของอวัยวะสำคัญ และระบบประสาทต่อมไร้ท่ออย่างเป็นระบบ',
      filters: {
        all: 'ทุกกลุ่มโรค',
        oncology: 'มะเร็งและโลหิตวิทยา',
        autoimmune: 'แพ้ภูมิตัวเองและผิวหนัง',
        respiratory: 'ทางเดินหายใจและภูมิแพ้',
        chronic: 'โรคเรื้อรังและไต',
        metabolic: 'เมตาบอลิซึมและต่อมไร้ท่อ',
      },
      careSuffix: 'ดูแลเฉพาะทาง',
      focusAreas: 'อาการสำคัญที่ดูแล:',
      clinicalProtocol: 'รายละเอียดแนวทาง',
      bookCare: 'โทร / WhatsApp - 8777507722',
      modalRationale: 'หลักการทางคลินิกและพยาธิสภาพ',
      modalStrategy: 'กลยุทธ์การปรุงยาเฉพาะราย',
      modalSymptoms: 'กลุ่มอาการหลักที่ครอบคลุม',
      modalMetrics: 'ค่าตรวจทางห้องปฏิบัติการที่ติดตาม',
      modalDuration: 'ระยะเวลาโดยประมาณ:',
      modalCohort: 'จำนวนผู้ป่วยที่บันทึกผล:',
      modalClose: 'ปิดหน้าต่าง',
      modalBook: 'นัดประเมินเคส',
    },
    doctor: {
      kickerLeft: 'แพทย์ผู้ก่อตั้งคลินิก',
      kickerRight: 'ก่อตั้งปี 1998',
      heading: 'ผู้บุกเบิกโฮมีโอพาธีเชิงประจักษ์ที่ติดตามผลทางวิทยาศาสตร์',
      roleSubtitle: 'ผู้ก่อตั้งและหัวหน้าแพทย์ที่ปรึกษา · ประสบการณ์วิจัยคลินิก 30+ ปี',
      regNumber: 'เลขใบประกอบวิชาชีพ 21794',
      cities: 'กัลกัตตา · กรุงเทพฯ',
      philosophyLabel: 'ปรัชญาการรักษา',
      philosophyQuote:
        '“การรักษาที่แท้จริงไม่ใช่การกดอาการด้วยยาขนาดสูงขึ้นเรื่อยๆ แต่คือการถอดรหัสสัญญาณชีวภาพของร่างกาย และให้สารกระตุ้นระดับไมโครที่แม่นยำเพื่อฟื้นฟูเซลล์อย่างยั่งยืน”',
      bio1: 'ด้วยประสบการณ์กว่าสามทศวรรษในงานคลินิกและการวิจัยพัฒนายา นพ. โสมนาถ มิตรา ได้ดูแลผู้ป่วยมากกว่า 18,500 รายที่เผชิญโรคเรื้อรัง โรคแพ้ภูมิตัวเอง และภาวะเจ็บป่วยร้ายแรง',
      bio2: 'สำเร็จการศึกษาจาก National Institute of Homeopathy (NIH) เมืองกัลกัตตา ซึ่งเป็นโรงพยาบาลสอนโฮมีโอพาธีของรัฐบาลกลางที่ใหญ่ที่สุดในเอเชีย ท่านได้เชื่อมโยงศาสตร์โฮมีโอพาธีดั้งเดิมเข้ากับฟิสิกส์การเจือจางระดับนาโนสมัยใหม่',
      bio3: 'ความเชี่ยวชาญของท่านได้รับการยอมรับระดับนานาชาติ โดยได้รับเชิญจากกระทรวงสาธารณสุขแห่งราชอาณาจักรไทยให้เป็นที่ปรึกษาและกรรมการโครงการพัฒนาการแพทย์โฮมีโอพาธีระดับชาติ',
      milestonesHeading: 'เกียรติประวัติและการรับรองระดับสถาบัน',
      tenetsHeading: 'หลักปฏิบัติหลักในการตรวจรักษา',
      tenets: [
        'ซักประวัติและประเมินเชิงลึก 45–60 นาทีในการพบครั้งแรก',
        'ติดตามผลเลือดและภาพถ่ายรังสีอย่างเป็นรูปธรรมต่อเนื่อง',
        'ไม่ผสมยาหลายตำรับรวมกันโดยไม่จำเป็น',
        'สื่อสารกับผู้ป่วยโดยตรงและติดตามอาการอย่างใกล้ชิด',
      ],
    },
    research: {
      kickerLeft: 'การวิจัยชีวฟิสิกส์และเภสัชวิทยา',
      kickerRight: 'แนวทางอ้างอิงวิทยาศาสตร์',
      heading: 'วิทยาศาสตร์ของสารเจือจางระดับนาโนในการแพทย์คลินิก',
      description:
        'เภสัชวิทยาสมัยใหม่กำลังยืนยันสิ่งที่โฮมีโอพาธีคลาสสิกสังเกตพบมาอย่างยาวนาน: สารสกัดที่เจือจางอย่างยิ่งยวดทำหน้าที่เป็นสัญญาณชีวภาพระดับเซลล์และเอพิเจเนติกส์ มากกว่าการกดอาการด้วยเคมีปริมาณมาก',
      captionTitle: 'การวิเคราะห์ลักษณะระดับนาโนสเกล',
      captionDesc:
        'การตรวจด้วยกล้องจุลทรรศน์อิเล็กตรอน (TEM) และ Dynamic Light Scattering (DLS) ยืนยันการคงอยู่ของอนุภาคนาโนที่เสถียรในสารละลายที่ผ่านการเขย่าตามลำดับ',
      sourcingTitle: 'จัดหาโดยตรงจาก Ainsworths (ลอนดอน, สหราชอาณาจักร)',
      sourcingDesc:
        'ก่อตั้งในปี ค.ศ. 1867 Ainsworths ได้รับพระราชทานตราตั้งราชสำนักอังกฤษ ยาทุกตำรับปราศจาก GMO และผ่านการตรวจสอบความบริสุทธิ์อย่างเข้มงวด',
      tabs: {
        nanoparticles: 'ฟิสิกส์อนุภาคนาโน',
        hormesis: 'Hormesis และสัญญาณชีวภาพ',
        sourcing: 'มาตรฐาน Ainsworths UK',
        monitoring: 'การตรวจวัดทางห้องปฏิบัติการ',
      },
    },
    caseStudies: {
      kickerLeft: 'หลักฐานและบันทึกผลลัพธ์',
      kickerRight: 'เวชระเบียนที่บันทึกผลจริง',
      heading: 'กรณีศึกษาทางคลินิกที่ได้รับการบันทึก',
      description:
        'ตรวจสอบผลลัพธ์ก่อนและหลังการรักษาจากคลังข้อมูลของ นพ. มิตรา ซึ่งแสดงค่าตรวจทางห้องปฏิบัติการจริงในโรคแพ้ภูมิตัวเอง โรคเลือด และโรคเรื้อรังที่รักษายาก',
      selectCase: 'เลือกกรณีศึกษาผู้ป่วย',
      verifiedCase: 'ยืนยันผลแล้ว',
      postTreatment: 'หลังการรักษา:',
      baselineSub: 'ค่าตั้งต้นก่อนเริ่มการรักษา',
      remissionSub: 'ผลลัพธ์อาการสงบที่ยืนยันแล้ว',
      historyHeading: 'ประวัติและอาการนำก่อนรักษา',
      priorHeading: 'การรักษาก่อนหน้าและข้อจำกัด',
      protocolHeading: 'แนวทางตำรับยาโฮมีโอพาธีที่ใช้',
      outcomeHeading: 'ผลลัพธ์ทางคลินิกและความต่อเนื่อง',
      inquireCta: 'สอบถามสำหรับอาการใกล้เคียง',
    },
    outreach: {
      kickerLeft: 'ความร่วมมือนานาชาติและสาธารณกุศล',
      kickerRight: 'สาธารณสุขระดับโลก',
      heading: 'ขยายการเยียวยาข้ามพรมแดน',
      description:
        'นอกเหนือจากคลินิกส่วนตัว นพ. โสมนาถ มิตรา ยังอุทิศเวลาให้กับการพัฒนาระบบสาธารณสุข การแพทย์เพื่อมนุษยธรรม และมูลนิธิการกุศลอย่างต่อเนื่อง',
      foundationTitle: 'มูลนิธิโฮมีโอพาธี ดร. โสมนาถ มิตรา',
      foundationDesc:
        'มุ่งมั่นให้ชุมชนที่ขาดแคลนเข้าถึงยานาโนโฮมีโอพาธีที่อิงงานวิจัย จัดหน่วยแพทย์เคลื่อนที่ฟรี และสนับสนุนการศึกษาวิจัยทางคลินิกอิสระ',
    },
    testimonials: {
      kickerLeft: 'เสียงตอบรับจากผู้ป่วย',
      kickerRight: 'การฟื้นตัวที่ยืนยันแล้ว',
      heading: 'ได้รับความไว้วางใจจากผู้ป่วยทั่วโลก',
      description:
        'อ่านประสบการณ์จริงจากผู้ป่วยที่อาการดีขึ้นอย่างยั่งยืนและมีคุณภาพชีวิตที่ดีขึ้นภายใต้การดูแลของ นพ. โสมนาถ มิตรา',
      conditionPrefix: 'กลุ่มอาการ:',
      verifiedPatient: 'ผู้ป่วยจริงที่ยืนยันแล้ว',
    },
    locations: {
      kickerLeft: 'สถานที่ให้บริการและเทเลเฮลท์ทั่วโลก',
      kickerRight: 'กัลกัตตา และเอเชียตะวันออกเฉียงใต้',
      heading: 'ศูนย์คลินิกและการปรึกษาทางไกลนานาชาติ',
      description:
        'เข้ารับการตรวจด้วยตนเองกับ นพ. โสมนาถ มิตรา ที่คลินิกในกัลกัตตา หรือปรึกษาออนไลน์จากทั่วโลกพร้อมบริการจัดส่งยาตรงถึงบ้าน',
      suiteTitle: 'ห้องตรวจที่เงียบสงบและได้มาตรฐานสุขอนามัย',
      suiteDesc:
        'ออกแบบเพื่อการซักประวัติอย่างละเอียด การตรวจร่างกาย และการเก็บรักษาตำรับยาภายใต้การควบคุมอุณหภูมิ',
      hotlineLabel: 'สายด่วนนัดหมายโดยตรง',
      hotlineDesc:
        'ผู้ประสานงานคลินิกพร้อมให้บริการวันจันทร์–เสาร์ สำหรับการนัดหมาย ตรวจสอบผลตรวจ และจัดส่งยา',
      callClinic: 'โทรคลินิก',
      whatsappAssist: 'ติดต่อทาง WhatsApp',
      addressLabel: 'ที่อยู่:',
      timingsLabel: 'เวลาทำการ:',
      servicesLabel: 'บริการ:',
    },
    faq: {
      kicker: 'คำถามที่พบบ่อย',
      heading: 'ทำความเข้าใจแนวทางการดูแลของเรา',
      description:
        'ข้อมูลสำคัญสำหรับผู้ป่วยใหม่เกี่ยวกับขั้นตอนการตรวจรักษา ความปลอดภัยของยา และการใช้ร่วมกับการรักษาแผนปัจจุบัน',
    },
    footer: {
      overview:
        'คลินิกอย่างเป็นทางการของ นพ. โสมนาถ มิตรา (BHMS, NIH) ผู้บุกเบิกแนวทางนาโนโฮมีโอพาธีสำหรับการดูแลประคับประคองผู้ป่วยมะเร็ง โรคแพ้ภูมิตัวเอง และโรคเรื้อรังซับซ้อน',
      ainsworthsNote: 'ปรุงด้วยตำรับมาตรฐาน Ainsworths (ลอนดอน, UK) 100%',
      ethicsNote: 'ปฏิบัติการด้วยจริยธรรมทางการแพทย์และการติดตามผลตรวจจริง',
      spectrumHeading: 'กลุ่มโรคที่ดูแล',
      researchHeading: 'คลินิกและงานวิจัย',
      scheduleLink: 'นัดหมายปรึกษาแพทย์',
      contactHeading: 'ติดต่อและที่ตั้งคลินิก',
      noticePrefix: 'ประกาศทางการแพทย์สำคัญ:',
      noticeBody:
        'ข้อมูลบนเว็บไซต์นี้จัดทำขึ้นเพื่อการให้ความรู้ทางการแพทย์เท่านั้น ไม่ใช่คำแนะนำให้ซื้อยารักษาตนเอง นพ. โสมนาถ มิตรา ประเมินผู้ป่วยเป็นรายบุคคลและไม่แนะนำให้หยุดหรือปรับขนาดยาแผนปัจจุบันที่จำเป็นโดยไม่ได้รับคำสั่งจากแพทย์ผู้ดูแล',
      rightsReserved: "Dr. Mitra's® Multispeciality Homeopathy Clinic สงวนลิขสิทธิ์",
      privacyLink: 'นโยบายความเป็นส่วนตัวและจริยธรรมเวชระเบียน',
    },
  },
  bn: {
    header: {
      practiceLabel: "ডাঃ মিত্র'স® ক্লিনিক",
      alumnusLabel: 'ন্যাশনাল ইনস্টিটিউট অব হোমিওপ্যাথি (NIH) প্রাক্তনী',
      clinicsLabel: 'কলকাতা ও ব্যাংকক ক্লিনিক',
      navConditions: 'রোগ ও চিকিৎসা',
      navDoctor: 'ডাঃ মিত্র পরিচিতি',
      navResearch: 'ন্যানো-গবেষণা',
      navCaseStudies: 'কেস স্টাডি',
      navLocations: 'ক্লিনিক ঠিকানা',
      mobileCallCta: 'কল / হোয়াটসঅ্যাপ - 8777507722',
      languageLabel: 'ভাষা',
    },
    hero: {
      kickerInst: 'ন্যাশনাল ইনস্টিটিউট অব হোমিওপ্যাথি (ভারত)',
      kickerExp: '৩০+ বছরের ক্লিনিকাল অভিজ্ঞতা',
      kickerSource: 'Ainsworths UK ওষুধ',
      headline: 'জটিল ও দীর্ঘস্থায়ী রোগে বিজ্ঞানসম্মত ন্যানো-মেডিসিন ও ক্লিনিকাল হোমিওপ্যাথি',
      subtitlePrefix: 'প্রখ্যাত চিকিৎসক ',
      doctorName: 'ডাঃ সোমনাথ মিত্র',
      subtitleSuffix:
        ' (BHMS, NIH)-এর তত্ত্বাবধানে জটিল, অটোইমিউন, ক্যান্সার প্যালিয়েটিভ কেয়ার এবং দীর্ঘস্থায়ী রোগের জন্য ল্যাবরেটরি রিপোর্ট-ভিত্তিক গবেষণানির্ভর হোমিওপ্যাথি চিকিৎসা প্রদান করা হয়।',
      trust1: 'স্টেরয়েড বা রাসায়নিক ইমিউনোসাপ্রেসেন্ট মুক্ত চিকিৎসা',
      trust2: 'থাইল্যান্ড সরকারের হোমিওপ্যাথি উপদেষ্টা ও কনসালট্যান্ট',
      ctaCases: 'নথিভুক্ত কেস স্টাডি দেখুন',
      complianceNote:
        '* প্রচলিত চিকিৎসা ও ডায়াগনস্টিক পরীক্ষার পাশাপাশি সহায়ক চিকিৎসা। চলমান জরুরি ওষুধ হঠাৎ বন্ধ করার পরামর্শ দেওয়া হয় না।',
      badgeLocation: 'কলকাতা সল্টলেক ও ব্যাংকক টেলিহেলথ',
      imageCaption:
        'মূল কারণ নির্ণয় ও দীর্ঘমেয়াদী সুস্থতার জন্য রোগী-কেন্দ্রিক আধুনিক চিকিৎসা পরিবেশ।',
      stats: {
        expLabel: 'বছরের ক্লিনিকাল অভিজ্ঞতা',
        expSub: '১৯৯৮ সাল থেকে প্রতিষ্ঠিত',
        patientsLabel: 'বিশ্বজুড়ে চিকিৎসাপ্রাপ্ত রোগী',
        patientsSub: 'ভারত, দক্ষিণ-পূর্ব এশিয়া ও ইউরোপ',
        remissionLabel: 'দীর্ঘমেয়াদী উপশমের হার',
        remissionSub: 'জটিল ও দীর্ঘস্থায়ী রোগে নথিভুক্ত',
        ainsworthsLabel: 'Ainsworths UK ফর্মুলেশন',
        ainsworthsSub: 'রয়্যাল ওয়ারেন্টপ্রাপ্ত ব্রিটিশ ফার্মাকোপিয়া',
      },
    },
    conditions: {
      kickerLeft: 'বিশেষায়িত চিকিৎসা ক্ষেত্র',
      kickerRight: 'প্রমাণ-ভিত্তিক হোমিওপ্যাথি',
      heading: 'জটিল ও দীর্ঘস্থায়ী রোগের জন্য সুনির্দিষ্ট প্রোটোকল',
      description:
        'প্রতিটি রোগীর শারীরিক গঠন স্বতন্ত্র। উপসর্গ সাময়িকভাবে দমন না করে ডাঃ মিত্রের চিকিৎসা পদ্ধতি কোষীয় রোগপ্রতিরোধ ক্ষমতা, গুরুত্বপূর্ণ অঙ্গের কার্যকারিতা এবং স্নায়বিক ভারসাম্য পুনরুদ্ধারে কাজ করে।',
      filters: {
        all: 'সকল রোগ',
        oncology: 'অনকোলজি ও রক্তরোগ',
        autoimmune: 'অটোইমিউন ও চর্মরোগ',
        respiratory: 'শ্বাসকষ্ট ও অ্যালার্জি',
        chronic: 'ক্রনিক ও কিডনি রোগ',
        metabolic: 'মেটাবলিক ও হরমোন',
      },
      careSuffix: 'চিকিৎসা',
      focusAreas: 'প্রধান উপসর্গসমূহ:',
      clinicalProtocol: 'চিকিৎসা পদ্ধতি',
      bookCare: 'কল / হোয়াটসঅ্যাপ - 8777507722',
      modalRationale: 'চিকিৎসা বিজ্ঞান ও রোগতত্ত্ব',
      modalStrategy: 'ওষুধ নির্বাচন কৌশল',
      modalSymptoms: 'প্রধান লক্ষণসমূহ',
      modalMetrics: 'পর্যবেক্ষণকৃত ডায়াগনস্টিক পরীক্ষা',
      modalDuration: 'সাধারণ সময়কাল:',
      modalCohort: 'নথিভুক্ত রোগী সংখ্যা:',
      modalClose: 'বন্ধ করুন',
      modalBook: 'কেস রিভিউ বুক করুন',
    },
    doctor: {
      kickerLeft: 'ক্লিনিকের প্রধান চিকিৎসক',
      kickerRight: 'প্রতিষ্ঠিত ১৯৯৮',
      heading: 'প্রমাণ-ভিত্তিক আধুনিক হোমিওপ্যাথি বিজ্ঞানের পথিকৃৎ',
      roleSubtitle: 'প্রতিষ্ঠাতা ও প্রধান কনসালট্যান্ট · ৩০+ বছরের ক্লিনিকাল গবেষণা অভিজ্ঞতা',
      regNumber: 'রেজিঃ চিকিৎসক 21794',
      cities: 'কলকাতা · ব্যাংকক',
      philosophyLabel: 'চিকিৎসা দর্শন',
      philosophyQuote:
        '“প্রকৃত চিকিৎসা মানে কেবল ওষুধের মাত্রা বাড়িয়ে উপসর্গ দমন করা নয়; বরং শরীরের নিজস্ব জৈবিক সংকেত বুঝে সূক্ষ্ম উদ্দীপনার মাধ্যমে কোষীয় পুনর্গঠন শুরু করা।”',
      bio1: 'তিন দশকেরও বেশি সময় ধরে ক্লিনিকাল চিকিৎসা ও গবেষণায় নিবেদিত ডাঃ সোমনাথ মিত্র দীর্ঘস্থায়ী, অটোইমিউন এবং জটিল রোগে আক্রান্ত ১৮,৫০০-এর বেশি রোগীর চিকিৎসা করেছেন।',
      bio2: 'কলকাতার ন্যাশনাল ইনস্টিটিউট অব হোমিওপ্যাথি (NIH) থেকে প্রশিক্ষণপ্রাপ্ত ডাঃ মিত্র শাস্ত্রীয় কনস্টিটিউশনাল হোমিওপ্যাথির সঙ্গে আধুনিক ন্যানো-ডাইলিউশন ও ন্যানোমেডিসিন গবেষণার সমন্বয় ঘটিয়েছেন।',
      bio3: 'আন্তর্জাতিক স্বীকৃতি হিসেবে থাইল্যান্ড সরকারের জনস্বাস্থ্য মন্ত্রণালয় তাঁকে জাতীয় হোমিওপ্যাথি উন্নয়ন কমিটির কনসালট্যান্ট ও সদস্য হিসেবে নিযুক্ত করে।',
      milestonesHeading: 'প্রাতিষ্ঠানিক স্বীকৃতি ও মাইলফলক',
      tenetsHeading: 'চিকিৎসা পরামর্শের মূল নীতি',
      tenets: [
        'প্রথম সাক্ষাতে ৪৫-৬০ মিনিটের বিস্তারিত কেস-টেকিং',
        'রক্ত পরীক্ষা ও রেডিওলজি রিপোর্টের নিয়মিত পর্যালোচনা',
        'অপ্রয়োজনীয় একাধিক ওষুধের মিশ্রণ পরিহার',
        'রোগীর সঙ্গে সরাসরি যোগাযোগ ও ফলো-আপ পর্যবেক্ষণ',
      ],
    },
    research: {
      kickerLeft: 'জৈবপদার্থবিদ্যা ও ফার্মাকোলজি গবেষণা',
      kickerRight: 'বিজ্ঞানসম্মত প্রোটোকল',
      heading: 'ক্লিনিকাল চিকিৎসায় ন্যানো-ডাইলিউশনের বিজ্ঞান',
      description:
        'আধুনিক ফার্মাকোলজি প্রমাণ করছে যে অতি-সূক্ষ্ম হোমিওপ্যাথিক ডাইলিউশন রাসায়নিক দমনের বদলে কোষীয় ও এপিজেনেটিক বায়ো-সিগন্যাল হিসেবে কাজ করে।',
      captionTitle: 'ন্যানোস্কেল বৈশিষ্ট্য বিশ্লেষণ',
      captionDesc:
        'TEM এবং DLS পরীক্ষার মাধ্যমে ধারাবাহিকভাবে প্রস্তুতকৃত হোমিওপ্যাথিক ডাইলিউশনে স্থিতিশীল ন্যানো-পার্টিকেলের উপস্থিতি প্রমাণিত হয়েছে।',
      sourcingTitle: 'Ainsworths (লন্ডন, যুক্তরাজ্য) থেকে সরাসরি সংগৃহীত',
      sourcingDesc:
        '১৮৬৭ সালে প্রতিষ্ঠিত Ainsworths ব্রিটিশ রাজপরিবারের রয়্যাল ওয়ারেন্টপ্রাপ্ত প্রতিষ্ঠান। প্রতিটি ওষুধ বিশুদ্ধ ও নন-জিএমও মানসম্পন্ন।',
      tabs: {
        nanoparticles: 'ন্যানোপার্টিকেল পদার্থবিদ্যা',
        hormesis: 'হর্মেসিস ও বায়ো-সিগন্যালিং',
        sourcing: 'Ainsworths UK মানদণ্ড',
        monitoring: 'ল্যাবরেটরি ডায়াগনস্টিকস',
      },
    },
    caseStudies: {
      kickerLeft: 'প্রমাণ ও ফলাফল নথি',
      kickerRight: 'নথিভুক্ত মেডিকেল রেকর্ড',
      heading: 'নথিভুক্ত ক্লিনিকাল কেস স্টাডি',
      description:
        'অটোইমিউন, রক্তরোগ এবং জটিল দীর্ঘস্থায়ী অসুস্থতায় চিকিৎসার আগে ও পরের ল্যাবরেটরি রিপোর্টের তুলনামূলক ফলাফল দেখুন।',
      selectCase: 'রোগীর কেস নির্বাচন করুন',
      verifiedCase: 'যাচাইকৃত কেস',
      postTreatment: 'চিকিৎসা পরবর্তী:',
      baselineSub: 'চিকিৎসার পূর্বের অবস্থা',
      remissionSub: 'যাচাইকৃত উপশম ফলাফল',
      historyHeading: 'পূর্ববর্তী উপসর্গ ও রোগের ইতিহাস',
      priorHeading: 'আগের চিকিৎসা ও সীমাবদ্ধতা',
      protocolHeading: 'প্রয়োগকৃত হোমিওপ্যাথিক প্রোটোকল',
      outcomeHeading: 'ক্লিনিকাল ফলাফল ও স্থায়িত্ব',
      inquireCta: 'অনুরূপ রোগের জন্য যোগাযোগ করুন',
    },
    outreach: {
      kickerLeft: 'আন্তর্জাতিক কার্যক্রম ও জনসেবা',
      kickerRight: 'বৈশ্বিক জনস্বাস্থ্য',
      heading: 'সীমান্ত পেরিয়ে মানবিক চিকিৎসা সেবা',
      description:
        'ব্যক্তিগত ক্লিনিকের পাশাপাশি ডাঃ সোমনাথ মিত্র সরকারি স্বাস্থ্য প্রকল্প, দরিদ্র ও শরণার্থী জনগোষ্ঠীর বিনামূল্যে চিকিৎসা এবং দাতব্য গবেষণায় দীর্ঘদিন ধরে যুক্ত।',
      foundationTitle: 'ডাঃ সোমনাথ মিত্র হোমিওপ্যাথি ফাউন্ডেশন',
      foundationDesc:
        'আর্থিকভাবে পিছিয়ে পড়া মানুষের কাছে গবেষণানির্ভর ন্যানো-হোমিওপ্যাথি চিকিৎসা পৌঁছে দেওয়া, ফ্রি মেডিকেল ক্যাম্প পরিচালনা ও ক্লিনিকাল গবেষণায় সহায়তা করা।',
    },
    testimonials: {
      kickerLeft: 'রোগীদের অভিজ্ঞতা ও মতামত',
      kickerRight: 'যাচাইকৃত সুস্থতা',
      heading: 'দেশ-বিদেশের অসংখ্য রোগীর আস্থা',
      description:
        'ডাঃ সোমনাথ মিত্রের তত্ত্বাবধানে চিকিৎসা নিয়ে যাঁরা সুস্থ স্বাভাবিক জীবনে ফিরে এসেছেন, তাঁদের বাস্তব অভিজ্ঞতা পড়ুন।',
      conditionPrefix: 'রোগ:',
      verifiedPatient: 'যাচাইকৃত রোগী',
    },
    locations: {
      kickerLeft: 'ক্লিনিক কেন্দ্র ও বৈশ্বিক টেলিহেলথ',
      kickerRight: 'কলকাতা ও দক্ষিণ-পূর্ব এশিয়া',
      heading: 'ক্লিনিক ঠিকানা ও অনলাইন চিকিৎসা সেবা',
      description:
        'কলকাতার ক্লিনিকে সরাসরি সাক্ষাৎ করুন অথবা বিশ্বের যেকোনো প্রান্ত থেকে আমাদের টেলিমেডিসিন সেবার মাধ্যমে পরামর্শ নিয়ে সরাসরি ওষুধ সংগ্রহ করুন।',
      suiteTitle: 'শান্ত, জীবাণুমুক্ত আধুনিক কনসালটেশন কক্ষ',
      suiteDesc:
        'নিরিবিলি রোগী-পরীক্ষা, বিস্তারিত কেস-টেকিং এবং তাপমাত্রা-নিয়ন্ত্রিত ওষুধ সংরক্ষণের সুব্যবস্থা।',
      hotlineLabel: 'সরাসরি অ্যাপয়েন্টমেন্ট হটলাইন',
      hotlineDesc:
        'সোম থেকে শনিবার অ্যাপয়েন্টমেন্ট, রিপোর্ট পর্যালোচনা এবং ওষুধ পাঠানোর সহায়তার জন্য আমাদের কো-অর্ডিনেটর উপলব্ধ।',
      callClinic: 'কল করুন',
      whatsappAssist: 'হোয়াটসঅ্যাপ সহায়তা',
      addressLabel: 'ঠিকানা:',
      timingsLabel: 'সময়সূচী:',
      servicesLabel: 'সেবাসমূহ:',
    },
    faq: {
      kicker: 'সচরাচর জিজ্ঞাসিত প্রশ্ন',
      heading: 'আমাদের চিকিৎসা পদ্ধতি সম্পর্কে জানুন',
      description:
        'নতুন রোগীদের জন্য পরামর্শ প্রক্রিয়া, ওষুধের নিরাপত্তা এবং প্রচলিত চিকিৎসার সঙ্গে সমন্বয় সংক্রান্ত জরুরি তথ্য।',
    },
    footer: {
      overview:
        'ডাঃ সোমনাথ মিত্র (BHMS, NIH)-এর অফিশিয়াল চিকিৎসা কেন্দ্র। ক্যান্সার প্যালিয়েটিভ কেয়ার, অটোইমিউন ও জটিল দীর্ঘস্থায়ী রোগের গবেষণানির্ভর ন্যানো-হোমিওপ্যাথি চিকিৎসা।',
      ainsworthsNote: '১০০% Ainsworths (লন্ডন, UK) ওষুধ দ্বারা প্রস্তুত',
      ethicsNote: 'নৈতিক চিকিৎসা ও ল্যাবরেটরি রিপোর্ট-ভিত্তিক পর্যবেক্ষণ',
      spectrumHeading: 'চিকিৎসা ক্ষেত্র',
      researchHeading: 'ক্লিনিক ও গবেষণা',
      scheduleLink: 'পরামর্শের সময় নিন',
      contactHeading: 'যোগাযোগ ও ক্লিনিক',
      noticePrefix: 'গুরুত্বপূর্ণ চিকিৎসা বিজ্ঞপ্তি:',
      noticeBody:
        'এই ওয়েবসাইটের তথ্য কেবল স্বাস্থ্য-সচেতনতা ও শিক্ষামূলক উদ্দেশ্যে প্রদান করা হয়েছে; এটি নিজে থেকে ওষুধ গ্রহণের নির্দেশনা নয়। প্রতিটি রোগীর পৃথক মূল্যায়ন করা হয় এবং চিকিৎসকের অনুমতি ছাড়া চলমান জরুরি ওষুধ বন্ধ না করার পরামর্শ দেওয়া হয়।',
      rightsReserved: "ডাঃ মিত্র'স® মাল্টিস্পেশালিটি হোমিওপ্যাথি ক্লিনিক। সর্বস্বত্ব সংরক্ষিত।",
      privacyLink: 'গোপনীয়তা ও মেডিকেল রেকর্ড নীতিমালা',
    },
  },
};
