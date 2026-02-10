import React from 'react';

const HousingUI = () => {
   return (
      <div className="w-full h-full flex flex-col items-center justify-center p-2 relative">

         <div className="absolute inset-0 opacity-40 bg-cover bg-center grayscale" />

         <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 w-full max-w-60 relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="h-24 bg-gray-200 rounded-lg mb-3 relative overflow-hidden group-hover:shadow-inner">
               <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
               <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold px-2 py-0.5 bg-black/30 rounded backdrop-blur-md">
                  Inclus
               </span>
            </div>

            <div className="flex justify-between items-start">
               <div>
                  <p className="text-xs font-bold text-gray-800">Studio Indépendant</p>
                  <p className="text-[10px] text-gray-500">À 5 min du cabinet</p>
               </div>
               <div className="flex flex-col items-end">
                  <span className="text-[10px] line-through text-gray-400">45€</span>
                  <span className="text-xs font-bold text-green-600">Gratuit</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HousingUI;