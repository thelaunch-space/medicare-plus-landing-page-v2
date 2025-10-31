import React from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Button } from './Button';

export const StickyBottomCTA: React.FC = () => {
  const { hasScrolledPastHero } = useScrollPosition();

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        hasScrolledPastHero ? 'translate-y-0' : 'translate-y-32'
      }`}
    >
      <div className="px-4 pb-4">
        <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-xl border border-metallic-platinum p-3">
          <Button variant="primary" onClick={handleCTAClick} className="w-full">
            Book Confidential Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
