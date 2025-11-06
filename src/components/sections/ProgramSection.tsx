import React from 'react';
import { Stethoscope, Apple, Brain, Dumbbell } from 'lucide-react';
import { Section } from '../Section';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ProgramSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Stethoscope,
      title: 'GLP-1 Dosing + Endocrinology Oversight',
      delay: '0',
    },
    {
      icon: Apple,
      title: 'Personalized Regional Indian Menus',
      delay: '200',
    },
    {
      icon: Brain,
      title: 'Behavioral Therapy for a Healthier Lifestyle',
      delay: '400',
    },
    {
      icon: Dumbbell,
      title: 'Time-Efficient Resistance + Mobility Workouts',
      delay: '600',
    },
  ];

  return (
    <Section id="program" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-wide text-[#1C4E80]/80">The Approach</p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
              How we close the gap
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A]/90">
              A <span className="text-[#1C4E80]">4-specialist team</span> built around your life.
            </h3>
            <p className="text-lg text-[#2E445B]">
              Medication is the starting point. Leave the rest to us. Our 4-specialist team gives you the psychological tools, nutrition strategy, and medical oversight to turn initial progress into lasting transformation.
            </p>
            <div className="pt-2">
              <Button variant="primary" onClick={scrollToContact}>
                Get My Initial Assessment
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in animation-delay-${feature.delay} flex flex-col`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1C4E80] to-blue-600 flex items-center justify-center mb-4 shadow-button-3d">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-semibold text-[#1A1A1A] min-h-[3.5rem] flex items-center">
                    {feature.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
