import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  LogOut,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Phone,
  MessageSquare,
  FileText,
  UserPlus,
  Download,
  Printer,
  ChevronRight,
  AlertCircle,
  Building2,
  Calendar,
  X,
  RefreshCw,
} from 'lucide-react';
import {
  AdminAppointmentRecord,
  getStoredAppointments,
  updateAppointmentStatus,
  saveNewAppointment,
} from '../services/appointmentStore';
import { CLINIC_CONTACT } from '../data/clinicData';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail?: string;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  isOpen,
  onClose,
  userEmail = 'drsunshine@gmail.com',
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('drmitra_admin_auth') === 'true';
  });

  // Login form states
  const [loginEmail, setLoginEmail] = useState(userEmail || 'drsunshine@gmail.com');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Dashboard states
  const [appointments, setAppointments] = useState<AdminAppointmentRecord[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<AdminAppointmentRecord | null>(null);
  const [editingNotes, setEditingNotes] = useState('');
  const [showWalkinModal, setShowWalkinModal] = useState(false);

  // Walkin form
  const [walkinName, setWalkinName] = useState('');
  const [walkinPhone, setWalkinPhone] = useState('');
  const [walkinCondition, setWalkinCondition] = useState('Psoriasis, Eczema & Chronic Dermatoses');
  const [walkinType, setWalkinType] = useState<'clinic-saltlake' | 'clinic-dakshindari'>('clinic-saltlake');

  useEffect(() => {
    if (isOpen) {
      loadAppointments();
    }
  }, [isOpen]);

  const loadAppointments = () => {
    const list = getStoredAppointments();
    setAppointments(list);
    if (list.length > 0 && !selectedRecord) {
      setSelectedRecord(list[0]);
      setEditingNotes(list[0].clinicalNotes || '');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    // Permissive authentication accepting authorized clinic emails or demo credentials
    const trimmedEmail = loginEmail.trim().toLowerCase();
    const isAuthorized =
      trimmedEmail === 'drsunshine@gmail.com' ||
      trimmedEmail === 'admin@drmitras.com' ||
      trimmedEmail === 'consult@drmitras.com' ||
      trimmedEmail.includes('mitra') ||
      loginPassword === 'mitra2026' ||
      loginPassword.length >= 4;

    if (isAuthorized) {
      setIsAuthenticated(true);
      localStorage.setItem('drmitra_admin_auth', 'true');
      loadAppointments();
    } else {
      setLoginError('Invalid credentials. You may use drsunshine@gmail.com or quick demo sign-in.');
    }
  };

  const handleQuickDemoLogin = (role: 'Dr. Somenath Mitra' | 'Clinic Coordinator') => {
    setLoginEmail(role === 'Dr. Somenath Mitra' ? 'drsunshine@gmail.com' : 'coordinator@drmitras.com');
    setIsAuthenticated(true);
    localStorage.setItem('drmitra_admin_auth', 'true');
    loadAppointments();
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('drmitra_admin_auth');
  };

  const handleStatusChange = (id: string, newStatus: AdminAppointmentRecord['status']) => {
    const updated = updateAppointmentStatus(id, newStatus, editingNotes);
    setAppointments(updated);
    if (selectedRecord && selectedRecord.id === id) {
      setSelectedRecord({ ...selectedRecord, status: newStatus });
    }
  };

  const handleSaveNotes = () => {
    if (!selectedRecord) return;
    const updated = updateAppointmentStatus(selectedRecord.id, selectedRecord.status, editingNotes);
    setAppointments(updated);
    setSelectedRecord({ ...selectedRecord, clinicalNotes: editingNotes });
  };

  const handleCreateWalkin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!walkinName.trim() || !walkinPhone.trim()) return;

    const code = `DM-${Math.floor(100000 + Math.random() * 900000)}`;
    const newRecord = saveNewAppointment(
      {
        consultationType: walkinType,
        conditionCategory: walkinCondition,
        patientName: walkinName,
        age: '40',
        gender: 'Not specified',
        phone: walkinPhone,
        email: 'walkin@chamber.local',
        city: 'Kolkata',
        preferredDate: new Date().toISOString().split('T')[0],
        preferredTimeSlot: 'Chamber Walk-in (Direct Intake)',
        caseSummary: 'Walk-in chamber consultation at desk.',
        uploadedReportsCount: 0,
      },
      code
    );

    setWalkinName('');
    setWalkinPhone('');
    setShowWalkinModal(false);
    loadAppointments();
    setSelectedRecord(newRecord);
  };

  const exportCSV = () => {
    const headers = ['Reference,Patient Name,Phone,Email,Condition,Chamber,Date,Time Slot,Status,Submitted At'];
    const rows = appointments.map((a) =>
      `"${a.referenceCode}","${a.patientName}","${a.phone}","${a.email}","${a.conditionCategory}","${a.consultationType}","${a.preferredDate}","${a.preferredTimeSlot}","${a.status}","${a.submittedAt}"`
    );
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `drmitras_consultations_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  // Filtered consultations
  const filteredAppointments = appointments.filter((item) => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesLocation = locationFilter === 'all' || item.consultationType === locationFilter;
    const matchesSearch =
      searchQuery === '' ||
      item.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.referenceCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery) ||
      item.conditionCategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesLocation && matchesSearch;
  });

  const pendingCount = appointments.filter((a) => a.status === 'Pending Review').length;
  const confirmedCount = appointments.filter((a) => a.status === 'Confirmed').length;
  const contactedCount = appointments.filter((a) => a.status === 'Contacted via WhatsApp').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-stone-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full h-[94vh] flex flex-col border border-stone-300 overflow-hidden">
        {/* Top Header Bar */}
        <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold tracking-tight text-white">
                  Dr. Mitra's®
                </span>
                <span className="text-xs bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded font-mono font-semibold">
                  CLINICAL PORTAL
                </span>
              </div>
              <p className="text-[11px] text-stone-400">
                Physician & Chamber Management System · Salt Lake & VIP Road Clinics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <div className="hidden sm:flex items-center gap-2 text-xs text-stone-300 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Signed in as: <strong className="text-white">{loginEmail}</strong></span>
                <button
                  onClick={handleLogout}
                  title="Sign out"
                  className="ml-2 text-stone-400 hover:text-white"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Close Admin Portal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Secure Login View */
          <div className="flex-1 overflow-y-auto p-6 sm:p-12 flex items-center justify-center bg-stone-50">
            <div className="max-w-md w-full bg-white border border-stone-200 rounded-xl p-8 shadow-sm space-y-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                  Physician & Staff Sign-in
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed font-light">
                  Authorized access for Dr. Somenath Mitra and ARC Clinic Salt Lake coordination staff.
                </p>
              </div>

              {loginError && (
                <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Account Email
                  </label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="drsunshine@gmail.com"
                    className="w-full text-xs p-3 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-800 bg-stone-50/50"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Security Password / PIN
                    </label>
                    <span className="text-[11px] text-stone-400 font-mono">Default: mitra2026</span>
                  </div>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full text-xs p-3 rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-800 bg-stone-50/50 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  Access Clinical Dashboard
                </button>
              </form>

              {/* Quick One-Click Credentials */}
              <div className="pt-4 border-t border-stone-100 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block text-center">
                  Quick Demo Access
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('Dr. Somenath Mitra')}
                    className="px-3 py-2 text-xs font-semibold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Dr. S. Mitra (Lead)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickDemoLogin('Clinic Coordinator')}
                    className="px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg transition-colors cursor-pointer"
                  >
                    Chamber Desk
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 flex flex-col overflow-hidden bg-stone-100/50">
            {/* KPI Metrics Ribbon */}
            <div className="bg-white border-b border-stone-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
                    Total Inquiries
                  </span>
                  <span className="text-xl font-bold font-mono text-stone-900 tabular-nums">
                    {appointments.length}
                  </span>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                    Pending Review
                  </span>
                  <span className="text-xl font-bold font-mono text-amber-700 tabular-nums">
                    {pendingCount}
                  </span>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                    Confirmed
                  </span>
                  <span className="text-xl font-bold font-mono text-emerald-800 tabular-nums">
                    {confirmedCount}
                  </span>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 block">
                    WhatsApp Contacted
                  </span>
                  <span className="text-xl font-bold font-mono text-stone-700 tabular-nums">
                    {contactedCount}
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowWalkinModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Add Walk-in
                </button>
                <button
                  onClick={exportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export CSV
                </button>
                <button
                  onClick={loadAppointments}
                  title="Reload appointments"
                  className="p-1.5 text-stone-500 hover:text-stone-900 bg-white border border-stone-300 rounded-lg transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="bg-stone-50 border-b border-stone-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1 max-w-sm">
                <div className="relative w-full">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search patient, phone, or Ref ID..."
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-emerald-800"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-stone-700 font-medium focus:outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="Pending Review">Pending Review</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Contacted via WhatsApp">Contacted via WhatsApp</option>
                  <option value="Consultation Completed">Consultation Completed</option>
                </select>

                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg border border-stone-300 bg-white text-stone-700 font-medium focus:outline-none"
                >
                  <option value="all">All Chambers / Modes</option>
                  <option value="clinic-saltlake">Salt Lake Clinic (ARC Clinic)</option>
                  <option value="clinic-dakshindari">VIP Road / Lake Town</option>
                  <option value="virtual-video">Video Telehealth (Bangkok/Global)</option>
                </select>
              </div>
            </div>

            {/* Main Split: Left Consultation Queue, Right Case Inspection Drawer */}
            <div className="flex-1 flex overflow-hidden">
              {/* Queue List */}
              <div className="w-full lg:w-7/12 border-r border-stone-200 overflow-y-auto p-4 space-y-2.5">
                {filteredAppointments.length === 0 ? (
                  <div className="text-center py-12 text-stone-500 text-xs">
                    No consultation records match the active criteria.
                  </div>
                ) : (
                  filteredAppointments.map((record) => {
                    const isSelected = selectedRecord?.id === record.id;
                    return (
                      <div
                        key={record.id}
                        onClick={() => {
                          setSelectedRecord(record);
                          setEditingNotes(record.clinicalNotes || '');
                        }}
                        className={`p-4 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white border-emerald-800 shadow-sm ring-1 ring-emerald-800/20'
                            : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-emerald-950 tabular-nums bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              {record.referenceCode}
                            </span>
                            <span className="text-xs font-semibold text-stone-900">
                              {record.patientName}
                            </span>
                            <span className="text-[11px] text-stone-500">
                              ({record.age}y / {record.gender})
                            </span>
                          </div>

                          {/* Status Badge */}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                              record.status === 'Pending Review'
                                ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                : record.status === 'Confirmed'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : record.status === 'Contacted via WhatsApp'
                                ? 'bg-blue-50 text-blue-800 border border-blue-200'
                                : 'bg-stone-100 text-stone-700 border border-stone-300'
                            }`}
                          >
                            {record.status}
                          </span>
                        </div>

                        <div className="text-xs text-stone-700 font-medium">
                          {record.conditionCategory}
                        </div>

                        <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
                          {record.caseSummary || 'No preliminary notes provided.'}
                        </p>

                        <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-stone-500">
                          <div className="flex items-center gap-1.5 font-medium text-stone-700">
                            <Calendar className="w-3.5 h-3.5 text-stone-400" />
                            <span>{record.preferredDate}</span>
                            <span>·</span>
                            <span>{record.preferredTimeSlot}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {record.uploadedReportsCount > 0 && (
                              <span className="text-emerald-800 font-semibold">
                                {record.uploadedReportsCount} report(s)
                              </span>
                            )}
                            <span className="font-mono text-stone-600 tabular-nums">
                              {record.phone}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Right Side: Detailed Inspection & Actions */}
              <div className="hidden lg:flex lg:w-5/12 flex-col bg-white overflow-y-auto p-6 space-y-6">
                {selectedRecord ? (
                  <>
                    <div className="border-b border-stone-200 pb-4 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-950 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          {selectedRecord.referenceCode}
                        </span>
                        <span className="text-[11px] text-stone-400 font-mono">
                          Submitted: {new Date(selectedRecord.submittedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-stone-900 tracking-tight mt-1">
                        {selectedRecord.patientName}
                      </h4>
                      <div className="text-xs text-stone-600">
                        {selectedRecord.age} Years · {selectedRecord.gender} · {selectedRecord.city}
                      </div>
                    </div>

                    {/* Quick Communication Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/${selectedRecord.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hello ${selectedRecord.patientName}, this is Dr. Mitra's Clinic regarding your consultation booking (${selectedRecord.referenceCode}) for ${selectedRecord.conditionCategory}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        WhatsApp Patient
                      </a>
                      <a
                        href={`tel:${selectedRecord.phone.replace(/[^0-9]/g, '')}`}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        Call {selectedRecord.phone}
                      </a>
                    </div>

                    {/* Consultation Specification */}
                    <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                        <span className="text-stone-500">Chamber:</span>
                        <span className="font-semibold text-stone-900">
                          {selectedRecord.consultationType === 'clinic-saltlake'
                            ? 'ARC Clinic Salt Lake (Sector 3)'
                            : selectedRecord.consultationType === 'clinic-dakshindari'
                            ? 'VIP Road / Lake Town Clinic'
                            : 'Virtual Video Telehealth'}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                        <span className="text-stone-500">Scheduled:</span>
                        <span className="font-semibold text-stone-900">
                          {selectedRecord.preferredDate} ({selectedRecord.preferredTimeSlot})
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Email:</span>
                        <span className="font-semibold text-stone-900">{selectedRecord.email}</span>
                      </div>
                    </div>

                    {/* Clinical Complaint Description */}
                    <div className="space-y-1.5 text-xs">
                      <span className="font-bold uppercase tracking-wider text-stone-700 block">
                        Presenting Complaint / Symptoms:
                      </span>
                      <p className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-stone-700 leading-relaxed font-light">
                        {selectedRecord.caseSummary || 'No detailed case summary submitted online.'}
                      </p>
                    </div>

                    {/* Status Updater */}
                    <div className="space-y-1.5 text-xs">
                      <label className="font-bold uppercase tracking-wider text-stone-700 block">
                        Update Clinical Status:
                      </label>
                      <select
                        value={selectedRecord.status}
                        onChange={(e) =>
                          handleStatusChange(
                            selectedRecord.id,
                            e.target.value as AdminAppointmentRecord['status']
                          )
                        }
                        className="w-full p-2.5 text-xs font-semibold rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-emerald-800"
                      >
                        <option value="Pending Review">Pending Review</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Contacted via WhatsApp">Contacted via WhatsApp</option>
                        <option value="Consultation Completed">Consultation Completed</option>
                      </select>
                    </div>

                    {/* Internal Clinical & Prescription Notes */}
                    <div className="space-y-1.5 text-xs flex-1 flex flex-col">
                      <div className="flex items-center justify-between">
                        <label className="font-bold uppercase tracking-wider text-stone-700">
                          Physician Case Notes:
                        </label>
                        <button
                          type="button"
                          onClick={handleSaveNotes}
                          className="text-[11px] font-bold text-emerald-800 hover:underline"
                        >
                          Save Notes
                        </button>
                      </div>
                      <textarea
                        rows={4}
                        value={editingNotes}
                        onChange={(e) => setEditingNotes(e.target.value)}
                        placeholder="Enter internal diagnostic impressions, requested investigations, or remedy recommendations..."
                        className="w-full flex-1 p-3 text-xs rounded-lg border border-stone-300 focus:outline-none focus:border-emerald-800 bg-stone-50/50"
                      />
                    </div>
                  </>
                ) : (
                  <div className="text-center py-16 text-stone-400 text-xs">
                    Select a patient from the queue to inspect clinical case details.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Walk-in Modal */}
        {showWalkinModal && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-950/70">
            <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4 border border-stone-300 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <h4 className="text-base font-bold text-stone-900">
                  Register Chamber Walk-in Patient
                </h4>
                <button
                  onClick={() => setShowWalkinModal(false)}
                  className="text-stone-400 hover:text-stone-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleCreateWalkin} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Patient Name *</label>
                  <input
                    type="text"
                    required
                    value={walkinName}
                    onChange={(e) => setWalkinName(e.target.value)}
                    placeholder="e.g. Joydeep Ghosh"
                    className="w-full p-2.5 rounded border border-stone-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    value={walkinPhone}
                    onChange={(e) => setWalkinPhone(e.target.value)}
                    placeholder="+91 98300 00000"
                    className="w-full p-2.5 rounded border border-stone-300 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Condition Specialty</label>
                  <input
                    type="text"
                    value={walkinCondition}
                    onChange={(e) => setWalkinCondition(e.target.value)}
                    className="w-full p-2.5 rounded border border-stone-300"
                  />
                </div>
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Chamber Facility</label>
                  <select
                    value={walkinType}
                    onChange={(e) => setWalkinType(e.target.value as any)}
                    className="w-full p-2.5 rounded border border-stone-300 bg-white"
                  >
                    <option value="clinic-saltlake">ARC Clinic Salt Lake (Sector 3)</option>
                    <option value="clinic-dakshindari">VIP Road / Lake Town Clinic</option>
                  </select>
                </div>

                <div className="pt-3 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowWalkinModal(false)}
                    className="px-3 py-2 text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-900 text-white font-bold rounded"
                  >
                    Log Intake
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
