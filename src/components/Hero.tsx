import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

interface HeroProps {
  navigateTo: (page: string, sectionId?: string | null) => void;
  openActionModal: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ navigateTo, openActionModal }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white py-16 md:py-24 px-4 border-b-4 border-orange-500 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-700 text-orange-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Registered Society in Bihar Since May 14, 2004 (Reg. No. 135)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight leading-tight">
            Welcome To <span className="text-orange-500">LOK MADHYAM</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
            Lok Madhyam is a grassroots social service organization in Bihar registered in 2004, dedicated to bringing positive social change, empowering marginalized communities economically, and providing holistic development to socially excluded women and children living under difficult circumstances.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button type="button" onClick={() => navigateTo('about')} className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-orange-500 font-bold text-base md:text-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2">
              <span>Read More About Us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => navigateTo('home', 'report-section')} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 cursor-pointer">
              View 2025–26 Annual Report
            </button>
            <button type="button" onClick={() => openActionModal('volunteer')} className="w-full sm:w-auto bg-transparent hover:bg-blue-800/60 text-orange-300 border border-orange-400/50 px-6 py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-200 cursor-pointer">
              Join as Volunteer
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-blue-800/80 max-w-5xl mx-auto">
          <div className="bg-blue-900/60 border border-blue-800 rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-orange-400">20+ Yrs</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Grassroots Service in Bihar</div>
          </div>
          <div className="bg-blue-900/60 border border-blue-800 rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-orange-400">200+</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Adolescent Girls Mentored</div>
          </div>
          <div className="bg-blue-900/60 border border-blue-800 rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-orange-400">443</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Mothers Reached in 15 Meetings</div>
          </div>
          <div className="bg-blue-900/60 border border-blue-800 rounded-xl p-4 text-center">
            <div className="text-2xl md:text-3xl font-extrabold text-orange-400">50</div>
            <div className="text-xs md:text-sm text-blue-200 mt-1">Girls Trained in Livelihood Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};