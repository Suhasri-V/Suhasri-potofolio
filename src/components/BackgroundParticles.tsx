import { motion } from 'motion/react';
import bgImage from '../assets/ai_working_bg.jpg';

export default function BackgroundParticles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.img
        src={bgImage}
        alt="AI Agent Background"
        className="w-full h-full object-cover opacity-30"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, ease: "easeInOut" }}
      />
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}
