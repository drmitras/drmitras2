import React, { useState } from 'react';
import { Download, CheckCircle, FileArchive, ExternalLink, X, ShieldCheck, Layers, Sparkles, Copy, Check } from 'lucide-react';

interface WordPressDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressDownloadModal: React.FC<WordPressDownloadModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    const url = window.location.origin + '/drmitras-theme.zip';
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-stone-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-stone-900 px-6 py-6 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <FileArchive className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-300 font-semibold">WordPress Ready Package</span>
                  <span className="text-white/40">·</span>
                  <span className="text-[10px] text-stone-300">v1.0.0</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Download Dr. Mitra's WordPress Theme
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white rounded-lg p-1.5 hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6">
            {/* Primary Action Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-stone-900">drmitras-theme.zip</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">4.12 MB</span>
                </div>
                <p className="text-xs text-stone-500">
                  Ready-to-upload ZIP package with screenshot, PHP templates, CSS, JS, and images.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="/drmitras-theme.zip"
                  download="drmitras-theme.zip"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 active:scale-[0.98] transition-all rounded-lg shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .ZIP</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  title="Copy direct file URL"
                  className="p-2.5 text-stone-600 hover:text-stone-900 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Included Capabilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                <span>What's Included in this WordPress Theme</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                <div className="p-3 bg-white border border-stone-200 rounded-lg flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Jashvee Typography</strong>
                    <span className="text-stone-500 text-[11px]">Exact font weight and tracking for Dr. Mitra's brand wordmark.</span>
                  </div>
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-lg flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Interactive AJAX Booking</strong>
                    <span className="text-stone-500 text-[11px]">Appointment engine submitting to WordPress admin-ajax.php.</span>
                  </div>
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-lg flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">wp-admin Consultation Queue</strong>
                    <span className="text-stone-500 text-[11px]">Built-in chamber management menu in WordPress dashboard.</span>
                  </div>
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-lg flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900 font-semibold">Pre-compiled Tailwind CSS</strong>
                    <span className="text-stone-500 text-[11px]">No node.js build or npm install required on WordPress hosting.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 30-Second Installation Steps */}
            <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-xl p-4 space-y-2.5">
              <h4 className="text-xs font-bold text-emerald-950 flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                <span>Quick WordPress Installation Steps</span>
              </h4>
              <ol className="text-xs text-stone-700 space-y-1.5 list-decimal list-inside leading-relaxed">
                <li>Log in to your WordPress Admin Dashboard (<code className="bg-emerald-100 text-emerald-900 px-1 py-0.5 rounded text-[11px] font-mono">/wp-admin</code>).</li>
                <li>Go to <strong>Appearance → Themes</strong> and click <strong>Add New Theme</strong>.</li>
                <li>Click <strong>Upload Theme</strong> at the top, select <code className="bg-emerald-100 text-emerald-900 px-1 py-0.5 rounded text-[11px] font-mono">drmitras-theme.zip</code>, and click <strong>Install Now</strong>.</li>
                <li>Click <strong>Activate</strong>. Your clinic website and admin appointment queue are live immediately!</li>
              </ol>
            </div>
          </div>

          {/* Footer actions */}
          <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 flex items-center justify-between">
            <div className="text-[11px] text-stone-500 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>GPLv2 Licensed & WordPress Coding Standards Compliant</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 rounded-lg hover:bg-stone-200/60 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
