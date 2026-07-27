import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<{ id: number }[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    const id = Date.now();
    setRipples((prev) => [...prev, { id }]);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    setTimeout(() => {
      setIsClicked(false);
    }, 600);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="back-to-top-btn"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.85 }}
          className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-neutral-900/90 text-cyan-300 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] hover:border-cyan-400 hover:text-white backdrop-blur-md transition-all duration-300 group cursor-pointer overflow-hidden"
        >
          {/* Click Ripple Rings */}
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full border-2 border-cyan-400/80 bg-cyan-400/20 pointer-events-none"
            />
          ))}

          {/* Animated Arrow Icon */}
          <motion.div
            animate={
              isClicked
                ? { y: [-2, -28, 20, 0], opacity: [1, 0, 0, 1] }
                : { y: 0, opacity: 1 }
            }
            transition={{
              duration: 0.55,
              times: [0, 0.45, 0.6, 1],
              ease: 'easeInOut',
            }}
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
