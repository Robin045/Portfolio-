import React from 'react';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { PortfolioProfile } from '../types';

interface EducationSectionProps {
  profile: PortfolioProfile;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ profile }) => {
  if (
    (!profile.education || profile.education.length === 0) &&
    (!profile.certifications || profile.certifications.length === 0)
  ) {
    return null;
  }

  return (
    <section id="education" className="py-16 md:py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Block */}
          {profile.education && profile.education.length > 0 && (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              
              <div className="space-y-4">
                {profile.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-base font-bold text-white">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>{edu.year}</span>
                      </div>
                    </div>

                    <div className="text-sm font-medium text-sky-400">
                      {edu.institution}
                    </div>

                    {edu.gpaOrHonors && (
                      <div className="inline-block text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                        {edu.gpaOrHonors}
                      </div>
                    )}

                    {edu.description && (
                      <p className="text-xs text-slate-400 leading-relaxed pt-1">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Block */}
          {profile.certifications && profile.certifications.length > 0 && (
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
                <Award className="w-4 h-4" />
                <span>Certifications & Credentials</span>
              </div>

              <div className="space-y-4">
                {profile.certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-slate-700 transition-all"
                  >
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">
                        {cert.name}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-indigo-400 font-medium">{cert.issuer}</span>
                        <span>•</span>
                        <span className="font-mono">{cert.date}</span>
                      </div>
                    </div>

                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors shrink-0"
                        title="View Certificate"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
