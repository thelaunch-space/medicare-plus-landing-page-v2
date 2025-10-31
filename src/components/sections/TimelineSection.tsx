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
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Your roadmap to <span className="text-gradient-teal">lasting weight loss</span>
          </h2>
        </div>

        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal via-cyan-400 to-accent-teal transform -translate-y-1/2 rounded-full"></div>

          <div className="relative grid grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative ${index % 2 === 0 ? 'pt-32' : 'pb-32'}`}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-accent-teal to-cyan-500 rounded-full flex items-center justify-center shadow-button-3d z-10">
                  <span className="text-white font-bold text-lg">{phase.number}</span>
                </div>

                <div className="bg-white rounded-2xl shadow-soft-lg p-6 hover:shadow-soft-lg hover:-translate-y-2 transition-all duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1">{phase.title}</h3>
                    <p className="text-sm text-accent-teal font-semibold">{phase.duration}</p>
                  </div>
                  <ul className="space-y-2">
                    {phase.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="text-accent-teal mt-1">•</span>
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
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-teal to-cyan-500 rounded-full"></div>

              <div className="absolute left-0 top-6 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-accent-teal to-cyan-500 rounded-full flex items-center justify-center shadow-button-3d">
                <span className="text-white font-bold">{phase.number}</span>
              </div>

              <div className="bg-white rounded-2xl shadow-soft p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-1">{phase.title}</h3>
                  <p className="text-sm text-accent-teal font-semibold">{phase.duration}</p>
                </div>
                <ul className="space-y-2">
                  {phase.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="text-accent-teal mt-1">•</span>
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
            See full 5-phase plan
          </Button>
        </div>
      </div>
    </Section>
  );
};
