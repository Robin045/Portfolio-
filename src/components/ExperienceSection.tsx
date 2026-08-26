import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { PortfolioProfile } from '../types';

interface ExperienceSectionProps {
  profile: PortfolioProfile;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ profile }) => {
  return (
    <section id="experience" className="py-16 md:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="text-slate-400 mt-2 text-base">
            Track record of shipping software solutions, scaling systems, and driving impact.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {profile.experiences.map((exp, index) => (
            <div key={exp.id || index} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-sky-400 animate-pulse' : 'bg-slate-400'}`} />
              </div>

              {/* Experience Card */}
              <div className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 hover:border-slate-700/80 transition-all shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/60">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-sky-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Summary */}
                {exp.summary && (
                  <p className="text-sm text-slate-300 mt-4 leading-relaxed font-medium">
                    {exp.summary}
                  </p>
                )}

                {/* Bullets */}
                <ul className="mt-3 space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mr-1">
                      Stack:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
