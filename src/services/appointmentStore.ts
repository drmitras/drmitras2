import { BookingFormData } from '../types';

export interface AdminAppointmentRecord extends BookingFormData {
  id: string;
  referenceCode: string;
  submittedAt: string;
  status: 'Pending Review' | 'Confirmed' | 'Contacted via WhatsApp' | 'Consultation Completed';
  clinicalNotes?: string;
}

const STORAGE_KEY = 'drmitra_appointments_registry';

export const INITIAL_APPOINTMENTS: AdminAppointmentRecord[] = [
  {
    id: 'apt-101',
    referenceCode: 'DM-784291',
    submittedAt: '2026-11-11T16:20:00Z',
    consultationType: 'clinic-saltlake',
    conditionCategory: 'Psoriasis, Eczema & Chronic Dermatoses',
    patientName: 'Subhasish Chakraborty',
    age: '46',
    gender: 'Male',
    phone: '+91 98311 45890',
    email: 'subhasish.c@gmail.com',
    city: 'Kolkata (Bidhannagar)',
    preferredDate: '2026-11-13',
    preferredTimeSlot: 'Morning (10:30 AM – 1:30 PM)',
    caseSummary: '10-year history of plaque psoriasis on elbows and knees. Rebounding severely whenever clobetasol steroid cream is tapered off.',
    uploadedReportsCount: 2,
    status: 'Pending Review',
    clinicalNotes: 'Advised bringing previous biopsy report and CBC/ESR panels.',
  },
  {
    id: 'apt-102',
    referenceCode: 'DM-892104',
    submittedAt: '2026-11-11T14:05:00Z',
    consultationType: 'virtual-video',
    conditionCategory: 'Myelodysplastic Syndrome (MDS) & Cytopenias',
    patientName: 'Karnika Srisawat',
    age: '62',
    gender: 'Female',
    phone: '+66 81 923 4410',
    email: 'karnika.s@bangkokmed.th',
    city: 'Bangkok, Thailand',
    preferredDate: '2026-11-14',
    preferredTimeSlot: 'Virtual Video Window (Flexible)',
    caseSummary: 'Refractory cytopenia, requiring regular PRBC transfusions. Seeking high-potency nano-homeopathic protocol for bone marrow stimulation.',
    uploadedReportsCount: 4,
    status: 'Confirmed',
    clinicalNotes: 'Video link sent via WhatsApp. Dr. Mitra scheduled for 3:00 PM ICT.',
  },
  {
    id: 'apt-103',
    referenceCode: 'DM-491028',
    submittedAt: '2026-11-10T11:45:00Z',
    consultationType: 'clinic-saltlake',
    conditionCategory: 'Advanced Oncology & Palliative Protocols',
    patientName: 'Rameshwar Nath Mukherjee',
    age: '59',
    gender: 'Male',
    phone: '+91 89022 34119',
    email: 'r.mukherjee@outlook.com',
    city: 'Salt Lake, Kolkata',
    preferredDate: '2026-11-12',
    preferredTimeSlot: 'Morning (10:30 AM – 1:30 PM)',
    caseSummary: 'Post-chemotherapy extreme cachexia, peripheral neuropathy, and persistent grade 3 fatigue. Seeking complementary biological support.',
    uploadedReportsCount: 3,
    status: 'Contacted via WhatsApp',
    clinicalNotes: 'Discussed integrative compatibility with treating oncologist.',
  },
  {
    id: 'apt-104',
    referenceCode: 'DM-619283',
    submittedAt: '2026-11-09T18:30:00Z',
    consultationType: 'clinic-saltlake',
    conditionCategory: 'Bronchial Asthma & Chronic Allergic Rhinitis',
    patientName: 'Anushka Sen (Child)',
    age: '8',
    gender: 'Female',
    phone: '+91 94330 98214',
    email: 'sen.family@gmail.com',
    city: 'Lake Town, Kolkata',
    preferredDate: '2026-11-11',
    preferredTimeSlot: 'Evening (5:30 PM – 8:30 PM)',
    caseSummary: 'Frequent nocturnal wheezing and emergency nebulizer visits. Mother wishes to safely taper inhalers.',
    uploadedReportsCount: 1,
    status: 'Consultation Completed',
    clinicalNotes: 'Prescribed Natrum Sulph 200CH and Blatta Q drops with peak flow diary.',
  },
];

export function getStoredAppointments(): AdminAppointmentRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_APPOINTMENTS));
      return INITIAL_APPOINTMENTS;
    }
    return JSON.parse(raw);
  } catch (err) {
    return INITIAL_APPOINTMENTS;
  }
}

export function saveNewAppointment(data: BookingFormData, code: string): AdminAppointmentRecord {
  const current = getStoredAppointments();
  const record: AdminAppointmentRecord = {
    ...data,
    id: `apt-${Date.now()}`,
    referenceCode: code,
    submittedAt: new Date().toISOString(),
    status: 'Pending Review',
    clinicalNotes: '',
  };
  const updated = [record, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return record;
}

export function updateAppointmentStatus(id: string, status: AdminAppointmentRecord['status'], notes?: string): AdminAppointmentRecord[] {
  const current = getStoredAppointments();
  const updated = current.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        status,
        clinicalNotes: notes !== undefined ? notes : item.clinicalNotes,
      };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error(e);
  }
  return updated;
}
