import React from 'react';
import { ArrowRight, Map, IndianRupee, Building2, Globe } from 'lucide-react';

const DellaHeroCopy = () => {
  return (
    <section className="relative h-[100dvh] min-h-[700px] w-full overflow-hidden font-sans flex items-center">
      
      {/* --- YOUTUBE VIDEO BACKGROUND --- */}
      {/* Aspect-ratio trick to ensure the video always covers the screen without black bars */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-luminosity"
          src="https://www.youtube.com/embed/tx9-ya9t_5o?autoplay=1&mute=1&loop=1&playlist=tx9-ya9t_5o&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
          title="Della International City Background"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* --- BACKGROUND OVERLAYS --- */}
      {/* 1. Heavy Left-to-Right Dark Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
      {/* 2. Bottom Vignette to blend into the next section seamlessly */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-10"></div>

      {/* --- CONTENT AREA (LEFT ALIGNED) --- */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-4xl text-left">
          
          {/* Subtle Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
            <span className="text-[#D4AF37] text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em]">
              India's 1st Global Integrated Township
            </span>
          </div>
          
          {/* Main Requested Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-light text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Redefining How <br />
            <span className="font-bold italic text-[#D4AF37]">India Lives, Works & Dreams.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm md:text-lg text-gray-300 mb-12 leading-relaxed font-light max-w-2xl tracking-wide">
            Discover a world-class ecosystem featuring an F1-certified racing track, 
            Championship Golf course, and European Wellness hubs. Designed for those 
            who demand the pinnacle of living.
          </p>
          
          {/* Primary Call to Actions (Above the Fold) */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-16">
            <button className="flex items-center justify-center gap-3 bg-[#D4AF37] text-black border border-[#D4AF37] px-8 py-4 rounded font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:bg-white hover:border-white transition-all duration-500 w-full sm:w-auto shadow-2xl">
              Request Private Viewing
            </button>
            
            <button className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/30 px-8 py-4 rounded font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 w-full sm:w-auto backdrop-blur-sm group">
              Download Masterplan
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
          {/* --- INVESTOR TRUST & DATA STRIP --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-t border-white/10 pt-10">
            
            <div className="flex flex-col border-l border-[#D4AF37]/30 pl-5">
              <div className="flex items-center gap-2 mb-1.5">
                <Map className="text-[#D4AF37]" size={18} strokeWidth={1.5} />
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white leading-none">1,100</p>
              </div>
              <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Acres of Scale</p>
            </div>
            
            <div className="flex flex-col border-l border-[#D4AF37]/30 pl-5">
              <div className="flex items-center gap-2 mb-1.5">
                <IndianRupee className="text-[#D4AF37]" size={18} strokeWidth={1.5} />
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white leading-none">16K Cr</p>
              </div>
              <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Project GDV</p>
            </div>

            <div className="flex flex-col border-l border-[#D4AF37]/30 pl-5">
              <div className="flex items-center gap-2 mb-1.5">
                <Building2 className="text-[#D4AF37]" size={18} strokeWidth={1.5} />
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white leading-none">4,330</p>
              </div>
              <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Private Villas</p>
            </div>

            <div className="flex flex-col border-l border-[#D4AF37]/30 pl-5">
              <div className="flex items-center gap-2 mb-1.5">
                <Globe className="text-[#D4AF37]" size={18} strokeWidth={1.5} />
                <p className="text-2xl sm:text-3xl font-serif font-bold text-white leading-none">100+</p>
              </div>
              <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Global Brands</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DellaHeroCopy;