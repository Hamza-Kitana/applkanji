import { motion } from 'framer-motion';
import applkanjiLogo from '@/assets/applkanji-logo.png';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* خلفية بسيطة لتقليل الحمل */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-primary/10 animate-spin-slow" />

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${20 + (i % 3) * 30}%`,
              top: `${25 + Math.floor(i / 3) * 35}%`,
            }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 blur-2xl opacity-60">
            <div className="w-full h-full bg-gradient-to-r from-primary/50 to-accent/50 rounded-full" />
          </div>

          <img
            src={applkanjiLogo}
            alt="ApplKanji"
            className="relative w-64 md:w-80 h-auto animate-float"
          />
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          {/* Animated loading bar */}
          <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ width: '50%' }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="text-sm text-muted-foreground font-medium tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Loading
          </motion.p>
        </motion.div>

        <div className="absolute -bottom-20 flex gap-2 opacity-80">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
