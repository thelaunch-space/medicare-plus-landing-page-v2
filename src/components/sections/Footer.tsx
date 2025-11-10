import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FBFC] border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-[#1C4E80]" />
            <span className="text-xl font-bold text-[#1A1A1A]">Medicare+</span>
          </div>

          <p className="text-sm text-[#2E445B] mb-2">
            © 2025 Medicare+. All rights reserved.
          </p>
          <p className="text-xs text-[#2E445B]/70">
            Medical weight management with doctor-led, multidisciplinary care
          </p>
        </div>
      </div>
    </footer>
  );
};
