import React, { useRef, useEffect, useState } from 'react';
import { 
  ArrowRight, Phone, Flag, FlagTriangleRight, Leaf, Mountain, Target, 
  Home, Building, Building2, Trees, Briefcase, Bed, Palmtree, Flower2, 
  Wine, Users, ShoppingBag, Gem, Store, Car, Lightbulb, Landmark, Activity 
} from 'lucide-react';
import gsap from 'gsap';

// --- Consolidated Image & Data Set from your prompt ---
const heroData = [
  { category: "Themes", icon: Flag, value: "5.3", unit: "Kms", label: "F1 Racing Circuit", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/motor-sport/popup/della-townships-ahmedabad-monte-carlo-international-motorsport-grandstand-view.webp" },
  { category: "Themes", icon: FlagTriangleRight, value: "18", unit: "Hole", label: "Championship Golf", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-international-golfcourse/championship-golf/championship-golf-popup-5.webp" },
  { category: "Wellness", icon: Leaf, value: "50k", unit: "sqft", label: "European Wellness", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-european-wellness/grid-factfiles/della-townships-ahmedabad-mayrlife-wellness-residences.webp" },
  { category: "Real Estate", icon: Home, value: "4,330", unit: "", label: "Private Villas", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-private-villa-plots-popup.webp" },
  { category: "Real Estate", icon: Building, value: "1,216", unit: "", label: "Branded Residences", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-branded-residences-popup.webp" },
  { category: "Hospitality", icon: Bed, value: "1,200", unit: "", label: "5-Star Resort Rooms", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/restaurant/popup-restaurant-3.webp" },
  { category: "Hospitality", icon: Flower2, value: "4.4L", unit: "sqft", label: "Wedding Lawns", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/wedding/popup-wedding-9.webp" },
  { category: "Retail", icon: ShoppingBag, value: "2.5L", unit: "sqft", label: "Luxury Retail", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-private-offices-popup.webp" },
  { category: "Foundations", icon: Landmark, value: "DLC", unit: "", label: "Global Fashion", image: "https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/fashionenclave/fashionenclave-popup-4.webp" }
];

const DellaHeroCopy2 = () => {
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // --- GSAP Infinite Vertical Scroll Logic ---
  useEffect(() => {
    // We duplicate the items in the DOM to create a seamless loop
    const setupInfiniteScroll = (elementRef, direction, duration) => {
      const el = elementRef.current;
      if (!el) return;

      const totalHeight = el.scrollHeight / 2; // Since we duplicate the children

      gsap.to(el, {
        y: direction === 'up' ? -totalHeight : totalHeight,
        ease: 'none',
        duration: duration,
        repeat: -1,
        modifiers: {
          y: gsap.utils.unitize(y => parseFloat(y) % totalHeight) // The magic modulo that loops it seamlessly
        }
      });
    };

    // Staggered speeds and opposite directions for that premium architectural feel
    setupInfiniteScroll(column1Ref, 'up', 45);
    setupInfiniteScroll(column2Ref, 'down', 60);

    return () => {
      gsap.killTweensOf(column1Ref.current);
      gsap.killTweensOf(column2Ref.current);
    };
  }, []);

  // Split data for the two visual columns
  const col1Data = [...heroData.slice(0, 5), ...heroData.slice(0, 5)]; // Duplicated for seamless loop
  const col2Data = [...heroData.slice(4, 9), ...heroData.slice(4, 9)];

  return (
    <section className="relative h-[100dvh] min-h-[750px] w-full bg-[#050505] overflow-hidden font-sans flex items-center">
      
      {/* Absolute overlay to blend the top and bottom edges of the scrolling images */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* =========================================
            LEFT COLUMN: The Editorial Narrative (5/12 width)
        ========================================= */}
        <div className="lg:col-span-5 flex flex-col justify-center pt-20 lg:pt-0 relative z-30">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-[fadeInUp_1s_ease-out_forwards]">
            <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.3em]">
              India's 1st Global Integrated Township
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-serif font-light text-white leading-[1.05] mb-8 animate-[fadeInUp_1.2s_ease-out_forwards]">
            A Visionary City, <br />
            <span className="italic text-gray-400">Crafted for Eternity.</span>
          </h1>
          
          <p className="text-sm lg:text-base text-gray-400 mb-12 leading-relaxed font-light max-w-md tracking-wide animate-[fadeInUp_1.4s_ease-out_forwards]">
            1,100 acres. ₹16,000 Cr GDV. Discover a world-class ecosystem featuring an F1-certified racing track, Championship Golf course, and European Wellness hubs.
          </p>
          
          {/* Executive CTA Matrix */}
          <div className="flex items-center gap-6 mb-16 animate-[fadeInUp_1.6s_ease-out_forwards]">
            <button className="bg-[#C5A059] text-[#050505] px-8 py-4 rounded text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all duration-500 shadow-[0_0_20px_rgba(197,160,89,0.2)]">
              Request Private Invite
            </button>
            <button className="flex items-center gap-3 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#C5A059] transition-colors duration-300 group">
              View Master Plan
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Stats Footer */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8 animate-[fadeInUp_1.8s_ease-out_forwards]">
            <div>
              <p className="text-3xl font-serif text-white mb-1">4,330</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Private Villas</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white mb-1">100+</p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Global Brands</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-white mb-1">5L<span className="text-lg text-[#C5A059]"> sqft</span></p>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold">Commercial</p>
            </div>
          </div>
        </div>

        {/* =========================================
            RIGHT COLUMN: The Architectural Flow (7/12 width)
        ========================================= */}
        <div className="hidden lg:grid lg:col-span-7 h-[150vh] grid-cols-2 gap-6 relative transform rotate-[-2deg] scale-105 opacity-90 hover:opacity-100 transition-opacity duration-700">
          
          {/* Scrolling Track 1 (Moves UP) */}
          <div ref={column1Ref} className="flex flex-col gap-6 pt-[20vh]"
               onMouseEnter={() => gsap.globalTimeline.timeScale(0.1)} // Slows down drastically on hover
               onMouseLeave={() => gsap.globalTimeline.timeScale(1)}>
            {col1Data.map((item, idx) => (
              <div 
                key={`col1-${idx}`} 
                className="relative h-[400px] w-full rounded-xl overflow-hidden group border border-white/5"
                onMouseEnter={() => setHoveredImage(`col1-${idx}`)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={item.image} alt={item.label} className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105" />
                
                {/* Elegant Hover Reveal Data */}
                <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-8 transition-opacity duration-500 ${hoveredImage === `col1-${idx}` ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] font-bold mb-2 block">{item.category}</span>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-4xl font-serif text-white">{item.value}</h3>
                      <span className="text-xs text-white uppercase tracking-widest">{item.unit}</span>
                    </div>
                    <p className="text-xs text-gray-300 font-light tracking-wide">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling Track 2 (Moves DOWN, offset slightly) */}
          <div ref={column2Ref} className="flex flex-col gap-6 -mt-[40vh]"
               onMouseEnter={() => gsap.globalTimeline.timeScale(0.1)} 
               onMouseLeave={() => gsap.globalTimeline.timeScale(1)}>
            {col2Data.map((item, idx) => (
              <div 
                key={`col2-${idx}`} 
                className="relative h-[500px] w-full rounded-xl overflow-hidden group border border-white/5"
                onMouseEnter={() => setHoveredImage(`col2-${idx}`)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img src={item.image} alt={item.label} className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105" />
                
                <div className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-8 transition-opacity duration-500 ${hoveredImage === `col2-${idx}` ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] font-bold mb-2 block">{item.category}</span>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-4xl font-serif text-white">{item.value}</h3>
                      <span className="text-xs text-white uppercase tracking-widest">{item.unit}</span>
                    </div>
                    <p className="text-xs text-gray-300 font-light tracking-wide">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default DellaHeroCopy2;