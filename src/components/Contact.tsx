import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Instagram, Mail } from 'lucide-react';

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
                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px] fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
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
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white/80"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          <span className="text-sm font-bold tracking-widest uppercase text-white drop-shadow-sm">RESERVEER EEN PT SESSIE</span>
        </a>
      </div>
    </section>
  );
};
