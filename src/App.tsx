import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemTruthSection } from './components/sections/ProblemTruthSection';
import { BridgeSection } from './components/sections/BridgeSection';
import { ProgramSection } from './components/sections/ProgramSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { TeamSection } from './components/sections/TeamSection';
import { ScienceSection } from './components/sections/ScienceSection';
import { WhoSection } from './components/sections/WhoSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FAQSection } from './components/sections/FAQSection';
import { CTASection } from './components/sections/CTASection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <StickyBottomCTA />
      <HeroSection />
      <ProblemTruthSection />
      <BridgeSection />
      <ProgramSection />
      <ComparisonSection />
      <TimelineSection />
      <TeamSection />
      <ScienceSection />
      <WhoSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-accent-teal text-white rounded-full shadow-button-3d hover:shadow-button-3d-hover flex items-center justify-center transition-all duration-300 z-40 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;
