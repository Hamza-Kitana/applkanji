import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Background3D } from '@/components/Background3D';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ScrollSection } from '@/components/ScrollAnimations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import contactImage from '@/assets/contact-collaboration.jpg';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.desc'),
    });
    
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
              <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2`} />
            </div>

            <div className="container-custom">
              {/* Section header with image */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <ScrollSection animation="fadeUp" className={isRTL ? 'lg:order-2' : ''}>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    {t('contact.title1')} <span className="gradient-text">{t('contact.title2')}</span>
                  </h1>
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
                  </motion.div>
                </ScrollSection>
              </div>

              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact form */}
                <ScrollSection animation={isRTL ? 'slideLeft' : 'slideRight'}>
                  <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            {t('contact.form.name')}
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.form.namePlaceholder')}
                            required
                            className="bg-secondary/50 border-border focus:border-primary"
                            dir={isRTL ? 'rtl' : 'ltr'}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            {t('contact.form.email')}
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.form.emailPlaceholder')}
                            required
                            className="bg-secondary/50 border-border focus:border-primary"
                            dir="ltr"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          {t('contact.form.company')}
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t('contact.form.companyPlaceholder')}
                          className="bg-secondary/50 border-border focus:border-primary"
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          {t('contact.form.message')}
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t('contact.form.messagePlaceholder')}
                          rows={5}
                          required
                          className="bg-secondary/50 border-border focus:border-primary resize-none"
                          dir={isRTL ? 'rtl' : 'ltr'}
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-box py-6 text-lg"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              ⏳
                            </motion.span>
                            {t('contact.form.sending')}
                          </span>
                        ) : (
                          <span className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            {t('contact.form.submit')} <Send className="w-5 h-5" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </ScrollSection>

                {/* Contact info */}
                <ScrollSection animation={isRTL ? 'slideRight' : 'slideLeft'}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-display text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
                      <div className="space-y-4">
                        <motion.a
                          href="mailto:hello@applkanji.com"
                          whileHover={{ x: isRTL ? -4 : 4 }}
                          className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Mail className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                            <p className="font-medium text-foreground">hello@applkanji.com</p>
                          </div>
                        </motion.a>
                        
                        <motion.a
                          href="tel:+1234567890"
                          whileHover={{ x: isRTL ? -4 : 4 }}
                          className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Phone className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                            <p className="font-medium text-foreground" dir="ltr">+1 (234) 567-890</p>
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

                    {/* Social links */}
                    <div>
                      <h4 className="font-display text-lg font-semibold mb-4">{t('contact.follow')}</h4>
                      <div className="flex gap-4">
                        {[
                          { icon: Linkedin, href: '#', label: 'LinkedIn' },
                          { icon: Twitter, href: '#', label: 'Twitter' },
                          { icon: Github, href: '#', label: 'GitHub' },
                        ].map((social) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            whileHover={{ y: -4 }}
                            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                            aria-label={social.label}
                          >
                            <social.icon className="w-5 h-5" />
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollSection>
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

export default Contact;
