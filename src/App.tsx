import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import GitHubStats from './components/GitHubStats';
import LinkedInCard from './components/LinkedInCard';
import HackerRankCard from './components/HackerRankCard';
import LeetCodeCard from './components/LeetCodeCard';
import Achievements from './sections/Achievements';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import ResumeCard from './components/ResumeCard';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';
import RevealSection from './components/RevealSection';
import ErrorBoundary from './components/ErrorBoundary';
import SecondPageBackground from './components/SecondPageBackground';
import SectionDivider from './components/SectionDivider';
import { PortfolioProvider } from './context/PortfolioContext';

export default function App() {
  const subHeroRef = useRef<HTMLDivElement>(null);

  return (
    <PortfolioProvider>
      <main className="bg-black min-h-screen text-white relative">
        <ProgressBar />
        <BackToTop />
        <Loader />
        <Navbar />
        <ErrorBoundary><Hero /></ErrorBoundary>

        {/* Sub-hero pages (Starting from 2nd Page onwards) with parallax animated background */}
        <div ref={subHeroRef} className="relative z-10 overflow-hidden">
          <SecondPageBackground containerRef={subHeroRef} />

          <div className="relative z-10">
            <SectionDivider />
            <ErrorBoundary><RevealSection><About /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><Skills /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><Projects /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary>
              <RevealSection>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6 max-w-[90rem] mx-auto">
                  <GitHubStats />
                  <LinkedInCard />
                  <HackerRankCard />
                  <LeetCodeCard />
                </div>
              </RevealSection>
            </ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><Experience /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><Achievements /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><Certifications /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><ResumeCard /></RevealSection></ErrorBoundary>
            <SectionDivider />
            <ErrorBoundary><RevealSection><Contact /></RevealSection></ErrorBoundary>
            <ErrorBoundary><Footer /></ErrorBoundary>
          </div>
        </div>
      </main>
    </PortfolioProvider>
  );
}


