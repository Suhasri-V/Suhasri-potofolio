import { useLayoutEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundParticles from '../components/BackgroundParticles';
import { usePortfolio } from '../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { data } = usePortfolio();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background Zoom Effect
      gsap.to(bgRef.current, {
        scale: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1, // Smooth scrub
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with Zoom Effect */}
      <div ref={bgRef} className="absolute inset-0 z-0 bg-neutral-950 will-change-transform translate-z-0">
        <img
          src={data.personalInfo.heroBgUrl || 'https://drive.google.com/thumbnail?id=1_DrnraqPZIr7-9NOdK1jgMv10ura3MLt&sz=w1920'}
          alt="First Page Background"
          className="w-full h-full object-cover opacity-75 transition-opacity duration-700"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (!img.dataset.failedOnce) {
              img.dataset.failedOnce = 'true';
              img.src = 'https://lh3.googleusercontent.com/d/1_DrnraqPZIr7-9NOdK1jgMv10ura3MLt=w1920';
            } else if (!img.dataset.failedTwice) {
              img.dataset.failedTwice = 'true';
              img.src = 'https://docs.google.com/uc?export=download&id=1_DrnraqPZIr7-9NOdK1jgMv10ura3MLt';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950" />
        <BackgroundParticles />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Content */}
      <motion.div
        ref={contentRef}
        className="text-center z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mb-6 leading-none">
          <span className="font-georgia italic block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-indigo-200 tracking-wide mb-3 opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Hi, I'm
          </span>
          <span className="font-georgia font-bold block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 drop-shadow-[0_0_35px_rgba(34,211,238,0.7)] py-1">
            {data.personalInfo.name}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          {data.personalInfo.tagline}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
          >
            View Projects
          </motion.button>
          <motion.a 
            href={data.personalInfo.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-all"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

