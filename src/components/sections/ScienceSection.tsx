import React from 'react';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ScienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="science" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Compact Header with Inline Stat */}
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
          <p className="text-xs uppercase tracking-wide text-[#1C4E80]/80 mb-2">CLINICAL EVIDENCE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            Why medical supervision <span className="text-[#1C4E80]">matters</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-[#2E445B]">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span>More than <span className="font-bold text-red-500">50%</span> quit within a year after spending resources and regaining weight</span>
          </div>
        </div>

        {/* Two-Column Layout: Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

          {/* Left: The Problem */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft">
            <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-4 text-center">
              Without medical support
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-4 p-3 md:p-4 bg-[#F9FBFC] rounded-lg border-l-4 border-red-500">
                <div className="flex-shrink-0">
                  <div className="text-2xl md:text-3xl font-bold text-red-500">20%</div>
                  <p className="text-xs text-[#2E445B]">Quit in 3mo</p>
                </div>
                <div className="border-l border-gray-200 pl-3 md:pl-4">
                  <p className="text-xs md:text-sm text-[#2E445B]">
                    Result: <span className="font-semibold text-[#1A1A1A]">3.6% loss</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 md:p-4 bg-[#F9FBFC] rounded-lg border-l-4 border-orange-500">
                <div className="flex-shrink-0">
                  <div className="text-2xl md:text-3xl font-bold text-orange-500">32%</div>
                  <p className="text-xs text-[#2E445B]">Quit 3-12mo</p>
                </div>
                <div className="border-l border-gray-200 pl-3 md:pl-4">
                  <p className="text-xs md:text-sm text-[#2E445B]">
                    Result: <span className="font-semibold text-[#1A1A1A]">6.8% loss</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 md:p-4 bg-[#F9FBFC] rounded-lg border-l-4 border-green-500">
                <div className="flex-shrink-0">
                  <div className="text-2xl md:text-3xl font-bold text-green-500">12%</div>
                  <p className="text-xs text-[#2E445B]">Stay on track</p>
                </div>
                <div className="border-l border-gray-200 pl-3 md:pl-4">
                  <p className="text-xs md:text-sm text-[#2E445B]">
                    <span className="font-semibold text-[#1A1A1A]">With support</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#2E445B]/70 mt-4 text-center">
              Study of 8,000+ patients
            </p>
          </div>

          {/* Right: The Solution */}
          <div className="bg-gradient-to-br from-[#1C4E80] to-[#2E445B] rounded-xl p-6 md:p-8 text-white shadow-soft flex flex-col justify-center">
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-[#C89F65] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold">13.7%</span>
                      <span className="text-xs md:text-sm text-white/80">Semaglutide</span>
                    </div>
                    <p className="text-xs text-white/70">Average weight loss</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-[#C89F65] flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold">18-25%</span>
                      <span className="text-xs md:text-sm text-white/80">Tirzepatide</span>
                    </div>
                    <p className="text-xs text-white/70">Up to 25.3% at 88 weeks</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs md:text-sm text-white/90 text-center leading-relaxed">
                Results matching clinical trials
              </p>
            </div>

            <p className="text-xs text-white/60 mt-3 text-center">
              Based on STEP, SUSTAIN & SURMOUNT trials
            </p>
          </div>

        </div>
      </div>
    </Section>
  );
};
