import React from 'react';
import { Check, X } from 'lucide-react';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ComparisonSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const comparisons = [
    {
      aspect: 'Appetite & cravings',
      alone: 'Temporary suppression',
      vitalyf: 'Root-cause management + coaching',
    },
    {
      aspect: 'Emotional eating',
      alone: 'Unaddressed',
      vitalyf: 'Behavioral therapy support',
    },
    {
      aspect: 'Metabolic monitoring',
      alone: 'Minimal',
      vitalyf: 'Endocrinologist-led tracking',
    },
    {
      aspect: 'Long-term results',
      alone: 'Often rebound',
      vitalyf: 'Structured taper + sustainability plan',
    },
    {
      aspect: 'Support',
      alone: 'Self-guided',
      vitalyf: 'Weekly multidisciplinary reviews',
    },
  ];

  return (
    <Section id="comparison" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">COMPARE CARE MODELS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            <span className="text-[#1C4E80]">GLP-1 Alone</span> vs <span className="text-[#1C4E80]">Vitalyf</span>
          </h2>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#F9FBFC] to-[#F2F6F8]">
                  <th className="px-6 py-5 text-left text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-[#2E445B] uppercase tracking-wider">
                    GLP-1 Alone
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-[#1C4E80] uppercase tracking-wider">
                    Vitalyf
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F9FBFC]'
                    } hover:bg-[#F2F6F8]`}
                  >
                    <td className="px-6 py-5 whitespace-nowrap font-semibold text-[#1A1A1A]">
                      {item.aspect}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-[#2E445B]">{item.alone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#1C4E80] flex-shrink-0 mt-0.5" />
                        <span className="text-[#1A1A1A] font-medium">{item.vitalyf}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="md:hidden space-y-6">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="bg-gradient-to-r from-[#F9FBFC] to-[#F2F6F8] px-6 py-4">
                <h3 className="font-bold text-[#1A1A1A]">{item.aspect}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-sm font-semibold text-[#2E445B]">GLP-1 Alone</span>
                  </div>
                  <p className="text-[#2E445B] ml-7">{item.alone}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-[#1C4E80]" />
                    <span className="text-sm font-semibold text-[#1C4E80]">Vitalyf</span>
                  </div>
                  <p className="text-[#1A1A1A] font-medium ml-7">{item.vitalyf}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#2E445B] italic mt-8 text-sm">
          Evidence shows combined care achieves safer, longer-lasting results.
        </p>
      </div>
    </Section>
  );
};
