import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Video (> 768px) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hidden md:block w-full h-full object-cover"
        >
          <source src="/hero-desktop.mp4#t=8" type="video/mp4" />
        </video>
        
        {/* Mobile Video (< 768px) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block md:hidden w-full h-full object-cover"
          poster="/images/hero-poster.png"
          ref={(el) => { if (el) el.playbackRate = 1.1; }}
        >
          <source src="/Video_Generatie_En_Variaties.mp4" type="video/mp4" />
        </video>
        
        {/* Premium Dark Gradient Overlay matching REVIVE_WOMAN */}
        <div 
          className="absolute inset-0 transition-opacity duration-[2s] ease-in-out mix-blend-multiply"
          style={{ 
            background: 'linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(185,28,28,0.4) 50%, rgba(17,17,19,1) 100%)',
            opacity: mounted ? 1 : 0 
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Main Central Content (Match Screenshot Exactly) */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-6 mix-blend-lighten pt-16 md:pt-0">
        
        {/* Huge Stacked Logo Text */}
        <h1 className="flex flex-col items-center font-display uppercase leading-[0.85] text-white tracking-widest drop-shadow-2xl">
          <span 
            className="text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] transition-all duration-1000 ease-out"
            style={{ 
              opacity: mounted ? 1 : 0, 
              transform: mounted ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transitionDelay: '200ms'
            }}
          >
            RICK
          </span>
          <span 
            className="text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] transition-all duration-1000 ease-out"
            style={{ 
              opacity: mounted ? 1 : 0, 
              transform: mounted ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transitionDelay: '400ms'
            }}
          >
            PEPER
          </span>
        </h1>

        {/* Subtitle / Description string */}
        <p 
          className="mt-8 mb-12 text-white/70 font-display tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base max-w-sm md:max-w-xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 transition-all duration-1000"
          style={{ 
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          <span>Professional Kickboxer</span>
          <span className="hidden md:inline text-red-primary font-bold">·</span>
          <span className="md:hidden w-6 h-[1px] bg-red-primary/50 my-1"></span>
          <span>Team Atlas Leiden</span>
        </p>

        {/* Primary CTA (Red) */}
        <div 
          className="transition-all duration-1000"
          style={{ 
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '800ms'
          }}
        >
          <a href="#training" className="btn btn-primary rounded-md bg-red-primary hover:bg-red-bright text-white uppercase font-bold tracking-widest text-sm md:text-base px-8 py-4 shadow-xl shadow-red-primary/20">
            TRAIN MET RICK
          </a>
        </div>
        
      </div>

    </section>
  );
};
