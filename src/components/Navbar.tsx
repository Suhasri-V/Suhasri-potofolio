import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { data } = usePortfolio();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
          {data.personalInfo.name}
        </a>
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium hover:text-blue-500 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

