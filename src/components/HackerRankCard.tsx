import { motion } from 'motion/react';
import { Terminal, Award, ExternalLink, Code2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function HackerRankCard() {
  const { data } = usePortfolio();
  const hackerRankUrl = data.personalInfo.hackerRankUrl || 'https://www.hackerrank.com/profile/Suhasri271426';

  const badges = [
    { label: 'Problem Solving', icon: Terminal },
    { label: 'Java', icon: Code2 },
    { label: 'Python', icon: Code2 },
    { label: 'C Language', icon: Code2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto my-12 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#00EA64]/10 flex items-center justify-center border-2 border-[#00EA64]/40 text-[#00EA64]">
              <Code2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Suhasri271426</h3>
              <p className="text-emerald-400 text-sm font-medium">HackerRank Programmer</p>
            </div>
          </div>

          <motion.a
            href={hackerRankUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#00EA64] text-black font-bold rounded-full text-xs hover:bg-[#00c954] transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
          >
            <span>View Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        <div className="text-center mb-8 p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800/80">
          <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-xl mb-1">
            <Award className="w-5 h-5 text-emerald-400" />
            <span>Competitive Coding</span>
          </div>
          <p className="text-xs text-neutral-400 tracking-wider">Algorithmic Problem Solving & Data Structures</p>
        </div>

        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Core Domains & Practice</p>
          <div className="flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b.label}
                className="px-3 py-1.5 bg-neutral-900 text-emerald-300 rounded-full text-xs border border-emerald-500/20 flex items-center gap-1.5"
              >
                <b.icon className="w-3.5 h-3.5 text-emerald-400" />
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
