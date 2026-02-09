import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollSection } from './ScrollAnimations';
import { useNavigate } from 'react-router-dom';

interface TeamMember {
  name: string;
  roleKey: string;
  expertiseKey: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Hamza Kitana',
    roleKey: 'team.hamza.role',
    expertiseKey: 'team.hamza.expertise',
    image: '/hamza.png',
  },
  {
    name: 'Ahmad Albagdadi',
    roleKey: 'team.ahmad.role',
    expertiseKey: 'team.ahmad.expertise',
    image: '/ahmad.png',
  },
  {
    name: 'Maen Masadeh',
    roleKey: 'team.maen.role',
    expertiseKey: 'team.maen.expertise',
    image: '/maen.png',
  },
  {
    name: 'Belal Albraji',
    roleKey: 'team.belal.role',
    expertiseKey: 'team.belal.expertise',
    image: '/belal.png',
  },
  {
    name: 'Saif Nedal',
    roleKey: 'team.saif.role',
    expertiseKey: 'team.saif.expertise',
    image: '/saif.jpeg',
  },
  {
    name: 'Ahmad Abu Sd',
    roleKey: 'team.ahmadAbuSad.role',
    expertiseKey: 'team.ahmadAbuSad.expertise',
    image: '/abusad.png',
  },
  {
    name: 'Mohamad Alnajjar',
    roleKey: 'team.mohamad.role',
    expertiseKey: 'team.mohamad.expertise',
    image: '/najjar.png',
  },
  {
    name: 'Sondos Alqisi',
    roleKey: 'team.sondos.role',
    expertiseKey: 'team.sondos.expertise',
    image: '/sondos.jpg',
  },
  {
    name: 'Ahmad Ashraf',
    roleKey: 'team.ahmadAshraf.role',
    expertiseKey: 'team.ahmadAshraf.expertise',
    image: '/ahmadh.png',
  },
  {
    name: 'Mohamad Saber',
    roleKey: 'team.mohamadSaber.role',
    expertiseKey: 'team.mohamadSaber.expertise',
    image: '/saber.png',
  },
];

export function TeamCarouselSection() {
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="section-padding relative overflow-hidden py-16 md:py-20">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute top-1/2 ${isRTL ? 'left-0' : 'right-0'} w-96 h-96 bg-primary/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 ${isRTL ? 'right-0' : 'left-0'} w-96 h-96 bg-accent/5 rounded-full blur-3xl`} />
      </div>

      <div className="container-custom">
        {/* Section header */}
        <ScrollSection animation="fadeUp" className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {t('about.team.title1')} <span className="gradient-text">{t('about.team.title2')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.team.subtitle')}
          </p>
        </ScrollSection>

        {/* Team Grid - All 10 members displayed */}
        <div className="relative w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => navigate('/team')}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-full aspect-square"
                >
                  {/* Circular card - smaller size */}
                  <div className="relative w-full h-full rounded-full overflow-hidden glass border-2 border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 bg-muted">
                    {/* Image */}
                    <div className="relative w-full h-full rounded-full bg-muted">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.src.includes('placeholder.svg')) {
                            target.src = '/placeholder.svg';
                          }
                          target.onerror = null;
                        }}
                        loading="eager"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 rounded-full pointer-events-none" />
                    </div>

                    {/* Name overlay - appears from bottom on hover */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-2 md:p-3"
                      initial={{ y: 100, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center">
                        <h3 className="font-display text-xs md:text-sm font-bold text-foreground mb-0.5">
                          {member.name}
                        </h3>
                        <p className="text-[10px] md:text-xs text-primary font-semibold">
                          {t(member.roleKey)}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Team Button */}
        <ScrollSection animation="fadeUp" delay={0.3} className="text-center mt-12 md:mt-16">
          <motion.button
            onClick={() => navigate('/team')}
            className={`px-8 py-4 rounded-xl glass border border-primary/20 hover:border-primary/50 text-primary font-semibold transition-all flex items-center gap-3 mx-auto ${isRTL ? 'flex-row-reverse' : ''}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('nav.team')}</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ x: isRTL ? [-4, 0, -4] : [4, 0, 4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
              />
            </motion.svg>
          </motion.button>
        </ScrollSection>
      </div>
    </section>
  );
}
