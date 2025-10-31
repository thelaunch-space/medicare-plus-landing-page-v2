import React from 'react';
import { TrendingDown, AlertCircle, RefreshCw, CheckCircle, Shield, Target } from 'lucide-react';
import { Card } from '../Card';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const ProblemTruthSection: React.FC = () => {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <Section id="problem-truth" background="silver">
      <div className="space-y-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Why <span className="text-gradient-teal">GLP-1</span> is powerful—and why it isn't enough alone.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <Card variant="default" className="h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                What usually goes wrong after the injection
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-accent-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Early loss, later regain.</h4>
                    <p className="text-secondary text-sm">
                      Weight comes back once medication stops or plateaus.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-accent-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Side effects without guidance.</h4>
                    <p className="text-secondary text-sm">
                      Nausea, constipation, fatigue—unmanaged and frustrating.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-accent-coral" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Old habits resurface.</h4>
                    <p className="text-secondary text-sm">
                      Emotional eating and low muscle mass persist.
                    </p>
                  </div>
                </div>

                <p className="text-sm italic text-secondary-light pt-4 border-t border-metallic-platinum">
                  If medication is a head start, these are the reasons people lose momentum.
                </p>
              </div>
            </Card>
          </div>

          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <Card variant="teal" className="h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                The clinical truth we treat for lasting results
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Medication is a tool, not the plan.</h4>
                    <p className="text-secondary text-sm">
                      Sustainable change requires expert supervision and structured lifestyle support.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">We protect metabolism.</h4>
                    <p className="text-secondary text-sm">
                      High-protein nutrition and strength-focused exercise maintain lean mass.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Target className="w-6 h-6 text-accent-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">We build exit plans.</h4>
                    <p className="text-secondary text-sm">
                      Structured tapering and relapse-prevention strategies stop rebound gain.
                    </p>
                  </div>
                </div>

                <p className="text-sm italic text-secondary-light pt-4 border-t border-accent-teal/30">
                  That's why doctor-led, multidisciplinary care works long-term.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
