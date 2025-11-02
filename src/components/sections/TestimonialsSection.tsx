import React from 'react';
import { Crown, Users, Star, CheckCircle, Shield } from 'lucide-react';
import { Section } from '../Section';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const founderBenefits = [
    {
      icon: Crown,
      title: "Founder's Savings",
      description: "Exclusive pricing for first 10 members"
    },
    {
      icon: Users,
      title: "Priority Team Access",
      description: "Direct access to Dr. Venkatesh and the medical team"
    },
    {
      icon: Star,
      title: "Quarterly Check-ins",
      description: "Ongoing support for life with dedicated care team"
    },
    {
      icon: CheckCircle,
      title: "Early Innovation Access",
      description: "First access to new treatments and protocols"
    },
    {
      icon: Shield,
      title: "10x Personalization",
      description: "Small cohort means unparalleled focus on you"
    }
  ];

  return (
    <Section id="testimonials" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-[#1C4E80]/80 mb-2">FOUNDING COHORT</p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Join Our <span className="text-[#1C4E80]">Founding Cohort</span>
          </h2>
          <p className="text-lg text-[#2E445B] mb-6">
            We're launching with only 10 founding members. Your opportunity to be part of something transformative.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#F2F6F8' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C89F65] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C89F65]"></span>
            </span>
            <span className="text-sm font-semibold text-[#1C4E80]">10 spots only. Next cohort opens in 6 months.</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                {founderBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 animate-fade-in animation-delay-${index * 100}`}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F2F6F8' }}>
                      <benefit.icon className="w-5 h-5 text-[#1C4E80]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1A1A1A]">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[#2E445B]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="bg-white rounded-2xl shadow-soft-lg p-8 border border-gray-200 max-w-sm mx-auto md:mx-0">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                  Why join as a founder?
                </h3>
                <p className="text-[#2E445B] mb-6 leading-relaxed">
                  As a founding member, you're not just getting treatment—you're helping shape the future of personalized weight loss care.
                </p>
                
                <div className="space-y-3">
                  <a href="tel:+919380010221" className="block">
                    <Button variant="primary" className="w-full">
                      Talk to the Founding Team
                    </Button>
                  </a>
                  <Button
                    variant="secondary"
                    onClick={scrollToContact}
                    className="w-full"
                  >
                    Apply for Founder Status
                  </Button>
                </div>
                
                <p className="text-xs text-[#2E445B] mt-4">
                  <span className="font-semibold">Important:</span> Founding cohort closes at 10 members. Applicants must be using or starting GLP-1 medications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
