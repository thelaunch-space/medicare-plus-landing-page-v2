import React, { useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { Button } from './Button';

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onNavClick: (href: string) => void;
  onCTAClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  onNavClick,
  onCTAClick,
}) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl animate-slide-left">
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="px-6 py-8 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#1C4E80] to-blue-600 bg-clip-text text-transparent">
              Medicare+
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#1A1A1A] hover:bg-[#F2F6F8] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => onNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-lg font-medium text-[#1A1A1A] hover:bg-blue-50 hover:text-[#1C4E80] rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="px-6 py-6 border-t border-gray-200">
            <a href="tel:+919380010221" className="block">
              <Button
                variant="primary"
                icon={Phone}
                className="w-full"
                onClick={onClose}
              >
                Jump on a call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
