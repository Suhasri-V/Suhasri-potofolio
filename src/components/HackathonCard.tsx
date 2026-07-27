import { motion } from 'motion/react';
import { Trophy, Award, Droplet, Sparkles, ExternalLink } from 'lucide-react';

export default function HackathonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 p-6 md:p-8 bg-neutral-900/80 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl hover:border-blue-500/40 transition-all duration-300 relative group overflow-hidden max-w-4xl mx-auto"
    >
      {/* Ambient background glow effects */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-6 relative z-10">
        {/* Trophy Glowing Container Icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-500/20 via-blue-500/20 to-purple-500/20 p-0.5 border border-amber-400/40 shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center justify-center shrink-0">
          <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center">
            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          </div>
        </div>

        {/* Content Details */}
        <div className="flex-1">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                  🏆 Hackathon Win
                </h3>
              </div>
              <p className="text-lg font-semibold text-neutral-300 flex items-center gap-2">
                <span>QthinkX Ideathon</span>
              </p>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              {/* Powered by Hackathon Badge */}
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Powered by Hackathon</span>
              </span>

              {/* Glowing 2nd Place Laurel Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/40 text-amber-300 font-bold text-xs sm:text-sm shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Award className="w-4 h-4 text-amber-400" />
                <span>🥈 2nd Place</span>
              </div>
            </div>
          </div>

          {/* Winning Project Indicator & Live Demo Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 my-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 rounded-xl text-sm font-semibold">
              <Droplet className="w-4 h-4 text-cyan-400 fill-cyan-400/30 animate-pulse" />
              <span>Winning Project: <strong className="text-white">🌊 AquaGuard</strong></span>
            </div>

            <motion.a
              href="https://aquagurad23.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-cyan-900/40 border border-cyan-400/30 transition-all duration-200"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </motion.a>
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light mt-2">
            Smart water quality monitoring system built to detect contamination and deliver real-time alerts. Impressed judges at QthinkX Ideathon and secured 2nd place among top college teams.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
