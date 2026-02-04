import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingElement } from './ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import { HeroBackground } from './HeroBackground';

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const stats = [
    { value: t('hero.stat1.value'), label: t('hero.stat1.label') },
    { value: t('hero.stat2.value'), label: t('hero.stat2.label') },
    { value: t('hero.stat3.value'), label: t('hero.stat3.label') },
    { value: t('hero.stat4.value'), label: t('hero.stat4.label') },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Hero Background */}
      <HeroBackground />
      {/* Hero content */}
      <div className="container-custom relative z-10 pt-24 md:pt-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-muted-foreground">
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] md:leading-tight mb-4 md:mb-6 px-2"
          >
            {t('hero.title1')}{' '}
            <span className="gradient-text">{t('hero.title2')}</span>
            <br />
            {t('hero.title3') !== 'hero.title3' && t('hero.title3') && <>{t('hero.title3')}{' '}</>}
            {t('hero.title4') && t('hero.title4') !== 'hero.title4' && (
              <span className="relative inline-block">
                {t('hero.title4')}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className={`absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-primary to-accent ${isRTL ? 'origin-right' : 'origin-left'}`}
                />
              </span>
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 px-4 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 px-4"
          >
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box text-base md:text-lg px-6 md:px-8 py-5 md:py-6 group w-full sm:w-auto"
            >
              {t('hero.cta1')}
              <ArrowIcon className={`${isRTL ? 'mr-2' : 'ml-2'} w-4 h-4 md:w-5 md:h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </Button>
            <Button
              onClick={() => scrollToSection('#services')}
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
            >
              {t('hero.cta2')}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-border/50 px-4"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 md:mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <FloatingElement
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex"
        duration={2}
        distance={10}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">{t('hero.scroll')}</span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </FloatingElement>
    </section>
  );
}
