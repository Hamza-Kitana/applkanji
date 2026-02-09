import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import applkanjiLogo from '@/assets/applkanji-logo.png';

export function Footer() {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container-custom py-8 md:py-12 lg:py-16 px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 md:mb-6">
            <img 
              src={applkanjiLogo} 
              alt="ApplKanji Logo" 
                className="h-10 md:h-12 w-auto mb-3 md:mb-4"
            />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">{t('footer.quickLinks')}</h4>
            <ul className={`space-y-2 md:space-y-3 text-xs sm:text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors block">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors block">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors block">
                  {t('nav.team')}
                </a>
              </li>
              <li>
                <a href="/technologies" className="text-muted-foreground hover:text-primary transition-colors block">
                  {t('nav.technologies')}
                </a>
              </li>
              <li>
                <a href="/#news" className="text-muted-foreground hover:text-primary transition-colors block">
                  {t('nav.news')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors block">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="sm:col-span-1">
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">{t('footer.contactInfo')}</h4>
            <ul className={`space-y-2 md:space-y-3 text-xs sm:text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              <li>
                <a 
                  href="mailto:hello@applkanji.com" 
                  className={`flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">hello@applkanji.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+1234567890" 
                  className={`flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span dir="ltr">+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <div className={`flex items-start gap-3 text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t('contact.info.locationValue')}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-display text-base md:text-lg font-semibold mb-3 md:mb-4 text-foreground">{t('footer.followUs')}</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
              {t('footer.socialDesc')}
            </p>
            <div className={`flex flex-wrap gap-2 md:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors shrink-0"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 md:pt-8 mt-6 md:mt-8">
          <div className={`flex flex-col ${isRTL ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-4 md:gap-6`}>
            {/* Copyright */}
            <div className={`text-xs sm:text-sm text-muted-foreground ${isRTL ? 'text-right' : 'text-left'} order-3 md:order-1`}>
              <p>
                © {currentYear} <span className="font-semibold text-foreground">APPLKANJI</span>. {t('footer.rights')}
              </p>
            </div>

            {/* Additional Links */}
            <div className={`flex items-center flex-wrap justify-center gap-4 md:gap-6 text-xs text-muted-foreground ${isRTL ? 'flex-row-reverse' : ''} order-2`}>
              <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">{t('footer.terms')}</a>
              <a href="#" className="hover:text-primary transition-colors whitespace-nowrap">{t('footer.cookies')}</a>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors shrink-0 order-1 md:order-3"
            aria-label="Back to top"
          >
              <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
