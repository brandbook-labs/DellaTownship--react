import React, { useState } from 'react';
import { ArrowRight, Download, ChevronRight } from 'lucide-react';

const DesignDistrictSection = () => {
  const features = [
    {
      id: 1,
      stat: '256',
      unit: '',
      title: 'Della Branded Residences',
      desc: 'Iconic architectural living spaces.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/residences/design-district-residences-popup-3.webp',
    },
    {
      id: 2,
      stat: '854',
      unit: '',
      title: 'Private Villa Plots',
      desc: 'Bespoke canvas for architectural homes.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/architectureenclave/architectureenclave-big-popup.webp',
    },
    {
      id: 3,
      stat: '15,000',
      unit: 'sqft',
      title: 'Fashion Enclave',
      desc: 'Hub for global couture and design.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/fashionenclave/fashionenclave-big-popup.webp',
    },
    {
      id: 4,
      stat: '15,000',
      unit: 'sqft',
      title: 'Art Enclave',
      desc: 'Curated galleries and creative studios.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/artenclave/artenclave-popup-8.webp',
    },
    {
      id: 5,
      stat: '15,000',
      unit: 'sqft',
      title: 'Architecture Enclave',
      desc: 'A sanctuary for structural innovation.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/architectureenclave/architectureenclave-popup-6.webp',
    },
    {
      id: 6,
      stat: '300',
      unit: 'Rooms',
      title: '5-Star Glamping Resort',
      desc: 'Luxury retail, boutiques & maisons.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/luxuryretail/luxuryretail-big-popup.webp',
    },
    {
      id: 7,
      stat: '2.5',
      unit: 'Lakh sqft',
      title: 'Design District',
      desc: 'The ultimate luxury shopping boulevard.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/architectureenclave/architectureenclave-popup-2.webp',
    },
    {
      id: 8,
      stat: '1',
      unit: 'Lakh sqft',
      title: 'Private Offices',
      desc: 'Workspaces for creative enterprises.',
      img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/architectureenclave/architectureenclave-popup-5.webp',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = features[activeIndex];

  return (
    <section className="relative w-full pt-16 pb-24 font-sans text-white overflow-x-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3"></div>

      {/* MATCHING MAX WIDTH WRAPPER */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* --- THE ARCHITECTURAL RIBBON HEADER --- */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6">
          
          {/* Left: Number & Titles */}
          <div className="flex items-center gap-5 sm:gap-8">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#D4AF37] font-light leading-none">
              03<span className="text-white/20">.</span>
            </span>
            
            <div className="h-10 w-px bg-white/10 hidden sm:block"></div>
            
            <div className="flex flex-col justify-center">
              <h4 className="text-[#D4AF37] text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold mb-1 sm:mb-1.5">
                Della Design District
              </h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light font-serif leading-none text-white tracking-wide">
                India's Creative <span className="italic text-gray-300">Capital</span>
              </h2>
            </div>
          </div>
          
          {/* Right: Description Block */}
          <div className="max-w-lg lg:max-w-md xl:max-w-xl lg:border-l border-white/10 lg:pl-8">
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed tracking-wide">
              A 210-acre township where the worlds of fashion, art, and architecture converge. Home to the DLC Foundations, bringing together creators, brands, and innovators in one immersive cultural ecosystem.
            </p>
          </div>
          
        </div>

        {/* --- MAIN STAGE: Cinematic Image Gallery --- */}
        <div className="relative h-[70vh] min-h-[600px] w-full rounded-sm overflow-hidden group/stage shadow-2xl">
          
          {/* Main Background Image Wrapper - RIGHT ALIGNED */}
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

          {/* Floating Narrative Box - LEFT ALIGNED */}
          <div className="absolute bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 left-0 w-full lg:w-[42%] xl:w-[38%] lg:bg-[#0a0a0a]/70 lg:backdrop-blur-2xl p-6 sm:p-8 lg:p-12 lg:border-l-[3px] lg:border-[#D4AF37] z-20">
            
            <p className="text-[#D4AF37] text-[10px] tracking-widest uppercase font-semibold mb-6 hidden lg:block">Township Sector C</p>
            
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
              <a href="/design-district" className="inline-flex items-center justify-between w-full bg-[#D4AF37] text-black px-6 py-4 rounded-sm group hover:bg-white transition-colors duration-300">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold">Explore The District</span>
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

          {/* Minimalist Gallery Navigation - RIGHT ALIGNED & SCROLLABLE */}
          <div className="absolute top-6 right-6 lg:top-auto lg:bottom-8 lg:right-8 flex gap-2 lg:gap-3 z-30 max-w-[80vw] lg:max-w-[50vw] overflow-x-auto no-scrollbar pb-2 mask-image-left">
            {features.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 w-12 h-12 lg:w-20 lg:h-20 overflow-hidden transition-all duration-500 ease-out focus:outline-none relative group cursor-pointer rounded-sm
                  ${activeIndex === index ? 'opacity-100 scale-100 shadow-2xl z-10 border border-[#D4AF37]' : 'opacity-40 hover:opacity-100 scale-95 border border-white/10'}
                `}
              >
                <img src={item.img} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt={item.title} />
                {activeIndex === index && (
                  <div className="absolute border-2 border-[#D4AF37] bg-[#D4AF37]/10"></div>
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
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .mask-image-left {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 100%);
        }
      `}} />
    </section>
  );
};

export default DesignDistrictSection;