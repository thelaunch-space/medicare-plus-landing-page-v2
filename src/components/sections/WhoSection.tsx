import React from 'react';
import { CheckCircle, XCircle, Target } from 'lucide-react';
import { Section } from '../Section';
import { Card } from '../Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhoSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section id="who" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Who this is <span className="text-gradient-teal">for</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card variant="elevated" className="animate-fade-in">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-button-3d">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-primary">Ideal Candidates</h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Currently using or considering GLP-1 (Ozempic, Wegovy, etc.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Looking for a structured, medical-led plan
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Need confidentiality and personalized care
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="animate-fade-in animation-delay-200">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-button-3d">
                <XCircle className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-primary">Not a Fit</h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Seeking quick fixes or generic app-based programs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Not ready to commit to lifestyle changes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Looking for medication-only solutions
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          <Card variant="elevated" className="animate-fade-in animation-delay-400">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-teal to-cyan-500 flex items-center justify-center shadow-button-3d">
                <Target className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-primary">Expectations</h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    3-12 month commitment to structured program
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Weekly check-ins with multidisciplinary team
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-secondary">
                    Active participation in nutrition and behavioral coaching
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
