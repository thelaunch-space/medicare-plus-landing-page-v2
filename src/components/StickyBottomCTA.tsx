import React from 'react';
import { Phone } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { Button } from './Button';

export const StickyBottomCTA: React.FC = () => {
  const { hasScrolledPastHero } = useScrollPosition();

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        hasScrolledPastHero ? 'translate-y-0' : 'translate-y-32'
      }`}
    >
      <div className="px-4 pb-6 sm:pb-4">
        <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-xl border border-gray-200 p-3 sm:p-4">
          <a href="tel:+919380010221" className="block">
            <Button variant="primary" icon={Phone} className="w-full">
              Talk to the Founding Team
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
