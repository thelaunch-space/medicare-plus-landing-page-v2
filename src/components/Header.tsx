import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { MobileMenu } from './MobileMenu';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Program', href: '#program' },
  { label: 'How It Works', href: '#timeline' },
  { label: 'Team', href: '#team' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mx-2 sm:mx-4 mt-2 sm:mt-4">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg border border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl font-bold bg-gradient-to-r from-[#1C4E80] to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    Medicare+
                  </button>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-[#1A1A1A] font-medium hover:text-[#1C4E80] transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                  <a href="tel:+919380010221">
                    <Button variant="primary" icon={Phone}>
                      Talk to the Founding Team
                    </Button>
                  </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg text-[#1A1A1A] hover:bg-[#F2F6F8] transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        onNavClick={handleNavClick}
        onCTAClick={handleCTAClick}
      />
    </>
  );
};
