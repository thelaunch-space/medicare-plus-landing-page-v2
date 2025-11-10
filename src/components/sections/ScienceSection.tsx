import React from 'react';
import { TrendingDown, Dumbbell, Target } from 'lucide-react';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ScienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const evidence = [
    {
      icon: TrendingDown,
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50',
      stat: '⅔',
      title: 'Weight Regain Risk',
      finding: 'When people stopped taking GLP-1, they gained back about two-thirds of the weight they had lost.',
      citation: 'STEP-1 Trial Extension',
    },
    {
      icon: Dumbbell,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50',
      stat: '✓',
      title: 'Exercise Maintains Results',
      finding: 'People who kept up with exercise maintained their weight even after stopping, unlike those who used only medication.',
      citation: 'EClinicalMedicine. 2024 Feb 19;69:102475',
    },
    {
      icon: Target,
      iconColor: 'text-[#1C4E80]',
      iconBg: 'bg-blue-50',
      stat: '↑',
      title: 'Combined Approach Works Best',
      finding: 'GLP-1 works best when paired with a healthy diet and behavior changes — together, they lead to far greater weight loss.',
      citation: 'STEP-3 Randomized Clinical Trial',
    },
  ];

  return (
    <Section id="science" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-wide text-[#1C4E80]/80 mb-2">CLINICAL EVIDENCE</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            What the Research <span className="text-[#1C4E80]">Shows</span>
          </h2>
          <p className="text-base md:text-lg text-[#2E445B]">
            Evidence from major clinical trials on GLP-1 effectiveness
          </p>
        </div>

        {/* Evidence Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {evidence.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col animate-fade-in animation-delay-${index * 200}`}
              >
                {/* Icon and Stat */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div className={`text-3xl font-bold ${item.iconColor}`}>
                    {item.stat}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>

                {/* Finding */}
                <p className="text-sm text-[#2E445B] leading-relaxed mb-4 flex-grow">
                  {item.finding}
                </p>

                {/* Citation */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-[#2E445B]/70 italic">
                    {item.citation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
