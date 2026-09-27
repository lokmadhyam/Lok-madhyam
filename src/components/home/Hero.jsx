import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 border-b-4 border-orange-500">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 uppercase tracking-tight">
          Welcome To <span className="text-orange-600">LOK MADHYAM</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 max-w-4xl mx-auto">
          LOK MADHYAM is a dream, to have equal rights to every person and live with dignity without any fear, 
          discrimination whether gender, caste, religion, regional and color. 
          Every person in the world would be able to access entitlement, justice equally.
        </p>
        <button className="bg-orange-600 text-white px-8 py-4 rounded-md shadow-lg hover:bg-orange-700 hover:shadow-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1">
          Read More About Us
        </button>
      </div>
    </section>
  );
};

export default Hero;