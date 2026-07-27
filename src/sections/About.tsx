import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';

export default function About() {
  const { data } = usePortfolio();

  return (
    <section
      id="about"
      className="py-24 px-6 relative z-10 min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-white tracking-tight"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">Me</span>
        </motion.h2>

        <motion.div 
          className="p-8 md:p-10 bg-neutral-900/80 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl hover:border-blue-500/30 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {data.personalInfo.bio1 && (
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed font-light">
              {data.personalInfo.bio1}
            </p>
          )}
          {data.personalInfo.bio2 && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              {data.personalInfo.bio2}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}


