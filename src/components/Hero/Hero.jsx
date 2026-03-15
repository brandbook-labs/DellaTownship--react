import React from 'react';
import { ArrowRight, Phone, Map, IndianRupee, Building2, Star } from 'lucide-react';

const DellaHero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[700px] w-full overflow-hidden font-sans flex items-center">
      
      {/* --- YOUTUBE VIDEO BACKGROUND --- */}
      {/* Using a specific aspect-ratio trick to ensure the video always covers the screen without black bars */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <iframe
  className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-80"
  src="https://www.youtube.com/embed/tx9-ya9t_5o?autoplay=1&mute=1&loop=1&playlist=tx9-ya9t_5o&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
  title="Della International City Background"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
      </div>

      {/* --- BACKGROUND OVERLAYS --- */}
      {/* 1. Left-to-Right Dark Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/99 via-black/90 to-transparent z-10"></div>
      {/* 2. Subtle Bottom Gradient to blend into the next section seamlessly */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 opacity-10"></div>

      {/* --- CONTENT AREA (LEFT ALIGNED) --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Constrain width so it doesn't cross over the whole screen */}
        <div className="max-w-3xl text-left pt-20 md:pt-10">
          
          {/* Subtle Accent / Eyebrow */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em]">
              India's 1st Global Integrated Township
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
            A Visionary City, <br />
            <span className="text-gray-300 italic font-light">Crafted for Eternity.</span>
          </h1>
          
          {/* Subtitle - Balancing Lifestyle & Investment */}
          <p className="text-base md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl">
            Discover a world-class ecosystem featuring an F1-certified racing track, 
            Championship Golf course, and European Wellness hubs. Designed for those 
            who demand the pinnacle of living and exceptional investment value.
          </p>
          
          {/* Primary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="flex items-center justify-center gap-3 bg-[#800020] text-white px-8 py-4 rounded font-bold uppercase tracking-[0.15em] text-xs hover:bg-white hover:text-[#800020] transition-all duration-300 w-full sm:w-auto shadow-lg group">
              <Phone size={16} className="group-hover:scale-110 transition-transform" />
              Get In Touch
            </button>
            
            <button className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/40 px-8 py-4 rounded font-bold uppercase tracking-[0.15em] text-xs hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-300 w-full sm:w-auto backdrop-blur-sm">
              View Master Plan
              <ArrowRight size={16} />
            </button>
          </div>
          
          {/* --- INVESTOR TRUST & DATA STRIP --- */}
          {/* Clean, architectural lines for the data points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/20 pt-8">
            
            <div className="flex flex-col border-l border-[#C5A059]/40 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <Map className="text-[#C5A059]" size={16} />
                <p className="text-2xl font-serif font-bold text-white">1,100</p>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Acres of Scale</p>
            </div>
            
            <div className="flex flex-col border-l border-[#C5A059]/40 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <IndianRupee className="text-[#C5A059]" size={16} />
                <p className="text-2xl font-serif font-bold text-white">16K Cr</p>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Project GDV</p>
            </div>

            <div className="flex flex-col border-l border-[#C5A059]/40 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="text-[#C5A059]" size={16} />
                <p className="text-2xl font-serif font-bold text-white">4,330</p>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Private Villas</p>
            </div>

            <div className="flex flex-col border-l border-[#C5A059]/40 pl-4">
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-[#C5A059]" size={16} />
                <p className="text-2xl font-serif font-bold text-white">100+</p>
              </div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Global Brands</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DellaHero;