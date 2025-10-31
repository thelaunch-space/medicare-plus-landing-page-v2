import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section } from '../Section';
import { Card } from '../Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const TestimonialsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "I plateaued after GLP-1 use. Medicare+ helped me stabilize, manage side effects, and maintain results.",
      author: "Female, 42",
    },
    {
      id: 2,
      quote: "The taper plan removed my fear of relapse. The team knew exactly how to transition me safely.",
      author: "Male, 49",
    },
    {
      id: 3,
      quote: "The personalized nutrition plan and CBT support addressed issues I didn't know I had. Life-changing experience.",
      author: "Female, 38",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="testimonials" background="gradient">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            What our <span className="text-[#1C4E80]">patients say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <Card variant="elevated" hover={false}>
                  <div className="text-center space-y-6 py-8">
                    <Quote className="w-12 h-12 text-[#1C4E80] mx-auto opacity-50" />

                    <blockquote className="text-xl md:text-2xl text-[#1A1A1A] font-medium leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <p className="text-[#2E445B] italic">— {testimonial.author}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-soft-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#1A1A1A]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full bg-white shadow-soft hover:shadow-soft-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#1A1A1A]" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-[#1C4E80]'
                    : 'bg-gray-300 hover:bg-[#2E445B]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
