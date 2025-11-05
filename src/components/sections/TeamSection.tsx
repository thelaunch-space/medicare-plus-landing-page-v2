import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, BookOpen } from 'lucide-react';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  credentials: string;
  atAGlance: string;
  fullBio: string[];
  imagePath: string;
}

export const TeamSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Subramanian Kannan, MD',
      role: 'US Board-Certified Endocrinologist',
      credentials: 'American Board (Internal Medicine & Endocrinology)',
      atAGlance: 'Clinical Lead – Weight Loss Program. US-trained endocrinologist with 15+ years of global experience in diabetes, obesity, and metabolic health.',
      fullBio: [
        'Dr. Subramanian Kannan is a US-trained, board-certified endocrinologist with over 15 years of global experience in treating diabetes, obesity, thyroid, and hormonal disorders. He currently serves as Consultant and Head of Endocrinology at Narayana Health City, Bangalore, and leads clinical programs at the Mazumdar Shaw Medical Center.',
        'Trained at top institutions like the Cleveland Clinic and University of Connecticut, Dr. Kannan brings deep expertise in weight management, metabolic health, and thyroid care, backed by both cutting-edge research and compassionate patient care.',
        'He has published over 100+ scientific papers, received multiple national and international awards — including the Cleveland Clinic Caregiver Award, and serves as Principal Investigator on pioneering clinical research in thyroid and diabetes care. He is also a reviewer and editorial board member for leading endocrinology journals.',
        'What sets Dr. Kannan apart is his patient-first philosophy. Every protocol he designs, every treatment he delivers, focuses on sustainable, personalized care rooted in scientific evidence — not shortcuts. His work is driven by the belief that effective weight loss is not just about numbers, but restoring health, energy, and confidence.'
      ],
      imagePath: '/dr-kannan.jpg'
    },
    {
      id: 2,
      name: 'Sheryl S. Salis',
      role: 'Registered Dietitian & Certified Diabetes Educator',
      credentials: 'Founder, Nurture Health Solutions | 25+ years experience',
      atAGlance: 'Internationally acclaimed nutrition expert specializing in personalized, culturally-adapted meal plans for safe, sustainable weight loss.',
      fullBio: [
        'Sheryl S. Salis is an internationally acclaimed Registered Dietitian and Certified Diabetes Educator with over 25 years of experience in clinical nutrition, metabolic health, and lifestyle management. As the founder of Nurture Health Solutions, she has helped thousands of individuals achieve safe, sustainable weight loss through personalized nutrition plans rooted in science — not fads.',
        'What makes Sheryl truly unique is her ability to customize each weight loss program based on a person\'s health history, goals, and most importantly, their cultural food habits. Whether someone prefers regional Indian meals or is managing chronic conditions like diabetes or PCOS, her approach ensures that no one is asked to give up on their favourite foods or lifestyle…just healthy, sustainable tweaks !!.',
        'A recipient of prestigious awards such as the Sadhana Award and IAPEN National Award for Excellence in Nutrition, Sheryl has also been recognized globally — including a fellowship at the Children\'s Hospital in Sydney and a contributor role with The Lancet Commission on Type 1 Diabetes.',
        'Beyond clinical work, she\'s a published author, educator, speaker, and an advisor to international diabetes and nutrition associations. Her programs combine evidence-based dietetics with holistic wellness, giving people the tools they need to not just lose weight, but live stronger, healthier, happier lives.'
      ],
      imagePath: '/sheryl-salis.jpg'
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section id="team" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">YOUR CARE TEAM</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Meet your <span className="text-[#1C4E80]">multidisciplinary team</span>
          </h2>
          <p className="text-base md:text-lg text-[#2E445B]">Trusted experts. Unified care.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => {
            const isExpanded = expandedId === member.id;

            return (
              <div
                key={member.id}
                className={`bg-white rounded-xl shadow-soft overflow-hidden animate-fade-in animation-delay-${index * 200} transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-[#1C4E80]' : ''
                }`}
              >
                {/* Card Header - Always Visible */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-gradient-to-br from-[#1C4E80] to-blue-600 shadow-soft-lg">
                        <img
                          src={member.imagePath}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.nextElementSibling) {
                              (target.nextElementSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                        <div
                          className="w-full h-full hidden items-center justify-center text-white text-3xl font-bold"
                          style={{ display: 'none' }}
                        >
                          {member.name.split(' ')[0][0]}{member.name.split(' ')[member.name.split(' ').length - 1][0]}
                        </div>
                      </div>
                    </div>

                    {/* Name & Credentials */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm md:text-base text-[#1C4E80] font-semibold mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#2E445B]">
                        <Award className="w-4 h-4 text-[#C89F65]" />
                        <span>{member.credentials}</span>
                      </div>
                    </div>
                  </div>

                  {/* At a Glance */}
                  <div className="mb-4">
                    <p className="text-sm md:text-base text-[#2E445B] leading-relaxed">
                      {member.atAGlance}
                    </p>
                  </div>

                  {/* View More/Less Button */}
                  <button
                    onClick={() => toggleExpand(member.id)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-[#F9FBFC] hover:bg-[#F2F6F8] text-[#1C4E80] font-semibold text-sm transition-colors duration-200 border border-[#1C4E80]/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{isExpanded ? 'View Less' : 'View Full Bio'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Bio */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? 'max-h-[2000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                    <div className="border-t border-gray-200 pt-6 space-y-4">
                      {member.fullBio.map((paragraph, idx) => (
                        <p key={idx} className="text-sm md:text-base text-[#2E445B] leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note about more team members */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#2E445B] italic">
            Additional team members (Psychologist & Program Coordinator) coming soon
          </p>
        </div>
      </div>
    </Section>
  );
};
