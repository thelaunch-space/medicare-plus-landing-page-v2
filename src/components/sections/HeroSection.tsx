import React, { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * HeroSection.tsx
 * Purpose: Premium, doctor-led two-column hero.
 * - Left: headline, subheadline, body copy, CTAs, trust chips
 * - Right: professional consultation image with gradient edge
 * - Responsive: stacks on smaller screens with refined typography
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
        setHelperWidth(callWidth + registerWidth + 16);
      } else {
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
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: '#F9FBFC',
        backgroundImage:
          'radial-gradient(1200px 600px at 10% -10%, rgba(28,78,128,0.03), rgba(255,255,255,0)), radial-gradient(1000px 500px at 110% 110%, rgba(28,78,128,0.03), rgba(255,255,255,0))',
      }}
    >
      <div className="mx-auto max-w-7xl pl-6 pr-6 lg:pl-8 lg:pr-0 pt-24 pb-16 lg:py-24 lg:min-h-screen">
        <div
          ref={ref}
          className={`grid gap-12 lg:gap-16 lg:grid-cols-2 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Text + CTAs */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-tight">
              On Ozempic or Wegovy and worried about relapse?
            </h1>
            <h2 className="mt-6 text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed font-semibold text-[#1C4E80]">
              Secure lasting results with doctor-led care.
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-lg leading-relaxed text-[#2E445B] max-w-[560px]">
              Endocrinologist-led dosing, CBT for emotional eating, and culturally adapted nutrition—integrated into one seamless, confidential program.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a ref={callRef} href="tel:+919380010221" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  icon={Phone}
                  className="w-full sm:w-auto h-12 text-[15px] md:text-[16px] px-6"
                >
                  Jump on a call
                </Button>
              </a>
              <div ref={registerRef} className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  onClick={scrollToContact}
                  className="w-full sm:w-auto h-12 text-[15px] md:text-[16px] px-6"
                >
                  Register My Spot
                </Button>
              </div>
            </div>
            <p
              className="mt-3 text-[12px] md:text-[14px] text-[#2E445B]"
              style={{ width: helperWidth ? `${helperWidth}px` : undefined }}
            >
              Speak with a doctor in minutes. No obligation—limited spots available.
            </p>

            {/* Trust Bar Chips */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {['Doctor-supervised', 'Science-backed', 'Fully Confidential'].map((label) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ backgroundColor: '#F2F6F8', color: '#2E445B' }}
                >
                  <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: '#1C4E80' }} />
                  <span className="text-[14px] font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="hidden md:block">
            <div className="relative w-full h-[340px] sm:h-[440px] md:h-[520px] lg:h-[600px] xl:h-[660px] overflow-hidden rounded-2xl">
              <picture>
                <source srcSet="/hero-image.webp" type="image/webp" />
                <img
                  src="/hero-image.png"
                  alt="Professional endocrinologist consultation - Doctor-led GLP-1 weight loss program"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ boxShadow: '0 24px 60px rgba(28, 78, 128, 0.08)' }}
                  loading="lazy"
                />
              </picture>
              {/* Left-edge gradient overlay */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-[32%]"
                style={{
                  background:
                    'linear-gradient(90deg, #F9FBFC 0%, rgba(249,251,252,0.8) 28%, rgba(255,255,255,0) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
