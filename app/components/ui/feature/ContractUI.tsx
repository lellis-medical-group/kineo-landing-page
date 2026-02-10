import React from 'react';

const ContractUI = () => {
    return (
        <div className="relative w-full max-w-70">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 relative z-10 -rotate-2 group-hover:rotate-0 transition-all duration-300 origin-bottom-right">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-50 pb-2">
                    <div className="w-8 h-10 bg-red-50 rounded flex items-center justify-center">
                        <span className="text-red-600 text-[8px] font-bold">PDF</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-800">Contrat_CDD.pdf</p>
                        <p className="text-[10px] text-green-600 font-bold flex items-center gap-1">
                            ✓ Signé
                        </p>
                    </div>
                </div>
                <div className="space-y-1.5 opacity-30">
                    <div className="h-1.5 bg-gray-800 rounded-full w-full" />
                    <div className="h-1.5 bg-gray-800 rounded-full w-5/6" />
                    <div className="h-1.5 bg-gray-800 rounded-full w-4/6" />
                </div>
            </div>
            <div className="absolute top-2 left-2 w-full h-full bg-gray-100 rounded-lg border border-gray-200 z-0" />
        </div>
    );
};

export default ContractUI;