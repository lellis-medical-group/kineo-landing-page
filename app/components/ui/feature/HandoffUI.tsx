import React from 'react';

const HandoffUI = () => {
    return (
        <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

            <div className="bg-gray-50 p-3 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">JD</div>
                    <span className="text-xs font-bold text-gray-700">Jean Dupont</span>
                </div>
                <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded font-bold">Urgent</span>
            </div>


            <div className="p-3 border-b border-gray-50">
                <p className="text-[10px] text-gray-400 uppercase font-bold mb-2">Consignes du titulaire</p>
                <div className="bg-[#004838] rounded-full p-2 flex items-center gap-3 shadow-md">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-pointer">
                        <svg className="w-3 h-3 text-[#004838] ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" /></svg>
                    </div>

                    <div className="flex gap-0.5 items-center h-4">
                        {[3, 6, 4, 8, 5, 10, 7, 4, 6, 3].map((h, i) => (
                            <div key={i} className="w-1 bg-white/50 rounded-full" style={{ height: `${h * 10}%` }} />
                        ))}
                    </div>
                    <span className="text-[9px] text-white font-medium ml-auto pr-2">0:42</span>
                </div>
            </div>
            <div className="p-3 flex items-center gap-2">
                <div className="w-4 h-4 rounded border border-gray-300" />
                <div className="h-1.5 w-24 bg-gray-100 rounded-full" />
            </div>
        </div>
    );
};

export default HandoffUI;