import { motion } from 'framer-motion';
import { User, Camera } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TeamMemberCardProps {
  name: string;
  roleKey: string;
  image?: string;
  index: number;
}

export function TeamMemberCard({ name, roleKey, image, index }: TeamMemberCardProps) {
  const { t, isRTL } = useLanguage();
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6 text-center group cursor-default relative overflow-hidden"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Profile image placeholder */}
        <div className="relative mx-auto mb-5 w-28 h-28">
          {/* Outer ring animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            style={{ padding: '3px' }}
          >
            <div className="w-full h-full rounded-full bg-background" />
          </motion.div>
          
          {/* Inner container */}
          <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
            {image ? (
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                <User className="w-10 h-10 text-muted-foreground/60 mb-1" />
                <div className="flex items-center gap-1 text-xs text-muted-foreground/50">
                  <Camera className="w-3 h-3" />
                  <span>Photo</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Initials overlay for placeholder */}
          {!image && (
            <div className="absolute inset-1 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/80 to-accent/80">
              <span className="font-display text-2xl font-bold text-primary-foreground">
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Name */}
        <h4 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
          {name}
        </h4>
        
        {/* Role */}
        <p className="text-sm text-muted-foreground">
          {t(roleKey)}
        </p>

        {/* Social links placeholder */}
        <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
          {['linkedin', 'twitter', 'github'].map((social) => (
            <div
              key={social}
              className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary/60 hover:bg-primary/20 hover:text-primary transition-colors"
            >
              <div className="w-4 h-4 rounded bg-current/20" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Compact version for sidebar/list layout
export function TeamMemberCompact({ name, roleKey, image, index }: TeamMemberCardProps) {
  const { t, isRTL } = useLanguage();
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ x: isRTL ? -8 : 8 }}
      className="glass rounded-xl p-4 flex items-center gap-4 group cursor-default"
    >
      {/* Profile image */}
      <div className="relative w-14 h-14 shrink-0">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
          style={{ padding: '2px' }}
        >
          <div className="w-full h-full rounded-full bg-background" />
        </motion.div>
        
        <div className="absolute inset-0.5 rounded-full overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
              <span className="font-display font-bold text-primary text-sm">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-semibold truncate group-hover:text-primary transition-colors">
          {name}
        </h4>
        <p className="text-sm text-muted-foreground truncate">{t(roleKey)}</p>
      </div>

      {/* Upload indicator for placeholder */}
      {!image && (
        <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
    </motion.div>
  );
}
