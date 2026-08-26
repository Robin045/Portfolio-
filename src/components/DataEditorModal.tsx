import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Copy, 
  Check, 
  Edit3, 
  Code, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { PortfolioProfile } from '../types';
import { defaultPortfolioData } from '../data/initialData';

interface DataEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
  onSaveProfile: (newProfile: PortfolioProfile) => void;
}

export const DataEditorModal: React.FC<DataEditorModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'json'>('form');
  const [formData, setFormData] = useState<PortfolioProfile>(profile);
  const [jsonText, setJsonText] = useState<string>(JSON.stringify(profile, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFormChange = (field: keyof PortfolioProfile, value: any) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setJsonText(JSON.stringify(updated, null, 2));
  };

  const handleJsonChange = (val: string) => {
    setJsonText(val);
    try {
      const parsed = JSON.parse(val);
      setJsonError(null);
      setFormData(parsed);
    } catch (e: any) {
      setJsonError(e.message);
    }
  };

  const handleSave = () => {
    if (activeTab === 'json' && jsonError) return;
    const toSave = activeTab === 'json' ? JSON.parse(jsonText) : formData;
    onSaveProfile(toSave);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1000);
  };

  const handleResetDefault = () => {
    if (confirm('Reset to standard portfolio template?')) {
      setFormData(defaultPortfolioData);
      setJsonText(JSON.stringify(defaultPortfolioData, null, 2));
    }
  };

  const copyJson = () => {
    navigator.clipboard.writeText(jsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">
                Customize Profile & Resume Data
              </h2>
              <p className="text-xs text-slate-400">
                You can also paste your resume details directly in chat and I'll update it!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-slate-950/60 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'form'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Quick Form
            </button>
            <button
              onClick={() => setActiveTab('json')}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                activeTab === 'json'
                  ? 'bg-sky-500 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Full JSON Data
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyJson}
              className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 bg-slate-800 rounded-lg"
              title="Copy Profile JSON"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy JSON'}</span>
            </button>
            <button
              onClick={handleResetDefault}
              className="flex items-center gap-1 px-2.5 py-1 text-xs text-slate-400 hover:text-rose-400 bg-slate-800 rounded-lg"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {activeTab === 'form' ? (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFormChange('name', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Professional Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleFormChange('title', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1">Tagline / Elevator Pitch</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => handleFormChange('tagline', e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange('email', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleFormChange('location', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-300 mb-1">Availability / Notice</label>
                  <input
                    type="text"
                    value={formData.noticePeriod || ''}
                    onChange={(e) => handleFormChange('noticePeriod', e.target.value)}
                    placeholder="e.g. Immediate / 2 Weeks"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 space-y-1">
                <span className="font-semibold text-sky-400">💡 Pro Tip:</span>
                <p>
                  You can send me your resume text, LinkedIn URL, GitHub repo links, or past project summaries directly in chat, and I will format and update all sections for you!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {jsonError && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>JSON Syntax Error: {jsonError}</span>
                </div>
              )}
              <textarea
                rows={16}
                value={jsonText}
                onChange={(e) => handleJsonChange(e.target.value)}
                className="w-full font-mono text-xs p-4 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-sky-500"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={activeTab === 'json' && !!jsonError}
            className="flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 rounded-xl transition-all shadow-md shadow-sky-600/20"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
            <span>{savedSuccess ? 'Saved Changes!' : 'Apply & Save'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
