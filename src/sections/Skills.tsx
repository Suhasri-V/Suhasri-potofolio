import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Terminal, Database, Layout, ShieldCheck, Sparkles, Layers, Info, X, CheckCircle2, FolderGit2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { Skill } from '../types';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Programming': <Code2 className="w-5 h-5 text-blue-400" />,
  'Frontend': <Layout className="w-5 h-5 text-blue-400" />,
  'Backend': <Database className="w-5 h-5 text-indigo-400" />,
  'Testing': <ShieldCheck className="w-5 h-5 text-purple-400" />,
  'Soft Skills': <Sparkles className="w-5 h-5 text-pink-400" />,
  'Interests': <Layers className="w-5 h-5 text-emerald-400" />,
};

export default function Skills() {
  const { data } = usePortfolio();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Dynamically extract unique categories from current skills
  const categories = Array.from(new Set(data.skills.map((s) => s.category)));

  // Filter categories to display based on activeCategory selection
  const displayedCategories =
    activeCategory === 'All'
      ? categories
      : categories.filter((cat) => cat === activeCategory);

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Technical & Programming <span className="text-blue-400">Skills</span>
          </motion.h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base mb-2">
            Core programming languages, development stacks, testing methodologies, and analytical problem-solving competencies.
          </p>
          <p className="text-xs text-cyan-400/80 font-mono tracking-wider uppercase flex items-center justify-center gap-1.5 mt-2">
            <Info className="w-3.5 h-3.5" />
            Click any skill to view proficiency & project applications
          </p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 md:gap-3 flex-wrap mb-12"
        >
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeCategory === 'All'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                : 'bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 border border-white/10 hover:border-white/20'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>All Skills</span>
            <span
              className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                activeCategory === 'All'
                  ? 'bg-white/20 text-white'
                  : 'bg-neutral-800 text-neutral-400'
              }`}
            >
              {data.skills.length}
            </span>
          </button>

          {categories.map((cat) => {
            const count = data.skills.filter((s) => s.category === cat).length;
            const isCatActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isCatActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400'
                    : 'bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800 border border-white/10 hover:border-white/20'
                }`}
              >
                {CATEGORY_ICONS[cat] || <Terminal className="w-4 h-4" />}
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                    isCatActive
                      ? 'bg-white/20 text-white'
                      : 'bg-neutral-800 text-neutral-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Display Skills by Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {displayedCategories.map((category) => {
              const categorySkills = data.skills.filter((s) => s.category === category);
              if (categorySkills.length === 0) return null;

              return (
                <div key={category} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 shadow-md">
                      {CATEGORY_ICONS[category] || <Terminal className="w-5 h-5 text-blue-400" />}
                    </div>
                    <h3 className="text-2xl font-bold tracking-wide text-neutral-100">
                      {category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {categorySkills.map((skill) => {
                      const isSelected = selectedSkill?.name === skill.name;

                      return (
                        <motion.button
                          key={skill.name}
                          onClick={() => setSelectedSkill(skill)}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{
                            scale: 1.04,
                            y: -2,
                          }}
                          whileTap={{ scale: 0.96 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                          className={`p-4 rounded-xl border text-center backdrop-blur-md transition-all duration-300 relative group overflow-hidden flex flex-col items-center justify-center min-h-[75px] cursor-pointer ${
                            isSelected
                              ? 'border-blue-400 bg-neutral-800/90 shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white'
                              : 'border-white/10 bg-neutral-900/80 hover:border-blue-500/50 hover:bg-neutral-800/80 text-neutral-200'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 justify-center">
                            <span className="text-base font-medium tracking-wide">
                              {skill.name}
                            </span>
                            <Info className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity duration-200" />
                          </div>

                          {skill.proficiency && (
                            <span className="text-[10px] text-blue-300/80 font-mono tracking-wider mt-1 opacity-80 group-hover:opacity-100">
                              {skill.proficiency}
                            </span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            {/* Backdrop click to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative z-10 w-full max-w-lg p-6 md:p-8 rounded-2xl bg-neutral-900/95 border border-blue-500/40 shadow-[0_0_35px_rgba(59,130,246,0.25)] text-white backdrop-blur-xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-3 mb-4 pr-8">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  {CATEGORY_ICONS[selectedSkill.category] || <Terminal className="w-6 h-6" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide text-white">
                    {selectedSkill.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
                      {selectedSkill.category}
                    </span>
                    {selectedSkill.proficiency && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                        {selectedSkill.proficiency}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 bg-neutral-950/60 p-4 rounded-xl border border-white/5">
                <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  Proficiency & Capabilities
                </h4>
                <p className="text-sm md:text-base text-neutral-200 leading-relaxed font-light">
                  {selectedSkill.description ||
                    `Demonstrated competency in ${selectedSkill.name} within engineering and project environments.`}
                </p>
              </div>

              {/* Specific Project Usages */}
              {selectedSkill.projectsUsed && selectedSkill.projectsUsed.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                    Practical Project & Learning Usage
                  </h4>
                  <div className="space-y-2">
                    {selectedSkill.projectsUsed.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-800/60 border border-white/5 text-sm text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors cursor-pointer shadow-lg shadow-blue-600/20"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


