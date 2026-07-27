import { motion } from 'motion/react';
import { FileText, Download } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import '../styles/ResumeCard.css';

export default function ResumeCard() {
  const { data } = usePortfolio();

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = data.personalInfo.resumeDownloadUrl;
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="max-w-md mx-auto my-12 p-8 bg-neutral-950 border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col items-center text-center gap-6"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50"
      >
        <FileText className="w-10 h-10 text-purple-400" />
      </motion.div>
      
      <div>
        <h3 className="text-2xl font-bold text-white">{data.personalInfo.name} – Resume</h3>
        <p className="text-neutral-400">PDF • Updated 2026</p>
      </div>

      <div className="flex gap-4">
        <motion.a
          href={data.personalInfo.resumeViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white rounded-full font-bold transition-all hover:bg-neutral-700"
        >
          <FileText className="w-5 h-5" />
          Open PDF
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadResume}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold transition-all"
        >
          <Download className="w-5 h-5" />
          Download PDF
        </motion.button>
      </div>
    </motion.div>
  );
}

