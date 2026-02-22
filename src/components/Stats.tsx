import React from 'react';
import CountUp from 'react-countup';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Trophy, ArrowRight } from 'lucide-react';

export const Stats: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section id="stats" className="section bg-black border-y border-white/5 relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none flex justify-center">
        <span className="font-display text-[30vw] whitespace-nowrap leading-none tracking-tighter">STATISTIEKEN</span>
      </div>

      <div className="container relative z-10" ref={elementRef as any}>
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative w-full aspect-[4/3] md:aspect-video lg:aspect-square overflow-hidden rounded-md group">
              <img 
                src="/images/rick-fight-5.jpg" 
                alt="Rick Peper in de kooi" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-primary mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-1000" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                <div className="flex items-center gap-4 text-white">
                  <Trophy size={24} className="text-red-primary" />
                  <span className="font-display tracking-widest text-xl uppercase">PRO KICKBOKSER</span>
                </div>
              </div>
            </div>

            {/* Stats Side */}
            <div className="flex flex-col justify-center">
              <div className="mb-16">
                <div>
                  <h3 className="text-white-muted text-xs md:text-sm tracking-[0.2em] font-bold uppercase mb-4 flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-red-primary" /> GEWICHTSKLASSE
                  </h3>
                  <div className="font-display text-6xl md:text-8xl lg:text-[120px] text-white leading-none tracking-tight">
                    {isVisible ? <CountUp end={70} duration={2.5} /> : '0'}
                    <span className="text-xl md:text-3xl lg:text-5xl text-white-muted font-body tracking-wider ml-1">KG</span>
                  </div>
                  <div className="text-white-muted font-bold tracking-[0.2em] mt-2 text-sm md:text-base uppercase">
                    Lichtgewicht Divisie
                  </div>
                </div>
              </div>

              {/* Event Highlight */}
              <div className="bg-black-elevated border border-white/5 p-8 md:p-10 relative overflow-hidden group hover:border-red-primary/50 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-glow rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <div className="text-red-primary text-xs tracking-widest font-bold uppercase mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-primary animate-pulse" /> BEVESTIGD EVENEMENT
                    </div>
                    <h4 className="font-display text-4xl md:text-5xl text-white uppercase leading-none mb-2">HERESH XL</h4>
                    <p className="text-white-muted font-bold tracking-widest uppercase text-sm">Main Event</p>
                    
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-3 text-white-muted text-sm tracking-wide">
                        <span className="w-4 h-[1px] bg-white/20" /> 14 FEB 2026
                      </div>
                      <div className="flex items-center gap-3 text-white-muted text-sm tracking-wide">
                        <span className="w-4 h-[1px] bg-white/20" /> Sporthal Papendrecht
                      </div>
                    </div>
                  </div>
                  
                  <a href="https://unifight.one" target="_blank" rel="noopener noreferrer" className="btn btn-primary group-hover:bg-red-bright transition-colors text-xs whitespace-nowrap">
                    BEKIJK OP UNIFIGHT.ONE <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
