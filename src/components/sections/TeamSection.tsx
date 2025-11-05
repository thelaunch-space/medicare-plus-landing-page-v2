import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Section } from '../Section';
import { Card } from '../Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const TeamSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const team = [
    {
      id: 1,
      name: 'Dr. Subramani Kannan',
      role: 'Endocrinologist',
      credentials: 'Cleveland Clinic-trained',
      bio: 'Expert in metabolic health and GLP-1 medication management with years of clinical experience.',
    },
    {
      id: 2,
      name: 'Sheryl Salas',
      role: 'Senior Clinical Nutritionist',
      credentials: '25+ years in metabolic health',
      bio: 'Specialist in culturally adapted nutrition plans with a focus on sustainable lifestyle changes.',
    },
    {
      id: 3,
      name: 'Clinical Psychologist',
      role: 'Behavioral Therapy Specialist',
      credentials: 'Cognitive-behavioral and behavioral therapy',
      bio: 'Dedicated to addressing emotional eating patterns and building lasting behavioral change.',
    },
    {
      id: 4,
      name: 'Dr. Venkatesh',
      role: 'Program Director',
      credentials: 'Care Coordinator',
      bio: 'Ensures seamless integration of all care components and personalized patient support.',
    },
  ];

  return (
    <Section id="team" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">YOUR CARE TEAM</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Meet your <span className="text-[#1C4E80]">multidisciplinary team</span>
          </h2>
          <p className="text-lg text-[#2E445B]">Trusted experts. Unified care.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card
              key={member.id}
              variant="elevated"
              className={`cursor-pointer animate-fade-in animation-delay-${index * 200}`}
              onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
            >
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#1C4E80] to-blue-600 flex items-center justify-center shadow-button-3d">
                  <User className="w-12 h-12 text-white" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-1">{member.name}</h3>
                  <p className="text-sm text-[#1C4E80] font-semibold mb-1">{member.role}</p>
                  <p className="text-xs text-[#2E445B]">{member.credentials}</p>
                </div>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    expandedId === member.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-[#2E445B]">{member.bio}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-[#2E445B] italic mt-8">
          Images placeholder - Replace from /public directory
        </p>
      </div>
    </Section>
  );
};
