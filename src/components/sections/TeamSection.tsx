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
  imagePosition: string; // Custom positioning for each face
}

export const TeamSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const team: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Subramanian Kannan, MD',
      role: 'US Board-Certified Endocrinologist',
      credentials: 'MD AB (Internal Medicine & Endocrinology) | Cleveland Clinic',
      atAGlance: 'Clinical Lead – Weight Loss Program. US-trained endocrinologist with 15+ years of global experience in diabetes, obesity, and metabolic health.',
      fullBio: [
        'Dr. Subramanian Kannan is a US-trained, board-certified endocrinologist with over 15 years of global experience in treating diabetes, obesity, thyroid, and hormonal disorders. He currently serves as Consultant and Head of Endocrinology at Narayana Health City, Bangalore, and leads clinical programs at the Mazumdar Shaw Medical Center.',
        'Trained at top institutions like the Cleveland Clinic and University of Connecticut, Dr. Kannan brings deep expertise in weight management, metabolic health, and thyroid care, backed by both cutting-edge research and compassionate patient care.',
        'He has published over 100+ scientific papers, received multiple national and international awards — including the Cleveland Clinic Caregiver Award, and serves as Principal Investigator on pioneering clinical research in thyroid and diabetes care. He is also a reviewer and editorial board member for leading endocrinology journals.',
        'What sets Dr. Kannan apart is his patient-first philosophy. Every protocol he designs, every treatment he delivers, focuses on sustainable, personalized care rooted in scientific evidence — not shortcuts. His work is driven by the belief that effective weight loss is not just about numbers, but restoring health, energy, and confidence.'
      ],
      imagePath: '/s-kannan.jpg',
      imagePosition: '60% 20%' // Face positioned right-center and upper portion
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
      imagePath: '/sheryl.jpeg',
      imagePosition: '50% 15%' // Face centered, upper portion for full-body shot
    },
    {
      id: 3,
      name: 'Dr. Venkatesh Veera, MBBS MBA',
      role: 'Program Director & Medical Strategist',
      credentials: 'Ex-Mayo Clinic, Johnson & Johnson',
      atAGlance: 'Program architect with decades of experience across medicine, pharmaceuticals, and medical technology, pioneering personalized, doctor-led metabolic care.',
      fullBio: [
        'Dr. Venkatesh brings together decades of experience across medicine, pharmaceuticals, and medical technology, with a vision to redefine weight management through personalized, doctor-led care. Having worked across diverse global healthcare systems, he understands the nuances of how science, behavior, and culture influence health outcomes.',
        'He unites endocrinology, nutrition, psychology, and exercise under a coordinated clinical framework, ensuring every client receives a plan that is as individual as their biology.',
        'Grounded in science and empathy, Dr. Venkatesh champions a holistic, concierge model of metabolic transformation for lasting results.'
      ],
      imagePath: '/dr-venkatesh.jpg',
      imagePosition: '50% 40%' // Face centered horizontally, adjusted vertically for tight headshot
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
        {/* Compact header for better fold fit */}
        <div className="text-center max-w-4xl mx-auto mb-6 lg:mb-8">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">YOUR CARE TEAM</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-2">
            Meet Your <span className="text-[#1C4E80]">Multidisciplinary Team</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#2E445B]">Trusted experts. Unified care.</p>
        </div>

        {/* 3-column grid on desktop for perfect fold fit */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-7xl mx-auto">
          {team.map((member, index) => {
            const isExpanded = expandedId === member.id;

            return (
              <div
                key={member.id}
                className={`bg-white rounded-xl shadow-soft animate-fade-in animation-delay-${index * 200} transition-all duration-300 flex flex-col ${
                  isExpanded ? 'ring-2 ring-[#1C4E80]' : ''
                }`}
              >
                {/* Circular Doctor Image - Centered at top */}
                <div className="flex justify-center pt-6 pb-4">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden bg-gradient-to-br from-[#1C4E80] to-blue-600 shadow-lg ring-4 ring-white">
                    <img
                      src={member.imagePath}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: member.imagePosition }}
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
                      className="w-full h-full hidden items-center justify-center text-white text-4xl font-bold"
                      style={{ display: 'none' }}
                    >
                      {member.name.split(' ')[0][0]}{member.name.split(' ')[member.name.split(' ').length - 1][0]}
                    </div>
                  </div>
                </div>

                {/* Card Content - Fixed structure for equal heights */}
                <div className="p-4 lg:p-5 flex flex-col flex-grow">
                  {/* Name & Role - Fixed height area */}
                  <div className="mb-3 min-h-[110px] sm:min-h-[100px] lg:min-h-[110px] flex flex-col justify-center">
                    <h3 className="text-lg lg:text-xl font-bold text-[#1A1A1A] mb-1 leading-tight text-center">
                      {member.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-[#1C4E80] font-semibold mb-2 leading-snug text-center">
                      {member.role}
                    </p>
                    <div className="flex items-center justify-center gap-1.5 text-[10px] lg:text-xs text-[#2E445B] flex-wrap">
                      <Award className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-[#C89F65] flex-shrink-0" />
                      <span className="leading-tight text-center">{member.credentials}</span>
                    </div>
                  </div>

                  {/* At a Glance - Fixed height area */}
                  <div className="mb-4 min-h-[80px] lg:min-h-[90px]">
                    <p className="text-xs lg:text-sm text-[#2E445B] leading-relaxed text-center">
                      {member.atAGlance}
                    </p>
                  </div>

                  {/* View More/Less Button */}
                  <button
                    onClick={() => toggleExpand(member.id)}
                    className="flex items-center justify-center gap-1.5 w-full px-3 py-2.5 rounded-lg bg-[#F9FBFC] hover:bg-[#F2F6F8] text-[#1C4E80] font-semibold text-xs lg:text-sm transition-colors duration-200 border border-[#1C4E80]/20 mt-auto"
                  >
                    <BookOpen className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    <span>{isExpanded ? 'View Less' : 'View Full Bio'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                    )}
                  </button>
                </div>

                {/* Expanded Bio - Scrollable to stay within fold */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? 'max-h-[400px] lg:max-h-[450px] opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 lg:px-5 pb-4 lg:pb-5 pt-0 max-h-[400px] lg:max-h-[450px] overflow-y-auto">
                    <div className="border-t border-gray-200 pt-4 space-y-3">
                      {member.fullBio.map((paragraph, idx) => (
                        <p key={idx} className="text-xs lg:text-sm text-[#2E445B] leading-relaxed">
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
      </div>
    </Section>
  );
};
