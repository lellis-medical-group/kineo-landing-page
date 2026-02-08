import React from 'react';

const PartnersSection = () => {
    return (
        <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="mb-10 sm:mb-12">
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                        More than <span className="font-bold text-gray-900">100+</span> companies partner
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-12 md:gap-16">

                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M12 2L12 7M12 17L12 22M2 12L7 12M17 12L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <span className="text-lg sm:text-xl font-bold text-gray-800">HubSpot</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                            <path d="M12 2L6 6L12 10L18 6L12 2Z" />
                            <path d="M6 10L12 14L18 10L12 6L6 10Z" opacity="0.6" />
                        </svg>
                        <span className="text-lg sm:text-xl font-bold text-gray-800">Dropbox</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                        </svg>
                        <span className="text-lg sm:text-xl font-bold text-gray-800">Square</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                            <rect x="3" y="8" width="3" height="8" rx="1.5" />
                            <rect x="10.5" y="4" width="3" height="16" rx="1.5" />
                            <rect x="18" y="8" width="3" height="8" rx="1.5" />
                        </svg>
                        <span className="text-lg sm:text-xl font-bold text-gray-800">INTERCOM</span>
                    </div>
                    <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
                            <circle cx="12" cy="12" r="10" opacity="0.3" />
                            <circle cx="12" cy="12" r="5" />
                        </svg>
                        <span className="text-lg sm:text-xl font-bold text-gray-800">grammarly</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;