import React, { useState } from 'react';

// --- Header Component ---
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 bg-white z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white text-xs md:text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-6">
          <span className="flex items-center"><span className="mr-2">📞</span> +91 9471090183</span>
          <span className="flex items-center mt-1 md:mt-0"><span className="mr-2">✉️</span>lokmadhyam2004@gmail.com</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-orange-600 tracking-wide">
          LOK MADHYAM
        </div>
        
        <nav className="hidden md:flex space-x-6 lg:space-x-8 font-bold text-blue-900">
          <a href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">Home</a>
          <a href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">About Us</a>
          <a href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">Courses</a>
          <a href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">Activities</a>
          <a href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">Gallery</a>
          <a href="#" className="hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1">Contact Us</a>
        </nav>

        <button 
          className="md:hidden text-blue-900 focus:outline-none hover:text-orange-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-50 border-t border-blue-100 shadow-inner">
          <nav className="flex flex-col px-4 py-2 space-y-1 font-bold text-blue-900">
            <a href="#" className="py-3 border-b border-blue-100 hover:text-orange-600">Home</a>
            <a href="#" className="py-3 border-b border-blue-100 hover:text-orange-600">About Us</a>
            <a href="#" className="py-3 border-b border-blue-100 hover:text-orange-600">Courses</a>
            <a href="#" className="py-3 border-b border-blue-100 hover:text-orange-600">Activities</a>
            <a href="#" className="py-3 border-b border-blue-100 hover:text-orange-600">Gallery</a>
            <a href="#" className="py-3 hover:text-orange-600">Contact Us</a>
          </nav>
        </div>
      )}
    </header>
  );
};
export default Header;