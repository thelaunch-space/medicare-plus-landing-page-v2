import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CTASection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2E445B] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#1C4E80]/20 via-transparent to-transparent"></div>

      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready for Lasting Results?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="tel:+919380010221" className="w-full sm:w-auto">
              <Button
                variant="primary"
                icon={Phone}
                className="w-full sm:w-auto"
              >
                Learn How We Do It
              </Button>
            </a>
            <Button
              variant="secondary"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-[#1C4E80] border-white hover:bg-[#F2F6F8]"
            >
              Get My Initial Assessment
            </Button>
          </div>

          <p className="text-white/80 text-sm pt-2">
            100% confidential. We'll contact you within 24-48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};
