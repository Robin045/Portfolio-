import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Phone, 
  ExternalLink,
  Briefcase,
  GraduationCap,
  Cpu
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const linkedinLink = profile.socials.find(s => s.platform.toLowerCase() === 'linkedin')?.url;
  const githubLink = profile.socials.find(s => s.platform.toLowerCase() === 'github')?.url;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <h2 className="text-sm font-semibold text-white">
              Resume Preview – {profile.name}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950/60 text-slate-200 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {profile.name}
              </h1>
              <span className="text-sm font-semibold text-sky-400">
                {profile.title}
              </span>
            </div>

            {/* Contact details row */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a 
                href={`mailto:${profile.email}`} 
                className="flex items-center gap-1 hover:text-sky-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {profile.email}
              </a>
              {profile.phone && (
                <a 
                  href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`} 
                  className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
                  title={`Call ${profile.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  {profile.phone}
                </a>
              )}
              <a 
                href={profile.locationUrl || 'https://maps.app.goo.gl/4QsTTDu55dY2h4v48'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1 hover:text-sky-400 transition-colors"
                title="View location on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {profile.location}
              </a>
              {linkedinLink && (
                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sky-400 hover:underline">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              )}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-slate-300 hover:underline">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {profile.about.join(' ')}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
              Work Experience
            </h3>

            <div className="space-y-5">
              {profile.experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">
                      {exp.role} <span className="font-normal text-slate-400">| {exp.company}</span>
                    </span>
                    <span className="font-mono text-slate-400 text-xs">{exp.period}</span>
                  </div>

                  {exp.summary && (
                    <p className="text-xs text-slate-300 italic">{exp.summary}</p>
                  )}

                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="pl-1">{b}</li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <p className="text-[11px] text-slate-400 font-mono pt-1">
                      <strong className="text-slate-300">Technologies:</strong> {exp.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
              Key Projects
            </h3>

            <div className="space-y-3">
              {profile.projects.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[11px] font-mono text-slate-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{proj.description}</p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    <strong className="text-slate-300">Stack:</strong> {proj.technologies.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
              Skills & Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {profile.skillCategories.map((cat, idx) => (
                <div key={idx} className="text-slate-300">
                  <strong className="text-white">{cat.category}:</strong>{' '}
                  {cat.skills.map(s => s.name).join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-1">
              Education & Certifications
            </h3>
            <div className="space-y-2 text-xs">
              {profile.education.map(edu => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span> – {edu.institution}
                    {edu.gpaOrHonors && <span className="text-slate-400"> ({edu.gpaOrHonors})</span>}
                  </div>
                  <span className="font-mono text-slate-400">{edu.year}</span>
                </div>
              ))}
              {profile.certifications && profile.certifications.map(cert => (
                <div key={cert.id} className="flex justify-between text-slate-300">
                  <span>{cert.name} – <span className="text-slate-400">{cert.issuer}</span></span>
                  <span className="font-mono text-slate-400">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
