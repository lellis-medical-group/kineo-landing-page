import React from 'react';
import { Star } from 'lucide-react';

const ReviewsUI = () => {
   return (
      <div className="w-full relative">
         <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative z-10">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                     <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" />
                  </div>
                  <div>
                     <p className="text-xs font-bold text-gray-900">Dr. Martin</p>
                     <div className="flex text-yellow-400 text-[10px]">

                        {Array.from({ length: 5 }, (_v, i) => (
                           <Star fill="#004838" strokeWidth={0} key={i}/>
                        ))}
                     </div>
                  </div>
               </div>
               <span className="text-[10px] text-gray-400">Il y a 2j</span>
            </div>
            <p className="text-xs text-gray-600 italic leading-relaxed">
               "Super cabinet, secrétaire au top et patientèle très agréable. Je recommande pour un premier remplacement !"
            </p>
         </div>

         <div className="mt-4 flex gap-2 justify-center opacity-80">
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-bold border border-green-100 flex items-center gap-1">
               Profil Vérifié
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold border border-blue-100 flex items-center gap-1">
               Paiement Garanti
            </span>
         </div>
      </div>
   );
};

export default ReviewsUI;