import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { DeploymentModal } from './components/DeploymentModal';
import { DataEditorModal } from './components/DataEditorModal';
import { defaultPortfolioData } from './data/initialData';
import { PortfolioProfile } from './types';
import { 
  Heart, 
  ArrowUp, 
  Share2, 
  FileText, 
  Edit3,
  Github,
  Linkedin,
  Mail,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem('portfolio_profile_data_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name && parsed.name !== "Your Name") {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse local profile data:', e);
    }
    return defaultPortfolioData;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveProfile = (newProfile: PortfolioProfile) => {
    setProfile(newProfile);
    try {
      localStorage.setItem('portfolio_profile_data_v2', JSON.stringify(newProfile));
    } catch (e) {
      console.error('Failed to save profile to localStorage:', e);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedinLink = profile.socials.find(s => s.platform.toLowerCase() === 'linkedin')?.url || 'https://linkedin.com';
  const githubLink = profile.socials.find(s => s.platform.toLowerCase() === 'github')?.url || 'https://github.com';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative">
        <HeroSection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <AboutSection profile={profile} />
        <ExperienceSection profile={profile} />
        <ProjectsSection profile={profile} />
        <SkillsSection profile={profile} />
        <EducationSection profile={profile} />
        <ContactSection profile={profile} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center text-white font-bold text-xs">
                {profile.name.charAt(0) || 'P'}
              </div>
              <span className="font-semibold text-slate-200">{profile.name}</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Portfolio &amp; Interactive Resume</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Resume PDF
            </button>
            <button
              onClick={() => setIsDeployGuideOpen(true)}
              className="hover:text-sky-400 transition-colors cursor-pointer"
            >
              Share Link
            </button>
          </div>

          <p className="text-slate-600 text-[11px]">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Bottom Quick-Action Bar for Recruiter / Owner */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 shadow-xl transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      <DeploymentModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      <DataEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        profile={profile}
        onSaveProfile={handleSaveProfile}
      />
    </div>
  );
}
