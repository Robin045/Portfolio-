import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  Phone, 
  MapPin, 
  Clock, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface ContactSectionProps {
  profile: PortfolioProfile;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (profile.phone) {
      navigator.clipboard.writeText(profile.phone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    }
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(subject || 'Recruiter Inquiry / Opportunity')}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  const linkedinLink = profile.socials.find(s => s.platform.toLowerCase() === 'linkedin')?.url || 'https://linkedin.com';
  const githubLink = profile.socials.find(s => s.platform.toLowerCase() === 'github')?.url || 'https://github.com';
  const locationUrl = profile.locationUrl || 'https://maps.app.goo.gl/4QsTTDu55dY2h4v48';
  const phoneTel = profile.phone ? `tel:${profile.phone.replace(/[^\d+]/g, '')}` : 'tel:+918684805719';

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let's discuss opportunities
          </h2>
          <p className="text-slate-400 mt-2 text-base">
            I am currently open to full-time engineering roles, high-impact contract projects, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Email</span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Replies &lt; 24h
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-sm font-mono text-slate-200 select-all">{profile.email}</span>
                <button
                  id="contact-copy-email-btn"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-xl transition-colors shadow-md shadow-sky-600/20"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>
            </div>

            {/* Quick Links Card */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Online Profiles & Location
              </h3>

              <div className="space-y-2 pt-1">
                <a
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span className="text-sm font-medium">LinkedIn Profile</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Connect &rarr;</span>
                </a>

                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium">GitHub Repositories</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Explore &rarr;</span>
                </a>

                {profile.phone && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group">
                    <a
                      id="contact-phone-link"
                      href={phoneTel}
                      className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 text-sm transition-colors grow"
                      title={`Call ${profile.phone}`}
                    >
                      <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span className="font-mono">{profile.phone}</span>
                    </a>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={copyPhone}
                        className="p-1 text-slate-500 hover:text-slate-200 transition-colors rounded"
                        title="Copy phone number"
                      >
                        {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={phoneTel}
                        className="text-xs text-emerald-400 font-mono hover:underline hidden sm:inline"
                      >
                        Call &rarr;
                      </a>
                    </div>
                  </div>
                )}

                <a
                  id="contact-location-link"
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors group"
                  title="Open exact home location on Google Maps"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <span className="text-xs text-sky-400 font-mono flex items-center gap-1 shrink-0">
                    Google Maps <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div>
                <h3 className="text-lg font-bold text-white">Send a Quick Note</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Draft a message below to launch your email client pre-addressed to {profile.name}.
                </p>
              </div>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Subject / Role Details
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Senior Full-Stack Role at [Company]"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi! We came across your portfolio and were impressed by your background. We'd love to schedule a brief intro..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-xl shadow-md shadow-sky-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
