import React from 'react';

const MatchingUI = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-5 relative overflow-hidden">

      <div className="flex justify-between items-start mb-5 pb-4 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">En direct</p>
          </div>
          <p className="text-base font-bold text-[#004838]">Cabinet des Lilas</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-bold text-[#004838]">98%</span>
          <span className="text-[10px] text-gray-400 font-bold">MATCH</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        {['Doctolib', 'Logement inclus', 'Rétro 80%'].map((tag, i) => (
          <span key={i} className="bg-gray-50 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-100">
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full bg-[#004838] hover:bg-[#00382e] text-white py-2.5 rounded-lg font-bold text-sm flex items-center justify-center transition-colors cursor-pointer">
        Voir l'offre
      </div>
    </div>
  );
};

export default MatchingUI;