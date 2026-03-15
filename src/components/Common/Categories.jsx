import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const townships = [
  {
    id: 1,
    number: "1",
    shortName: "Racing Circuit",
    title: "Della Monte Carlo",
    subtitle: "International Racing Circuit",
    category: "Resort & Private Residences",
    acres: 450,
    totalAcres: 1100,
    desc: "Purpose Built Ecosystem For The Global Automobile Industry.",
    image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/current-townships/della-townships-pune-gcc-city-racing-circuit-gcc-hub.webp",
    link: "#racing"
  },
  {
    id: 2,
    number: "2",
    shortName: "Golf Course",
    title: "Della International",
    subtitle: "Golf Course",
    category: "Resort & Private Residences",
    acres: 300,
    totalAcres: 1100,
    desc: "18 Hole Championship Golf Course designed for the ultimate lifestyle.",
    image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/current-townships/della-townships-ahmedabad-gcc-city-international-golfcourse.webp",
    link: "#golf"
  },
  {
    id: 3,
    number: "3",
    shortName: "Design District",
    title: "Della Design District",
    subtitle: "Fashion | Art | Architecture",
    category: "Resort & Private Residences",
    acres: 210,
    totalAcres: 1100,
    desc: "A creative convergence of Fashion, Art & Architectural brilliance.",
    image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/current-townships/della-townships-ahmedabad-gcc-city-fashion-art-architecture-district.webp",
    link: "#design"
  },
  {
    id: 4,
    number: "4",
    shortName: "European Wellness",
    title: "Della European Wellness",
    subtitle: "Resort & Private Residences",
    category: "Medical Wellness Township",
    acres: 140,
    totalAcres: 1100,
    desc: "India's 1st Luxury Medical Wellness Township and sanctuary.",
    image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/current-townships/della-townships-ahmedabad-gcc-city-mayrlife-european-wellness.webp",
    link: "#wellness"
  }
];

const ThemedTownships = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  // Scroll listener to trigger the sticky secondary nav
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        if (sectionTop <= 120) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-[#050505] text-white py-24 font-sans">
      
      {/* --- STICKY SECONDARY NAVBAR --- */}
      <div 
        className={`fixed left-0 w-full  bg-[#121212]/95 backdrop-blur-xl border-b border-white/10 z-40 transition-all duration-150 ease-in-out flex justify-center py-4 ${
          isSticky ? 'top-[80px] sm:top-[80px] opacity-100 translate-y-0 visible' : 'top-[80px] sm:top-[80px] opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex items-center gap-6 sm:gap-12 overflow-x-auto px-4 w-full max-w-7xl no-scrollbar">
          {townships.map((township) => (
            <a 
              key={township.id} 
              href={township.link}
              className="whitespace-nowrap text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
            >
              <span className="text-[#D4AF37] opacity-50 group-hover:opacity-100 transition-opacity">0{township.number}</span>
              {township.shortName}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADING --- */}
        <div className="mb-6 max-w-3xl text-left">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-5 font-semibold">
            A next-generation city consisting of 4 Themed Townships
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white italic leading-tight">
            Adds Years To Life And Life To Years.
          </h2>
        </div>

        {/* --- EXPANDING ACCORDION GRID --- */}
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-3 h-auto lg:h-[400px]">
          {townships.map((township) => {
            const isHovered = hoveredId === township.id;
            const isAnyHovered = hoveredId !== null;

            return (
              <a 
                key={township.id} 
                href={township.link}
                onMouseEnter={() => setHoveredId(township.id)}
                onMouseLeave={() => setHoveredId(null)}
                // Smoothed out the transition to remove the "guitar" snapping effect
                className={`group relative overflow-hidden rounded-md cursor-pointer transition-[flex] duration-[800ms] ease-in-out block
                  ${isHovered ? 'lg:flex-[2.5]' : (isAnyHovered ? 'lg:flex-[0.75]' : 'lg:flex-1')}
                  h-[350px] lg:h-full w-full
                `}
              >
                {/* Background Image */}
                <img 
                  src={township.image} 
                  alt={township.title} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />

                {/* --- GRADIENT OVERLAYS --- */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
                {/* Taller bottom gradient to ensure text readability */}
                <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10"></div>

                {/* Top Number */}
                <div className="absolute top-8 left-8 z-20 flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[#D4AF37] text-3xl font-serif font-bold leading-none">0{township.number}</span>
                  <div className={`w-px bg-[#D4AF37] transition-all duration-[800ms] ease-in-out ${isHovered ? 'h-12 mt-3' : 'h-0 mt-0'}`}></div>
                </div>

                {/* --- CONTENT CONTAINER --- */}
                {/* Replaced p-6 with p-8 lg:p-10 and anchored absolutely to the bottom to fix spacing */}
                <div className="absolute bottom-0 left-0 w-full z-20 p-8 lg:p-10 flex flex-col">
                  
                  {/* Titles Container - Removed the aggressive translate-y that was pushing text to the bottom */}
                  <div className="transform transition-transform duration-[800ms] ease-in-out lg:translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight mb-2 drop-shadow-lg line-clamp-1">
                      {township.title}
                    </h3>
                    <h4 className="text-xs sm:text-sm font-sans uppercase tracking-[0.2em] text-[#D4AF37] drop-shadow-md line-clamp-1">
                      {township.subtitle}
                    </h4>

                    {/* Expandable Content (Visible only on hover on Desktop) */}
                    <div 
                      className={`overflow-hidden transition-all duration-[800ms] ease-in-out ${
                        isHovered ? 'lg:max-h-[200px] lg:opacity-100 mt-6' : 'lg:max-h-0 lg:opacity-0 mt-0'
                      }`}
                    >
                      <p className="text-sm text-gray-300 font-light leading-relaxed mb-8 border-l border-white/20 pl-4 hidden lg:block">
                        {township.desc}
                      </p>

                      {/* Data Visualization: Acreage Bar */}
                      <div className="hidden lg:block w-full">
                        <div className="flex justify-between items-end mb-3">
                          <span className="text-[#D4AF37] font-serif text-xl font-bold">
                            {township.acres} <span className="text-[10px] font-sans text-gray-400 font-normal uppercase tracking-widest">/ {township.totalAcres} Acrs</span>
                          </span>
                          
                          <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest opacity-0 transform -translate-x-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-x-0">
                            Explore <ArrowRight size={14} className="text-[#D4AF37]" />
                          </div>
                        </div>
                        
                        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#D4AF37] transition-transform duration-[1200ms] ease-out transform origin-left scale-x-0 group-hover:scale-x-100 delay-100"
                            style={{ width: `${(township.acres / township.totalAcres) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ThemedTownships;