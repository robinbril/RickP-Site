import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Initial black screen with heartbeat (0-400ms)
    const t1 = setTimeout(() => setStage(1), 400);
    
    // Stage 2: Aggressive red slash (spinning kick vibe) (400-1200ms)
    const t2 = setTimeout(() => setStage(2), 1200);

    // Stage 3: Split screen reveal & shatter (1200-2000ms)
    const t3 = setTimeout(() => setStage(3), 2000);

    // Stage 4: Remove from DOM
    const t4 = setTimeout(() => setLoading(false), 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden transition-opacity duration-300 ${stage === 3 ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Absolute Black Background that splits */}
      <div className={`absolute inset-0 bg-black-rich z-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
        stage >= 3 ? 'scale-y-0 origin-bottom' : 'scale-y-100 origin-center'
      }`} />
      
      {/* Background Pulse / Impact Glow */}
      <div className={`absolute inset-0 bg-red-bright/40 z-[1] transition-opacity duration-[400ms] mix-blend-color-dodge blur-[80px] ${
        stage === 2 ? 'opacity-100 scale-[1.5]' : 'opacity-0 scale-50'
      }`} />

      {/* RICK PEPER Text */}
      <div className={`relative z-10 flex flex-col items-center justify-center transition-all duration-[400ms] ${
        stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      } ${stage >= 2 ? 'animate-[shake_0.1s_ease-in-out_infinite] scale-[1.05] drop-shadow-[0_0_30px_rgba(185,28,28,0.8)]' : ''}`}>
        <span className="font-display text-[72px] md:text-[127px] tracking-[0.1em] text-white leading-[0.85]">RICK</span>
        <span className="font-display text-[72px] md:text-[127px] tracking-[0.1em] text-white leading-[0.85]">PEPER</span>
      </div>

      {/* The Aggressive Red Slash (Spinning Kick representation) */}
      <div className={`absolute z-20 w-[200vw] h-[12px] md:h-[20px] bg-red-primary shadow-[0_0_80px_#B91C1C,0_0_120px_#FFFFFF] transition-transform duration-[200ms] ease-out origin-center mix-blend-screen ${
        stage === 0 ? 'scale-x-0 rotate-[-15deg] opacity-0' : 
        stage === 1 ? 'scale-x-0 rotate-[-15deg] opacity-0' :
        stage === 2 ? 'scale-x-[1.2] rotate-[-15deg] opacity-100' :
        'scale-x-[1.5] rotate-[-15deg] opacity-0'
      }`} />
      
    </div>
  );
};
