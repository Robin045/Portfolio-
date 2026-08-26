import React from 'react';
import { Cpu, CheckCircle2, Layers } from 'lucide-react';
import { PortfolioProfile } from '../types';

interface SkillsSectionProps {
  profile: PortfolioProfile;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ profile }) => {
  return (
    <section id="skills" className="py-16 md:py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills & Tooling
          </h2>
          <p className="text-slate-400 mt-2 text-base">
            Core programming languages, framework ecosystems, databases, and DevOps workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700/80 transition-all shadow-md"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <h3 className="text-base font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80"
                  >
                    <span className="text-xs font-medium text-slate-200">
                      {skill.name}
                    </span>
                    {skill.level && (
                      <span className="text-[10px] font-mono text-sky-400/90 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-800/40">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
