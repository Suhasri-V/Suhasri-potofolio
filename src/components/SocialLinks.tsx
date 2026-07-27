import { motion } from 'motion/react';
import { Linkedin, Code2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface SocialLinksProps {
  className?: string;
}

export default function SocialLinks({ className = '' }: SocialLinksProps) {
  const { data } = usePortfolio();

  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      {data.personalInfo.linkedinUrl && (
        <motion.a
          href={data.personalInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl font-bold hover:bg-[#004182] transition-colors shadow-lg shadow-blue-900/20"
        >
          <Linkedin className="w-5 h-5" />
          LinkedIn
        </motion.a>
      )}

      {data.personalInfo.hackerRankUrl && (
        <motion.a
          href={data.personalInfo.hackerRankUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#00EA64] text-black rounded-xl font-bold hover:bg-[#00c954] transition-colors shadow-lg shadow-emerald-900/20"
        >
          <Code2 className="w-5 h-5 text-black" />
          HackerRank
        </motion.a>
      )}

      {data.personalInfo.leetcodeUrl && (
        <motion.a
          href={data.personalInfo.leetcodeUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFA116] text-black rounded-xl font-bold hover:bg-[#e58e0a] transition-colors shadow-lg shadow-amber-900/20"
        >
          <Code2 className="w-5 h-5 text-black" />
          LeetCode
        </motion.a>
      )}
    </div>
  );
}

