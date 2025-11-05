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
      purpose: 'Getting you started safely with coordinated specialist care',
      highlights: [
        'Initial consultation: GLP-1 review, baseline labs, and metabolic profile',
        'Personalized meal plan with high-protein, high-fiber strategy',
        'Light activity routine: 15-30 minutes daily walking',
        'Mental health screening and mindful eating introduction',
      ],
    },
    {
      number: 2,
      title: 'Acceleration & Refinement',
      purpose: 'Optimizing your dosage and building sustainable habits',
      highlights: [
        'GLP-1 dose titration and side effect management',
        'Advanced nutrition: meal timing and glycemic control strategies',
        'Progressive exercise: 4-5x/week with cardio and strength training',
        'Deep dive into food beliefs and habit tracking',
      ],
    },
    {
      number: 3,
      title: 'Optimization & Sustainability',
      purpose: 'Building long-term success and preventing relapse',
      highlights: [
        'Target achieved: 5-10% body weight loss',
        'Sustainable meal templates and plateau management',
        'Relapse prevention and body acceptance work',
        'Celebrate non-scale wins: strength, energy, mood',
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
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {months.map((month, index) => (
              <div key={index} className="relative flex flex-col h-full">
                {/* Large Number */}
                <div className="mb-6">
                  <div className="text-7xl lg:text-8xl font-bold text-[#1C4E80]/10 leading-none">
                    {month.number}
                  </div>
                </div>

                {/* Card Content - using flex to fill available space */}
                <div className="bg-white rounded-2xl shadow-soft p-6 lg:p-8 hover:shadow-soft-lg transition-all duration-300 flex flex-col flex-grow">
                  {/* Title - fixed height area */}
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-3 min-h-[4rem] lg:min-h-[4.5rem]">
                    {month.title}
                  </h3>

                  {/* Purpose - fixed height area */}
                  <p className="text-sm lg:text-base text-[#1C4E80] mb-6 italic min-h-[3rem] lg:min-h-[3.5rem]">
                    {month.purpose}
                  </p>

                  {/* Highlights - flexible area */}
                  <ul className="space-y-3 flex-grow">
                    {month.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#1C4E80] mt-1.5 flex-shrink-0">•</span>
                        <span className="text-sm lg:text-base text-[#2E445B] leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connector Line (not on last item) */}
                {index < months.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-12 h-0.5 bg-gradient-to-r from-[#1C4E80]/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {months.map((month, index) => (
            <div key={index} className="relative">
              {/* Large Number */}
              <div className="mb-4">
                <div className="text-6xl font-bold text-[#1C4E80]/10 leading-none">
                  {month.number}
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-white rounded-2xl shadow-soft p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  {month.title}
                </h3>

                {/* Purpose */}
                <p className="text-sm text-[#1C4E80] mb-5 italic">
                  {month.purpose}
                </p>

                {/* Highlights */}
                <ul className="space-y-3">
                  {month.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#1C4E80] mt-1.5 flex-shrink-0">•</span>
                      <span className="text-sm text-[#2E445B] leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector (not on last item) */}
              {index < months.length - 1 && (
                <div className="flex justify-center my-6">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#1C4E80]/30 to-transparent"></div>
                </div>
              )}
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
