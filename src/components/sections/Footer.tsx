import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-metallic-silver border-t border-metallic-platinum py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-accent-teal" />
            <span className="text-xl font-bold text-primary">Medicare+</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-secondary">
            <a href="#" className="hover:text-accent-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent-teal transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-accent-teal transition-colors">
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-metallic-platinum text-center">
          <p className="text-sm text-secondary">
            © 2025 Medicare+. All rights reserved.
          </p>
          <p className="text-xs text-secondary-light mt-2">
            Medical weight management with doctor-led, multidisciplinary care
          </p>
        </div>
      </div>
    </footer>
  );
};
