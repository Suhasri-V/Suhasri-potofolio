import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, ReactNode } from 'react';

export default function RevealSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.3 1"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
    >
      {children}
    </motion.div>
  );
}
