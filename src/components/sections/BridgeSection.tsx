import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const BridgeSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div
          ref={ref}
          className={`bg-gradient-to-r from-[#F9FBFC] to-[#F2F6F8] rounded-2xl p-8 md:p-12 border border-[#1C4E80]/20 transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-4">
            How we close the gap.
          </h3>
          <p className="text-lg text-[#2E445B] text-center max-w-3xl mx-auto">
            Medication gives you a start. We give you the map, the team, and the structure to make that start permanent.
          </p>
        </div>
      </div>
    </section>
  );
};
