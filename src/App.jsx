import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Activities } from './components/Activities';
import { AnnualReport } from './components/AnnualReport';
import { AboutUsPage } from './components/AboutUsPage';
import { GetInvolvedPortal } from './components/GetInvolvedPortal';
import { ActivityModal } from './components/ActivityModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [submissions, setSubmissions] = useState([
    {
      id: 'seed-1',
      type: 'volunteer',
      name: 'Rakesh Kumar',
      email: 'rakesh.patna@example.com',
      phone: '+91 9431000111',
      area: 'Adolescent Girls Empowerment (Masaurhi)',
      message: 'Community educator interested in weekend literacy sessions.',
      createdAt: '15 Oct 2026'
    }
  ]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('lok_madhyam_submissions_v1');
      if (saved) {
        setSubmissions(JSON.parse(saved));
      }
    } catch (e) {
      // Ignore storage access errors in restricted sandboxes
    }
  }, []);

  const handleAddSubmission = (entry) => {
    const updated = [entry, ...submissions];
    setSubmissions(updated);
    try {
      localStorage.setItem('lok_madhyam_submissions_v1', JSON.stringify(updated));
    } catch (e) {
      // Ignore storage errors
    }
  };

  const handleDeleteSubmission = (id) => {
    const updated = submissions.filter((item) => item.id !== id);
    setSubmissions(updated);
    try {
      localStorage.setItem('lok_madhyam_submissions_v1', JSON.stringify(updated));
    } catch (e) {
      // Ignore storage errors
    }
  };

  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openActionModal = () => {
    navigateTo('portal');
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col selection:bg-orange-500 selection:text-white bg-white">
      <Header
        currentPage={currentPage}
        navigateTo={navigateTo}
        openActionModal={openActionModal}
        submissionsCount={submissions.length}
      />

      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero navigateTo={navigateTo} openActionModal={openActionModal} />
            <Activities
              onSelectActivity={(act) => setSelectedActivity(act)}
              navigateTo={navigateTo}
            />
            <AnnualReport openActionModal={openActionModal} />
          </>
        )}

        {currentPage === 'about' && (
          <AboutUsPage navigateTo={navigateTo} openActionModal={openActionModal} />
        )}

        {currentPage === 'portal' && (
          <GetInvolvedPortal
            submissions={submissions}
            onAddSubmission={handleAddSubmission}
            onDeleteSubmission={handleDeleteSubmission}
            navigateTo={navigateTo}
          />
        )}
      </main>

      <ActivityModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
        onVolunteer={() => navigateTo('portal')}
      />

      <Footer navigateTo={navigateTo} />
    </div>
  );
}