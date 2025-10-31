import React from 'react';
import { Shield, Users, Lock } from 'lucide-react';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-metallic-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-50/50 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-20">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero-mobile md:text-hero-desktop leading-tight">
                On <span className="text-gradient-teal">Ozempic or Wegovy</span> and worried about relapse?
              </h1>
              <h2 className="text-hero-mobile md:text-hero-desktop leading-tight">
                Secure lasting results with{' '}
                <span className="text-gradient-teal">doctor-led care.</span>
              </h2>
            </div>

            <p className="text-subheadline text-secondary max-w-2xl">
              Endocrinologist-led dosing, CBT for emotional eating, and culturally adapted nutrition—integrated into one seamless, confidential program.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" onClick={scrollToContact}>
                Secure Your Founder's Spot
              </Button>
              <Button variant="secondary" onClick={scrollToContact}>
                Book a Confidential Consultation
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-secondary border-t border-metallic-platinum">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-teal" />
                <span className="font-medium">Doctor-supervised</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-teal" />
                <span className="font-medium">Science-backed</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-accent-teal" />
                <span className="font-medium">Fully Confidential</span>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-accent-teal/10 to-cyan-500/10 shadow-soft-lg overflow-hidden backdrop-blur-sm border border-accent-teal/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-teal to-cyan-500 flex items-center justify-center shadow-button-3d">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-primary">
                    Professional Medical Care
                  </p>
                  <p className="text-secondary">
                    Image placeholder - Replace from /public directory
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
