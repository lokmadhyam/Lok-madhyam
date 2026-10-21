import React from 'react';
import { MapPin, X, CheckCircle2 } from 'lucide-react';

interface ActivityModalProps {
  activity: any | null;
  onClose: () => void;
  onVolunteer: () => void;
}

export const ActivityModal: React.FC<ActivityModalProps> = ({ activity, onClose, onVolunteer }) => {
  if (!activity) return null;
  return (
    <div className="fixed inset-0 bg-blue-950/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border-t-4 border-orange-500">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full">
              {activity.badge}
            </span>
            <h3 className="text-2xl font-extrabold text-blue-900 mt-2">{activity.title}</h3>
            <p className="text-xs font-semibold text-gray-500 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span>{activity.location}</span>
            </p>
          </div>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-700 p-1 rounded-lg cursor-pointer">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">{activity.description}</p>

        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-3">Key Field Outcomes (2025–2026)</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {activity.highlights.map((pt: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-100 cursor-pointer">
            Close
          </button>
          <button type="button" onClick={() => { onClose(); onVolunteer(); }} className="px-5 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm cursor-pointer">
            Volunteer for This Program
          </button>
        </div>
      </div>
    </div>
  );
};