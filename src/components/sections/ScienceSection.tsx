import React from 'react';
import { TrendingUp, AlertCircle, CheckCircle, Award } from 'lucide-react';
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">CLINICAL EVIDENCE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Why medical supervision <span className="text-[#1C4E80]">matters</span>
          </h2>
        </div>

        {/* Big Stat Callout */}
        <div className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 mb-8 md:mb-12 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-red-500" />
          </div>
          <div className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-4">
            Only <span className="text-red-500">12%</span>
          </div>
          <p className="text-lg md:text-xl text-[#2E445B] max-w-2xl mx-auto">
            complete their GLP-1 medication journey without structured support
          </p>
        </div>

        {/* The Problem: Real-World Discontinuation */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
            Real-world outcomes without medical support
          </h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-l-4 border-red-500">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-3">20%</div>
              <p className="text-sm md:text-base text-[#2E445B] mb-2">
                Quit within <span className="font-semibold text-[#1A1A1A]">3 months</span>
              </p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs md:text-sm text-[#2E445B]">
                  Result: <span className="font-semibold text-[#1A1A1A]">3.6% weight loss</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-l-4 border-orange-500">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-3">32%</div>
              <p className="text-sm md:text-base text-[#2E445B] mb-2">
                Quit within <span className="font-semibold text-[#1A1A1A]">3-12 months</span>
              </p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs md:text-sm text-[#2E445B]">
                  Result: <span className="font-semibold text-[#1A1A1A]">6.8% weight loss</span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-l-4 border-green-500">
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-3">12%</div>
              <p className="text-sm md:text-base text-[#2E445B] mb-2">
                <span className="font-semibold text-[#1A1A1A]">Stay on track</span>
              </p>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs md:text-sm text-[#2E445B]">
                  With proper support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Solution: With Medical Supervision */}
        <div className="bg-gradient-to-br from-[#1C4E80] to-[#2E445B] rounded-2xl p-8 md:p-12 text-white mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-[#C89F65]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            With continuous medical supervision
          </h3>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-white/20">
              <CheckCircle className="w-8 h-8 text-[#C89F65] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">13.7%</div>
              <p className="text-sm md:text-base text-white/90 mb-1 font-semibold">Semaglutide</p>
              <p className="text-xs md:text-sm text-white/70">Average weight loss</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center border border-white/20">
              <TrendingUp className="w-8 h-8 text-[#C89F65] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">18-25%</div>
              <p className="text-sm md:text-base text-white/90 mb-1 font-semibold">Tirzepatide</p>
              <p className="text-xs md:text-sm text-white/70">Up to 25.3% at 88 weeks</p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Results matching clinical trials — achieved through
              <span className="font-semibold text-[#C89F65]"> weekly team coordination, proactive management, and psychological support</span>
            </p>
          </div>
        </div>

        {/* Simple Evidence Footer */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-[#2E445B]">
            Based on real-world evidence from <span className="font-semibold text-[#1A1A1A]">8,000+ patients</span> and
            clinical trials including <span className="font-semibold text-[#1C4E80]">STEP, SUSTAIN & SURMOUNT</span>
          </p>
        </div>
      </div>
    </Section>
  );
};
