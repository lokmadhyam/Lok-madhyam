import React, { useState } from 'react';
import { Landmark, Send, Trash2, ArrowLeft } from 'lucide-react';
import { BANK_ACCOUNTS } from '../data/orgData';

interface Submission {
  id: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  createdAt: string;
}

interface GetInvolvedPortalProps {
  submissions: Submission[];
  onAddSubmission: (entry: Submission) => void;
  onDeleteSubmission: (id: string) => void;
  navigateTo: (page: string, sectionId?: string | null) => void;
}

export const GetInvolvedPortal: React.FC<GetInvolvedPortalProps> = ({ submissions, onAddSubmission, onDeleteSubmission, navigateTo }) => {
  const [formType, setFormType] = useState('volunteer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Adolescent Girls Empowerment (Masaurhi)');
  const [amount, setAmount] = useState('5000');
  const [message, setMessage] = useState('');
  const [statusBanner, setStatusBanner] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatusBanner({ type: 'error', text: 'Please enter your full name and phone number.' });
      return;
    }
    const newEntry: Submission = {
      id: Date.now().toString(),
      type: formType,
      name: name.trim(),
      email: email.trim() || 'Not provided',
      phone: phone.trim(),
      area: formType === 'donate' ? `80G Grant Pledge: ₹${Number(amount || 0).toLocaleString('en-IN')}` : area,
      message: message.trim() || 'Interested in supporting Lok Madhyam grassroots programs in Bihar.',
      createdAt: new Date().toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    };
    onAddSubmission(newEntry);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setStatusBanner({
      type: 'success',
      text: `Thank you, ${newEntry.name}! Your ${formType} submission has been recorded for Secretary Pramila Kumari's office.`
    });
  };

  return (
    <div className="bg-gray-50 py-14 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
            Community & Donor Portal
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-3 mb-3 uppercase">
            Collaborate With Lok Madhyam
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Register as a community volunteer in Masaurhi, Dhanrua, or Jhajha, send an inquiry to our coordination office, or record a tax-exempt 80G / FCRA grant pledge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">
              {[
                { id: 'volunteer', label: 'Volunteer Registration' },
                { id: 'contact', label: 'General Inquiry' },
                { id: 'donate', label: '80G / FCRA Grant Pledge' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setFormType(tab.id);
                    setStatusBanner(null);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-bold cursor-pointer transition-colors ${formType === tab.id ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {statusBanner && (
              <div className={`p-4 rounded-xl mb-6 text-sm font-medium flex items-center justify-between ${statusBanner.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                <span>{statusBanner.text}</span>
                <button type="button" onClick={() => setStatusBanner(null)} className="text-xs font-bold underline ml-4">Dismiss</button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-blue-900 mb-1">Full Name *</label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Anjali Sharma" className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-blue-900 mb-1">Phone / WhatsApp Number *</label>
                  <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g., +91 9876543210" className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-blue-900 mb-1">Email Address</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
                </div>

                {formType === 'donate' ? (
                  <div>
                    <label className="block text-xs font-bold uppercase text-blue-900 mb-1">Pledge Amount (INR ₹)</label>
                    <input type="number" min="100" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500" />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold uppercase text-blue-900 mb-1">Program / Focus Area</label>
                    <select value={area} onChange={(e) => setArea(e.target.value)} className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm bg-white focus:outline-none focus:border-orange-500">
                      <option value="Adolescent Girls Empowerment (Masaurhi)">Adolescent Girls Empowerment (Masaurhi)</option>
                      <option value="Health, Menstrual Hygiene & Nutrition">Health, Menstrual Hygiene & Nutrition</option>
                      <option value="Sewing & Livelihood Skills Training">Sewing & Livelihood Skills Training</option>
                      <option value="Women Leadership & Panchayat Advocacy">Women Leadership & Panchayat Advocacy</option>
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-blue-900 mb-1">Message / Notes</label>
                <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Share how you would like to collaborate or any questions for Secretary Pramila Kumari..." className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:border-orange-500"></textarea>
              </div>

              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                <span>Submit to Lok Madhyam Registry</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-blue-900 text-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5" />
                <span>Direct Bank Transfer (80G / FCRA)</span>
              </h3>
              <p className="text-xs text-blue-100 mb-4">All donations are tax-exempt under Section 80G (URN: AAATL3903FF20212, PAN: AAATL3903F).</p>
              <div className="space-y-3 text-xs">
                {BANK_ACCOUNTS.map((b, idx) => (
                  <div key={idx} className="bg-blue-950/70 p-3 rounded-xl border border-blue-800">
                    <div className="font-bold text-orange-300">{b.type}</div>
                    <div className="text-white mt-0.5">{b.bank}</div>
                    <div className="text-blue-200 font-mono mt-1">A/C: {b.accountNo} • IFSC: {b.ifsc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-blue-900 text-base">Recent Portal Submissions ({submissions.length})</h3>
                <span className="text-xs text-gray-500">Saved in Browser State</span>
              </div>
              {submissions.length === 0 ? (
                <p className="text-xs text-gray-500 py-4 text-center">No submissions recorded yet. Use the form to test adding a volunteer or inquiry entry.</p>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {submissions.map((item) => (
                    <div key={item.id} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 text-xs flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-blue-900">{item.name}</span>
                          <span className="uppercase text-[10px] font-extrabold px-2 py-0.5 rounded bg-orange-100 text-orange-800">{item.type}</span>
                        </div>
                        <div className="text-gray-600 mt-1">{item.area}</div>
                        <div className="text-gray-500 mt-0.5">{item.phone} • {item.createdAt}</div>
                      </div>
                      <button type="button" onClick={() => onDeleteSubmission(item.id)} className="text-gray-400 hover:text-red-600 p-1 cursor-pointer" title="Remove entry">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="button" onClick={() => navigateTo('home')} className="text-sm font-bold text-blue-900 hover:text-orange-600 inline-flex items-center gap-1.5 cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Page</span>
          </button>
        </div>
      </div>
    </div>
  );
};