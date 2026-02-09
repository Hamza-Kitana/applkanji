import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { ScrollSection, StaggerContainer, StaggerItem } from './ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { format, isValid } from 'date-fns';
import aboutImage from '@/assets/about-innovation.jpg';
import servicesImage from '@/assets/services-tech.jpg';
import processImage from '@/assets/process-workflow.jpg';
import contactImage from '@/assets/contact-collaboration.jpg';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: Date;
  category: 'conference' | 'event' | 'update' | 'award';
  link?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Tech Innovation Summit 2024',
    description: 'APPLKANJI team attended the prestigious Tech Innovation Summit, showcasing our latest automation solutions and networking with industry leaders.',
    image: heroBg1,
    date: new Date(2024, 2, 15),
    category: 'conference',
    link: '#',
  },
  {
    id: 2,
    title: 'Launch of New RPA Platform',
    description: 'We are excited to announce the launch of our advanced RPA platform, designed to streamline business processes and increase operational efficiency.',
    image: servicesImage,
    date: new Date(2024, 1, 28),
    category: 'update',
    link: '#',
  },
  {
    id: 3,
    title: 'Best Digital Solutions Award',
    description: 'APPLKANJI has been honored with the "Best Digital Solutions Provider" award at the Regional Business Excellence Awards 2024.',
    image: heroBg2,
    date: new Date(2024, 0, 10),
    category: 'award',
    link: '#',
  },
  {
    id: 4,
    title: 'Developer Conference Participation',
    description: 'Our team participated in the annual Developer Conference, sharing insights on modern web development practices and React ecosystem.',
    image: aboutImage,
    date: new Date(2023, 11, 5),
    category: 'conference',
    link: '#',
  },
  {
    id: 5,
    title: 'Partnership Announcement',
    description: 'We are thrilled to announce our strategic partnership with leading cloud providers to enhance our service offerings.',
    image: processImage,
    date: new Date(2023, 10, 20),
    category: 'update',
    link: '#',
  },
  {
    id: 6,
    title: 'Community Tech Meetup',
    description: 'APPLKANJI hosted a successful tech meetup, bringing together developers and entrepreneurs to discuss the future of automation.',
    image: contactImage,
    date: new Date(2023, 9, 15),
    category: 'event',
    link: '#',
  },
];

const featuredNews = newsItems.slice(0, 3);

export function NewsSection() {
  const { t, isRTL, language } = useLanguage();
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const getCategoryLabel = (category: string) => {
    return t(`news.category.${category}`);
  };

  const formatDate = (date: Date) => {
    if (!isValid(date)) {
      return '';
    }
    
    try {
      const formatStr = t('news.dateFormat');
      if (formatStr && formatStr !== 'news.dateFormat') {
        try {
          return format(date, formatStr);
        } catch (formatError) {
          // If format string is invalid, fall through to default
        }
      }
    } catch (error) {
      // Fallback to default format
    }
    
    // Fallback to default format
    try {
      return format(date, language === 'ar' ? 'dd MMM yyyy' : 'MMM dd, yyyy');
    } catch (error) {
      return date.toLocaleDateString();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play interval - 4 seconds for professional feel
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section id="news" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/3 ${isRTL ? 'right-0' : 'left-0'} w-96 h-96 bg-accent/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/3 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <ScrollSection animation="fadeUp" className="text-center mb-10 md:mb-12 lg:mb-16 px-4">
          <span className="text-primary font-medium text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4 block">
            {t('news.label')}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            {t('news.title1')} <span className="gradient-text">{t('news.title2')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('news.subtitle')}
          </p>
        </ScrollSection>

        {/* Featured News - Single Item Professional Display */}
        <ScrollSection animation="fadeUp" delay={0.2}>
          <div className="relative max-w-5xl mx-auto">
            <Carousel
              setApi={setApi}
              opts={{
                align: 'center',
                loop: true,
                skipSnaps: false,
                slidesToScroll: 1,
                containScroll: 'trimSnaps',
              }}
              className="w-full"
            >
              <CarouselContent className="!ml-0">
                {featuredNews.map((item) => (
                  <CarouselItem key={item.id} className="!pl-0 basis-full">
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full"
                    >
                      <motion.article
                        whileHover={{ y: -4 }}
                        className="glass rounded-2xl overflow-hidden group border border-border/50 hover:border-primary/30 transition-all duration-300"
                      >
                        {/* Hero Image Section */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden group/image">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                          
                          {/* Category Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={`absolute top-6 ${isRTL ? 'right-6' : 'left-6'}`}
                          >
                            <span className="px-4 py-2 rounded-full text-sm font-semibold bg-primary/90 text-primary-foreground backdrop-blur-md shadow-lg">
                              {getCategoryLabel(item.category)}
                            </span>
                          </motion.div>

                          {/* Date Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className={`absolute bottom-6 ${isRTL ? 'right-6' : 'left-6'}`}
                          >
                            <div className="glass px-4 py-2 rounded-full backdrop-blur-md">
                              <div className={`flex items-center gap-2 text-sm font-medium text-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <Calendar className="w-4 h-4 text-primary" />
                                <span>{formatDate(item.date)}</span>
                              </div>
                            </div>
                          </motion.div>
                        </div>

                        {/* Content Section */}
                        <div className="p-6 md:p-8 lg:p-10 relative overflow-hidden">
                          {/* Decorative gradient line */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-50" />
                          
                          {/* Title */}
                          <motion.h3
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors"
                          >
                            {item.title}
                          </motion.h3>

                          {/* Description */}
                          <motion.p
                            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed mb-6"
                          >
                            {item.description}
                          </motion.p>
                          
                          {/* Read More Link */}
                          {item.link && (
                            <motion.a
                              href={item.link}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 }}
                              className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all group/link ${isRTL ? 'flex-row-reverse' : ''}`}
                              whileHover={{ x: isRTL ? -4 : 4, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>{t('news.readMore')}</span>
                              <ExternalLink className={`w-5 h-5 transition-transform ${isRTL ? 'group-hover/link:-translate-x-1' : 'group-hover/link:translate-x-1'}`} />
                            </motion.a>
                          )}
                        </div>
                      </motion.article>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Navigation buttons */}
              <CarouselPrevious 
                className={`hidden md:flex ${isRTL ? '-right-16' : '-left-16'} w-14 h-14 rounded-full glass border-2 border-primary/20 hover:border-primary/50 bg-background/80 backdrop-blur-md shadow-lg`} 
              />
              <CarouselNext 
                className={`hidden md:flex ${isRTL ? '-left-16' : '-right-16'} w-14 h-14 rounded-full glass border-2 border-primary/20 hover:border-primary/50 bg-background/80 backdrop-blur-md shadow-lg`} 
              />
            </Carousel>

            {/* Carousel indicators */}
            <div className="flex justify-center items-center gap-3 mt-8 md:mt-10">
              {featuredNews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-primary w-12 h-2 shadow-lg shadow-primary/50'
                      : 'bg-muted-foreground/40 hover:bg-muted-foreground/60 w-2 h-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
