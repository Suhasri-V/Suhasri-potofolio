import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Projects() {
  const { data } = usePortfolio();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <motion.div
              key={project.id}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors flex flex-col justify-between"
              whileHover={{ y: -6 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 pt-4 border-t border-white/5">
                {project.githubUrl && project.githubUrl !== '#' && (
                  <motion.a whileTap={{ scale: 0.95 }} href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors">
                    GitHub →
                  </motion.a>
                )}
                {project.demoUrl && project.demoUrl !== '#' && (
                  <motion.a whileTap={{ scale: 0.95 }} href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                    Live Demo ↗
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

