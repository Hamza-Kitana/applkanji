import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scale' | 'parallax';
  delay?: number;
  id?: string;
}

export function ScrollSection({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  id
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
    },
    slideRight: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    parallax: {
      initial: { opacity: 0, y: 100 },
      animate: { opacity: 1, y: 0 },
    },
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].initial}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxContainer({ 
  children, 
  className = '', 
  speed = 0.5 
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className = '',
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
}

export function FloatingElement({ 
  children, 
  className = '', 
  duration = 6,
  distance = 20 
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
