import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';
import heroBg4 from '@/assets/hero-bg-4.jpg';
import heroBg5 from '@/assets/hero-bg-5.jpg';

const images = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];

// Different animation variants for unique transitions
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.1,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 50, damping: 30 },
      opacity: { duration: 1.2 },
      scale: { duration: 1.5 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: 'spring', stiffness: 50, damping: 30 },
      opacity: { duration: 0.8 },
    },
  }),
};

const zoomVariants = {
  enter: {
    scale: 1.3,
    opacity: 0,
  },
  center: {
    scale: 1,
    opacity: 1,
    transition: {
      scale: { duration: 1.5, ease: 'easeOut' },
      opacity: { duration: 1 },
    },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      scale: { duration: 0.8 },
      opacity: { duration: 0.6 },
    },
  },
};

const fadeRotateVariants = {
  enter: {
    opacity: 0,
    rotate: -3,
    scale: 1.1,
  },
  center: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      opacity: { duration: 1.2 },
      rotate: { duration: 1.5, ease: 'easeOut' },
      scale: { duration: 1.5 },
    },
  },
  exit: {
    opacity: 0,
    rotate: 3,
    scale: 1.05,
    transition: {
      duration: 0.8,
    },
  },
};

const morphVariants = {
  enter: {
    clipPath: 'circle(0% at 50% 50%)',
    opacity: 0,
  },
  center: {
    clipPath: 'circle(150% at 50% 50%)',
    opacity: 1,
    transition: {
      clipPath: { duration: 1.5, ease: 'easeOut' },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    clipPath: 'circle(0% at 50% 50%)',
    opacity: 0,
    transition: {
      clipPath: { duration: 1 },
      opacity: { duration: 0.8 },
    },
  },
};

const wipeVariants = {
  enter: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
  },
  center: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      clipPath: { duration: 1.2, ease: 'easeInOut' },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    clipPath: 'inset(0 0 0 100%)',
    opacity: 0,
    transition: {
      clipPath: { duration: 1 },
      opacity: { duration: 0.5 },
    },
  },
};

const variantSets = [slideVariants, zoomVariants, fadeRotateVariants, morphVariants, wipeVariants];

export function HeroBackground() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(([prev]) => {
        const next = (prev + 1) % images.length;
        return [next, 1];
      });
      setVariantIndex((prev) => (prev + 1) % variantSets.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentVariants = variantSets[variantIndex];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Animated background images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={currentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <motion.img
            src={images[currentIndex]}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 6,
              ease: 'linear',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90" />
      
      {/* Additional radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_50%,hsl(var(--background)/0.8)_100%)]" />

      {/* Animated overlay effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle animated scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(var(--primary)/0.03) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating particles overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>

      {/* Progress indicator dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-6'
                : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
