import { motion } from 'motion/react';

export default function SectionDivider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto my-6 px-6 py-2 flex items-center justify-center overflow-hidden">
      {/* Expanding horizontal line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent origin-center"
      />

      {/* Subtle glowing center accent */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="absolute w-2 h-2 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#22d3ee] border border-cyan-300/50"
      />
    </div>
  );
}
