import React from 'react';

const FinancialUI = () => {
   return (
      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 p-0 overflow-hidden">
         <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-400 uppercase">Solde Dispo</span>
            <span className="text-[#004838] font-bold text-lg">4 250 €</span>
         </div>
         <div className="p-2">

            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-50 text-[#004838] flex items-center justify-center text-[10px] font-bold">
                     VH
                  </div>
                  <div className="text-xs">
                     <p className="font-bold text-gray-700">Virement Honoraires</p>
                     <p className="text-gray-400">04 Oct.</p>
                  </div>
               </div>
               <span className="text-xs font-bold text-green-600">+ 850 €</span>
            </div>

            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[10px]">
                     🧾
                  </div>
                  <div className="text-xs">
                     <p className="font-bold text-gray-700">URSSAF (Prevision)</p>
                     <p className="text-gray-400">Automatique</p>
                  </div>
               </div>
               <span className="text-xs font-bold text-gray-400">- 210 €</span>
            </div>
         </div>
      </div>
   );
};

export default FinancialUI;