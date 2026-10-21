import React from 'react';
import { ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

interface FooterProps {
  navigateTo: (page: string, sectionId?: string | null) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer id="footer-contact" className="bg-blue-950 text-white pt-16 pb-8 border-t-8 border-orange-500">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-orange-500 border-b-2 border-blue-900 pb-3">Focus Areas</h3>
          <ul className="space-y-3 font-medium text-gray-300 text-sm">
            <li className="hover:text-white transition-colors flex items-center">
              <ChevronRight className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
              <span>Adolescent Girls Empowerment</span>
            </li>
            <li className="hover:text-white transition-colors flex items-center">
              <ChevronRight className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
              <span>Women Leadership & Panchayat Advocacy</span>
            </li>
            <li className="hover:text-white transition-colors flex items-center">
              <ChevronRight className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
              <span>Health, Hygiene & Nutrition</span>
            </li>
            <li className="hover:text-white transition-colors flex items-center">
              <ChevronRight className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
              <span>Livelihood & Child Rights Protection</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-orange-500 border-b-2 border-blue-900 pb-3">Quick Links</h3>
          <ul className="space-y-3 font-medium text-gray-300 text-sm">
            <li>
              <button type="button" onClick={() => navigateTo('home')} className="hover:text-orange-400 transition-colors flex items-center cursor-pointer">
                <span className="text-blue-400 mr-3 text-xs">■</span> Home
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigateTo('about')} className="hover:text-orange-400 transition-colors flex items-center cursor-pointer">
                <span className="text-blue-400 mr-3 text-xs">■</span> About Us & Governance
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigateTo('home', 'activities-section')} className="hover:text-orange-400 transition-colors flex items-center cursor-pointer">
                <span className="text-blue-400 mr-3 text-xs">■</span> Recent Activities
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigateTo('home', 'report-section')} className="hover:text-orange-400 transition-colors flex items-center cursor-pointer">
                <span className="text-blue-400 mr-3 text-xs">■</span> Annual Report (2025–2026)
              </button>
            </li>
            <li>
              <button type="button" onClick={() => navigateTo('portal')} className="hover:text-orange-400 transition-colors flex items-center cursor-pointer">
                <span className="text-blue-400 mr-3 text-xs">■</span> Volunteer & 80G Support Portal
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-orange-500 border-b-2 border-blue-900 pb-3">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5 shrink-0" />
              <span>
                <strong>Regd. Office:</strong> Village & Post Bhaiswan, Masaurhi, Patna (Bihar) - 804452
                <br />
                <strong>Coord. Office:</strong> Vill.+P.O. Barni, P.S- Dhanrua, Patna - 804451
              </span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
              <span>+91 9471090183, 9472090184</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-orange-400 mr-3 shrink-0" />
              <span>lokmadhyam2004@gmail.com, lm1452004@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-900 pt-8 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center container mx-auto max-w-6xl px-4">
        <p>&copy; {new Date().getFullYear()} LOK MADHYAM. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
          <button type="button" onClick={() => navigateTo('about')} className="hover:text-orange-500 transition-colors cursor-pointer">Legal Status</button>
          <button type="button" onClick={() => navigateTo('home', 'report-section')} className="hover:text-orange-500 transition-colors cursor-pointer">Annual Report</button>
          <button type="button" onClick={() => navigateTo('portal')} className="hover:text-orange-500 transition-colors cursor-pointer">Support / Volunteer</button>
        </div>
      </div>
    </footer>
  );
};