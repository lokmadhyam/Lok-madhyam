import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 border-t-8 border-orange-500">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Running Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-orange-500 border-b-2 border-blue-800 pb-3">Running Projects</h3>
          <ul className="space-y-3 font-medium text-gray-300">
            <li className="hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-orange-500 mr-3 text-lg">❯</span> Women Empowerment</li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-orange-500 mr-3 text-lg">❯</span> Protection of Women</li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-orange-500 mr-3 text-lg">❯</span> Protection of Child Rights</li>
            <li className="hover:text-white transition-colors cursor-pointer flex items-center"><span className="text-orange-500 mr-3 text-lg">❯</span> Educational Promotion</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-orange-500 border-b-2 border-blue-800 pb-3">Quick Links</h3>
          <ul className="space-y-3 font-medium text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition-colors flex items-center"><span className="text-blue-500 mr-3 text-xs">■</span> Home</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors flex items-center"><span className="text-blue-500 mr-3 text-xs">■</span> About Us</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors flex items-center"><span className="text-blue-500 mr-3 text-xs">■</span> Facilities</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors flex items-center"><span className="text-blue-500 mr-3 text-xs">■</span> Gallery</a></li>
            <li><a href="#" className="hover:text-orange-400 transition-colors flex items-center"><span className="text-blue-500 mr-3 text-xs">■</span> Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-orange-500 border-b-2 border-blue-800 pb-3">Contact Us</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="text-xl mr-3 mt-1">📍</span> 
              <span> Lok Madhyam Vill.+P.O. – Barni P.S- Dhanrua, Patna 804451 Bihar.</span>
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-3">📞</span> 
              <span>+91 9471090183</span>
            </li>
            <li className="flex items-center">
              <span className="text-xl mr-3">✉️</span> 
              <span>lokmadhyam2004@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright Bottom */}
      <div className="border-t border-blue-800 pt-8 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} LOK MADHYAM. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
          <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Sitemap</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;