import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ScrollSection, StaggerContainer, StaggerItem } from './ScrollAnimations';
import { 
  Code2, 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Share2, 
  Bot, 
  Settings2, 
  Workflow,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import servicesTechImage from '@/assets/services-tech.jpg';
import aboutImage from '@/assets/about-innovation.jpg';
import contactImage from '@/assets/contact-collaboration.jpg';
import processImage from '@/assets/process-workflow.jpg';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';
import heroBg4 from '@/assets/hero-bg-4.jpg';
import heroBg5 from '@/assets/hero-bg-5.jpg';

export function ServicesSection() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      titleKey: 'services.software.title',
      descKey: 'services.software.desc',
      features: ['services.software.f1', 'services.software.f2', 'services.software.f3', 'services.software.f4', 'services.software.f5', 'services.software.f6'],
      benefits: ['services.software.b1', 'services.software.b2', 'services.software.b3', 'services.software.b4', 'services.software.b5', 'services.software.b6'],
      image: servicesTechImage,
      detailKey: 'services.software.detail',
      benefitsKey: 'services.software.benefits',
    },
    {
      icon: Globe,
      titleKey: 'services.web.title',
      descKey: 'services.web.desc',
      features: ['services.web.f1', 'services.web.f2', 'services.web.f3', 'services.web.f4', 'services.web.f5', 'services.web.f6'],
      benefits: ['services.web.b1', 'services.web.b2', 'services.web.b3', 'services.web.b4', 'services.web.b5', 'services.web.b6'],
      image: heroBg2,
      detailKey: 'services.web.detail',
      benefitsKey: 'services.web.benefits',
    },
    {
      icon: ShoppingCart,
      titleKey: 'services.ecommerce.title',
      descKey: 'services.ecommerce.desc',
      features: ['services.ecommerce.f1', 'services.ecommerce.f2', 'services.ecommerce.f3', 'services.ecommerce.f4', 'services.ecommerce.f5', 'services.ecommerce.f6'],
      benefits: ['services.ecommerce.b1', 'services.ecommerce.b2', 'services.ecommerce.b3', 'services.ecommerce.b4', 'services.ecommerce.b5', 'services.ecommerce.b6'],
      image: heroBg3,
      detailKey: 'services.ecommerce.detail',
      benefitsKey: 'services.ecommerce.benefits',
    },
    {
      icon: Smartphone,
      titleKey: 'services.mobile.title',
      descKey: 'services.mobile.desc',
      features: ['services.mobile.f1', 'services.mobile.f2', 'services.mobile.f3', 'services.mobile.f4', 'services.mobile.f5', 'services.mobile.f6'],
      benefits: ['services.mobile.b1', 'services.mobile.b2', 'services.mobile.b3', 'services.mobile.b4', 'services.mobile.b5', 'services.mobile.b6'],
      image: heroBg4,
      detailKey: 'services.mobile.detail',
      benefitsKey: 'services.mobile.benefits',
    },
    {
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
      features: ['services.social.f1', 'services.social.f2', 'services.social.f3', 'services.social.f4', 'services.social.f5', 'services.social.f6'],
      benefits: ['services.social.b1', 'services.social.b2', 'services.social.b3', 'services.social.b4', 'services.social.b5', 'services.social.b6'],
      image: heroBg5,
      detailKey: 'services.social.detail',
      benefitsKey: 'services.social.benefits',
    },
    {
      icon: Bot,
      titleKey: 'services.rpa.title',
      descKey: 'services.rpa.desc',
      features: ['services.rpa.f1', 'services.rpa.f2', 'services.rpa.f3', 'services.rpa.f4', 'services.rpa.f5', 'services.rpa.f6'],
      benefits: ['services.rpa.b1', 'services.rpa.b2', 'services.rpa.b3', 'services.rpa.b4', 'services.rpa.b5', 'services.rpa.b6'],
      image: aboutImage,
      detailKey: 'services.rpa.detail',
      benefitsKey: 'services.rpa.benefits',
    },
    {
      icon: Settings2,
      titleKey: 'services.automation.title',
      descKey: 'services.automation.desc',
      features: ['services.automation.f1', 'services.automation.f2', 'services.automation.f3', 'services.automation.f4', 'services.automation.f5', 'services.automation.f6'],
      benefits: ['services.automation.b1', 'services.automation.b2', 'services.automation.b3', 'services.automation.b4', 'services.automation.b5', 'services.automation.b6'],
      image: processImage,
      detailKey: 'services.automation.detail',
      benefitsKey: 'services.automation.benefits',
    },
    {
      icon: Workflow,
      titleKey: 'services.workflow.title',
      descKey: 'services.workflow.desc',
      features: ['services.workflow.f1', 'services.workflow.f2', 'services.workflow.f3', 'services.workflow.f4', 'services.workflow.f5', 'services.workflow.f6'],
      benefits: ['services.workflow.b1', 'services.workflow.b2', 'services.workflow.b3', 'services.workflow.b4', 'services.workflow.b5', 'services.workflow.b6'],
      image: contactImage,
      detailKey: 'services.workflow.detail',
      benefitsKey: 'services.workflow.benefits',
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/4 ${isRTL ? 'right-0' : 'left-0'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 bg-accent/5 rounded-full blur-3xl`} />
      </div>

      <div className="container-custom">
        {/* Section header with image */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16 lg:mb-20">
          <ScrollSection animation="fadeUp" className={isRTL ? 'lg:order-2' : ''}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('services.title1')} <span className="gradient-text">{t('services.title2')}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('services.subtitle')}
            </p>
          </ScrollSection>

          <ScrollSection animation={isRTL ? 'slideRight' : 'slideLeft'} className={isRTL ? 'lg:order-1' : ''}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl md:rounded-2xl overflow-hidden group"
            >
              <img 
                src={servicesTechImage} 
                alt="Technology Services" 
                className="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
              
              {/* Floating tech icons */}
              <motion.div
                className={`absolute top-3 md:top-4 ${isRTL ? 'left-3 md:left-4' : 'right-3 md:right-4'} w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center`}
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.div>
              <motion.div
                className={`absolute bottom-3 md:bottom-4 ${isRTL ? 'right-3 md:right-4' : 'left-3 md:left-4'} w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-accent/20 backdrop-blur-sm flex items-center justify-center`}
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </motion.div>
            </motion.div>
          </ScrollSection>
        </div>

        {/* Services grid - Enhanced */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <StaggerItem key={service.titleKey}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedService(index)}
                className="glass rounded-xl overflow-hidden h-full group relative flex flex-col border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon and Image Section */}
                <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden group/image">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-2 md:top-3 left-2 md:left-3">
                    <motion.div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-background/95 backdrop-blur-md flex items-center justify-center shadow-lg border border-primary/20"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-5 flex-1 flex flex-col relative z-10">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="font-display text-base md:text-lg font-bold mb-1.5 md:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {t(service.titleKey)}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 md:mb-4 flex-1 line-clamp-2">
                      {t(service.descKey)}
                    </p>
                    
                    {/* Features - Compact */}
                    <ul className="space-y-1 md:space-y-1.5 mb-3 md:mb-4">
                      {service.features.slice(0, 2).map((feature) => (
                        <li 
                          key={feature} 
                          className="flex items-center gap-1.5 md:gap-2 text-xs text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          <span className="line-clamp-1">{t(feature)}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Learn More Button */}
                    <motion.div 
                      className={`mt-auto flex items-center gap-1.5 md:gap-2 text-primary text-xs font-semibold group/btn ${isRTL ? 'flex-row-reverse' : ''}`}
                      whileHover={{ x: isRTL ? -2 : 2 }}
                    >
                      <span>{t('services.learnMore')}</span>
                      <ArrowIcon className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass border-border/50">
              {selectedService !== null && (() => {
                const service = services[selectedService];
                const ServiceIcon = service.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative"
                  >
                    {/* Hero Image */}
                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-6 -mx-6 -mt-6">
                      <img
                        src={service.image}
                        alt={t(service.titleKey)}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 rounded-xl bg-background/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-primary/20">
                          <ServiceIcon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>

                    <DialogHeader>
                      <DialogTitle className="font-display text-3xl md:text-4xl font-bold mb-4">
                        {t(service.titleKey)}
                      </DialogTitle>
                      <DialogDescription className="text-lg text-muted-foreground mb-6">
                        {t(service.descKey)}
                      </DialogDescription>
                    </DialogHeader>

                    {/* Detailed Description */}
                    {service.detailKey && (
                      <div className="mb-8">
                        <h4 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-primary rounded-full" />
                          {t('services.detailTitle') || 'Detailed Overview'}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                          {t(service.detailKey)}
                        </p>
                      </div>
                    )}

                    {/* Features Grid */}
                    <div className="mb-8">
                      <h4 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        {t('services.featuresTitle') || 'Key Features'}
                      </h4>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {service.features.map((feature) => (
                          <motion.div 
                            key={feature} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-start gap-3 glass rounded-lg p-4 hover:border-primary/30 transition-colors border border-border/50"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground font-medium">{t(feature)}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                          <div className="w-1 h-6 bg-primary rounded-full" />
                          {t('services.benefitsTitle') || 'Benefits'}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.benefits.map((benefit) => (
                            <motion.div 
                              key={benefit}
                              initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className={`flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 ${isRTL ? 'flex-row-reverse text-right' : ''}`}
                            >
                              <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                              <span className="text-sm text-foreground leading-relaxed">{t(benefit)}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="flex justify-end pt-6 border-t border-border/50">
                      <motion.button
                        onClick={() => {
                          setSelectedService(null);
                          navigate('/contact');
                        }}
                        className={`px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {t('services.getStarted') || 'Get Started'}
                        <ArrowIcon className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })()}
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}
