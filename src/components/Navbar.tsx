import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import applkanjiLogo from '@/assets/applkanji-logo.png';

const navLinks = [
  { nameKey: 'nav.home', href: '#home', isRoute: false },
  { nameKey: 'nav.about', href: '#about', isRoute: false },
  { nameKey: 'nav.services', href: '/services', isRoute: true },
  { nameKey: 'nav.technologies', href: '/technologies', isRoute: true },
  { nameKey: 'nav.process', href: '#process', isRoute: false },
  { nameKey: 'nav.team', href: '/team', isRoute: true },
  { nameKey: 'nav.contact', href: '/contact', isRoute: true },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Check if we're on the home page
    const isHomePage = location.pathname === '/';
    
    if (!isHomePage) {
      // Navigate to home page first
      navigate('/');
      
      // Wait for navigation, then scroll to section
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500);
      }, 100);
    } else {
      // Already on home page, just scroll
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
    const element = document.querySelector(href);
    if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-strong py-2 md:py-3' : 'py-3 md:py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src={applkanjiLogo} 
              alt="ApplKanji Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <motion.a
                  key={link.nameKey}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {t(link.nameKey)}
                  <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`} />
                </motion.a>
              ) : (
              <motion.button
                key={link.nameKey}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {t(link.nameKey)}
                <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`} />
              </motion.button>
              )
            ))}
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm font-medium hover:border-primary/30 transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </motion.button>

            {/* CTA Button */}
            <Button
              onClick={() => {
                if (location.pathname !== '/contact') {
                  navigate('/contact');
                }
              }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box font-medium"
            >
              {t('nav.getStarted')}
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Language Toggle - Mobile */}
            <motion.button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg glass"
              aria-label="Switch language"
            >
              <Globe className="w-5 h-5" />
            </motion.button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] md:top-[72px] z-40 glass-strong lg:hidden max-h-[calc(100vh-60px)] md:max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <div className="container-custom py-4 md:py-6 px-4 sm:px-6 flex flex-col gap-3 md:gap-4">
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <motion.a
                    key={link.nameKey}
                    href={link.href}
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base md:text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2.5 px-2 rounded-lg hover:bg-primary/5 ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {t(link.nameKey)}
                  </motion.a>
                ) : (
                <motion.button
                  key={link.nameKey}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                    className={`text-base md:text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2.5 px-2 rounded-lg hover:bg-primary/5 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {t(link.nameKey)}
                </motion.button>
                )
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (location.pathname !== '/contact') {
                    navigate('/contact');
                  }
                }}
                className="mt-2 md:mt-4 bg-primary text-primary-foreground hover:bg-primary/90 w-full py-6 text-base md:text-lg font-semibold"
              >
                {t('nav.getStarted')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
