import React from 'react';

const ChatUI = () => {
  return (
    <div className="w-full space-y-3 px-4">
        <div className="flex gap-3 items-end">
            <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white shadow-sm shrink-0" />
            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    Bonjour, est-ce que le logement est inclus dans le remplacement ?
                </p>
            </div>
        </div>
        <div className="flex gap-3 items-end flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-[#004838] border-2 border-white shadow-sm shrink-0 flex items-center justify-center text-white text-[10px] font-bold">ME</div>
            <div className="bg-[#E2FB6C] p-3 rounded-2xl rounded-br-none shadow-sm border border-[#E2FB6C] max-w-[85%]">
                <p className="text-xs text-[#004838] font-bold leading-relaxed">
                    Oui tout à fait ! Un studio à 5min du cabinet est dispo.
                </p>
                <div className="flex justify-end mt-1">
                    <span className="text-[9px] opacity-60 font-bold">Lu à 14:02</span>
                </div>
            </div>
        </div>

        <div className="ml-11 flex gap-1">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0ms'}}/>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}/>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}/>
        </div>
    </div>
  );
};

export default ChatUI;