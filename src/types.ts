export interface ConditionItem {
  id: string;
  name: string;
  category: 'oncology' | 'autoimmune' | 'respiratory' | 'chronic' | 'metabolic';
  summary: string;
  description: string;
  symptoms: string[];
  protocolApproach: string;
  monitoringMetrics: string[];
  avgDuration: string;
  caseCount: string;
}

export interface CaseStudyItem {
  id: string;
  condition: string;
  patientAgeGender: string;
  presentingComplaint: string;
  priorTreatments: string;
  remedyApproach: string;
  timeline: string;
  initialMetrics: { label: string; value: string };
  finalMetrics: { label: string; value: string };
  outcomeSummary: string;
  verifiedStatus: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  landmark: string;
  timings: string;
  phone: string;
  type: 'Primary Clinic' | 'Branch Clinic' | 'International Liaison';
  consultationModes: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  condition: string;
  duration: string;
  rating: number;
  quote: string;
  verifiedPatient: boolean;
}

export interface BookingFormData {
  consultationType: 'clinic-saltlake' | 'virtual-video' | 'phone';
  conditionCategory: string;
  patientName: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  city: string;
  preferredDate: string;
  preferredTimeSlot: string;
  caseSummary: string;
  uploadedReportsCount: number;
}
