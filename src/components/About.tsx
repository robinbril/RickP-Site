import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const About: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section id="about" className="section bg-black relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <div 
          ref={elementRef as any}
          className={`reveal ${isVisible ? 'is-visible' : ''} flex flex-col items-center`}
        >
          {/* Typographic Header Block - Centered */}
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="font-display text-5xl sm:text-7xl md:text-[100px] leading-[0.9] text-white tracking-tight uppercase flex flex-col items-center">
              <span>ECHT</span>
              <span>WERK.</span>
              <span className="text-red-primary mt-1">GEEN</span>
              <span className="text-red-primary">BULLSHIT.</span>
            </h2>
            <div className="w-16 h-1.5 bg-red-primary mt-8 md:mt-12" />
          </div>

          {/* Impactful Pruned Copy */}
          <div className="space-y-6 max-w-xl mx-auto">
            <p className="text-white text-xl md:text-2xl font-bold tracking-wide text-center">
              Ik ben Rick Peper.
            </p>
            <p className="text-white-muted text-base md:text-lg leading-relaxed text-center">
              Mensen denken dat talent genoeg is. Dat is onzin. In de ring telt maar één ding: hard werk. Winnen of verliezen is keihard, geen excuses. Ik train om de beste te zijn. Elke dag.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
