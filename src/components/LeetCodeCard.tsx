import { motion } from 'motion/react';
import { Cpu, Award, ExternalLink, Code2, Zap } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function LeetCodeCard() {
  const { data } = usePortfolio();
  const leetcodeUrl = data.personalInfo.leetcodeUrl || 'https://leetcode.com/u/Suhasri/';

  const topics = [
    { label: 'Data Structures', icon: Cpu },
    { label: 'Algorithms', icon: Zap },
    { label: 'Arrays & Strings', icon: Code2 },
    { label: 'Java & Python', icon: Code2 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto my-12 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#FFA116]/10 flex items-center justify-center border-2 border-[#FFA116]/40 text-[#FFA116]">
              <Code2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Suhasri</h3>
              <p className="text-amber-400 text-sm font-medium">LeetCode Problem Solver</p>
            </div>
          </div>

          <motion.a
            href={leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-[#FFA116] text-black font-bold rounded-full text-xs hover:bg-[#e58e0a] transition-colors flex items-center gap-1.5 shadow-md shadow-amber-950/40"
          >
            <span>View Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        <div className="text-center mb-8 p-4 bg-neutral-900/50 rounded-2xl border border-neutral-800/80">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-xl mb-1">
            <Award className="w-5 h-5 text-amber-400" />
            <span>LeetCode Profile</span>
          </div>
          <p className="text-xs text-neutral-400 tracking-wider">Data Structures & Algorithmic Practice</p>
        </div>

        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Key Focus Areas</p>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span
                key={t.label}
                className="px-3 py-1.5 bg-neutral-900 text-amber-300 rounded-full text-xs border border-amber-500/20 flex items-center gap-1.5"
              >
                <t.icon className="w-3.5 h-3.5 text-amber-400" />
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
