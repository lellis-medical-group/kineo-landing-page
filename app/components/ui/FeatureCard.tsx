import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  badge?: string;
  children?: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, badge, children, className = "" }) => {
  return (
    <div className={`group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}>

      <div className="bg-[#004838] p-6 md:p-8 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-[0.03] rounded-full translate-x-10 -translate-y-10" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h3>
            {badge && (
              <span className="px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                {badge}
              </span>
            )}
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium max-w-lg">
            {description}
          </p>
        </div>
      </div>

      <div className="grow bg-[#F3F4F6] p-6 md:p-8 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-50 transition-colors">
        {children}
      </div>

    </div>
  );
};

export default FeatureCard;