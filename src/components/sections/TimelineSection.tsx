import React from 'react';
import { Section } from '../Section';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const TimelineSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const months = [
    {
      number: 1,
      title: 'Foundation & Stabilization',
      areas: [
        {
          title: 'Endocrinology',
          points: [
            'Initial consultation to review GLP-1 drug, dosage, and labs',
            'Baseline metabolic profile (A1c, TSH, lipids, BP)',
            'Side effect management (nausea, constipation, appetite changes)',
          ],
        },
        {
          title: 'Nutrition',
          points: [
            'Personalized meal planning with calorie targets',
            'Small frequent meals strategy if nausea is an issue',
            'High-protein, high-fiber foods to enhance satiety',
          ],
        },
        {
          title: 'Psychology',
          points: [
            'Baseline mental health screening',
            'Introduction to mindful eating and body image work',
            'Emotional eating triggers discussion',
          ],
        },
        {
          title: 'Exercise',
          points: [
            'Light activity: 15-30 min/day walking, stretching',
            'Begin structured 3x/week program with low-impact cardio',
            'Basic strength training with bodyweight or resistance bands',
          ],
        },
      ],
    },
    {
      number: 2,
      title: 'Acceleration & Refinement',
      areas: [
        {
          title: 'Endocrinology',
          points: [
            'GLP-1 dose titration if appropriate',
            'Monitor side effects and adjust as needed',
            'Continue tracking metabolic markers',
          ],
        },
        {
          title: 'Nutrition',
          points: [
            'Meal balance optimization and glycemic control',
            'Time-restricted eating strategies (if tolerated)',
            'Manage social eating challenges and food variety',
          ],
        },
        {
          title: 'Psychology',
          points: [
            'Deep dive into food beliefs and self-sabotage patterns',
            'Cognitive-behavioral strategies for managing negative thoughts',
            'Introduction to habit tracking and journaling',
          ],
        },
        {
          title: 'Exercise',
          points: [
            'Progress to 4-5x/week routine',
            '2-3 days cardio (brisk walking, cycling, elliptical)',
            '2 days strength training with progressive resistance',
          ],
        },
      ],
    },
    {
      number: 3,
      title: 'Optimization & Sustainability',
      areas: [
        {
          title: 'Endocrinology',
          points: [
            'Assess weight loss progress (target: 5-10% body weight)',
            'Reassess labs and adjust medications if needed',
            'Plan for long-term maintenance phase',
          ],
        },
        {
          title: 'Nutrition',
          points: [
            'Shift focus to sustainability and autonomy',
            'Prepare for weight plateaus (normal at 2-3 months)',
            'Create flexible meal templates for long-term success',
          ],
        },
        {
          title: 'Psychology',
          points: [
            'Relapse prevention planning',
            'Self-compassion and body acceptance work',
            'Reinforce long-term identity change and goals',
          ],
        },
        {
          title: 'Exercise',
          points: [
            'Progressive overload in strength training',
            'Add interval training (HIIT-lite) if appropriate',
            'Celebrate non-scale wins: strength, energy, mood',
          ],
        },
      ],
    },
  ];

  return (
    <Section id="timeline" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">YOUR ROADMAP</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Your <span className="text-[#1C4E80]">3-Month Roadmap</span> to Sustainable Weight Loss
          </h2>
          <p className="text-lg text-[#2E445B] max-w-2xl mx-auto mt-4">
            Safe, sustainable weight loss while maximizing GLP-1 effectiveness through coordinated specialist care.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Timeline line behind the circles */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-[#1C4E80] via-blue-500 to-[#1C4E80] rounded-full"></div>

          {/* Numbered circles on top of the line */}
          <div className="relative grid grid-cols-3 gap-8 mb-4">
            {months.map((month, index) => (
              <div key={index} className="flex justify-center relative z-10">
                <div className="relative w-16 h-16 bg-gradient-to-br from-[#1C4E80] to-blue-600 rounded-full flex items-center justify-center shadow-button-3d">
                  <div className="text-center">
                    <span className="text-white font-bold text-sm block">Month</span>
                    <span className="text-white font-bold text-xl">{month.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cards below the line */}
          <div className="relative grid grid-cols-3 gap-8 mt-8">
            {months.map((month, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="bg-white rounded-2xl shadow-soft-lg p-6 hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{month.title}</h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    {month.areas.map((area, areaIdx) => (
                      <div key={areaIdx}>
                        <h4 className="text-sm font-semibold text-[#1C4E80] mb-2 uppercase tracking-wide">
                          {area.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {area.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="flex items-start gap-2 text-sm text-[#2E445B]">
                              <span className="text-[#1C4E80] mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-8">
          {months.map((month, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1C4E80] to-blue-600 rounded-full"></div>

              <div className="absolute left-0 top-6 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#1C4E80] to-blue-600 rounded-full flex items-center justify-center shadow-button-3d">
                <div className="text-center">
                  <span className="text-white font-bold text-xs block leading-none">Mo</span>
                  <span className="text-white font-bold text-lg leading-none">{month.number}</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{month.title}</h3>
                </div>

                <div className="space-y-4">
                  {month.areas.map((area, areaIdx) => (
                    <div key={areaIdx}>
                      <h4 className="text-sm font-semibold text-[#1C4E80] mb-2 uppercase tracking-wide">
                        {area.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {area.points.map((point, pointIdx) => (
                          <li key={pointIdx} className="flex items-start gap-2 text-sm text-[#2E445B]">
                            <span className="text-[#1C4E80] mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Feature Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#F9FBFC] to-[#F2F6F8] rounded-2xl p-6 md:p-8 border border-[#1C4E80]/20">
          <p className="text-center text-base md:text-lg text-[#2E445B] font-medium">
            <span className="text-[#1C4E80] font-semibold">Coordinated Care:</span> You interact with your program coordinator—but behind the scenes, 4 specialists meet weekly to synchronize your care.
          </p>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" onClick={scrollToContact}>
            Get My Initial Assessment
          </Button>
        </div>
      </div>
    </Section>
  );
};
