import React from 'react';
import { BookOpen, HeartPulse, Sprout, MapPin, ChevronRight } from 'lucide-react';
import { ACTIVITIES_DATA } from '../data/orgData';

interface ActivitiesProps {
  onSelectActivity: (activity: any) => void;
  navigateTo: (page: string, sectionId?: string | null) => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onSelectActivity, navigateTo }) => {
  const renderIcon = (id: string) => {
    if (id === 'education') return <BookOpen className="w-9 h-9 text-orange-600" />;
    if (id === 'health') return <HeartPulse className="w-9 h-9 text-orange-600" />;
    return <Sprout className="w-9 h-9 text-orange-600" />;
  };

  return (
    <section id="activities-section" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Field Programs</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-1 mb-4 uppercase tracking-wide">
          Our Recent Activities
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 mb-14 max-w-3xl mx-auto text-base md:text-lg">
          Working sincerely with our target groups in Masaurhi (Patna) and Jhajha (Jamui) to bring positive change in leadership, decision-making, education, health, and sustainable community development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {ACTIVITIES_DATA.map((activity) => (
            <div key={activity.id} className="p-8 border-2 border-gray-100 bg-gray-50 rounded-2xl shadow-sm hover:border-orange-500 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-orange-100 group-hover:scale-105 transition-transform">
                  {renderIcon(activity.id)}
                </div>
                <span className="bg-orange-100 text-orange-800 text-xs font-extrabold px-3 py-1 rounded-full">
                  {activity.badge}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors mb-3">
                {activity.title}
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-4 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>{activity.location}</span>
              </p>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{activity.description}</p>
              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <button type="button" onClick={() => onSelectActivity(activity)} className="inline-flex items-center text-orange-600 font-bold hover:text-blue-900 transition-colors cursor-pointer text-sm">
                  <span>View Program Details</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
                <button type="button" onClick={() => navigateTo('about')} className="text-xs font-semibold text-gray-500 hover:text-blue-900 underline cursor-pointer">
                  About Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};