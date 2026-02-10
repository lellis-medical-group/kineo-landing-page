import React from 'react';
import { PARTNERS_LIST } from './data/partners.data';
import PartnerLogo from '../ui/PartnerLogo';

const PartnersSection = () => {
    const scrollingLogos = [...PARTNERS_LIST, ...PARTNERS_LIST, ...PARTNERS_LIST];

    return (
        <section className="py-30 bg-white border-b border-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center gap-6">

                    <div className="w-full md:w-1/3 shrink-0">
                        <h2 className="text-[#004838] font-bold text-2xl md:text-3xl leading-[1.1] tracking-tighter text-center md:text-left">
                            Bientôt connecté aux <br className="hidden lg:block" />
                            <span className="text-black">acteurs majeurs</span> <br className="hidden lg:block" />
                            de la santé en France
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 font-medium text-center md:text-left">
                            Standardisation et interopérabilité en cours.
                        </p>
                    </div>

                    <div className="w-full md:w-2/3 overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent z-10" />
                        <div className="flex items-center gap-12 md:gap-16 animate-marquee-slow whitespace-nowrap">
                            {scrollingLogos.map((partner, index) => (
                                <div key={`${partner.name}-${index}`} className="shrink-0">
                                    <PartnerLogo
                                        name={partner.name}
                                        logo={partner.logo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;