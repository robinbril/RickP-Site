
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const events = [
  {
    status: 'AANKOMEND',
    date: 'T.B.A. 2026',
    event: 'Volgend Gevecht',
    location: 'Wordt nog aangekondigd',
    opponent: 'Nog niet bekend',
    linkLabel: 'TICKETS BINNENKORT',
    link: '#',
    isUpcoming: true
  },
  {
    status: 'RECENT',
    date: '14 FEB 2026',
    event: 'HERESH XL - CAGE EDITION',
    location: 'Sporthal Papendrecht',
    opponent: 'T.B.A.',
    linkLabel: 'BEKIJK PPV OP UNIFIGHT.ONE',
    link: 'https://unifight.one',
    isUpcoming: false
  }
];

export const Events: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  return (
    <section id="events" className="section bg-black relative">
      <div className="container relative z-10" ref={elementRef as any}>
        <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-white">FIGHT <span className="text-red-primary">EVENTS</span></h2>
          </div>

          <div className="flex flex-col gap-6">
            {events.map((ev, idx) => (
              <div 
                key={idx} 
                className={`group flex flex-col md:flex-row items-start md:items-center justify-between p-8 border hover:bg-black-elevated transition-colors duration-500
                  ${ev.isUpcoming ? 'border-red-primary/40 bg-black-elevated/50' : 'border-white/10 bg-transparent'}`}
                style={{ 
                  transitionDelay: `${idx * 0.15}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                <div className="flex-1 md:grid md:grid-cols-4 w-full gap-4 items-center">
                  <div className="mb-4 md:mb-0">
                    <span className={`text-xs uppercase tracking-widest font-bold ${ev.isUpcoming ? 'text-red-bright' : 'text-white-muted'}`}>
                      {ev.status}
                    </span>
                    <div className="text-white font-bold text-xl mt-1">{ev.date}</div>
                  </div>
                  
                  <div className="col-span-2 mb-4 md:mb-0">
                    <h3 className="font-display text-3xl md:text-4xl text-white mb-1 group-hover:text-red-primary transition-colors">{ev.event}</h3>
                    <p className="text-white-muted text-sm">{ev.location} &nbsp;|&nbsp; VS: {ev.opponent}</p>
                  </div>

                  <div className="text-left md:text-right mt-4 md:mt-0">
                    <a 
                      href={ev.link}
                      className="text-white hover:text-red-primary transition-colors text-sm uppercase tracking-wider font-bold inline-block"
                      target={ev.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      {ev.linkLabel} &rarr;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
