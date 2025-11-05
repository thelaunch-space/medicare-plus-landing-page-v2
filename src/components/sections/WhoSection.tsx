import React from 'react';
import { CheckCircle, XCircle, Target, Crown, Building2, Briefcase, Smartphone, Clock, DollarSign } from 'lucide-react';
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
        <div className="text-center max-w-6xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">FOR FOUNDERS & EXECUTIVES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Who this is <span className="text-[#1C4E80]">for</span>
          </h2>
          <p className="text-lg text-[#2E445B]">
            Medical weight loss designed for demanding schedules and high standards
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* For Founders & Executives - Larger Column */}
            <div className="lg:col-span-2">
              <Card variant="elevated" className="animate-fade-in border-2 border-[#C89F65]">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C89F65] to-amber-600 flex items-center justify-center shadow-button-3d">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1A1A1A]">For the Executive Who...</h3>
                      <p className="text-base text-[#1C4E80] font-semibold mt-1">Priority Access Program</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F2F6F8]">
                          <Building2 className="w-6 h-6 text-[#1C4E80]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">Executives & Founders</h4>
                          <p className="text-sm text-[#2E445B]">Busy professionals who value structured, premium medical care</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F2F6F8]">
                          <Target className="w-6 h-6 text-[#1C4E80]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">GLP-1 Users</h4>
                          <p className="text-sm text-[#2E445B]">Currently using or considering Ozempic, Wegovy, Saxenda</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F2F6F8]">
                          <DollarSign className="w-6 h-6 text-[#1C4E80]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">Investment Ready</h4>
                          <p className="text-sm text-[#2E445B]">Can invest ₹2-2.7L in long-term health outcomes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F2F6F8]">
                          <Clock className="w-6 h-6 text-[#1C4E80]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">Time Committed</h4>
                          <p className="text-sm text-[#2E445B]">Can dedicate 1-3 hours/week for 3-6 months</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F2F6F8]">
                          <Briefcase className="w-6 h-6 text-[#1C4E80]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">Doctor-Led Care</h4>
                          <p className="text-sm text-[#2E445B]">Seeking medical supervision, not app-based coaching</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F2F6F8]">
                          <CheckCircle className="w-6 h-6 text-[#1C4E80]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1A1A1A] mb-1">Privacy Focused</h4>
                          <p className="text-sm text-[#2E445B]">Value discretion—no public photos or testimonials required</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Not a Fit - Smaller Column */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="animate-fade-in animation-delay-200 border-2 border-red-500/30">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-button-3d">
                      <XCircle className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Not a Fit</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FEF2F2]">
                        <Smartphone className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2E445B] font-medium">Quick-fix seekers or app-based programs</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FEF2F2]">
                        <XCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2E445B] font-medium">Unwilling to commit to lifestyle changes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FEF2F2]">
                        <Clock className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2E445B] font-medium">Expecting overnight "magic pill" results</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FEF2F2]">
                        <DollarSign className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2E445B] font-medium">Not ready to invest in premium care</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#FEF2F2]">
                        <Building2 className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm text-[#2E445B] font-medium">Seeking generic, one-size-fits-all solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Program Expectations - Bottom Bar */}
          <div className="mt-8">
            <Card variant="elevated" className="animate-fade-in animation-delay-400 bg-gradient-to-br from-[#F9FBFC] to-[#F2F6F8] border-2 border-[#1C4E80]">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1C4E80] to-blue-600 flex items-center justify-center shadow-button-3d">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Program Expectations</h3>
                    <p className="text-sm text-[#1C4E80] font-semibold">Designed for busy executive schedules</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1C4E80] mb-1">3-6</div>
                    <p className="text-xs text-[#2E445B]">Months commitment</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1C4E80] mb-1">1-3</div>
                    <p className="text-xs text-[#2E445B]">Hours per week</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1C4E80] mb-1">Weekly</div>
                    <p className="text-xs text-[#2E445B]">Team check-ins</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1C4E80] mb-1">4-8</div>
                    <p className="text-xs text-[#2E445B]">Weeks to results</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white">
                    <div className="text-2xl font-bold text-[#1C4E80] mb-1">Long-term</div>
                    <p className="text-xs text-[#2E445B]">Sustainable outcomes</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};
