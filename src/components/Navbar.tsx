import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Share2, 
  Menu, 
  X, 
  Sparkles, 
  ExternalLink,
  Briefcase
} from 'lucide-react';
import { PortfolioProfile } from '../types';

interface NavbarProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
  onOpenEditor?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenResume,
  onOpenDeployGuide,
  onOpenEditor
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none"
          id="nav-brand-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            {profile.name.charAt(0) || 'P'}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 text-sm sm:text-base tracking-tight leading-tight">
              {profile.name}
            </span>
            <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {profile.availableForHire ? 'Available for hire' : 'Portfolio'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/90 rounded-full px-4 py-1.5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            id="nav-btn-deploy"
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-all shadow-sm cursor-pointer"
            title="Deploy & Share Guide"
          >
            <Share2 className="w-3.5 h-3.5 text-sky-400" />
            <span>Deploy / Share</span>
          </button>

          <button
            id="nav-btn-resume"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 rounded-lg shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View / Download Resume</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full py-2 flex items-center justify-center gap-1.5 text-xs text-slate-300 bg-slate-800 rounded-lg border border-slate-700"
            >
              <Share2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Deploy & Share Guide</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
