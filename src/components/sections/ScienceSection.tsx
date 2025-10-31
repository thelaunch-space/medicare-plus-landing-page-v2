import React, { useState } from 'react';
import { BookOpen, X } from 'lucide-react';
import { Section } from '../Section';
import { Card } from '../Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ScienceSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

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

  return (
    <Section id="science" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Grounded in <span className="text-gradient-teal">real clinical evidence</span>
          </h2>
          <p className="text-lg text-secondary">
            Our protocols align with global trials and ADA guidelines, ensuring measurable, safe, and sustainable outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((study, index) => (
            <Card
              key={study.id}
              variant="elevated"
              className={`cursor-pointer animate-fade-in animation-delay-${index * 200}`}
              onClick={() => setSelectedStudy(study.id)}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-accent-gold to-amber-500 flex items-center justify-center shadow-button-3d">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary">{study.name}</h3>
                <p className="text-sm text-secondary">Click to learn more</p>
              </div>
            </Card>
          ))}
        </div>

        {selectedStudy && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-md"
            aria-modal="true"
            role="dialog"
            onClick={() => setSelectedStudy(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-soft-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-metallic-platinum p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {studies.find(s => s.id === selectedStudy)?.name}
                  </h3>
                  <p className="text-sm text-accent-teal font-semibold">
                    {studies.find(s => s.id === selectedStudy)?.title}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="flex-shrink-0 p-2 hover:bg-metallic-silver rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-secondary" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-secondary leading-relaxed">
                  {studies.find(s => s.id === selectedStudy)?.summary}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};
