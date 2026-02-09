import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Background3D } from '@/components/Background3D';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollSection, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Twitter, Github, Mail, User } from 'lucide-react';
import aboutImage from '@/assets/about-innovation.jpg';
import servicesImage from '@/assets/services-tech.jpg';
import processImage from '@/assets/process-workflow.jpg';
import contactImage from '@/assets/contact-collaboration.jpg';
import heroBg1 from '@/assets/hero-bg-1.jpg';

interface TeamMember {
  name: string;
  roleKey: string;
  bioKey: string;
  expertiseKey: string;
  image: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Hamza Kitana',
    roleKey: 'team.hamza.role',
    bioKey: 'team.hamza.bio',
    expertiseKey: 'team.hamza.expertise',
    image: '/hamza.png',
    email: 'hamza@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Ahmad Albagdadi',
    roleKey: 'team.ahmad.role',
    bioKey: 'team.ahmad.bio',
    expertiseKey: 'team.ahmad.expertise',
    image: '/ahmad.png',
    email: 'ahmad@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Maen Masadeh',
    roleKey: 'team.maen.role',
    bioKey: 'team.maen.bio',
    expertiseKey: 'team.maen.expertise',
    image: '/maen.png',
    email: 'maen@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Belal Albraji',
    roleKey: 'team.belal.role',
    bioKey: 'team.belal.bio',
    expertiseKey: 'team.belal.expertise',
    image: '/belal.png',
    email: 'belal@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Saif Nedal',
    roleKey: 'team.saif.role',
    bioKey: 'team.saif.bio',
    expertiseKey: 'team.saif.expertise',
    image: '/saif.jpeg',
    email: 'saif@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Ahmad Abu Sd',
    roleKey: 'team.ahmadAbuSad.role',
    bioKey: 'team.ahmadAbuSad.bio',
    expertiseKey: 'team.ahmadAbuSad.expertise',
    image: '/abusad.png',
    email: 'ahmad.abusad@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Mohamad Alnajjar',
    roleKey: 'team.mohamad.role',
    bioKey: 'team.mohamad.bio',
    expertiseKey: 'team.mohamad.expertise',
    image: '/najjar.png',
    email: 'mohamad@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Sondos Alqisi',
    roleKey: 'team.sondos.role',
    bioKey: 'team.sondos.bio',
    expertiseKey: 'team.sondos.expertise',
    image: '/sondos.jpg',
    email: 'sondos@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Ahmad Ashraf',
    roleKey: 'team.ahmadAshraf.role',
    bioKey: 'team.ahmadAshraf.bio',
    expertiseKey: 'team.ahmadAshraf.expertise',
    image: '/ahmadh.png',
    email: 'ahmad.ashraf@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  {
    name: 'Mohamad Saber',
    roleKey: 'team.mohamadSaber.role',
    bioKey: 'team.mohamadSaber.bio',
    expertiseKey: 'team.mohamadSaber.expertise',
    image: '/saber.png',
    email: 'mohamad.saber@applkanji.com',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
];

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t, isRTL } = useLanguage();

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
          <section className="pt-8 pb-16 relative">
            {/* Background accent */}
            <div className="absolute inset-0 -z-10">
              <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
              <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 bg-accent/5 rounded-full blur-3xl`} />
            </div>

            <div className="container-custom">
              {/* Section header */}
              <ScrollSection animation="fadeUp" className="text-center mb-16">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {t('about.team.title1')} <span className="gradient-text">{t('about.team.title2')}</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  {t('about.team.subtitle')}
                </p>
                
                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="glass px-6 py-3 rounded-full">
                    <span className="text-primary font-semibold text-lg">10</span>
                    <span className="text-muted-foreground mx-2">{t('about.team.stat1')}</span>
                  </div>
                  <div className="glass px-6 py-3 rounded-full">
                    <span className="text-primary font-semibold text-lg">100%</span>
                    <span className="text-muted-foreground mx-2">{t('about.team.stat2')}</span>
                  </div>
                </div>
              </ScrollSection>

              {/* Team members with sidebar navigation */}
              <div className="relative">
                {/* Fixed Sidebar Navigation - Team Members List */}
                <div className={`hidden lg:block fixed ${isRTL ? 'left-8' : 'right-8'} top-1/2 -translate-y-1/2 z-30`}>
                  <div className="glass rounded-xl p-3 backdrop-blur-md border border-border/50 shadow-lg">
                    <nav className="space-y-2">
                      {teamMembers.map((member, index) => (
                        <div key={member.name} className="relative group">
                          <motion.button
                            onClick={() => {
                              const element = document.getElementById(`member-${index}`);
                              if (element) {
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset from top
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }}
                            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 border border-border/50 group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <User className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </motion.button>
                          
                          {/* Tooltip with name */}
                          <div className={`absolute ${isRTL ? 'left-full ml-2' : 'right-full mr-2'} top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50`}>
                            <div className="glass px-3 py-1.5 rounded-lg whitespace-nowrap backdrop-blur-md border border-border/50 shadow-lg">
                              <span className="text-xs font-semibold text-foreground">
                                {member.name.split(' ')[0]}
                              </span>
                              {/* Arrow */}
                              <div className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'} w-0 h-0 border-t-4 border-b-4 border-r-0 border-l-0 ${isRTL ? 'border-r-4 border-r-background/80' : 'border-l-4 border-l-background/80'}`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Mobile Navigation - Show on small screens */}
                <div className="lg:hidden mb-8">
                  <div className="glass rounded-2xl p-6">
                    <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
                      {t('team.navigation') || 'Team Members'}
                    </h3>
                    <nav className="flex flex-wrap gap-2">
                      {teamMembers.map((member, index) => (
                        <motion.button
                          key={member.name}
                            onClick={() => {
                              const element = document.getElementById(`member-${index}`);
                              if (element) {
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset from top
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: 'smooth'
                                });
                              }
                            }}
                          className="px-4 py-2 rounded-xl glass text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {member.name.split(' ')[0]}
                        </motion.button>
                      ))}
                    </nav>
                  </div>
                </div>

                {/* Team members - Enhanced Cards */}
                <div className="space-y-16">
                {teamMembers.map((member, index) => (
                  <ScrollSection
                    key={member.name}
                    id={`member-${index}`}
                    animation={index % 2 === 0 ? (isRTL ? 'slideLeft' : 'slideRight') : (isRTL ? 'slideRight' : 'slideLeft')}
                    delay={index * 0.1}
                  >
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`glass rounded-2xl overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-8 lg:p-12`}
                    >
                      {/* Large Professional Image */}
                      <div className={`relative w-full lg:w-80 h-80 lg:h-96 shrink-0 ${index % 2 === 0 ? (isRTL ? 'lg:order-2' : '') : (isRTL ? '' : 'lg:order-2')}`}>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden group/image">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                          
                          {/* Decorative border */}
                          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl opacity-0 group-hover/image:opacity-100 transition-opacity" />
                        </div>
                        
                        {/* Floating badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className={`absolute -bottom-4 ${isRTL ? 'right-4' : 'left-4'} glass px-4 py-2 rounded-full backdrop-blur-md`}
                        >
                          <span className="text-xs font-semibold text-primary">{t(member.roleKey)}</span>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-6">
                        {/* Name and Role */}
                        <div>
                          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                            {member.name}
                          </h2>
                          <p className="text-lg text-primary font-semibold mb-4">
                            {t(member.roleKey)}
                          </p>
                        </div>

                        {/* Bio */}
                        <div>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {t(member.bioKey)}
                          </p>
                        </div>

                        {/* Expertise */}
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                            {t('team.expertise') || 'Expertise'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {t(member.expertiseKey).split(', ').map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Contact & Social */}
                        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/50">
                          {member.email && (
                            <motion.a
                              href={`mailto:${member.email}`}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="Email"
                            >
                              <Mail className="w-5 h-5" />
                            </motion.a>
                          )}
                          {member.linkedin && (
                            <motion.a
                              href={member.linkedin}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="w-5 h-5" />
                            </motion.a>
                          )}
                          {member.twitter && (
                            <motion.a
                              href={member.twitter}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="Twitter"
                            >
                              <Twitter className="w-5 h-5" />
                            </motion.a>
                          )}
                          {member.github && (
                            <motion.a
                              href={member.github}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="GitHub"
                            >
                              <Github className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </ScrollSection>
                ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Team;
