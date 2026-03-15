import React, { useState } from 'react';
import { ArrowRight, Download, ChevronRight } from 'lucide-react';

const RacingDistrictSection = () => {
  const features = [
    {
      id: 1,
      stat: '5.3',
      unit: 'Kms',
      title: 'Multi-Use Motor Sport Track',
      desc: 'Engineered for Formula Racing, Moto GP & Autonomous Testing.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/motor-sport/popup/della-townships-ahmedabad-monte-carlo-international-motorsport-hero.webp',
    },
    {
      id: 2,
      stat: '448',
      unit: '',
      title: 'Della Branded Residences',
      desc: 'Ultra-luxury living spaces overlooking the racing circuit.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/branded-residence/popup-brandresidence-17.webp',
    },
    {
      id: 3,
      stat: '2.4',
      unit: 'M sqft',
      title: 'Core GCC Office Park',
      desc: 'A purpose-built ecosystem for the global automotive industry.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/research-retail/popup-research-5.webp',
    },
    {
      id: 4,
      stat: '1,786',
      unit: '',
      title: 'Private Villas & Plots',
      desc: 'Exclusive leadership living nestled within the township.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/private-villas/architectural-style-1/della-townships-ahmedabad-french-villa-architecture-style-1-exterior.webp',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="relative w-full pt-16 pb-24 font-sans text-white overflow-x-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- THE ARCHITECTURAL RIBBON HEADER --- */}
        {/* Extremely space-efficient, single-line desktop layout */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6">
          
          {/* Left: Number & Titles */}
          <div className="flex items-center gap-5 sm:gap-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#D4AF37] font-light leading-none">
              01<span className="text-white/20">.</span>
            </span>
            
            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
            
            <div className="flex flex-col justify-center">
              <h4 className="text-[#D4AF37] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold mb-1 sm:mb-1.5">
                Della Monte Carlo
              </h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light font-serif leading-none text-white tracking-wide">
                International <span className="italic text-gray-300">Racing Circuit</span>
              </h2>
            </div>
          </div>
          
          {/* Right: Description Block */}
          <div className="max-w-lg lg:max-w-md xl:max-w-lg lg:border-l border-white/10 lg:pl-8">
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed tracking-wide">
              India’s first automotive-led mobility and racing lifestyle city. A purpose-built ecosystem designed by Tilke Engineers, Germany.
            </p>
          </div>
          
        </div>

        {/* --- MAIN STAGE: Cinematic Image Gallery --- */}
        {/* We can now afford a massive 70vh height because the header is so compact */}
        <div className="relative h-[70vh] min-h-[600px] w-full rounded-sm overflow-hidden group/stage">
          
          {/* Main Background Image Wrapper */}
          <div className="absolute top-0 right-0 w-full lg:w-[85%] h-full overflow-hidden bg-[#111]">
            <img 
              key={`main-${activeFeature.id}`}
              src={activeFeature.img} 
              alt={activeFeature.title} 
              className="w-full h-full object-cover animate-[subtleZoom_1.5s_ease-out_forwards] filter brightness-[0.7] group-hover/stage:brightness-[0.9] transition-all duration-1000"
            />
            {/* Desktop Left Fade */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent w-[55%]"></div>
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10 pointer-events-none"></div>
            {/* Mobile Bottom Fade */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent h-full"></div>
          </div>

          {/* Floating Narrative Box */}
          <div className="absolute bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 left-0 w-full lg:w-[42%] xl:w-[38%] lg:bg-[#0a0a0a]/70 lg:backdrop-blur-2xl p-6 sm:p-8 lg:p-12 lg:border-l-[3px] lg:border-[#D4AF37] z-20">
            
            <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-semibold mb-6 hidden lg:block">Township Sector A</p>
            
            <div key={`text-${activeFeature.id}`} className="animate-[fadeIn_0.6s_ease-out_forwards]">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-5xl lg:text-7xl font-serif text-white leading-none">{activeFeature.stat}</span>
                {activeFeature.unit && <span className="text-xs lg:text-sm text-[#D4AF37] font-sans uppercase tracking-[0.2em]">{activeFeature.unit}</span>}
              </div>
              <h3 className="text-xl lg:text-2xl font-serif text-white mb-3 lg:mb-4">{activeFeature.title}</h3>
              <p className="text-xs lg:text-sm text-gray-300 font-light leading-relaxed mb-8 max-w-sm">{activeFeature.desc}</p>
            </div>

            {/* CX Actions & Navigation */}
            <div className="flex flex-col gap-5 mt-6 pt-6 lg:mt-8 lg:pt-8 border-t border-white/10">
              
              {/* PRIMARY CTA */}
              <a href="/racing-circuit" className="inline-flex items-center justify-between w-full bg-[#D4AF37] text-black px-6 py-4 rounded-sm group hover:bg-white transition-colors duration-300">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">Explore The Circuit</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-start gap-2 group/btn">
                  <Download size={14} className="text-[#D4AF37] group-hover/btn:-translate-y-1 transition-transform" />
                  <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400 group-hover/btn:text-white transition-colors">Brochure</span>
                </button>
                <button className="flex items-center justify-end gap-2 group/btn">
                  <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-gray-400 group-hover/btn:text-white transition-colors">Inquire</span>
                  <ArrowRight size={14} className="text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Minimalist Gallery Navigation (Bottom Right) */}
          <div className="absolute top-6 right-6 lg:top-auto lg:bottom-8 lg:right-8 flex gap-2 lg:gap-3 z-30">
            {features.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 lg:w-20 lg:h-20 overflow-hidden transition-all duration-500 ease-out focus:outline-none relative group cursor-pointer rounded-sm
                  ${activeIndex === index ? 'opacity-100 scale-100 shadow-2xl z-10 border border-[#D4AF37]' : 'opacity-40 hover:opacity-100 scale-95 border border-white/10'}
                `}
              >
                <img src={item.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt={item.title} />
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-[#D4AF37]/10"></div>
                )}
              </button>
            ))}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtleZoom {
          from { transform: scale(1.04); }
          to { transform: scale(1); }
        }
      `}} />
    </section>
  );
};

export default RacingDistrictSection;