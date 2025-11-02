import React, { useState } from 'react';
import { BookOpen, ChevronUp } from 'lucide-react';
import { Section } from '../Section';
import { Card } from '../Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ScienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);

  const studies = [
    {
      id: 1,
      name: 'STEP Trial',
      title: 'Semaglutide Treatment Effect in People with Obesity',
      summary: 'Clinical trial demonstrating sustained weight loss with semaglutide when combined with lifestyle interventions. Participants showed 15-20% body weight reduction with structured support.',
    },
    {
      id: 2,
      name: 'SUSTAIN',
      title: 'Semaglutide Unabated Sustainability in Treatment',
      summary: 'Long-term study showing the importance of continued medical supervision and behavioral support in maintaining weight loss outcomes beyond initial treatment phases.',
    },
    {
      id: 3,
      name: 'SURMOUNT',
      title: 'Tirzepatide Once Weekly for Obesity',
      summary: 'Evidence-based research highlighting the enhanced effectiveness of GLP-1 medications when paired with multidisciplinary care including nutrition, exercise, and psychological support.',
    },
  ];

  const handleCardClick = (studyId: number) => {
    setExpandedStudy(expandedStudy === studyId ? null : studyId);
  };

  return (
    <Section id="science" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">EVIDENCE</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Grounded in <span className="text-[#1C4E80]">real clinical evidence</span>
          </h2>
          <p className="text-lg text-[#2E445B]">
            Our protocols align with global trials and ADA guidelines, ensuring measurable, safe, and sustainable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {studies.map((study, index) => {
            const isExpanded = expandedStudy === study.id;
            const isOtherExpanded = expandedStudy && expandedStudy !== study.id;
            
            return (
              <Card
                key={study.id}
                variant="elevated"
                className={`cursor-pointer animate-fade-in animation-delay-${index * 200} transition-all duration-500 ${
                  isExpanded 
                    ? 'md:col-span-3 md:row-span-1' 
                    : isOtherExpanded 
                    ? 'opacity-50 scale-95' 
                    : 'hover:shadow-soft-lg hover:-translate-y-1'
                }`}
                onClick={() => handleCardClick(study.id)}
              >
                {/* Collapsed State */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-[#C89F65] to-amber-600 flex items-center justify-center shadow-button-3d">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#1A1A1A]">{study.name}</h3>
                    <p className="text-sm text-[#2E445B]">
                      {isExpanded ? 'Click to collapse' : 'Click to learn more'}
                    </p>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-slide-up">
                    <div className="max-w-4xl mx-auto text-center">
                      <h4 className="text-xl font-semibold text-[#1C4E80] mb-4">
                        {study.title}
                      </h4>
                      <p className="text-[#2E445B] leading-relaxed text-left">
                        {study.summary}
                      </p>
                      
                      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="flex items-center gap-2 text-sm text-[#2E445B] bg-[#F2F6F8] rounded-lg px-4 py-3">
                          <ChevronUp className="w-4 h-4 text-[#1C4E80]" />
                          <span>Expanded view</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Expanding indicator */}
                <div className={`absolute top-4 right-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}>
                  <ChevronUp className="w-5 h-5 text-[#2E445B]/50" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
