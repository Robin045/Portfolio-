import React, { useState } from 'react';
import { 
  FileText, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  Check, 
  ArrowRight, 
  Linkedin, 
  Github, 
  ExternalLink,
  Sparkles,
  Clock,
  Briefcase
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface HeroSectionProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile, onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkedinLink = profile.socials.find(s => s.platform.toLowerCase() === 'linkedin')?.url || 'https://linkedin.com';
  const githubLink = profile.socials.find(s => s.platform.toLowerCase() === 'github')?.url || 'https://github.com';

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600/5 blur-2xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-slate-300 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-emerald-400">
                {profile.availableForHire ? 'Available for New Roles' : 'Software Engineer'}
              </span>
              {profile.noticePeriod && (
                <>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {profile.noticePeriod}
                  </span>
                </>
              )}
            </div>

            {/* Name and Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-300 to-blue-400">{profile.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                {profile.title}
              </p>
            </div>

            {/* Tagline / Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* Meta Tags (Location, Email copy) */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{profile.location}</span>
              </div>

              <button
                id="hero-copy-email-btn"
                onClick={copyEmail}
                className="flex items-center gap-1.5 bg-slate-900/60 hover:bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-mono">{profile.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 ml-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-500 ml-1" />
                )}
              </button>
            </div>

            {/* Primary Action Buttons for Recruiters */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 rounded-xl hover:text-white transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Connect:</span>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-300 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics / Recruiter Overview Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Quick Summary</h3>
                    <p className="text-xs text-slate-400">Key Highlights</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                  Recruiter View
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-5">
                {profile.stats.map((stat, i) => (
                  <div key={i} className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Full-time & Contract ready</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Clean commit history & documentation</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Interactive resume ready to review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
