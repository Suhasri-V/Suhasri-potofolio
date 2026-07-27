import { motion } from 'motion/react';
import { Briefcase, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import HackathonCard from '../components/HackathonCard';

export default function Experience() {
  const { data } = usePortfolio();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-neutral-400 mt-2 text-sm md:text-base">
            Professional internships, software testing, and sustainability initiatives.
          </p>
        </motion.div>

        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 md:p-8 bg-neutral-900/80 border border-white/10 rounded-3xl backdrop-blur-md shadow-2xl hover:border-blue-500/40 transition-all duration-300 relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Company Logo Badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-white/20 shadow-md shadow-black/40 overflow-hidden">
                  {exp.logoUrl ? (
                    <img
                      src={exp.logoUrl}
                      alt={`${exp.company} Logo`}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        // Try fallback URL if Google Drive link fails
                        if (exp.company.includes('Chennai Metro') && !img.dataset.retried) {
                          img.dataset.retried = 'true';
                          img.src = 'https://upload.wikimedia.org/wikipedia/en/8/87/Chennai_Metro_logo.svg';
                        } else if (exp.company.includes('Salesforce') && !img.dataset.retried) {
                          img.dataset.retried = 'true';
                          img.src = 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Salesforce.com_logo.svg';
                        } else {
                          img.style.display = 'none';
                          if (img.parentElement) {
                            const fallback = img.parentElement.querySelector('.fallback-icon');
                            if (fallback) fallback.classList.remove('hidden');
                          }
                        }
                      }}
                    />
                  ) : null}
                  <div className={`fallback-icon ${exp.logoUrl ? 'hidden' : ''} text-neutral-800`}>
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Experience Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-xs md:text-sm font-mono text-blue-300/90 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 w-fit">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-neutral-300 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    {exp.company}
                  </p>

                  <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  {exp.certificateUrl && (
                    <motion.a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/10 text-blue-300 rounded-xl text-sm font-medium border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400 hover:text-white transition-all duration-200"
                    >
                      <span>View Internship Certificate</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathon Win Card */}
        <HackathonCard />
      </div>
    </section>
  );
}


