import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { Section } from '../Section';
import { Button } from '../Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface QuizData {
  age: string;
  height: string;
  weight: string;
  diabetes: string;
  previousAttempts: string;
  cravings: string;
  currentMeds: string;
  topGoal: string;
}

export const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [quizData, setQuizData] = useState<QuizData>({
    age: '',
    height: '',
    weight: '',
    diabetes: '',
    previousAttempts: '',
    cravings: '',
    currentMeds: '',
    topGoal: '',
  });

  const [bmi, setBmi] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Auto-calculate BMI when height and weight change
  useEffect(() => {
    const h = parseFloat(quizData.height);
    const w = parseFloat(quizData.weight);
    if (h > 0 && w > 0) {
      const calculatedBMI = w / Math.pow(h / 100, 2);
      setBmi(calculatedBMI);
    } else {
      setBmi(null);
    }
  }, [quizData.height, quizData.weight]);

  const getBMICategory = (bmi: number): string => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  const getBMICategoryColor = (bmi: number): string => {
    if (bmi < 18.5 || bmi >= 30) return 'text-red-500';
    if (bmi < 25) return 'text-green-500';
    return 'text-orange-500';
  };

  const isFormComplete = (): boolean => {
    return (
      quizData.age !== '' &&
      quizData.height !== '' &&
      quizData.weight !== '' &&
      quizData.diabetes !== '' &&
      quizData.previousAttempts !== '' &&
      quizData.cravings !== '' &&
      quizData.currentMeds !== '' &&
      quizData.topGoal !== ''
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormComplete()) {
      setShowResult(true);
      // Scroll to result
      setTimeout(() => {
        document.getElementById('quiz-result')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const RadioButton: React.FC<{
    name: string;
    value: string;
    checked: boolean;
    onChange: () => void;
    label: string;
  }> = ({ name, value, checked, onChange, label }) => (
    <label
      className={`flex items-center justify-center px-3 py-2 md:py-2.5 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
        checked
          ? 'border-[#1C4E80] bg-[#1C4E80]/5 text-[#1C4E80] font-semibold'
          : 'border-gray-200 bg-white text-[#2E445B] hover:border-[#1C4E80]/30 hover:bg-[#F9FBFC]'
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="text-xs md:text-sm">{label}</span>
    </label>
  );

  return (
    <Section id="contact" background="silver">
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header - Compact & Sleek */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2 whitespace-nowrap overflow-hidden text-ellipsis px-4 sm:px-0 sm:whitespace-normal">
              Share Your Details
            </h2>
            <p className="text-sm md:text-base text-[#2E445B] italic">
              We'll get back to you within 24-48 hours
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-3 text-xs md:text-sm text-[#2E445B]">
              <Lock className="w-3.5 h-3.5 text-[#1C4E80]" />
              <span>Strictly confidential</span>
            </div>
          </div>

          {/* Quiz Form - Sleek & Compact */}
          <div className="bg-white rounded-2xl shadow-soft-lg p-4 md:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Question 1: Age */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  1️⃣ Age
                </label>
                <input
                  type="number"
                  value={quizData.age}
                  onChange={(e) => setQuizData({ ...quizData, age: e.target.value })}
                  placeholder="Enter your age"
                  min="18"
                  max="100"
                  className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C4E80] transition-all text-sm md:text-base"
                />
              </div>

              {/* Question 2: Height */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  2️⃣ Height (cm)
                </label>
                <input
                  type="number"
                  value={quizData.height}
                  onChange={(e) => setQuizData({ ...quizData, height: e.target.value })}
                  placeholder="Enter your height in cm"
                  min="100"
                  max="250"
                  className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C4E80] transition-all text-sm md:text-base"
                />
              </div>

              {/* Question 3: Weight with BMI */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  3️⃣ Weight (kg)
                </label>
                <input
                  type="number"
                  value={quizData.weight}
                  onChange={(e) => setQuizData({ ...quizData, weight: e.target.value })}
                  placeholder="Enter your weight in kg"
                  min="30"
                  max="300"
                  step="0.1"
                  className="w-full px-3 py-2 md:py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1C4E80] transition-all text-sm md:text-base"
                />
                {bmi && (
                  <div className="mt-1.5 p-2 bg-[#F9FBFC] rounded-lg border border-gray-200">
                    <p className="text-xs md:text-sm text-[#2E445B]">
                      BMI: <span className={`font-bold ${getBMICategoryColor(bmi)}`}>
                        {bmi.toFixed(1)} ({getBMICategory(bmi)})
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Question 4: Diabetes */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  4️⃣ Do you have diabetes, pre-diabetes, or insulin resistance?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <RadioButton
                    name="diabetes"
                    value="yes"
                    checked={quizData.diabetes === 'yes'}
                    onChange={() => setQuizData({ ...quizData, diabetes: 'yes' })}
                    label="Yes"
                  />
                  <RadioButton
                    name="diabetes"
                    value="no"
                    checked={quizData.diabetes === 'no'}
                    onChange={() => setQuizData({ ...quizData, diabetes: 'no' })}
                    label="No"
                  />
                  <RadioButton
                    name="diabetes"
                    value="not-sure"
                    checked={quizData.diabetes === 'not-sure'}
                    onChange={() => setQuizData({ ...quizData, diabetes: 'not-sure' })}
                    label="Not sure"
                  />
                </div>
              </div>

              {/* Question 5: Previous Attempts */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  5️⃣ Have you tried diet or exercise programs before without sustained success?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <RadioButton
                    name="previousAttempts"
                    value="yes"
                    checked={quizData.previousAttempts === 'yes'}
                    onChange={() => setQuizData({ ...quizData, previousAttempts: 'yes' })}
                    label="Yes"
                  />
                  <RadioButton
                    name="previousAttempts"
                    value="no"
                    checked={quizData.previousAttempts === 'no'}
                    onChange={() => setQuizData({ ...quizData, previousAttempts: 'no' })}
                    label="No"
                  />
                </div>
              </div>

              {/* Question 6: Cravings */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  6️⃣ Do you often struggle with food cravings or portion control?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <RadioButton
                    name="cravings"
                    value="yes"
                    checked={quizData.cravings === 'yes'}
                    onChange={() => setQuizData({ ...quizData, cravings: 'yes' })}
                    label="Yes"
                  />
                  <RadioButton
                    name="cravings"
                    value="sometimes"
                    checked={quizData.cravings === 'sometimes'}
                    onChange={() => setQuizData({ ...quizData, cravings: 'sometimes' })}
                    label="Sometimes"
                  />
                  <RadioButton
                    name="cravings"
                    value="no"
                    checked={quizData.cravings === 'no'}
                    onChange={() => setQuizData({ ...quizData, cravings: 'no' })}
                    label="No"
                  />
                </div>
              </div>

              {/* Question 7: Current Medications */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  7️⃣ Are you currently on any weight-loss medications or injections?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <RadioButton
                    name="currentMeds"
                    value="yes"
                    checked={quizData.currentMeds === 'yes'}
                    onChange={() => setQuizData({ ...quizData, currentMeds: 'yes' })}
                    label="Yes"
                  />
                  <RadioButton
                    name="currentMeds"
                    value="no"
                    checked={quizData.currentMeds === 'no'}
                    onChange={() => setQuizData({ ...quizData, currentMeds: 'no' })}
                    label="No"
                  />
                </div>
              </div>

              {/* Question 8: Top Goal */}
              <div className="space-y-2">
                <label className="block text-sm md:text-base font-semibold text-[#1A1A1A]">
                  8️⃣ What's your top goal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <RadioButton
                    name="topGoal"
                    value="steady-weight"
                    checked={quizData.topGoal === 'steady-weight'}
                    onChange={() => setQuizData({ ...quizData, topGoal: 'steady-weight' })}
                    label="Steady weight loss"
                  />
                  <RadioButton
                    name="topGoal"
                    value="sugar-control"
                    checked={quizData.topGoal === 'sugar-control'}
                    onChange={() => setQuizData({ ...quizData, topGoal: 'sugar-control' })}
                    label="Better sugar control"
                  />
                  <RadioButton
                    name="topGoal"
                    value="energy"
                    checked={quizData.topGoal === 'energy'}
                    onChange={() => setQuizData({ ...quizData, topGoal: 'energy' })}
                    label="More energy & confidence"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={!isFormComplete()}
                >
                  I Want to Learn More
                </Button>
              </div>

              {/* Result Display - Compact */}
              {showResult && (
                <div
                  id="quiz-result"
                  className="mt-4 p-4 md:p-6 bg-gradient-to-br from-[#1C4E80] to-[#2E445B] rounded-xl text-white animate-fade-in"
                >
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-[#C89F65] flex items-center justify-center">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">Thank You!</h3>
                    <p className="text-sm md:text-base leading-relaxed text-white/95">
                      We've received your information. Our founding team will personally review your details and reach out to you soon.
                    </p>
                    <p className="text-sm md:text-base font-semibold text-[#C89F65]">
                      We're excited to connect with you!
                    </p>
                    <div className="pt-2">
                      <a href="tel:+919380010221" className="block">
                        <Button
                          variant="secondary"
                          className="w-full bg-white text-[#1C4E80] border-white hover:bg-[#F2F6F8]"
                        >
                          Or Call Us Now
                        </Button>
                      </a>
                    </div>
                    <p className="text-xs text-white/80 pt-1">
                      Expect a response within 24-48 hours
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
