import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background3D } from '@/components/Background3D';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProcessSection } from '@/components/ProcessSection';
import { TeamCarouselSection } from '@/components/TeamCarouselSection';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={`relative min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        {/* 3D Animated Background */}
        <Background3D />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <ProcessSection />
          <TeamCarouselSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
