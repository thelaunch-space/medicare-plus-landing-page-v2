import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section } from '../Section';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const FAQSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openId, setOpenId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'Is GLP-1 required?',
      answer: 'Not always. Your endocrinologist will determine if it is suitable for you based on your individual health profile, goals, and medical history.',
    },
    {
      id: 2,
      question: 'How long is the program?',
      answer: 'Typically 3-12 months, customized to your needs. The duration depends on your starting point, goals, and progress throughout the phases.',
    },
    {
      id: 3,
      question: 'What is included?',
      answer: 'Full multidisciplinary supervision including endocrinology consultations, personalized nutrition plans, CBT sessions for emotional eating, exercise guidance, and continuous progress tracking.',
    },
    {
      id: 4,
      question: 'Is it confidential?',
      answer: 'Absolutely. Every consultation and record is private. We maintain strict HIPAA compliance and take your privacy seriously.',
    },
    {
      id: 5,
      question: 'What if I experience side effects?',
      answer: 'Our medical team is available to address side effects promptly. We provide proactive management strategies and adjust your treatment plan as needed.',
    },
    {
      id: 6,
      question: 'Do you accept insurance?',
      answer: 'We can provide documentation for insurance reimbursement. Contact us to discuss your specific insurance situation and coverage options.',
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Frequently Asked <span className="text-[#1C4E80]">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
              >
                <span className="font-semibold text-[#1A1A1A] text-lg group-hover:text-[#1C4E80] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#1C4E80] flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-[#2E445B] leading-relaxed border-t border-gray-200 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
