import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FBFC] border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-[#1C4E80]" />
            <span className="text-xl font-bold text-[#1A1A1A]">Medicare+</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-[#2E445B]">
            <a href="#" className="hover:text-[#1C4E80] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#1C4E80] transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-[#1C4E80] transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-[#2E445B]">
            © 2025 Medicare+. All rights reserved.
          </p>
          <p className="text-xs text-[#2E445B]/70 mt-2">
            Medical weight management with doctor-led, multidisciplinary care
          </p>
        </div>
      </div>
    </footer>
  );
};
