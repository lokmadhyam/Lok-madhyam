import React from 'react';

const activitiesData = [
  {
    title: "Education",
    description: "The journey of Educating Girls begins from 1998 running Non-Formal Education Centre in Muzaffarpur district and since then it educated above 25000 girls from rural areas.",
    icon: "📚"
  },
  {
    title: "Health & Sanitation",
    description: "After basic education, it is the skill which enable easy way to drive the developmental chain of progress. Skill provides respect and sustainable income.",
    icon: "🏥"
  },
  {
    title: "Environment",
    description: "Under Holistic Rural Development Programme (HRDP) supported by The HDFC Bank Ltd. implemented in 15 villages. Green and clean environment focus tree plantation.",
    icon: "🌱"
  }
];

const Activities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase tracking-wide">Our Recent Activities</h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-8 rounded-full"></div>
        <p className="text-gray-600 mb-14 max-w-3xl mx-auto text-lg">Capacitate the 
          socially excluded women  and children who are in difficult circumstances and  
          developed the enabled protective environment where women and children  
          grow in the community to accesstheir rights and live with full dignity
          </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activitiesData.map((activity, index) => (
            <div key={index} className="p-8 border-2 border-gray-100 bg-gray-50 rounded-xl shadow-md hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
              <div className="text-5xl mb-6 bg-white w-20 h-20 mx-auto flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform">
                {activity.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors mb-4">{activity.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{activity.description}</p>
              <a href="#" className="inline-flex items-center justify-center text-orange-600 font-bold hover:text-blue-900 transition-colors">
                More Detail 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;