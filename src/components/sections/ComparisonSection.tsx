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
      medicare: 'Root-cause management + coaching',
    },
    {
      aspect: 'Emotional eating',
      alone: 'Unaddressed',
      medicare: 'CBT support',
    },
    {
      aspect: 'Metabolic monitoring',
      alone: 'Minimal',
      medicare: 'Endocrinologist-led tracking',
    },
    {
      aspect: 'Long-term results',
      alone: 'Often rebound',
      medicare: 'Structured taper + sustainability plan',
    },
    {
      aspect: 'Support',
      alone: 'Self-guided',
      medicare: 'Weekly multidisciplinary reviews',
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
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            <span className="text-gradient-teal">GLP-1 alone</span> vs <span className="text-gradient-teal">Medicare+</span>
          </h2>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <div className="bg-white rounded-2xl shadow-soft-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-metallic-silver to-metallic-platinum">
                  <th className="px-6 py-5 text-left text-sm font-bold text-primary uppercase tracking-wider">
                    Aspect
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-secondary uppercase tracking-wider">
                    GLP-1 Alone
                  </th>
                  <th className="px-6 py-5 text-left text-sm font-bold text-accent-teal uppercase tracking-wider">
                    Medicare+
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-metallic-platinum">
                {comparisons.map((item, index) => (
                  <tr
                    key={index}
                    className={`transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-metallic-white'
                    } hover:bg-metallic-silver`}
                  >
                    <td className="px-6 py-5 whitespace-nowrap font-semibold text-primary">
                      {item.aspect}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3">
                        <X className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                        <span className="text-secondary">{item.alone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                        <span className="text-primary font-medium">{item.medicare}</span>
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
              <div className="bg-gradient-to-r from-metallic-silver to-metallic-platinum px-6 py-4">
                <h3 className="font-bold text-primary">{item.aspect}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-accent-coral" />
                    <span className="text-sm font-semibold text-secondary">GLP-1 Alone</span>
                  </div>
                  <p className="text-secondary ml-7">{item.alone}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-5 h-5 text-accent-teal" />
                    <span className="text-sm font-semibold text-accent-teal">Medicare+</span>
                  </div>
                  <p className="text-primary font-medium ml-7">{item.medicare}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary italic mt-8 text-sm">
          Evidence shows combined care achieves safer, longer-lasting results.
        </p>
      </div>
    </Section>
  );
};
