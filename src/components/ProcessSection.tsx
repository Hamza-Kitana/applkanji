import { motion } from 'framer-motion';
import { ScrollSection } from './ScrollAnimations';
import { MessageSquare, Search, Pencil, Code2, Rocket, HeartHandshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import processImage from '@/assets/process-workflow.jpg';
import aboutImage from '@/assets/about-innovation.jpg';
import servicesImage from '@/assets/services-tech.jpg';
import contactImage from '@/assets/contact-collaboration.jpg';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';

export function ProcessSection() {
  const { t, isRTL } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      titleKey: 'process.step1.title',
      descKey: 'process.step1.desc',
      image: contactImage,
    },
    {
      icon: Search,
      number: '02',
      titleKey: 'process.step2.title',
      descKey: 'process.step2.desc',
      image: heroBg1,
    },
    {
      icon: Pencil,
      number: '03',
      titleKey: 'process.step3.title',
      descKey: 'process.step3.desc',
      image: heroBg2,
    },
    {
      icon: Code2,
      number: '04',
      titleKey: 'process.step4.title',
      descKey: 'process.step4.desc',
      image: servicesImage,
    },
    {
      icon: Rocket,
      number: '05',
      titleKey: 'process.step5.title',
      descKey: 'process.step5.desc',
      image: heroBg3,
    },
    {
      icon: HeartHandshake,
      number: '06',
      titleKey: 'process.step6.title',
      descKey: 'process.step6.desc',
      image: aboutImage,
    },
  ];

  return (
    <section id="process" className="section-padding relative pt-0">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-0 ${isRTL ? 'right-1/4' : 'left-1/4'} w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl`} />
      </div>

      <div className="container-custom">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-16 lg:mb-20 -mt-20 md:-mt-24 lg:-mt-28 xl:-mt-32">
          <ScrollSection animation={isRTL ? 'slideLeft' : 'slideRight'} className={isRTL ? 'lg:order-2' : ''}>
            <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 block">
              {t('process.label')}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('process.title1')} <span className="gradient-text">{t('process.title2')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('process.subtitle')}
            </p>
          </ScrollSection>

          <ScrollSection animation={isRTL ? 'slideRight' : 'slideLeft'} className={isRTL ? 'lg:order-1' : ''}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden"
            >
              <img 
                src={processImage} 
                alt="Our Process Workflow" 
                className="w-full h-48 sm:h-64 md:h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              
              {/* Process badges */}
              <div className={`absolute bottom-3 md:bottom-4 ${isRTL ? 'right-3 md:right-4' : 'left-3 md:left-4'} flex gap-1.5 md:gap-2`}>
                {['01', '02', '03'].map((num, i) => (
                  <motion.div
                    key={num}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground font-bold text-xs md:text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {num}
                  </motion.div>
                ))}
                <motion.div
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-muted/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground font-bold text-xs md:text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  ...
                </motion.div>
              </div>
            </motion.div>
          </ScrollSection>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className={`absolute ${isRTL ? 'right-4 md:right-8 lg:right-1/2' : 'left-4 md:left-8 lg:left-1/2'} top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block`} />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <ScrollSection
                key={step.number}
                animation={index % 2 === 0 ? (isRTL ? 'slideLeft' : 'slideRight') : (isRTL ? 'slideRight' : 'slideLeft')}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 w-full ${index % 2 === 0 ? (isRTL ? 'lg:text-left' : 'lg:text-right') : (isRTL ? 'lg:text-right' : 'lg:text-left')}`}>
                    <div className="glass rounded-xl md:rounded-2xl overflow-hidden inline-block group w-full">
                      {/* Image */}
                      <div className="relative h-40 sm:h-48 overflow-hidden">
                        <img
                          src={step.image}
                          alt={t(step.titleKey)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
                        
                        {/* Step number overlay */}
                        <div className={`absolute top-3 md:top-4 ${isRTL ? 'right-3 md:right-4' : 'left-3 md:left-4'} flex items-center gap-2 md:gap-3`}>
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                            <step.icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                          </div>
                          <span className="text-xl md:text-2xl font-display font-bold text-primary-foreground drop-shadow-lg">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <h3 className="font-display text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">{t(step.titleKey)}</h3>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{t(step.descKey)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 hidden md:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-primary glow-box"
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              </ScrollSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
