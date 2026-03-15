import React from 'react';

const corePartners = [
  {
    id: 1,
    role: "Architect & Master Planner",
    name: "Ilan Waisbrod",
    logo: "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/gaia-logo.webp",
    location: "New York"
  },
  {
    id: 2,
    role: "F1-certified Track Designers",
    name: "Christian Epp & Dr. Carsten Tilke",
    logo: "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/tilke-logo.webp",
    location: "Germany"
  },
  {
    id: 3,
    role: "Championship Golf Course",
    name: "Michael Hayes",
    logo: "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/inrange-logo.webp",
    location: "Asia"
  },
  {
    id: 4,
    role: "European Medical Wellness",
    name: "Dr. Dieter & Natascha",
    logo: "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/mayrlife-logo.webp",
    location: "Austria"
  }
];

const lifestyleBrands = [
  "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/forbes-logo.webp",
  "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/vouge-lounge-logo.webp",
  "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/architect-digest-logo.webp",
  "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/conde-nast-logo.webp",
  "https://cdn.dellatownships.com/images/della-international-ahmedabad/brands-collabs/brands/gq-newyork-logo.webp"
];

const DellaAhmedabadPartners = () => {
  return (
    <section className="bg-[#050505] py-24 border-y border-white/5 font-sans relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/[0.03] blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-[#D4AF37] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Global Partnerships
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-white uppercase tracking-widest leading-tight mb-6">
            Della International City, <br className="hidden md:block"/> 
            <span className="italic text-gray-400">Ahmedabad</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-medium mb-8">
            <span>Motor Racing</span>
            <span className="text-[#D4AF37] opacity-50">✦</span>
            <span>Championship Golf</span>
            <span className="text-[#D4AF37] opacity-50">✦</span>
            <span>Design District</span>
            <span className="text-[#D4AF37] opacity-50">✦</span>
            <span>European Wellness</span>
          </div>

          <p className="text-xs md:text-sm text-gray-300 font-light tracking-[0.1em] uppercase border-b border-white/10 pb-8 inline-block px-8">
            In Association With <span className="text-white font-medium">Ayodhya Group</span>
          </p>
        </div>

        {/* --- 2. CORE VISIONARIES GRID (4 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {corePartners.map((partner) => (
            <div 
              key={partner.id} 
              className="group relative flex flex-col items-center justify-between p-10 bg-[#0a0a0a] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-700 h-[380px]"
            >
              {/* Top: Location Tag */}
              <div className="w-full text-left">
                <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] group-hover:text-[#D4AF37] transition-colors duration-500">
                  {partner.location}
                </span>
              </div>

              {/* Middle: Logo (Using brightness-0 invert to make dark logos white) */}
              <div className="flex-1 flex items-center justify-center w-full my-6">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-w-[140px] max-h-[80px] object-contain brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Bottom: Role & Name */}
              <div className="text-center w-full border-t border-white/5 pt-6 group-hover:border-[#D4AF37]/20 transition-colors duration-500">
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.15em] mb-2 leading-relaxed">
                  {partner.role}
                </p>
                <p className="text-base text-white font-serif italic">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. LIFESTYLE BRANDS RIBBON (Horizontal Strip) --- */}
        <div className="w-full bg-[#0a0a0a] border border-white/5 py-12 px-8 lg:px-16 flex flex-col items-center">
          <p className="text-[10px] text-[#D4AF37] uppercase tracking-[0.25em] mb-10 text-center font-semibold">
            Luxury Lifestyle Brands
          </p>
          
          <div className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-10 lg:gap-8">
            {lifestyleBrands.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Lifestyle Brand" 
                // Inverting here as well to ensure they show up crisp white on the dark background
                className="h-6 md:h-8 lg:h-10 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 hover:-translate-y-1 transition-all duration-500 cursor-pointer"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DellaAhmedabadPartners;