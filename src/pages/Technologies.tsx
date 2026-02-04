import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Background3D } from '@/components/Background3D';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollSection, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Bot,
  Wrench,
  FileCode,
  Globe,
  Palette,
  Server,
  Container,
  Zap,
  GitBranch,
  PenTool,
  CheckSquare,
  FileText,
  MessageSquare,
  Code,
} from 'lucide-react';

interface Technology {
  name: string;
  icon: any;
  color?: string;
}

interface TechnologyCategory {
  categoryKey: string;
  icon: any;
  items: Technology[];
}

const getTechnologyIcon = (name: string): any => {
  const iconMap: Record<string, any> = {
    // Frontend
    'React': Code2,
    'Next.js': FileCode,
    'Vue.js': Globe,
    'TypeScript': Code,
    'Tailwind CSS': Palette,
    'Framer Motion': Zap,
    
    // Backend
    'Node.js': Server,
    'Python': Code2,
    'Go': Code2,
    'PostgreSQL': Database,
    'MongoDB': Database,
    'Redis': Database,
    
    // Mobile
    'React Native': Smartphone,
    'Flutter': Smartphone,
    'Swift': Smartphone,
    'Kotlin': Smartphone,
    'Expo': Smartphone,
    
    // Cloud
    'AWS': Cloud,
    'Google Cloud': Cloud,
    'Docker': Container,
    'Kubernetes': Container,
    'CI/CD': Zap,
    'Terraform': Cloud,
    
    // Automation
    'n8n': Bot,
    'Zapier': Zap,
    'Power Automate': Zap,
    'UiPath': Bot,
    'Selenium': Bot,
    
    // Tools
    'Git': GitBranch,
    'Figma': PenTool,
    'Jira': CheckSquare,
    'Notion': FileText,
    'Slack': MessageSquare,
    'VS Code': Code,
  };
  
  return iconMap[name] || Code2;
};

const getTechnologyColor = (name: string): string => {
  const colorMap: Record<string, string> = {
    // Frontend - Blue/Cyan
    'React': '#61DAFB',
    'Next.js': '#000000',
    'Vue.js': '#4FC08D',
    'TypeScript': '#3178C6',
    'Tailwind CSS': '#06B6D4',
    'Framer Motion': '#0055FF',
    
    // Backend - Green/Orange
    'Node.js': '#339933',
    'Python': '#3776AB',
    'Go': '#00ADD8',
    'PostgreSQL': '#336791',
    'MongoDB': '#47A248',
    'Redis': '#DC382D',
    
    // Mobile - Purple/Pink
    'React Native': '#61DAFB',
    'Flutter': '#02569B',
    'Swift': '#FA7343',
    'Kotlin': '#7F52FF',
    'Expo': '#000020',
    
    // Cloud - Orange/Blue
    'AWS': '#FF9900',
    'Google Cloud': '#4285F4',
    'Docker': '#2496ED',
    'Kubernetes': '#326CE5',
    'CI/CD': '#FF6B6B',
    'Terraform': '#7B42BC',
    
    // Automation - Purple/Blue
    'n8n': '#FF6D5A',
    'Zapier': '#FF4A00',
    'Power Automate': '#0066FF',
    'UiPath': '#D6522F',
    'Selenium': '#43B02A',
    
    // Tools - Various
    'Git': '#F05032',
    'Figma': '#F24E1E',
    'Jira': '#0052CC',
    'Notion': '#000000',
    'Slack': '#4A154B',
    'VS Code': '#007ACC',
  };
  
  return colorMap[name] || 'hsl(var(--primary))';
};

