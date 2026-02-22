import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Instagram, Mail, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section id="contact" className="section bg-black relative pb-32 md:pb-24">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-red-primary opacity-5 blur-[150px] pointer-events-none" />
      
      <div className="container relative z-10" ref={elementRef as any}>
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left side: Contact info */}
            <div>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-6 leading-none">NEEM CONTACT<br/><span className="text-red-primary">OP.</span></h2>
              <p className="text-white-muted text-lg mb-12 max-w-md">
                Wil je trainen of heb je een zakelijke vraag? Stuur een bericht of bel direct. Geen tijdverspilling.
              </p>
              
              <div className="flex flex-col gap-8">
                <a href="https://wa.me/31636486220" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-red-primary transition-colors group w-fit">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-primary group-hover:bg-red-primary/10 transition-colors bg-black-elevated/50">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-white-muted tracking-widest uppercase mb-1 font-bold">WhatsApp of Bellen</div>
                    <div className="text-xl md:text-2xl font-display tracking-wide">+31 6 36 48 62 20</div>
                  </div>
                </a>

                <a href="https://instagram.com/rickpeper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white hover:text-red-primary transition-colors group w-fit">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-primary group-hover:bg-red-primary/10 transition-colors bg-black-elevated/50">
                    <Instagram size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-white-muted tracking-widest uppercase mb-1 font-bold">Volg op Instagram</div>
                    <div className="text-xl md:text-2xl font-display tracking-wide">@rickpeper</div>
                  </div>
                </a>

                <a href="mailto:contact@rickpeper.nl" className="flex items-center gap-4 text-white hover:text-red-primary transition-colors group w-fit">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-primary group-hover:bg-red-primary/10 transition-colors bg-black-elevated/50">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs text-white-muted tracking-widest uppercase mb-1 font-bold">Email Voor Boekingen & Media</div>
                    <div className="text-xl md:text-2xl font-display tracking-wide">contact@rickpeper.nl</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: Image (rick-fight-1.jpg repurposed from About since About used 4) */}
            <div className="hidden lg:block w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/5 relative group">
              <img src="/images/rick-fight-6.jpg" alt="Rick Peper" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

          </div>
        </div>
      </div>

      {/* LUXURY Mobile Sticky Bottom CTA (Matches Screenshot EXACTLY) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1A1A1D] border-t border-white/5 pt-4 pb-8 px-4 z-50">
        <a 
          href="https://wa.me/31636486220" 
          className="bg-[#C92A36] active:bg-[#a31a23] text-white w-full flex items-center justify-center gap-2 py-4 rounded-xl shadow-2xl transition-all"
        >
          <Phone size={16} className="text-white/80" />
          <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-sm">RESERVEER EEN PT SESSIE</span>
        </a>
      </div>
    </section>
  );
};
