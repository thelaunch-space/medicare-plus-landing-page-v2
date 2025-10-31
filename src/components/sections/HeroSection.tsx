import React, { useEffect, useRef, useState } from 'react';
import { Shield, CheckCircle, Lock, Phone } from 'lucide-react';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { AuroraBackground } from '@/components/ui/aurora-background';

/**
 * HeroSection.tsx
 * Purpose: Above-the-fold hero with premium, sleek typography and a single CTA.
 * - Highlights brand drug names with contextual colors
 * - Emphasizes solution line in subtle italics
 * - Ensures first fold fit on mobile and desktop
 */

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const callRef = useRef<HTMLAnchorElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);
  const [helperWidth, setHelperWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const measure = () => {
      const callWidth = callRef.current?.getBoundingClientRect().width || 0;
      const registerWidth = registerRef.current?.getBoundingClientRect().width || 0;
      if (window.innerWidth >= 640) {
        // sm breakpoint and above: buttons are side-by-side with gap-3 (12px)
        setHelperWidth(callWidth + registerWidth + 12);
      } else {
        // stacked on mobile: match the wider button for a clean edge
        setHelperWidth(Math.max(callWidth, registerWidth));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AuroraBackground className="h-[100svh]">
      <section className="relative w-full h-full flex items-center justify-center overflow-hidden pt-20 md:pt-24 snap-start">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 py-10 md:py-16">
          <div
            ref={ref}
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Centered Content */}
            <div className="space-y-8 mx-auto">
              {/* Heading with improved hierarchy */}
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight">
                  On <span className="text-accent-terracotta">Ozempic</span> or <span className="text-accent-green">Wegovy</span> and worried about relapse?
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gradient-blue italic leading-snug">
                  Secure lasting results with doctor-led care.
                </h2>
              </div>

              {/* Subheading with clear secondary hierarchy */}
              <p className="text-base md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                Endocrinologist-led dosing, CBT for emotional eating, and culturally adapted nutrition—integrated into one seamless, confidential program.
              </p>

              {/* CTAs */}
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 pt-2 justify-center">
                <a ref={callRef} href="tel:+919380010221" className="w-full sm:w-auto">
                  <Button variant="primary" icon={Phone} className="w-full sm:w-auto text-base md:text-lg px-8 py-4">
                    Jump on a call
                  </Button>
                </a>
                <div ref={registerRef} className="w-full sm:w-auto">
                  <Button variant="secondary" onClick={scrollToContact} className="w-full sm:w-auto text-base md:text-lg px-8 py-4">
                    Register My Spot
                  </Button>
                </div>
              </div>
              <p className="text-xs md:text-sm text-secondary text-center mx-auto" style={{ width: helperWidth ? `${helperWidth}px` : undefined }}>
                100% confidential. No commitment required.
              </p>

              {/* Trust Badges with colorful backgrounds */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                {/* Doctor-supervised */}
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background-blue flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent-blue" />
                  </div>
                  <span className="font-medium text-primary text-sm md:text-base">Doctor-supervised</span>
                </div>

                {/* Science-backed */}
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background-green flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-accent-green" />
                  </div>
                  <span className="font-medium text-primary text-sm md:text-base">Science-backed</span>
                </div>

                {/* Fully Confidential */}
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background-purple flex items-center justify-center">
                    <Lock className="w-5 h-5 text-accent-purple" />
                  </div>
                  <span className="font-medium text-primary text-sm md:text-base">Fully Confidential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};
