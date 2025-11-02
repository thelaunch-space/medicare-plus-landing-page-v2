import React from 'react';
import { Section } from '../Section';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const TimelineSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const phases = [
    {
      number: 1,
      title: 'Foundation & Assessment',
      duration: 'Weeks 1-4',
      points: [
        'Baseline labs and diagnostics',
        'Initial endocrinology consult + GLP-1 plan',
        'Mindful eating introduction',
      ],
    },
    {
      number: 2,
      title: 'Structure',
      duration: 'Weeks 5-8',
      points: [
        'Nutrition adjustments and habit coaching',
        'Exercise ramp-up + progress review',
      ],
    },
    {
      number: 3,
      title: 'Acceleration',
      duration: 'Weeks 9-12',
      points: [
        'Habit reinforcement, muscle retention focus',
        'Psychological accountability sessions',
      ],
    },
    {
      number: 4,
      title: 'Optimization',
      duration: 'Month 4-6',
      points: [
        'Personalized taper planning',
        'Lifestyle maintenance education',
      ],
    },
    {
      number: 5,
      title: 'Independence',
      duration: 'Beyond Month 6',
      points: [
        'Taper execution + sustainability plan',
        'Continued check-ins as needed',
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
            Your roadmap to <span className="text-[#1C4E80]">lasting weight loss</span>
          </h2>
        </div>

        <div className="hidden lg:block relative">
          {/* Timeline line behind the circles */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-[#1C4E80] via-blue-500 to-[#1C4E80] rounded-full"></div>

          {/* Numbered circles on top of the line */}
          <div className="relative grid grid-cols-5 gap-8 mb-4">
            {phases.map((phase, index) => (
              <div key={index} className="flex justify-center relative z-10">
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#1C4E80] to-blue-600 rounded-full flex items-center justify-center shadow-button-3d">
                  <span className="text-white font-bold text-lg">{phase.number}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cards below the line */}
          <div className="relative grid grid-cols-5 gap-8 mt-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex flex-col h-full">
                <div className="bg-white rounded-2xl shadow-soft-lg p-6 hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{phase.title}</h3>
                    <p className="text-sm text-[#1C4E80] font-semibold">{phase.duration}</p>
                  </div>
                  <ul className="space-y-2 flex-grow">
                    {phase.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#2E445B]">
                        <span className="text-[#1C4E80] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1C4E80] to-blue-600 rounded-full"></div>

              <div className="absolute left-0 top-6 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#1C4E80] to-blue-600 rounded-full flex items-center justify-center shadow-button-3d">
                <span className="text-white font-bold">{phase.number}</span>
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{phase.title}</h3>
                  <p className="text-sm text-[#1C4E80] font-semibold">{phase.duration}</p>
                </div>
                <ul className="space-y-2">
                  {phase.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#2E445B]">
                      <span className="text-[#1C4E80] mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" onClick={scrollToContact}>
            Apply for Founders Cohort
          </Button>
        </div>
      </div>
    </Section>
  );
};
