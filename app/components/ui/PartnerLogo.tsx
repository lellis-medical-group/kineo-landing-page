import React from 'react';

interface PartnerLogoProps {
  name: string;
  logo?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, logo }) => {
  return (
    <div className="flex items-center justify-center shrink-0 w-32 h-16 md:w-44 md:h-20">
      {logo ? (
        <img
          src={logo}
          alt={`Logo ${name}`}
          className="max-h-full max-w-full object-contain grayscale opacity-70 hover:opacity-100 transition-all duration-300"
        />
      ) : (
        <span className="text-2xl font-black text-gray-300 uppercase italic tracking-tighter">
          {name}
        </span>
      )}
    </div>
  );
};

export default PartnerLogo;