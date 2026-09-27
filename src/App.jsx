import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Activities from './components/home/Activities';
import Home from './pages/Home';
import './index.css'


export default function App() {
  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Activities />
      </main>
      <Footer />
    </div>
  );
}