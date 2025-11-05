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

        {/* Real-World Evidence Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-soft-lg p-8 md:p-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-6 text-center">
              Why Medical Supervision <span className="text-[#1C4E80]">Matters</span>
            </h3>

            <div className="space-y-6 text-[#2E445B]">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-[#1C4E80]">Clinical trials vs. real-world results:</span> The gap matters.
              </p>

              <p className="leading-relaxed">
                In clinical trials, patients on GLP-1 medications (semaglutide, tirzepatide) achieved <span className="font-semibold">15-20% weight loss</span>.
                But a real-world study of nearly 8,000 patients told a different story:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-[#F9FBFC] rounded-xl p-5 border border-[#1C4E80]/10">
                  <div className="text-3xl font-bold text-[#1C4E80] mb-2">20%</div>
                  <p className="text-sm">
                    Discontinued within <span className="font-semibold">3 months</span>
                    <br />
                    <span className="text-[#1C4E80] font-semibold">→ 3.6% weight loss</span>
                  </p>
                </div>

                <div className="bg-[#F9FBFC] rounded-xl p-5 border border-[#1C4E80]/10">
                  <div className="text-3xl font-bold text-[#1C4E80] mb-2">32%</div>
                  <p className="text-sm">
                    Discontinued <span className="font-semibold">3-12 months</span>
                    <br />
                    <span className="text-[#1C4E80] font-semibold">→ 6.8% weight loss</span>
                  </p>
                </div>

                <div className="bg-[#F9FBFC] rounded-xl p-5 border border-[#1C4E80]/10">
                  <div className="text-3xl font-bold text-[#1C4E80] mb-2">12%</div>
                  <p className="text-sm">
                    <span className="font-semibold">Continued treatment</span>
                    <br />
                    <span className="text-[#1C4E80] font-semibold">→ Average weight loss</span>
                  </p>
                </div>
              </div>

              <p className="leading-relaxed">
                <span className="font-semibold text-[#1A1A1A]">The difference?</span> Adherence, proper dosing, and structured support.
              </p>

              <div className="bg-gradient-to-r from-[#F9FBFC] to-[#F2F6F8] rounded-xl p-6 border border-[#1C4E80]/20 mt-6">
                <p className="text-base leading-relaxed">
                  Patients on <span className="font-semibold">higher maintenance doses with continuous medical supervision</span> achieved
                  results matching clinical trials:
                </p>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1C4E80]"></div>
                    <span><span className="font-semibold text-[#1C4E80]">Semaglutide:</span> 13.7% weight loss</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1C4E80]"></div>
                    <span><span className="font-semibold text-[#1C4E80]">Tirzepatide:</span> 18% weight loss (up to 25.3% at 88 weeks)</span>
                  </div>
                </div>
              </div>

              <p className="text-lg font-semibold text-[#1A1A1A] text-center pt-4">
                Our program bridges this gap. Weekly team coordination, proactive side effect management, and psychological
                support keep you on track—not just on medication, but on your path to lasting results.
              </p>
            </div>
          </div>
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
