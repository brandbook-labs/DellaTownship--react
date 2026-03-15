import React from 'react';
import { Quote } from 'lucide-react';

const FounderVision = () => {
  return (
    <section className="relative bg-[#050505] py-24 lg:py-32 overflow-hidden border-y border-white/5 font-sans">
      
      {/* --- SUBTLE BACKGROUND GLOW (Mimicking the globe's presence) --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[1000px] h-[600px] lg:h-[1000px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT: FOUNDER IMAGE & TITLE --- */}
          <div className="w-full lg:w-5/12 flex flex-col items-center relative">
            {/* Note: If your provided webp is the entire wide banner with text, it's highly recommended 
              to replace this URL with just a cutout portrait of Jimmy Mistry for the best responsive web design.
            */}
            <img 
              src="https://cdn.dellatownships.com/images/della-townships-jimmy-mistry-jrm.webp" 
              alt="Jimmy Mistry" 
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
            />
            
            <div className="text-center mt-8 space-y-2">
              <h3 className="text-3xl font-serif italic text-[#D4AF37]">Jimmy Mistry</h3>
              <p className="text-[10px] sm:text-xs text-white uppercase tracking-[0.2em] font-medium">
                Founder & CMD
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                Della Townships
              </p>
            </div>
          </div>

          {/* --- RIGHT: THE VISION TEXT --- */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center text-center lg:text-left">
            
            {/* Large Decorative Quote */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Quote size={56} className="text-[#D4AF37] opacity-40 fill-current" />
            </div>

            <div className="space-y-10 lg:space-y-12">
              
              {/* Block 1 */}
              <div>
                <p className="text-sm sm:text-base text-gray-400 uppercase tracking-[0.2em] mb-2">
                  As a design futurist,
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-widest leading-snug">
                  I don't follow the future,<br /> I design it.
                </h2>
              </div>

              {/* Block 2 */}
              <p className="text-sm sm:text-base text-gray-300 font-medium uppercase tracking-[0.15em] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                The world doesn't need another real estate project. 
                It needs a new way of <span className="font-serif italic text-[#D4AF37] text-xl sm:text-2xl capitalize tracking-normal border-b border-[#D4AF37]/50 px-1 mx-1">Salutogenic Living</span> blending design, wellness, & purpose.
              </p>

              {/* Block 3 */}
              <p className="text-sm sm:text-base text-gray-300 font-medium uppercase tracking-[0.15em] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Della Townships are my blueprint for that change. 
                Where every township, becomes a catalyst for social, economic, & human impact. 
                Each one redefining how <span className="font-serif italic text-[#D4AF37] text-xl sm:text-2xl capitalize tracking-normal px-1">India Lives, Works & Dreams.</span>
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FounderVision;