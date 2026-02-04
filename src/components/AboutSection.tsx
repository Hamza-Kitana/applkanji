import { motion } from 'framer-motion';
import { ScrollSection, StaggerContainer, StaggerItem } from './ScrollAnimations';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/about-innovation.jpg';

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.value1.title'),
      description: t('about.value1.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.value2.title'),
      description: t('about.value2.desc'),
    },
    {
      icon: Rocket,
      title: t('about.value3.title'),
      description: t('about.value3.desc'),
    },
    {
      icon: Users,
      title: t('about.value4.title'),
      description: t('about.value4.desc'),
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20 lg:mb-24">
          <ScrollSection animation={isRTL ? 'slideLeft' : 'slideRight'}>
            <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 block">
              {t('about.label')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('about.title1')} <span className="gradient-text">{t('about.title2')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('about.subtitle')}
            </p>
          </ScrollSection>

          <ScrollSection animation={isRTL ? 'slideRight' : 'slideLeft'}>
            <div className="relative">
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl md:rounded-2xl overflow-hidden"
              >
                <img 
                  src={aboutImage} 
                  alt="Innovation and Ideas" 
                  className="w-full h-48 sm:h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>
              
              {/* Decorative elements */}
              <div className={`absolute -z-10 ${isRTL ? '-left-2 md:-left-4' : '-right-2 md:-right-4'} -bottom-2 md:-bottom-4 w-full h-full rounded-xl md:rounded-2xl border border-primary/20 hidden md:block`} />
              <motion.div 
                className={`absolute ${isRTL ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} -top-4 md:-top-8 w-16 h-16 md:w-24 md:h-24 rounded-lg md:rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center hidden sm:flex`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Lightbulb className="w-6 h-6 md:w-10 md:h-10 text-primary" />
              </motion.div>
            </div>
          </ScrollSection>
        </div>

        {/* Values grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-20 lg:mb-24">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 h-full hover-lift group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
