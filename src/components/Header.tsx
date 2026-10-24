import React, { useState } from 'react';
import { Phone, Mail, ExternalLink, Menu, X, HandHeart } from 'lucide-react';
import logoImg from "../image_List/facIcon.jpg";

interface HeaderProps {
  currentPage: string;
  navigateTo: (page: string, sectionId?: string | null) => void;
  openActionModal: (type?: string) => void;
  submissionsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo, openActionModal, submissionsCount }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string, sectionId: string | null = null) => {
    navigateTo(page, sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="shadow-md sticky top-0 bg-white z-50 border-b border-gray-100">
      <div className="bg-blue-950 text-white text-xs md:text-sm py-2 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-1">
            <a href="tel:+919471090183" className="flex items-center hover:text-orange-400 transition-colors">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
              <span>+91 9471090183, 9472090184</span>
            </a>
            <a href="mailto:lokmadhyam2004@gmail.com" className="flex items-center hover:text-orange-400 transition-colors">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-orange-400" />
              <span>lokmadhyam2004@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden lg:inline-block text-blue-200 text-xs">
              Niti Aayog ID: <strong className="text-white">BR/2017/21709</strong> | 12A & 80G Certified
            </span>
            <a href="https://twitter.com/lok_madhyam" target="_blank" rel="noreferrer" className="inline-flex items-center hover:text-orange-400 transition-colors font-medium">
              <span>Twitter (@lok_madhyam)</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-3.5 flex justify-between items-center">
        <button type="button" onClick={() => handleNavClick('home')} className="text-left group focus:outline-none cursor-pointer flex items-center gap-3">
          {/* <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 text-white flex items-center justify-center font-extrabold text-xl shadow-sm group-hover:scale-105 transition-transform">
            LM
          </div> */}
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-600 to-orange-500 text-white flex items-center justify-center font-extrabold text-xl shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
            <img 
                src={logoImg} 
                alt="Logo" 
                className="w-full h-full object-cover"/>
            </div>
          <div>
            <span className="block text-2xl md:text-3xl font-extrabold text-orange-600 tracking-wide leading-none">
              LOK MADHYAM
            </span>
            <span className="block text-[11px] font-semibold text-blue-900 tracking-wider uppercase mt-0.5">
              Est. 2004 • Masaurhi, Patna (Bihar)
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7 font-bold text-blue-900 text-sm lg:text-base">
          <button type="button" onClick={() => handleNavClick('home')} className={`transition-colors border-b-2 pb-1 cursor-pointer ${currentPage === 'home' ? 'text-orange-600 border-orange-500' : 'border-transparent hover:text-orange-600 hover:border-orange-500'}`}>
            Home
          </button>
          <button type="button" onClick={() => handleNavClick('about')} className={`transition-colors border-b-2 pb-1 cursor-pointer ${currentPage === 'about' ? 'text-orange-600 border-orange-500' : 'border-transparent hover:text-orange-600 hover:border-orange-500'}`}>
            About Us
          </button>
          <button type="button" onClick={() => handleNavClick('home', 'activities-section')} className="hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1 cursor-pointer">
            Activities
          </button>
          <button type="button" onClick={() => handleNavClick('home', 'report-section')} className="hover:text-orange-600 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1 cursor-pointer">
            Annual Report
          </button>
          <button type="button" onClick={() => handleNavClick('portal')} className={`transition-colors border-b-2 pb-1 cursor-pointer flex items-center gap-1.5 ${currentPage === 'portal' ? 'text-orange-600 border-orange-500' : 'border-transparent hover:text-orange-600 hover:border-orange-500'}`}>
            <span>Get Involved</span>
            {submissionsCount > 0 && (
              <span className="bg-orange-100 text-orange-700 text-xs font-extrabold px-2 py-0.5 rounded-full">{submissionsCount}</span>
            )}
          </button>
          <button type="button" onClick={() => openActionModal('donate')} className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all text-sm font-bold flex items-center gap-1.5 cursor-pointer">
            <HandHeart className="w-4 h-4" />
            <span>Support / 80G</span>
          </button>
        </nav>

        <button type="button" aria-label="Toggle Menu" className="md:hidden text-blue-900 focus:outline-none hover:text-orange-600 transition-colors p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-50 border-t border-blue-100 shadow-inner">
          <nav className="flex flex-col px-4 py-3 space-y-1 font-bold text-blue-900">
            <button type="button" onClick={() => handleNavClick('home')} className="text-left py-2.5 border-b border-blue-100 hover:text-orange-600">Home</button>
            <button type="button" onClick={() => handleNavClick('about')} className="text-left py-2.5 border-b border-blue-100 hover:text-orange-600">About Us</button>
            <button type="button" onClick={() => handleNavClick('home', 'activities-section')} className="text-left py-2.5 border-b border-blue-100 hover:text-orange-600">Activities</button>
            <button type="button" onClick={() => handleNavClick('home', 'report-section')} className="text-left py-2.5 border-b border-blue-100 hover:text-orange-600">Annual Report (2025-2026)</button>
            <button type="button" onClick={() => handleNavClick('portal')} className="text-left py-2.5 border-b border-blue-100 hover:text-orange-600 flex items-center justify-between">
              <span>Get Involved & Contact</span>
              {submissionsCount > 0 && <span className="bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">{submissionsCount} Saved</span>}
            </button>
            <div className="pt-2">
              <button type="button" onClick={() => { setIsMobileMenuOpen(false); openActionModal('donate'); }} className="w-full bg-orange-600 text-white py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm">
                <HandHeart className="w-4 h-4" />
                <span>Support Us (12A / 80G / FCRA)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};