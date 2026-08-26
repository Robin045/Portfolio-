import React from 'react';
import { User, Code2, Rocket, Compass, CheckCircle } from 'lucide-react';
import { PortfolioProfile } from '../types';

interface AboutSectionProps {
  profile: PortfolioProfile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Passionate about engineering reliable, impactful software
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed">
            {profile.about.map((paragraph, index) => (
              <p key={index} className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pillars & Core Strengths */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider text-slate-400">
                Core Engineering Values
              </h3>
              
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Clean & Maintainable Architecture</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Writing idiomatic, typed, well-documented code designed for longevity and easy team collaboration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Performance & Scalability</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Obsessing over low latencies, responsive client interactions, and database indexing strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Product & User Focus</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Bridging the gap between business objectives, recruiter requirements, and crisp developer implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
