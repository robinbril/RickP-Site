import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface DaySlot {
  id: string;
  day: string;
  date: string;
  fullDate: Date;
  slots: string[];
}

const generateDates = (numDays: number): DaySlot[] => {
  const dates: DaySlot[] = [];
  const today = new Date();
  const dayNames = ['ZON', 'MAA', 'DIN', 'WOE', 'DON', 'VRI', 'ZAT'];
  
  for(let i=0; i<numDays; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    
    // Generate some dummy slots based on the day
    let slots: string[] = [];
    const dayOfWeek = d.getDay();
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
       slots = ['09:00', '10:30', '13:00', '19:00', '20:30'];
       // Randomly remove some to simulate bookings
       if (i === 1 || i === 4) slots = ['19:00', '20:30'];
       if (i === 3) slots = []; // 'VOL'
    } else {
       // Weekends
       slots = ['10:00', '11:30'];
       if (i === 0) slots = []; // Today weekend might be full
    }

    dates.push({
      id: d.toISOString(),
      day: dayNames[dayOfWeek],
      date: `${d.getDate()} ${d.toLocaleString('nl-NL', { month: 'short' }).toUpperCase()}`,
      fullDate: d,
      slots
    });
  }
  return dates;
};

export const Schedule: React.FC = () => {
  const [scheduleData, setScheduleData] = useState<DaySlot[]>([]);
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollDates = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
  };

  useEffect(() => {
    // Generate 30 days into the future on mount
    setScheduleData(generateDates(30));
  }, []);

  const selectedDay = scheduleData[selectedDayIdx];

  const handleBooking = () => {
    if (!selectedSlot || !selectedDay) return;
    const message = `Ha Rick, ik wil graag een PT sessie boeken op ${selectedDay.day} ${selectedDay.date} om ${selectedSlot}. Is dit nog beschikbaar?`;
    window.open(`https://wa.me/31636486220?text=${encodeURIComponent(message)}`, '_blank');
  };


  return (
    <section id="schedule" className="section bg-black-rich border-t border-white/5 relative">
      <div className="container relative z-10" style={{ animation: 'fadeInUp 0.6s ease-out both' }}>
          
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-display text-5xl md:text-7xl text-white mb-6">PLAN JOUW<br/><span className="text-red-primary">SESSIE</span></h2>
            <p className="text-white-muted text-lg max-w-2xl mx-auto">
              Scroll door de agenda om een datum in de toekomst te kiezen. Vol is vol. Intake sessies zijn vrijblijvend maar vereisen 100% inzet.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Info Panel */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-black-elevated border border-white/5 p-8 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-red-primary/10 flex items-center justify-center shrink-0 border border-red-primary/20">
                    <Clock size={20} className="text-red-primary" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Duur</h4>
                    <p className="text-white-muted text-sm leading-relaxed">60 Min. intensieve 1-op-1 begeleiding</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-red-primary/10 flex items-center justify-center shrink-0 border border-red-primary/20">
                    <MapPin size={20} className="text-red-primary" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Locatie</h4>
                    <p className="text-white-muted text-sm leading-relaxed">Team Atlas Leiden of op locatie aan huis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-primary/10 flex items-center justify-center shrink-0 border border-red-primary/20">
                    <CheckCircle2 size={20} className="text-red-primary" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold tracking-widest text-xs uppercase mb-1">Bevestiging</h4>
                    <p className="text-white-muted text-sm leading-relaxed">Direct persoonlijk contact via WhatsApp.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Calendar Panel */}
            <div className="lg:col-span-8 bg-[#161618] border border-white/5 p-6 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-primary opacity-[0.03] blur-[100px] pointer-events-none rounded-full" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                <h3 className="text-white font-display text-3xl tracking-wide flex items-center gap-3">
                  <Calendar className="text-red-primary" size={28} opacity={0.8} /> BESCHIKBAARHEID
                </h3>
                <span className="text-white-muted text-xs tracking-widest uppercase font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-primary animate-pulse" /> Live Agenda
                </span>
              </div>

              {/* Days Row (Horizontal Scroll) */}
              <div className="relative group/scroll">
                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#161618] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#161618] to-transparent z-10 pointer-events-none" />
                
                {/* Left Arrow */}
                <button 
                  onClick={() => scrollDates('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-red-primary/50 transition-all opacity-0 group-hover/scroll:opacity-100"
                >
                  <ChevronLeft size={18} />
                </button>
                
                {/* Right Arrow */}
                <button 
                  onClick={() => scrollDates('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-red-primary/50 transition-all opacity-0 group-hover/scroll:opacity-100"
                >
                  <ChevronRight size={18} />
                </button>
                
                <div ref={scrollRef} className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x select-none px-6">
                  {scheduleData.map((dayObj, idx) => {
                    const isActive = idx === selectedDayIdx;
                    const isFull = dayObj.slots.length === 0;
                    return (
                      <button 
                        key={dayObj.id}
                        onClick={() => { setSelectedDayIdx(idx); setSelectedSlot(null); }}
                        className={`snap-start shrink-0 min-w-[100px] flex flex-col items-center p-4 rounded-xl border transition-all duration-300 ${isActive ? 'bg-red-primary border-red-primary shadow-lg shadow-red-primary/20 scale-105' : 'bg-black/50 border-white/5 hover:border-white/20'}`}
                      >
                        <span className={`text-xs uppercase tracking-widest font-bold mb-1 ${isActive ? 'text-white/90' : 'text-white-muted'}`}>{dayObj.day}</span>
                        <span className={`text-2xl font-display leading-none mb-2 ${isActive ? 'text-white' : 'text-white'}`}>{dayObj.date.split(' ')[0]}</span>
                        {isFull ? (
                          <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">VOL</span>
                        ) : (
                          <span className={`text-[10px] uppercase font-bold tracking-widest ${isActive ? 'text-white' : 'text-red-primary'}`}>
                            {dayObj.slots.length} {dayObj.slots.length === 1 ? 'SLOT' : 'SLOTS'}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-8 min-h-[180px]">
                <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-6 border-l-2 border-red-primary pl-3">
                  Tijden voor {selectedDay?.date}
                </h4>
                
                {selectedDay?.slots.length === 0 ? (
                  <div className="flex flex-col items-center justify-center p-12 bg-black/20 rounded-xl">
                    <p className="text-white-muted/80 text-sm tracking-wide text-center uppercase font-bold">Geen plek meer op deze dag.<br/>Kies een latere datum in de scroller.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {selectedDay?.slots.map((time) => {
                      const isSelected = selectedSlot === time;
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedSlot(time)}
                          className={`py-4 px-4 rounded-xl font-display text-xl tracking-wider transition-all duration-300 border ${isSelected ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105' : 'bg-black/40 border-white/5 text-white/90 hover:border-red-primary/50 hover:bg-black-elevated/80'}`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  {selectedSlot ? (
                     <p className="text-white-muted text-xs tracking-widest uppercase font-bold">Geselecteerd:<br/> <span className="text-white text-base mt-1 block">{selectedDay?.day} {selectedDay?.date} | {selectedSlot}</span></p>
                  ) : (
                    <p className="text-white-muted text-xs tracking-widest uppercase font-bold">Kies een tijd om te boeken.</p>
                  )}
                </div>
                <button 
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className={`btn ${selectedSlot ? 'bg-red-primary hover:bg-red-bright text-white shadow-xl shadow-red-primary/20' : 'bg-white/5 text-white/30 cursor-not-allowed border-none'} w-full sm:w-auto px-8`}
                >
                  RESERVEER SESSIE
                </button>
              </div>

            </div>
          </div>
          

      </div>
    </section>
  );
};
