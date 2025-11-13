import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FBFC] border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <img
            src="/logo.png"
            alt="Vitalyf logo"
            className="mx-auto mb-4 h-10 w-auto"
            loading="lazy"
          />

          <p className="text-sm text-[#2E445B] mb-2">
            © 2025 Vitalyf. All rights reserved.
          </p>
          <p className="text-xs text-[#2E445B]/70">
            Medical weight management with doctor-led, multidisciplinary care
          </p>
        </div>
      </div>
    </footer>
  );
};
