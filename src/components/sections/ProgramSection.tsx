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
      title: 'GLP-1 dosing + endocrinology oversight',
      delay: '0',
    },
    {
      icon: Apple,
      title: 'Personalized Indian meal plans',
      delay: '200',
    },
    {
      icon: Brain,
      title: 'CBT for emotional eating',
      delay: '400',
    },
    {
      icon: Dumbbell,
      title: 'Time-efficient resistance + mobility workouts',
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
            <p className="text-sm uppercase tracking-wide text-accent-teal/80">The Approach</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              How we close the gap
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary/90">
              A <span className="text-gradient-teal">4-specialist team</span> built around your life.
            </h3>
            <p className="text-lg text-secondary">
              One endocrinologist, one psychologist, one nutritionist, and a care coordinator—working together to personalize every step so results last.
            </p>
            <div className="pt-2">
              <Button variant="primary" onClick={scrollToContact}>
                Book a Confidential Consultation
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in animation-delay-${feature.delay}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-teal to-cyan-500 flex items-center justify-center mb-4 shadow-button-3d">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="font-semibold text-primary">
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
