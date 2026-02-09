import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { HeroBackground } from './HeroBackground';
import applkanjiLogo from '@/assets/applkanji-logo.png';

export function HeroSection() {
  const { t, isRTL } = useLanguage();

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
      <div className="container-custom relative z-10 pt-12 md:pt-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mb-8 md:mb-12 flex justify-center -mt-8 md:-mt-12"
          >
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-[600px] md:h-[800px] lg:h-[1000px] xl:h-[1200px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Logo image */}
            <motion.img
              src={applkanjiLogo}
              alt="ApplKanji Logo"
              className="relative w-96 md:w-[500px] lg:w-[700px] xl:w-[900px] h-auto z-10 drop-shadow-2xl"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 px-2"
          >
            {t('hero.title1')}{' '}
            <span className="gradient-text">{t('hero.title2')}</span>
            {' '}
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
    </section>
  );
}
