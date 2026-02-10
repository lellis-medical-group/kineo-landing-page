import React from 'react';
import FeatureGrid from '../ui/FeatureGrid';

const FeaturesSection: React.FC = () => {
  return (
    <section className=" px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 mb-8">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-600"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Features</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#004838] leading-tight mb-6">
          Latest advanced technologies to <br className="hidden md:block" />
          ensure everything you need
        </h2>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Maximize your team's productivity and security with our affordable,
          user-friendly contract management system.
        </p>
      </div>

      <FeatureGrid />
    </section>
  );
};

export default FeaturesSection;