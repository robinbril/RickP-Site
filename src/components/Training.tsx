import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TRAINING_PROGRAMS = [
  {
    id: '01',
    title: 'KICKBOKSEN',
    description: 'De basis. Harde combinaties, strakke verdediging en traptechnieken. We trainen op Dutch Style. Geen franjes, we werken hard aan je techniek en conditie.',
    videoSrc: '/kickboxing.mp4#t=2.5'
  },
  {
    id: '02',
    title: 'MUAY THAI',
    description: 'De klassieke stijl. Clinchwerk, ellebogen en knieën. Het rauwe Thaise boksen. Fysiek zwaar en effectief. Verwacht blauwe plekken.',
    videoSrc: '/Muay_Thai_Spinning_Kick_Video.mp4'
  },
  {
    id: '03',
    title: 'BOKSEN',
    description: 'Puur gericht op stoten en voetenwerk. Het fundament van elke vechtsport. Zonder goede basis heb je nergens recht op in de ring.',
    videoSrc: '/Video_van_Gespierde_Shadowbokser_Klaar.mp4'
  }
];

export const Training: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section id="training" className="section bg-black-rich border-y border-white/5 relative z-10">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-primary/20 to-transparent" />

      <div className="container" ref={elementRef as any}>
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20 md:mb-32">
            <div>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-none">
                1-OP-1<br/><span className="text-red-primary">TRAINING</span>
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-white-muted text-lg md:text-xl leading-relaxed font-bold mb-6">
                Ik train je zoals ik zelf train. We doen niet aan onzin-fitness of uurtjes volmaken. 
              </p>
              <p className="text-white-muted text-base">
                Als je 1-op-1 komt trainen, verwacht ik inzet. We werken aan techniek, je conditie en je incasseringsvermogen. Je kan kiezen uit drie stijlen, we peilen je niveau en we gaan aan de slag.
              </p>
              
              <div className="mt-8 flex gap-4 text-sm font-bold tracking-widest uppercase items-center text-white">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">Aan Huis</span>
                <span className="text-red-primary">+</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full">Team Atlas Leiden</span>
              </div>
            </div>
          </div>

          {/* Training Cards Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {TRAINING_PROGRAMS.map((program) => (
              <div 
                key={program.id}
                className="group relative h-[450px] md:h-[600px] bg-black-elevated overflow-hidden border border-white/5 hover:border-red-primary/30 transition-colors"
              >
                {/* Background Video: visible on mobile at low opacity, hover-reveal on desktop */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-0 md:group-hover:opacity-60 transition-opacity duration-700 filter grayscale md:group-hover:grayscale-0 scale-105 md:group-hover:scale-100 ease-out"
                >
                  <source src={program.videoSrc} type="video/mp4" />
                </video>

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-[5] pointer-events-none" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-white-muted text-xs tracking-[0.2em] font-bold uppercase">Programma {program.id}</span>
                  </div>
                  
                  <div className="transform translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end">
                    <h3 className="font-display text-4xl lg:text-5xl text-white mb-4 group-hover:text-red-primary transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{program.title}</h3>
                    <p className="hidden md:block text-white-muted text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Giant Number */}
                <div className="absolute -bottom-10 -right-6 font-display text-[150px] md:text-[200px] text-white/[0.03] leading-none pointer-events-none group-hover:text-red-primary/[0.05] transition-colors duration-700">
                  {program.id}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
