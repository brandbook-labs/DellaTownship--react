import React from "react";
import {
  ArrowRight,
  Phone,
  Map,
  IndianRupee,
  Building2,
  Star,
} from "lucide-react";

const DellaHero = () => {
  // Using a direct MP4 link for the highest possible bitrate and zero-latency looping
  const videoUrl =
    "https://res.cloudinary.com/db7uvwjjv/video/upload/v1773592607/Welcome_to_Della_Resorts_India_s_Finest_Experiential_Hospitality_Destination_and_Luxury_Resort_1080P_Stitched_Clip_t2nnmn.mp4";

  return (
    <section className="relative h-[100dvh] min-h-[700px] w-full overflow-hidden font-sans flex items-center bg-black">
      {/* --- NATIVE VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          style={{ filter: "brightness(0.7) contrast(1.1)" }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- BACKGROUND OVERLAYS --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 via-black/30 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

      {/* --- CONTENT AREA --- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-left pt-20 md:pt-10 animate-fade-in">
          {/* Subtle Accent */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#C5A059]"></div>
            <span className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              India's 1st Global Integrated Township
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 drop-shadow-2xl">
            A Visionary City, <br />
            <span className="text-gray-300 italic font-light">
              Crafted for Eternity.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl">
            Discover a world-class ecosystem featuring an F1-certified racing
            track, Championship Golf course, and European Wellness hubs.
            Designed for those who demand the pinnacle of living.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <button className="flex items-center justify-center gap-3 bg-[#D4AF37] text-black px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#800020] transition-all duration-500 w-full sm:w-auto shadow-2xl group">
              <Phone
                size={14}
                className="group-hover:rotate-12 transition-transform"
              />
              Get In Touch
            </button>

            <button className="flex items-center justify-center gap-3 bg-transparent text-white border border-white/20 px-10 py-4 rounded-sm font-bold uppercase tracking-[0.2em] text-[10px] hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500 w-full sm:w-auto backdrop-blur-md">
              View Master Plan
              <ArrowRight size={14} />
            </button>
          </div>

          {/* --- DATA STRIP --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 border-t border-white/10 pt-8">
            <div className="flex flex-col border-l border-[#C5A059]/40 pl-5">
              <div className="flex items-center gap-2 mb-1">
                <Map className="text-[#C5A059]" size={14} />
                <p className="text-2xl font-serif font-bold text-white tracking-tight">
                  1,100
                </p>
              </div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                Acres of Scale
              </p>
            </div>

            <div className="flex flex-col border-l border-[#C5A059]/40 pl-5">
              <div className="flex items-center gap-2 mb-1">
                <IndianRupee className="text-[#C5A059]" size={14} />
                <p className="text-2xl font-serif font-bold text-white tracking-tight">
                  16K Cr
                </p>
              </div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                Project GDV
              </p>
            </div>

            <div className="flex flex-col border-l border-[#C5A059]/40 pl-5">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="text-[#C5A059]" size={14} />
                <p className="text-2xl font-serif font-bold text-white tracking-tight">
                  4,330
                </p>
              </div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                Private Villas
              </p>
            </div>

            <div className="flex flex-col border-l border-[#C5A059]/40 pl-5">
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-[#C5A059]" size={14} />
                <p className="text-2xl font-serif font-bold text-white tracking-tight">
                  100+
                </p>
              </div>
              <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
                Global Brands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default DellaHero;
