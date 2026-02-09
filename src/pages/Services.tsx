import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Background3D } from '@/components/Background3D';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollSection } from '@/components/ScrollAnimations';
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
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ChevronDown
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import servicesTechImage from '@/assets/services-tech.jpg';
import aboutImage from '@/assets/about-innovation.jpg';
import contactImage from '@/assets/contact-collaboration.jpg';
import processImage from '@/assets/process-workflow.jpg';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';
import heroBg4 from '@/assets/hero-bg-4.jpg';
import heroBg5 from '@/assets/hero-bg-5.jpg';

interface Service {
  id: string;
  icon: typeof Code2;
  titleKey: string;
  descKey: string;
  shortDescKey: string;
  features: string[];
  benefits: string[];
  image: string;
  detailKey: string;
  benefitsKey: string;
  includedItems?: string[]; // ما يتم تقديمه مع الخدمة
}

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<string>('software');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const services: Service[] = [
    {
      id: 'software',
      icon: Code2,
      titleKey: 'services.software.title',
      descKey: 'services.software.desc',
      shortDescKey: 'services.software.desc',
      features: ['services.software.f1', 'services.software.f2', 'services.software.f3', 'services.software.f4', 'services.software.f5', 'services.software.f6'],
      benefits: ['services.software.b1', 'services.software.b2', 'services.software.b3', 'services.software.b4', 'services.software.b5', 'services.software.b6'],
      image: heroBg1, // تطوير البرمجيات - صورة تقنية حديثة
      detailKey: 'services.software.detail',
      benefitsKey: 'services.software.benefits',
      includedItems: [
        'services.software.o1',
        'services.software.o2',
        'services.software.o3',
        'services.software.o4',
        'services.software.o5',
        'services.software.o6',
        'services.software.o7'
      ],
    },
    {
      id: 'web',
      icon: Globe,
      titleKey: 'services.web.title',
      descKey: 'services.web.desc',
      shortDescKey: 'services.web.desc',
      features: ['services.web.f1', 'services.web.f2', 'services.web.f3', 'services.web.f4', 'services.web.f5', 'services.web.f6'],
      benefits: ['services.web.b1', 'services.web.b2', 'services.web.b3', 'services.web.b4', 'services.web.b5', 'services.web.b6'],
      image: heroBg3, // تطوير المواقع - صورة ويب حديثة
      detailKey: 'services.web.detail',
      benefitsKey: 'services.web.benefits',
      includedItems: [
        'services.web.o1',
        'services.web.o2',
        'services.web.o3',
        'services.web.o4',
        'services.web.o5',
        'services.web.o6',
        'services.web.o7',
        'services.web.o8'
      ],
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      titleKey: 'services.ecommerce.title',
      descKey: 'services.ecommerce.desc',
      shortDescKey: 'services.ecommerce.desc',
      features: ['services.ecommerce.f1', 'services.ecommerce.f2', 'services.ecommerce.f3', 'services.ecommerce.f4', 'services.ecommerce.f5', 'services.ecommerce.f6'],
      benefits: ['services.ecommerce.b1', 'services.ecommerce.b2', 'services.ecommerce.b3', 'services.ecommerce.b4', 'services.ecommerce.b5', 'services.ecommerce.b6'],
      image: heroBg4,
      detailKey: 'services.ecommerce.detail',
      benefitsKey: 'services.ecommerce.benefits',
      includedItems: [
        'services.ecommerce.o1',
        'services.ecommerce.o2',
        'services.ecommerce.o3',
        'services.ecommerce.o4',
        'services.ecommerce.o5',
        'services.ecommerce.o6',
        'services.ecommerce.o7',
        'services.ecommerce.o8'
      ],
    },
    {
      id: 'mobile',
      icon: Smartphone,
      titleKey: 'services.mobile.title',
      descKey: 'services.mobile.desc',
      shortDescKey: 'services.mobile.desc',
      features: ['services.mobile.f1', 'services.mobile.f2', 'services.mobile.f3', 'services.mobile.f4', 'services.mobile.f5', 'services.mobile.f6'],
      benefits: ['services.mobile.b1', 'services.mobile.b2', 'services.mobile.b3', 'services.mobile.b4', 'services.mobile.b5', 'services.mobile.b6'],
      image: heroBg5, // تطبيقات الموبايل - صورة موبايل حديثة
      detailKey: 'services.mobile.detail',
      benefitsKey: 'services.mobile.benefits',
      includedItems: [
        'services.mobile.o1',
        'services.mobile.o2',
        'services.mobile.o3',
        'services.mobile.o4',
        'services.mobile.o5',
        'services.mobile.o6',
        'services.mobile.o7',
        'services.mobile.o8'
      ],
    },
    {
      id: 'social',
      icon: Share2,
      titleKey: 'services.social.title',
      descKey: 'services.social.desc',
      shortDescKey: 'services.social.desc',
      features: ['services.social.f1', 'services.social.f2', 'services.social.f3', 'services.social.f4', 'services.social.f5', 'services.social.f6'],
      benefits: ['services.social.b1', 'services.social.b2', 'services.social.b3', 'services.social.b4', 'services.social.b5', 'services.social.b6'],
      image: heroBg2,
      detailKey: 'services.social.detail',
      benefitsKey: 'services.social.benefits',
      includedItems: [
        'services.social.o1',
        'services.social.o2',
        'services.social.o3',
        'services.social.o4',
        'services.social.o5',
        'services.social.o6',
        'services.social.o7',
        'services.social.o8'
      ],
    },
    {
      id: 'rpa',
      icon: Bot,
      titleKey: 'services.rpa.title',
      descKey: 'services.rpa.desc',
      shortDescKey: 'services.rpa.desc',
      features: ['services.rpa.f1', 'services.rpa.f2', 'services.rpa.f3', 'services.rpa.f4', 'services.rpa.f5', 'services.rpa.f6'],
      benefits: ['services.rpa.b1', 'services.rpa.b2', 'services.rpa.b3', 'services.rpa.b4', 'services.rpa.b5', 'services.rpa.b6'],
      image: servicesTechImage, // روبوتات الأتمتة - صورة تقنية وروبوتات
      detailKey: 'services.rpa.detail',
      benefitsKey: 'services.rpa.benefits',
      includedItems: [
        'services.rpa.o1',
        'services.rpa.o2',
        'services.rpa.o3',
        'services.rpa.o4',
        'services.rpa.o5',
        'services.rpa.o6',
        'services.rpa.o7',
        'services.rpa.o8'
      ],
    },
    {
      id: 'automation',
      icon: Settings2,
      titleKey: 'services.automation.title',
      descKey: 'services.automation.desc',
      shortDescKey: 'services.automation.desc',
      features: ['services.automation.f1', 'services.automation.f2', 'services.automation.f3', 'services.automation.f4', 'services.automation.f5', 'services.automation.f6'],
      benefits: ['services.automation.b1', 'services.automation.b2', 'services.automation.b3', 'services.automation.b4', 'services.automation.b5', 'services.automation.b6'],
      image: aboutImage, // الأتمتة - صورة ابتكار وأتمتة
      detailKey: 'services.automation.detail',
      benefitsKey: 'services.automation.benefits',
      includedItems: [
        'services.automation.o1',
        'services.automation.o2',
        'services.automation.o3',
        'services.automation.o4',
        'services.automation.o5',
        'services.automation.o6',
        'services.automation.o7',
        'services.automation.o8'
      ],
    },
    {
      id: 'workflow',
      icon: Workflow,
      titleKey: 'services.workflow.title',
      descKey: 'services.workflow.desc',
      shortDescKey: 'services.workflow.desc',
      features: ['services.workflow.f1', 'services.workflow.f2', 'services.workflow.f3', 'services.workflow.f4', 'services.workflow.f5', 'services.workflow.f6'],
      benefits: ['services.workflow.b1', 'services.workflow.b2', 'services.workflow.b3', 'services.workflow.b4', 'services.workflow.b5', 'services.workflow.b6'],
      image: processImage, // إدارة سير العمل - صورة سير عمل وتعاون
      detailKey: 'services.workflow.detail',
      benefitsKey: 'services.workflow.benefits',
      includedItems: [
        'services.workflow.o1',
        'services.workflow.o2',
        'services.workflow.o3',
        'services.workflow.o4',
        'services.workflow.o5',
        'services.workflow.o6',
        'services.workflow.o7',
        'services.workflow.o8'
      ],
    },
  ];

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(`service-${serviceId}`);
    if (element) {
      const offset = 120; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveService(serviceId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = services.length - 1; i >= 0; i--) {
        const element = document.getElementById(`service-${services[i].id}`);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveService(services[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className={`relative min-h-screen ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} ref={containerRef}>
        {/* 3D Animated Background */}
        <Background3D />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          {/* Hero Section - Enhanced with background image */}
          <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden pt-24 md:pt-28">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 -z-10">
              <img
                src={heroBg1}
                alt="Services Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
              <div className="absolute inset-0 bg-background/60" />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10">
              <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl`} />
              <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl`} />
            </div>

            <div className="container-custom relative z-10">
              <ScrollSection animation="fadeUp" className="text-center max-w-4xl mx-auto">
                <div className="space-y-4 md:space-y-6">
                  {/* Title */}
                  <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {t('services.title1')} <span className="gradient-text">{t('services.title2')}</span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6">
                    {t('services.subtitle')}
                  </p>

                  {/* Detailed Description */}
                  <div className="space-y-6 pt-6">
                    <div className="prose prose-lg max-w-none text-center">
                      <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed mb-4">
                        {t('services.intro1')}
                      </p>
                      <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8">
                        {t('services.intro2')}
                      </p>
                    </div>

                    {/* Key Points */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 pt-4">
                      {[
                        { icon: CheckCircle2, textKey: 'services.keyPoint1' },
                        { icon: Sparkles, textKey: 'services.keyPoint2' },
                        { icon: MessageCircle, textKey: 'services.keyPoint3' },
                        { icon: ArrowRight, textKey: 'services.keyPoint4' }
                      ].map((point, index) => {
                        const Icon = point.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass rounded-2xl p-5 md:p-6 lg:p-7 hover:border-primary/50 transition-all duration-300 border border-border/50 hover:shadow-lg hover:shadow-primary/10"
                          >
                            <div className="flex flex-col items-center text-center gap-4 md:gap-5">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                              </div>
                                    <span className="text-base md:text-lg lg:text-xl font-bold text-foreground leading-tight">
                                      {t(point.textKey)}
                                    </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Scroll Down Arrow */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="flex justify-center pt-8 md:pt-12"
                    >
                      <motion.button
                        onClick={() => {
                          const firstService = document.getElementById('service-software');
                          if (firstService) {
                            const offset = 120;
                            const elementPosition = firstService.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - offset;
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        animate={{
                          y: [0, 10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <span className="text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100">
                          {t('hero.scroll') || 'Scroll'}
                        </span>
                        <ChevronDown className="w-6 h-6 md:w-7 md:h-7" />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </ScrollSection>
            </div>
          </section>

          {/* Secondary Navigation Bar - Icons Only */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-16 md:top-20 z-40 flex justify-center -mt-8 md:-mt-12"
          >
            <div className="inline-flex glass-strong border border-border/50 backdrop-blur-xl rounded-full overflow-hidden shadow-lg">
              <div className="overflow-x-auto scrollbar-hide">
                <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} items-center gap-2 md:gap-3 py-2.5 md:py-3 px-3 md:px-4`}>
                  {services.map((service) => {
                    const ServiceIcon = service.icon;
                    const isActive = activeService === service.id;
                    return (
                      <motion.button
                        key={service.id}
                        onClick={() => scrollToService(service.id)}
                        className="group relative"
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        title={t(service.titleKey)}
                      >
                        {/* Active Background */}
                        {isActive && (
                          <motion.div
                            layoutId="activeServiceIcon"
                            className="absolute inset-0 rounded-lg bg-primary shadow-md shadow-primary/40"
                            initial={false}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                          />
                        )}
                        
                        {/* Icon Container */}
                        <div className={`relative w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                            : 'glass border border-border/50 text-primary hover:bg-primary/10 hover:border-primary/30 hover:shadow-md'
                        }`}>
                          <ServiceIcon className={`w-4 h-4 md:w-4.5 md:h-4.5 transition-all duration-300 ${
                            isActive ? 'text-primary-foreground' : 'text-primary group-hover:scale-110'
                          }`} />
                        </div>
                        
                        {/* Tooltip */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className={`absolute ${isRTL ? 'right-0' : 'left-1/2 -translate-x-1/2'} top-full mt-2 hidden md:block pointer-events-none z-50`}
                        >
                          <div className="glass px-3 py-1.5 rounded-lg whitespace-nowrap backdrop-blur-md border border-border/50 shadow-lg">
                            <span className="text-xs font-semibold text-foreground">
                              {t(service.titleKey)}
                            </span>
                            {/* Arrow */}
                            <div className={`absolute ${isRTL ? 'right-4' : 'left-1/2 -translate-x-1/2'} -top-1 w-2 h-2 bg-background/80 border-l border-t border-border/50 rotate-45`} />
                          </div>
                        </motion.div>
                        
                        {/* Active Indicator Dot */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary border-2 border-background"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services Sections */}
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const isEven = index % 2 === 0;
            
            // Background types for each service
            const getBackgroundType = (serviceId: string) => {
              const types: Record<string, 'waves' | 'image' | 'animated'> = {
                software: 'animated',
                web: 'waves',
                ecommerce: 'image',
                mobile: 'animated',
                social: 'waves',
                rpa: 'image',
                automation: 'animated',
                workflow: 'waves',
              };
              return types[serviceId] || 'animated';
            };
            
            const backgroundType = getBackgroundType(service.id);
            
            return (
              <section
                key={service.id}
                id={`service-${service.id}`}
                className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
              >
                {/* Background based on type */}
                <div className="absolute inset-0 -z-10">
                  {backgroundType === 'waves' && (
                    <>
                      {/* Animated Waves Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10">
                        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200">
                          <motion.path
                            d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
                            fill="url(#wave-gradient)"
                            initial={{ d: "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z" }}
                            animate={{
                              d: [
                                "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z",
                                "M0,120 Q300,70 600,120 T1200,120 L1200,200 L0,200 Z",
                                "M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
                              ]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <defs>
                            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
                              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 200" style={{ marginBottom: '-1px' }}>
                          <motion.path
                            d="M0,150 Q400,100 800,150 T1200,150 L1200,200 L0,200 Z"
                            fill="url(#wave-gradient-2)"
                            initial={{ d: "M0,150 Q400,100 800,150 T1200,150 L1200,200 L0,200 Z" }}
                            animate={{
                              d: [
                                "M0,150 Q400,100 800,150 T1200,150 L1200,200 L0,200 Z",
                                "M0,130 Q400,80 800,130 T1200,130 L1200,200 L0,200 Z",
                                "M0,150 Q400,100 800,150 T1200,150 L1200,200 L0,200 Z"
                              ]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          />
                          <defs>
                            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.12" />
                              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </>
                  )}
                  
                  {backgroundType === 'image' && (
                    <>
                      {/* Image Background */}
                      <img
                        src={service.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10" />
                    </>
                  )}
                  
                  {backgroundType === 'animated' && (
                    <>
                      {/* Animated Gradient Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-primary/15"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                        style={{
                          backgroundSize: '200% 200%'
                        }}
                      />
                      
                      {/* Animated Particles */}
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-primary/20"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.5, 1.2, 0.5],
                          }}
                          transition={{
                            duration: 5 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                      
                      {/* Animated Circles */}
                      <motion.div
                        className={`absolute ${isRTL ? (isEven ? 'left-0' : 'right-0') : (isEven ? 'right-0' : 'left-0')} top-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.div
                        className={`absolute ${isRTL ? (isEven ? 'right-0' : 'left-0') : (isEven ? 'left-0' : 'right-0')} bottom-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl`}
                        animate={{
                          scale: [1.2, 1, 1.2],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1,
                        }}
                      />
                    </>
                  )}
                </div>

                <div className="container-custom">
                  <div className={`grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center ${
                    isRTL ? (isEven ? 'lg:grid-flow-dense' : '') : (isEven ? '' : 'lg:grid-flow-dense')
                  }`}>
                    {/* Image Section */}
                    <ScrollSection
                      animation={isRTL ? (isEven ? 'slideRight' : 'slideLeft') : (isEven ? 'slideLeft' : 'slideRight')}
                      className={isEven ? (isRTL ? 'lg:order-2' : '') : (isRTL ? '' : 'lg:order-2')}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-3xl overflow-hidden group"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={service.image}
                            alt={t(service.titleKey)}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                          
                          {/* Icon Badge */}
                          <div className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}>
                            <motion.div
                              className="w-20 h-20 rounded-2xl bg-background/95 backdrop-blur-md flex items-center justify-center shadow-2xl border-2 border-primary/30"
                              whileHover={{ scale: 1.15, rotate: 5 }}
                            >
                              <ServiceIcon className="w-10 h-10 text-primary" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </ScrollSection>

                    {/* Content Section */}
                    <ScrollSection
                      animation={isRTL ? (isEven ? 'slideLeft' : 'slideRight') : (isEven ? 'slideRight' : 'slideLeft')}
                      className={isEven ? (isRTL ? 'lg:order-1' : '') : (isRTL ? 'lg:order-1' : '')}
                    >
                      <div className={`space-y-4 md:space-y-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                        {/* Title */}
                        <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                          {t(service.titleKey)}
                        </h2>

                        {/* Description */}
                        <p className={`text-base md:text-lg text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                          {t(service.descKey)}
                        </p>

                        {/* Detailed Description */}
                        {service.detailKey && (
                          <div className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className={`font-display text-xl font-semibold flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <div className="w-1 h-6 bg-primary rounded-full" />
                              {t('services.detailTitle') || 'Overview'}
                            </h3>
                            <p className={`text-sm md:text-base text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                              {t(service.detailKey)}
                            </p>
                          </div>
                        )}

                        {/* What's Included */}
                        {service.includedItems && service.includedItems.length > 0 && (
                          <div className={`space-y-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                            <h3 className={`font-display text-xl md:text-2xl font-semibold flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <div className="w-1.5 h-8 bg-primary rounded-full" />
                              {t('services.offeringsTitle')}
                            </h3>
                            <div className={`grid sm:grid-cols-1 gap-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                              {service.includedItems.map((item, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.05 }}
                                  className={`flex items-start gap-3 p-4 rounded-xl glass hover:border-primary/50 transition-all duration-300 border border-border/50 hover:shadow-md ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                                  dir={isRTL ? 'rtl' : 'ltr'}
                                >
                                  {isRTL ? (
                                    <>
                                      <span className="text-base text-foreground font-medium leading-relaxed text-right flex-1">{t(item)}</span>
                                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                                    </>
                                  ) : (
                                    <>
                                      <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                                      <span className="text-base text-foreground font-medium leading-relaxed text-left flex-1">{t(item)}</span>
                                    </>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* CTA Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="pt-4"
                        >
                          <Button
                            onClick={() => navigate('/contact')}
                            size="lg"
                            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group"
                          >
                            <MessageCircle className={`${isRTL ? 'mr-2' : 'ml-2'} w-5 h-5`} />
                            {t('services.contactUs')}
                            <ArrowIcon className={`${isRTL ? 'mr-2' : 'ml-2'} w-5 h-5 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                          </Button>
                        </motion.div>
                      </div>
                    </ScrollSection>
                  </div>
                </div>
              </section>
            );
          })}
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Services;
