import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePortfolio } from '../context/PortfolioContext';

gsap.registerPlugin(ScrollTrigger);

interface SecondPageBackgroundProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function SecondPageBackground({ containerRef }: SecondPageBackgroundProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const { data } = usePortfolio();

  useLayoutEffect(() => {
    if (!containerRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Continuous smooth parallax zoom animation for second page onwards
      gsap.fromTo(
        bgRef.current,
        { scale: 1, y: '0%' },
        {
          scale: 1.5,
          y: '10%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);

  const bgUrl =
    data.personalInfo.aboutBgUrl ||
    'https://drive.google.com/thumbnail?id=16uRnMrmVHfao0RGaeKXZEpIHPqkX5bUp&sz=w1920';

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        ref={bgRef}
        className="sticky top-0 w-full h-screen bg-neutral-950 will-change-transform translate-z-0"
      >
        <img
          src={bgUrl}
          alt="Page Background"
          className="w-full h-full object-cover opacity-60 transition-opacity duration-700"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            if (!img.dataset.failedOnce) {
              img.dataset.failedOnce = 'true';
              img.src = 'https://lh3.googleusercontent.com/d/16uRnMrmVHfao0RGaeKXZEpIHPqkX5bUp=w1920';
            } else if (!img.dataset.failedTwice) {
              img.dataset.failedTwice = 'true';
              img.src = 'https://docs.google.com/uc?export=download&id=16uRnMrmVHfao0RGaeKXZEpIHPqkX5bUp';
            }
          }}
        />
        {/* Ambient Dark Gradient Overlays for optimal content readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    </div>
  );
}
