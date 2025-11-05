import { Header } from './components/Header';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemTruthSection } from './components/sections/ProblemTruthSection';
import { ProgramSection } from './components/sections/ProgramSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { TeamSection } from './components/sections/TeamSection';
import { ScienceSection } from './components/sections/ScienceSection';
import { PriorityAccessSection } from './components/sections/PriorityAccessSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen snap-y snap-proximity">
      <Header />
      <StickyBottomCTA />
      <HeroSection />
      <ProblemTruthSection />
      <ProgramSection />
      <ComparisonSection />
      <TimelineSection />
      <TeamSection />
      <ScienceSection />
      <PriorityAccessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
