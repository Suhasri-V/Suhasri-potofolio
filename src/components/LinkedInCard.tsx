import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function LinkedInCard() {
  const { data } = usePortfolio();

  const stats = [
    { label: 'Connections', value: data.linkedinStats.connections },
    { label: 'Posts', value: data.linkedinStats.posts },
    { label: 'Search Apps', value: data.linkedinStats.searchAppearances },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto my-12 p-8 bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl hover:border-blue-500/50 transition-colors"
    >
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1 flex flex-col items-center md:items-start gap-4">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center border-2 border-blue-500">
            <Linkedin className="w-10 h-10 text-white" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">{data.personalInfo.name}</h3>
            <p className="text-gray-400">LinkedIn Profile</p>
          </div>
          <motion.a
            href={data.personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#0A66C2] text-white rounded-full font-bold hover:bg-[#004182] transition-colors"
          >
            View Profile
          </motion.a>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-blue-500">{stat.value}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">Professional Skills</p>
        <div className="flex flex-wrap gap-2">
          {data.linkedinStats.skills.map(skill => (
            <span key={skill} className="px-3 py-1 bg-neutral-900 text-neutral-200 rounded-full text-xs border border-neutral-800">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

