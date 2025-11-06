import React from 'react';
import { Phone, CheckCircle, XCircle, Clock, DollarSign, Target, Users } from 'lucide-react';
import { Section } from '../Section';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const PriorityAccessSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="priority-access" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* CTA Card - Dark Gradient */}
        <div className="bg-gradient-to-br from-[#1C4E80] to-[#2E445B] rounded-2xl p-8 md:p-12 text-white shadow-soft-lg mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C89F65]/20 via-transparent to-transparent"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-[#C89F65]" />
              <p className="text-xs sm:text-sm uppercase tracking-wide text-[#C89F65] font-semibold">
                PRIORITY ACCESS PROGRAM
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Join an Exclusive Cohort of <span className="text-[#C89F65]">10 Executives</span>
            </h2>

            <p className="text-base md:text-lg text-white/90 mb-6">
              Doctor-supervised GLP-1 program designed for demanding schedules.
              <span className="block mt-1 text-sm text-white/70">Next cohort opens in 3 months • Limited to 10 applications</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a href="tel:+919380010221" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  icon={Phone}
                  className="w-full sm:w-auto"
                >
                  Learn How We Do It
                </Button>
              </a>
              <Button
                variant="secondary"
                onClick={scrollToContact}
                className="w-full sm:w-auto bg-white text-[#1C4E80] border-white hover:bg-[#F2F6F8]"
              >
                Get Initial Assessment
              </Button>
            </div>

            <p className="text-white/70 text-xs sm:text-sm">
              ✓ 100% confidential • Response within 24-48 hours
            </p>
          </div>
        </div>

        {/* Qualification Grid - Is This Program Right for You? */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
            Is this program right for you?
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Perfect Fit */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-2 border-green-500/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-button-3d">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A]">Perfect if you are...</h4>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    Currently using or considering <span className="font-semibold text-[#1A1A1A]">GLP-1 medications</span> (Ozempic, Wegovy, Saxenda)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    <span className="font-semibold text-[#1A1A1A]">Executive or founder</span> with demanding schedule
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    Can dedicate <span className="font-semibold text-[#1A1A1A]">1-3 hours/week</span> for 3-6 months
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    Seeking <span className="font-semibold text-[#1A1A1A]">doctor-led care</span>, not app-based coaching
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    Value <span className="font-semibold text-[#1A1A1A]">privacy and discretion</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Not a Fit */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-2 border-red-500/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-button-3d">
                  <XCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A]">Not right if you want...</h4>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    <span className="font-semibold text-[#1A1A1A]">Quick-fix solutions</span> or app-based programs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    <span className="font-semibold text-[#1A1A1A]">Overnight "magic pill"</span> results
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    <span className="font-semibold text-[#1A1A1A]">Generic, one-size-fits-all</span> solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    No commitment to <span className="font-semibold text-[#1A1A1A]">lifestyle changes</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[#2E445B]">
                    Not ready for <span className="font-semibold text-[#1A1A1A]">premium medical care</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Program Expectations with Pricing */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border-2 border-[#1C4E80]/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C4E80] to-blue-600 flex items-center justify-center shadow-button-3d">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A]">What to Expect</h3>
              <p className="text-xs md:text-sm text-[#1C4E80] font-semibold">Designed for executive schedules</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            <div className="text-center p-3 md:p-4 rounded-lg bg-[#F9FBFC] border border-gray-100">
              <div className="text-xl md:text-2xl font-bold text-[#1C4E80] mb-1">3-6</div>
              <p className="text-xs text-[#2E445B]">Months</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg bg-[#F9FBFC] border border-gray-100">
              <div className="text-xl md:text-2xl font-bold text-[#1C4E80] mb-1">1-3</div>
              <p className="text-xs text-[#2E445B]">Hours/week</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg bg-[#F9FBFC] border border-gray-100">
              <div className="text-xl md:text-2xl font-bold text-[#1C4E80] mb-1">Weekly</div>
              <p className="text-xs text-[#2E445B]">Check-ins</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg bg-[#F9FBFC] border border-gray-100">
              <div className="text-xl md:text-2xl font-bold text-[#1C4E80] mb-1">4-8</div>
              <p className="text-xs text-[#2E445B]">Weeks to results</p>
            </div>
            <div className="text-center p-3 md:p-4 rounded-lg bg-[#F9FBFC] border border-gray-100 col-span-2 md:col-span-1">
              <div className="flex items-center justify-center gap-1 mb-1">
                <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-[#1C4E80]" />
                <div className="text-xl md:text-2xl font-bold text-[#1C4E80]">2-2.7L</div>
              </div>
              <p className="text-xs text-[#2E445B]">Investment</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
