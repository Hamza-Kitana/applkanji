import { motion } from 'framer-motion';
import { ScrollSection } from './ScrollAnimations';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import contactImage from '@/assets/contact-collaboration.jpg';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  MAILTO_HREF,
  WHATSAPP_URL,
} from '@/lib/contact';

export function ContactSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 -z-10">
        <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2`} />
      </div>

      <div className="section-full-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollSection animation="fadeUp" className={isRTL ? 'lg:order-2' : ''}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              {t('contact.label')}
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title1')} <span className="gradient-text">{t('contact.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </ScrollSection>

          <ScrollSection animation={isRTL ? 'slideRight' : 'slideLeft'} className={isRTL ? 'lg:order-1' : ''}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={contactImage}
                alt="Partnership and Collaboration"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />

              <motion.div
                className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} glass px-4 py-2 rounded-full flex items-center gap-2`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium">{t('contact.response')}</span>
              </motion.div>
            </motion.div>
          </ScrollSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollSection animation={isRTL ? 'slideLeft' : 'slideRight'}>
            <div className="glass rounded-2xl p-8 flex flex-col justify-center min-h-[260px]">
              <h3 className="font-display text-2xl font-semibold mb-3">
                {t('contact.whatsapp.title')}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('contact.whatsapp.desc')}
              </p>
              <Button
                asChild
                className="w-full bg-[#25D366] text-white hover:bg-[#20BD5A] py-7 text-lg font-semibold shadow-lg shadow-[#25D366]/25"
              >
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Phone className="w-6 h-6 shrink-0" />
                  {t('contact.whatsapp.cta')}
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4 text-center" dir="ltr">
                {CONTACT_PHONE_DISPLAY}
              </p>
            </div>
          </ScrollSection>

          <ScrollSection animation={isRTL ? 'slideRight' : 'slideLeft'}>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <motion.a
                    href={MAILTO_HREF}
                    whileHover={{ x: isRTL ? -4 : 4 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                      <p className="font-medium text-foreground break-all">{CONTACT_EMAIL}</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: isRTL ? -4 : 4 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                      <p className="font-medium text-foreground" dir="ltr">{CONTACT_PHONE_DISPLAY}</p>
                    </div>
                  </motion.a>

                  <motion.div
                    whileHover={{ x: isRTL ? -4 : 4 }}
                    className="flex items-center gap-4 text-muted-foreground"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{t('contact.info.location')}</p>
                      <p className="font-medium text-foreground">{t('contact.info.locationValue')}</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-lg font-semibold mb-4">{t('contact.follow')}</h4>
                <div className="flex gap-4">
                  <motion.a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <div>
                    <p className="font-medium">{t('contact.response')}</p>
                    <p className="text-sm text-muted-foreground">
                      {t('contact.responseDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSection>
        </div>
      </div>
    </section>
  );
}
