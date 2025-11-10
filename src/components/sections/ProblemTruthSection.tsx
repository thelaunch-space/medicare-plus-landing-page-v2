import React from 'react';
import { Activity, AlertCircle, Shield } from 'lucide-react';
import { Card } from '../Card';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ProblemTruthSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="problem-truth" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">UNDERSTAND THE FULL PICTURE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
            Why <span className="text-[#1C4E80]">GLP-1</span> Alone May Not Yield Long Term Results - And How It Can Impact Your Wellness
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#F2F6F8' }}>
            <span className="text-sm text-[#2E445B]">GLP‑1 lowers appetite quickly; without behavioral and metabolic care, results often fade. We add both.</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Power */}
          <Card variant="default" className="animate-fade-in">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C4E80] to-blue-600 flex items-center justify-center shadow-button-3d">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">The Power of GLP‑1</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Appetite down</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Cravings down</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Early weight loss</span></li>
              </ul>
            </div>
          </Card>

          {/* Gaps */}
          <Card variant="default" className="animate-fade-in animation-delay-200 bg-[#FEF2F2]">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-button-3d" style={{ backgroundColor: 'white' }}>
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">What Breaks When Used Alone</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-red-500 mt-1">•</span><span>Habits persist</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-red-500 mt-1">•</span><span>Lean mass risk</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-red-500 mt-1">•</span><span>Rebound risk</span></li>
              </ul>
            </div>
          </Card>

          {/* Fix */}
          <Card variant="elevated" className="animate-fade-in animation-delay-400">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C89F65] to-amber-600 flex items-center justify-center shadow-button-3d">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">How We Close the Gap</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Dose titration</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Behavioral therapy for triggers</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Protein + strength</span></li>
                <li className="flex items-start gap-2 text-sm text-[#2E445B]"><span className="text-[#1C4E80] mt-1">•</span><span>Planned taper</span></li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Intentionally no footer chips/links to keep the section focused and consistent with palette */}
      </div>
    </Section>
  );
};
