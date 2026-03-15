import React, { useState, useRef } from 'react';
import { 
  Flag, FlagTriangleRight, Leaf, Mountain, Target, 
  Home, Building, Building2, Trees, Briefcase, 
  Bed, Palmtree, Flower2, Wine, Users, 
  ShoppingBag, Gem, Store, Car, Lightbulb, 
  Landmark, Activity 
} from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Data with cinematic images
const projectData = {
  "International Themes": [
    { icon: Flag, value: "5.3", unit: "Kms", label: "F1 Racing Circuit", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/motor-sport/popup/della-townships-ahmedabad-monte-carlo-international-motorsport-grandstand-view.webp" },
    { icon: FlagTriangleRight, value: "18", unit: "Hole", label: "Championship Golf", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-international-golfcourse/championship-golf/championship-golf-popup-5.webp" },
    { icon: Leaf, value: "50k", unit: "sqft", label: "European Wellness", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-european-wellness/grid-factfiles/della-townships-ahmedabad-mayrlife-wellness-residences.webp" },
    { icon: Mountain, value: "70+", unit: "Acts", label: "Adventure Park", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/extreme-adventure/popup-adventure2.webp" },
    { icon: Target, value: "20", unit: "Lane", label: "Inrange Golf", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-international-golfcourse/championship-golf/championship-golf-popup-6.webp" },
  ],
  "Real Estate": [
    { icon: Home, value: "4,330", unit: "", label: "Private Villas", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-private-villa-plots-popup.webp" },
    { icon: Building, value: "1,216", unit: "", label: "Branded Residences", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-branded-residences-popup.webp" },
    { icon: Building2, value: "30", unit: "G+8", label: "Residential Bldgs", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-international-golfcourse/residences/residences-popup-6.webp" },
    { icon: Trees, value: "350", unit: "Acrs", label: "Open Spaces", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/private-office/popup-office-7.webp" },
    { icon: Briefcase, value: "5L", unit: "sqft", label: "Commercial Offices", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-private-offices-popup.webp" },
  ],
  "Hospitality": [
    { icon: Bed, value: "1,200", unit: "", label: "5-Star Resort Rooms", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/restaurant/popup-restaurant-3.webp" },
    { icon: Palmtree, value: "4", unit: "", label: "5-Star Resorts", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=800" },
    { icon: Flower2, value: "4.4L", unit: "sqft", label: "Wedding Lawns", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/wedding/popup-wedding-9.webp" },
    { icon: Wine, value: "16", unit: "", label: "Restaurants & Bars", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/restuarant/restuarant-popup-3.webp" },
    { icon: Users, value: "48", unit: "", label: "MICE Banquets", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/corporate/corporate-big-popup.webp" },
  ],
  "Luxury Retail": [
    { icon: ShoppingBag, value: "2.5L", unit: "sqft", label: "Luxury Retail", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-private-offices-popup.webp" },
    { icon: Gem, value: "100+", unit: "", label: "Global Brands", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/private-office/office-banner-popup.webp" },
    { icon: Store, value: "4", unit: "", label: "Shopping Arcades", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/luxuryretail/luxuryretail-popup-4.webp" },
    { icon: Car, value: "2L", unit: "sqft", label: "Automobile Retail", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/retail/popup-automative-1.webp" },
    { icon: Lightbulb, value: "1L", unit: "sqft", label: "R & D Centre", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/gcc-hubs/3.webp" },
  ],
  "Foundations": [
    { icon: Landmark, value: "DLC", unit: "", label: "Leadership", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/grid-factfiles/gcc-hubs-factfile/popup/della-townships-ahmedabad-gcc-city-core-global-capability-centre-office-park-popup.webp" },
    { icon: Landmark, value: "DLC", unit: "", label: "Automobile", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/research-retail/popup-research-banner.webp" },
    { icon: Landmark, value: "DLC", unit: "", label: "Global Fashion", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/fashionenclave/fashionenclave-popup-4.webp" },
    { icon: Landmark, value: "DLC", unit: "", label: "Global Art", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/artenclave/artenclave-popup-9.webp" },
    { icon: Activity, value: "150+", unit: "Bed", label: "Speciality Hospital", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" },
  ]
};

const ProjectIntro = () => {
  const categories = Object.keys(projectData);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const containerRef = useRef(null);

  // --- GSAP ANIMATIONS ---
  useGSAP(() => {
    // 1. Initial Load Header Reveal
    gsap.fromTo('.reveal-word', 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo('.reveal-stats',
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 1.2, delay: 0.6, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  // 2. Cinematic Tab Change Animation
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Animate the glass cards up and fade in
    tl.fromTo(".metric-card",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", overwrite: "auto" }
    );
    
    // Slowly scale the image down for that hyper-real, heavy cinematic feel
    tl.fromTo(".card-bg-img",
      { scale: 1.15 },
      { scale: 1, duration: 2.5, ease: "power2.out", overwrite: "auto" },
      "<" // Start at the same time as the card reveal
    );

  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <section ref={containerRef} className="w-full h-[100dvh] lg:h-[75dvh] min-h-[600px] font-sans text-white relative overflow-hidden flex flex-col pt-12">
      
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-12 flex-1 flex flex-col h-full relative z-10">
        
        {/* --- TOP HEADER & PROJECT SCALE --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
              Della International City
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light flex flex-wrap gap-x-2 gap-y-1 overflow-hidden">
              <span className="reveal-word inline-block">The</span>
              <span className="reveal-word inline-block">Scale</span>
              <span className="reveal-word inline-block">of</span>
              <span className="reveal-word inline-block italic text-[#D4AF37] font-medium">Vision.</span>
            </h2>
          </div>

          {/* REPLACED GDV WITH LIFESTYLE/SCALE METRICS */}
          <div className="reveal-stats text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#D4AF37]/30 pl-4 md:pl-0 md:pr-5">
            <p className="text-[9px] text-gray-400 uppercase tracking-[0.25em] mb-1.5 font-semibold">The Masterplan</p>
            <p className="text-xl lg:text-2xl font-serif text-white tracking-wide">
              1,100 Acres <span className="text-gray-600 font-light mx-2">|</span> 5 Global Districts
            </p>
          </div>
        </div>

        {/* --- MIDDLE: TABS --- */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-white/5 mb-2 lg:mb-6 mask-tabs">
          <div className="flex gap-8 lg:gap-12 min-w-max pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className="relative group pb-2"
              >
                <span className={`text-[9px] lg:text-[10px] uppercase tracking-[0.2em] transition-colors duration-500
                  ${activeTab === category ? 'text-white font-bold' : 'text-gray-500 group-hover:text-[#D4AF37]'}
                `}>
                  {category}
                </span>
                {/* Elegant gold indicator */}
                <span className={`absolute bottom-[-17px] left-0 w-full h-[1px] bg-[#D4AF37] transition-transform duration-700 ease-out origin-left
                  ${activeTab === category ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-[#D4AF37]/40'}
                `}></span>
              </button>
            ))}
          </div>
        </div>

        {/* --- BOTTOM: CINEMATIC PANORAMIC GRID --- */}
        <div className="flex-1 pb-16 w-full relative">
          
          <div className="flex lg:grid lg:grid-cols-5 gap-5 h-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar mask-edges">
            {projectData[activeTab].map((item, index) => (
              <div 
                key={`${activeTab}-${index}`}
                className="metric-card relative flex-shrink-0 w-[280px] lg:w-auto h-full min-h-[320px] rounded-sm group cursor-pointer snap-center overflow-hidden bg-[#0a0a0a] border border-white/5"
              >
                {/* Hyper-real Background Image */}
                <img 
                  src={item.image} 
                  alt={item.label}
                  className="card-bg-img absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 filter brightness-[0.8]"
                />
                
                {/* Ambient dark vignette for the whole card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                
                {/* Top: Icon */}
                <div className="absolute top-6 right-6 z-20 text-white/50 group-hover:text-[#D4AF37] transition-colors duration-500">
                  <item.icon size={20} strokeWidth={1} />
                </div>

                {/* Bottom: Glassmorphic Lower Third */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-30 transform transition-transform duration-500 bg-gradient-to-t from-[#050505] to-[#050505]/0 backdrop-blur-[2px] border-t border-white/5 group-hover:backdrop-blur-md group-hover:bg-[#050505]/40">
                  
                  <div className="transform transition-all duration-500 group-hover:-translate-y-1">
                    {/* Value & Unit */}
                    <div className="flex items-baseline gap-1.5 mb-1 drop-shadow-2xl">
                      <span className="text-4xl lg:text-5xl font-serif text-white group-hover:text-[#D4AF37] transition-colors duration-500 leading-none">
                        {item.value}
                      </span>
                      {item.unit && (
                        <span className="text-[9px] text-gray-300 font-sans tracking-[0.2em] uppercase">
                          {item.unit}
                        </span>
                      )}
                    </div>
                    
                    {/* Animated Decorative Line */}
                    <div className="w-0 h-px bg-[#D4AF37] my-3 transition-all duration-700 ease-out group-hover:w-12"></div>
                    
                    {/* Label */}
                    <p className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-gray-300 font-semibold leading-relaxed drop-shadow-lg">
                      {item.label}
                    </p>
                  </div>
                </div>

                {/* Subtle outer glow on hover */}
                <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 transition-colors duration-700 z-40"></div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Smooth edge fading for mobile horizontal scroll */
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        @media (min-width: 1024px) {
          .mask-edges {
            mask-image: none;
            -webkit-mask-image: none;
          }
        }
      `}} />
    </section>
  );
};

export default ProjectIntro;