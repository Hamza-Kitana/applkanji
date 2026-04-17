import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Background3D } from '@/components/Background3D';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollSection, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Twitter, Mail, User, Instagram, Copy, Send, Globe } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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
  instagram?: string;
  whatsapp?: string;
  website?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Hamza Kitana',
    roleKey: 'team.hamza.role',
    bioKey: 'team.hamza.bio',
    expertiseKey: 'team.hamza.expertise',
    image: '/hamza.png',
    email: 'applkanji@gmail.com',
    linkedin: 'https://www.linkedin.com/in/hamza-kitana-384339296/',
    instagram: 'https://www.instagram.com/applkanji/',
    whatsapp: 'https://wa.me/971588822401',
    website: 'https://hamza-kitana.vercel.app/',
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
  },
  {
    name: 'Ahmad Ashraf',
    roleKey: 'team.ahmadAshraf.role',
    bioKey: 'team.ahmadAshraf.bio',
    expertiseKey: 'team.ahmadAshraf.expertise',
    image: '/legg.png',
    email: 'ahmadsarawi2003@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ahmad-ismail-299934311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    instagram: 'https://www.instagram.com/ahmad_ashraf03?igsh=MTJnczlpeGdkZ2M3cw%3D%3D&utm_source=qr',
    whatsapp: 'https://wa.me/970597992610',
  },
  {
    name: 'Maen Masadeh',
    roleKey: 'team.maen.role',
    bioKey: 'team.maen.bio',
    expertiseKey: 'team.maen.expertise',
    image: '/maen.png',
    email: 'maenmasadeh.55@gmail.com',
    linkedin: 'https://www.linkedin.com/in/maen-masadeh/',
    instagram: 'https://www.instagram.com/maen_masadeh98/',
    whatsapp: 'https://wa.me/962788391886',
  },
  {
    name: 'Belal Albraji',
    roleKey: 'team.belal.role',
    bioKey: 'team.belal.bio',
    expertiseKey: 'team.belal.expertise',
    image: '/belal.png',
    email: 'belalbillo123@gmail.com',
    linkedin: 'https://www.linkedin.com/in/belal-albrige/',
    instagram: 'https://www.instagram.com/belal_albrige/',
    whatsapp: 'https://wa.me/962788804068',
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
  },
  {
    name: 'Mohamad Alnajjar',
    roleKey: 'team.mohamad.role',
    bioKey: 'team.mohamad.bio',
    expertiseKey: 'team.mohamad.expertise',
    image: '/najjar.png',
    email: 'alnjjarm19@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohammad-alnajjar-9b3439318/',
    instagram: 'https://www.instagram.com/m.2lnjjar1/',
    whatsapp: 'https://wa.me/962777474752',
  },
];

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [emailDialog, setEmailDialog] = useState<{ name: string; email: string } | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const { t, isRTL } = useLanguage();

  const handleCopyEmail = async () => {
    if (!emailDialog) return;
    try {
      await navigator.clipboard.writeText(emailDialog.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      // fallback
    }
  };

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

            <div className="section-full-width">
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
                    <span className="text-primary font-semibold text-lg">8</span>
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
                            <motion.button
                              type="button"
                              onClick={() => setEmailDialog({ name: member.name, email: member.email! })}
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="Email"
                            >
                              <Mail className="w-5 h-5" />
                            </motion.button>
                          )}
                          {member.website && (
                            <motion.a
                              href={member.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="Website"
                            >
                              <Globe className="w-5 h-5" />
                            </motion.a>
                          )}
                          {member.linkedin && (
                            <motion.a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
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
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="Twitter"
                            >
                              <Twitter className="w-5 h-5" />
                            </motion.a>
                          )}
                          {member.instagram && (
                            <motion.a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="Instagram"
                            >
                              <Instagram className="w-5 h-5" />
                            </motion.a>
                          )}
                          {member.whatsapp && (
                            <motion.a
                              href={member.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                              aria-label="WhatsApp"
                            >
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                              </svg>
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

      {/* Email Dialog - نافذة عرض البريد */}
      <Dialog open={!!emailDialog} onOpenChange={(open) => !open && setEmailDialog(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              {t('team.emailDialog.title')} {emailDialog && `- ${emailDialog.name}`}
            </DialogTitle>
          </DialogHeader>
          {emailDialog && (
            <div className="space-y-4 pt-2">
              <p className="text-sm text-muted-foreground break-all select-all bg-muted/50 px-3 py-2 rounded-lg font-mono">
                {emailDialog.email}
              </p>
              <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="gap-2"
                >
                  <Copy className="w-4 h-4" />
                  {emailCopied ? t('team.emailDialog.copied') : t('team.emailDialog.copy')}
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <a href={`mailto:${emailDialog.email}`}>
                    <Send className="w-4 h-4" />
                    {t('team.emailDialog.openInMail')}
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Team;
