import React from 'react';
import { Shield, CheckCircle, Lock } from 'lucide-react';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center animated-gradient-bg overflow-hidden pt-24">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-12 md:py-20">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Heading with improved hierarchy */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
                On Ozempic or Wegovy and worried about relapse?{' '}
                <span className="text-accent-blue">
                  Secure lasting results with doctor-led care.
                </span>
              </h1>
            </div>

            {/* Subheading with clear secondary hierarchy */}
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
              Endocrinologist-led dosing, CBT for emotional eating, and culturally adapted nutrition—integrated into one seamless, confidential program.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="primary" onClick={scrollToContact}>
                Secure Your Founder's Spot
              </Button>
              <Button variant="secondary" onClick={scrollToContact}>
                Book a Confidential Consultation
              </Button>
            </div>

            {/* Trust Badges with colorful backgrounds */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              {/* Doctor-supervised */}
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-soft">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background-blue flex items-center justify-center">
                  <Shield className="w-5 h-5 text-accent-blue" />
                </div>
                <span className="font-medium text-primary text-sm">Doctor-supervised</span>
              </div>

              {/* Science-backed */}
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-soft">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background-green flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                </div>
                <span className="font-medium text-primary text-sm">Science-backed</span>
              </div>

              {/* Fully Confidential */}
              <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-soft">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background-purple flex items-center justify-center">
                  <Lock className="w-5 h-5 text-accent-purple" />
                </div>
                <span className="font-medium text-primary text-sm">Fully Confidential</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-accent-terracotta/80 to-red-400/80 shadow-soft-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-soft-lg border border-white/30">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-xl font-semibold text-white">
                    Professional Medical Care
                  </p>
                  <p className="text-white/90 text-sm">
                    Replace with doctor image from /public directory
                  </p>
                  {/* HIPAA Badge */}
                  <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft mt-4">
                    <Shield className="w-4 h-4 text-accent-blue" />
                    <span className="font-medium text-primary text-sm">HIPAA Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