const Technologies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, isRTL } = useLanguage();

  const technologies: TechnologyCategory[] = [
    {
      categoryKey: 'tech.frontend',
      icon: Code2,
      items: [
        { name: 'React', icon: Code2 },
        { name: 'Next.js', icon: FileCode },
        { name: 'Vue.js', icon: Globe },
        { name: 'TypeScript', icon: Code },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Framer Motion', icon: Zap },
      ],
    },
    {
      categoryKey: 'tech.backend',
      icon: Server,
      items: [
        { name: 'Node.js', icon: Server },
        { name: 'Python', icon: Code2 },
        { name: 'Go', icon: Code2 },
        { name: 'PostgreSQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'Redis', icon: Database },
      ],
    },
    {
      categoryKey: 'tech.mobile',
      icon: Smartphone,
      items: [
        { name: 'React Native', icon: Smartphone },
        { name: 'Flutter', icon: Smartphone },
        { name: 'Swift', icon: Smartphone },
        { name: 'Kotlin', icon: Smartphone },
        { name: 'Expo', icon: Smartphone },
      ],
    },
    {
      categoryKey: 'tech.cloud',
      icon: Cloud,
      items: [
        { name: 'AWS', icon: Cloud },
        { name: 'Google Cloud', icon: Cloud },
        { name: 'Docker', icon: Container },
        { name: 'Kubernetes', icon: Container },
        { name: 'CI/CD', icon: Zap },
        { name: 'Terraform', icon: Cloud },
      ],
    },
    {
      categoryKey: 'tech.automation',
      icon: Bot,
      items: [
        { name: 'n8n', icon: Bot },
        { name: 'Zapier', icon: Zap },
        { name: 'Power Automate', icon: Zap },
        { name: 'UiPath', icon: Bot },
        { name: 'Selenium', icon: Bot },
      ],
    },
    {
      categoryKey: 'tech.tools',
      icon: Wrench,
      items: [
        { name: 'Git', icon: GitBranch },
        { name: 'Figma', icon: PenTool },
        { name: 'Jira', icon: CheckSquare },
        { name: 'Notion', icon: FileText },
        { name: 'Slack', icon: MessageSquare },
        { name: 'VS Code', icon: Code },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
        <main className="pt-20">
          <section className="section-padding relative overflow-hidden">
            {/* Enhanced background */}
            <div className="absolute inset-0 -z-10">
              {/* Grid pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.2) 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Gradient overlays */}
              <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
              <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 bg-accent/5 rounded-full blur-3xl`} />
            </div>

            <div className="container-custom">
              {/* Section header */}
              <ScrollSection animation="fadeUp" className="text-center mb-20">
                <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
                  {t('tech.label')}
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {t('tech.title1')} <span className="gradient-text">{t('tech.title2')}</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('tech.subtitle')}
                </p>
              </ScrollSection>

              {/* Technology categories */}
              <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {technologies.map((tech) => (
                  <StaggerItem key={tech.categoryKey}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="glass rounded-2xl p-8 h-full hover-lift group relative overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Category header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                            <tech.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-display text-xl font-semibold text-primary group-hover:text-primary transition-colors">
                            {t(tech.categoryKey)}
                          </h3>
                        </div>

                        {/* Technology items */}
                        <div className="grid grid-cols-2 gap-3">
                          {tech.items.map((item, index) => {
                            const IconComponent = item.icon || getTechnologyIcon(item.name);
                            const techColor = getTechnologyColor(item.name);
                            
                            return (
                              <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="group/item"
                              >
                                <div className="glass rounded-xl p-4 h-full flex flex-col items-center justify-center gap-2 hover-lift border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default">
                                  {/* Icon with color */}
                                  <div 
                                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-1 transition-all duration-300 group-hover/item:scale-110"
                                    style={{
                                      backgroundColor: `${techColor}15`,
                                    }}
                                  >
                                    <IconComponent 
                                      className="w-5 h-5 transition-all duration-300" 
                                      style={{ color: techColor }}
                                    />
                                  </div>
                                  
                                  {/* Technology name */}
                                  <span className="text-xs font-medium text-center text-foreground group-hover/item:text-primary transition-colors leading-tight">
                                    {item.name}
                                  </span>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Bottom CTA */}
              <ScrollSection animation="fadeUp" delay={0.4} className="text-center mt-20">
                <p className="text-muted-foreground mb-4">
                  {t('tech.cta')}
                </p>
                <motion.a
                  href="/#contact"
                  className={`inline-flex items-center gap-2 text-primary font-medium hover:underline ${isRTL ? 'flex-row-reverse' : ''}`}
                  whileHover={{ x: isRTL ? -4 : 4 }}
                >
                  {t('tech.ctaLink')}
                </motion.a>
              </ScrollSection>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Technologies;
