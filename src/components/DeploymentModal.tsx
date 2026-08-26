import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  Terminal, 
  Sparkles, 
  Rocket, 
  Github 
} from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedBuildCmd, setCopiedBuildCmd] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copyBuildCmd = () => {
    navigator.clipboard.writeText('npm run build');
    setCopiedBuildCmd(true);
    setTimeout(() => setCopiedBuildCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-sky-400" />
            <h2 className="text-base font-bold text-white">
              Deploy & Share Your Portfolio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Method 1: Instant AI Studio Public Link */}
          <div className="bg-slate-950/80 border border-sky-500/30 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400" />
                <h3 className="font-semibold text-white">1. Instant Live Web URL</h3>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                Active & Live Now
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your portfolio is already running live in the cloud! You can share this URL directly with recruiters, attach it to your resume, or paste it onto your LinkedIn header.
            </p>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg p-2">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="w-full bg-transparent text-xs font-mono text-slate-300 focus:outline-none select-all"
              />
              <button
                onClick={copyLink}
                className="flex items-center gap-1 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-md text-xs font-medium transition-colors shrink-0"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Method 2: Deploy to Vercel or Netlify */}
          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <h3 className="font-semibold text-white">2. Deploy to Vercel / Netlify / Custom Domain</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Want a personalized domain like <code className="text-sky-300">yourname.vercel.app</code> or <code className="text-sky-300">yourname.dev</code>? You can export this project in 3 simple steps:
            </p>

            <ol className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[11px] font-bold text-sky-400 shrink-0">1</span>
                <span><strong>Export Code:</strong> Click the <strong>Settings</strong> icon at top right of AI Studio &rarr; choose <strong>Export to GitHub</strong> or <strong>Download ZIP</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[11px] font-bold text-sky-400 shrink-0">2</span>
                <span><strong>Connect to Vercel / Netlify:</strong> Go to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">vercel.com</a> or <a href="https://app.netlify.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">netlify.com</a> and import your GitHub repository.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[11px] font-bold text-sky-400 shrink-0">3</span>
                <span><strong>Auto-Deploy:</strong> Framework preset is <strong>Vite</strong>. Build command: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-sky-300 font-mono">npm run build</code>, output directory: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-sky-300 font-mono">dist</code>.</span>
              </li>
            </ol>
          </div>

          {/* Quick Share Tips */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 space-y-2 text-xs text-slate-400">
            <h4 className="font-semibold text-slate-200">Recruiter Sharing Checklist:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Add this live link to the contact header on your PDF resume.</li>
              <li>Include the URL in your LinkedIn profile's "Website" &amp; "Featured" section.</li>
              <li>Include the link in your cold email introductions or job application forms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
