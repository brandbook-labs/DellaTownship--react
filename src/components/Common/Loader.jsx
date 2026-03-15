import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const UltraPremiumLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const topPanel = useRef(null);
  const bottomPanel = useRef(null);
  const centerLine = useRef(null);
  const imageWrapper = useRef(null);
  const imageStackRefs = useRef([]); 
  const phraseRefs = useRef([]);
  const brandText = useRef(null);
  const counterValueRef = useRef(null);

  const multiImages = [
    'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-european-wellness/grid-factfiles/popup/della-townships-ahmedabad-mayrlife-wellness-private-offices.webp',
    'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-european-wellness/grid-factfiles/popup/della-townships-ahmedabad-mayrlife-wellness-retail.webp',
    'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/research-retail/popup-research-5.webp'
  ];

  // We split the stats into an elegant array of phrases
  const elegantPhrases = [
    "1,100 Acres of Vision", 
    "Redefining How India Lives"
  ];

  const addToPhraseRefs = (el) => {
    if (el && !phraseRefs.current.includes(el)) {
      phraseRefs.current.push(el);
    }
  };

  const addToImageRefs = (el) => {
    if (el && !imageStackRefs.current.includes(el)) {
      imageStackRefs.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // 1. Initial State Setup
    gsap.set(imageWrapper.current, { scale: 1.1 });
    gsap.set(imageStackRefs.current.slice(1), { opacity: 0 }); // Hide images 2 & 3
    gsap.set(brandText.current, { opacity: 0, scale: 0.95, y: 20 });
    
    // Set all phrases down and invisible initially
    gsap.set(phraseRefs.current, { y: 20, opacity: 0 });

    // Smooth Precision Counter (Accelerated to 1.5 seconds)
    gsap.to({ val: 0 }, {
      val: 100,
      duration: 1.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        if (counterValueRef.current) {
          counterValueRef.current.innerText = Math.floor(this.targets()[0].val).toString().padStart(3, '0');
        }
      }
    });

    // 2. The Gold Strike (Faster)
    tl.to(centerLine.current, {
      width: '100%',
      duration: 0.6,
      ease: 'power3.inOut'
    }, 0.1);

    // 3. The Fast-Tracked Phrase Sequence
    phraseRefs.current.forEach((phrase, index) => {
      tl.to(phrase, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out'
      }, index === 0 ? 0.3 : "+=0.05") // Extremely tight overlap
      .to(phrase, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in'
      }, "+=0.3"); // Hold for just 0.3s
    });

    // 4. The Aperture Opens (Triggers at exactly 2.5 seconds)
    tl.to(centerLine.current, { scaleY: 0, duration: 0.1 }, 2.4)
      .to([topPanel.current, bottomPanel.current], {
        scaleY: 0, 
        duration: 1.2,
        ease: 'power4.inOut'
      }, 2.5);

    // Start background image crossfades and panning (Overlapped heavily)
    tl.to(imageWrapper.current, {
        scale: 1,
        duration: 2.5, // Matches the remaining loader time
        ease: 'power1.out'
      }, 2.5)
      .to(imageStackRefs.current[1], { opacity: 1, duration: 0.8, ease: 'power2.inOut'}, 2.8)
      .to(imageStackRefs.current[2], { opacity: 1, duration: 0.8, ease: 'power2.inOut'}, 3.4);

    // 5. The Brand Reveal (Explodes in as doors open)
    tl.to(brandText.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out'
    }, 2.6);

    // 6. Final Dissolve (Starts at 4.0s, finishes at 5.0s max)
    tl.to(brandText.current, { scale: 1.05, opacity: 0, duration: 0.6, ease: 'power2.inOut' }, 4.0)
      .to(counterValueRef.current.parentNode.parentNode, { opacity: 0, duration: 0.4 }, 4.0)
      .to('.decorative-coords', { opacity: 0, duration: 0.4 }, 4.0)
      .to(containerRef.current, { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, 4.2);

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden select-none pointer-events-none"
    >
      
      {/* 1. Background Cinematic Images */}
      <div ref={imageWrapper} className="absolute inset-0 w-full h-full transform origin-center will-change-transform">
        {multiImages.map((src, index) => (
          <img 
            key={index}
            ref={addToImageRefs}
            src={src} 
            alt={`Della Concept ${index + 1}`} 
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.5] contrast-125 grayscale-[0.1] will-change-opacity"
          />
        ))}
        {/* Soft elegant vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black opacity-80 z-0"></div>
      </div>

      {/* 2. The Aperture Panels (Black solid doors) */}
      <div ref={topPanel} className="absolute top-0 left-0 w-full h-[50.2%] bg-[#050505] origin-top z-10 will-change-transform"></div>
      <div ref={bottomPanel} className="absolute bottom-0 left-0 w-full h-[50.2%] bg-[#050505] origin-bottom z-10 will-change-transform"></div>

      {/* 3. The Gold Strike Line */}
      <div ref={centerLine} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[1px] w-0 bg-[#D4AF37] z-20 shadow-[0_0_20px_#D4AF37] will-change-transform"></div>

      {/* 4. Elegant Text Sequence */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
        
        <div className="h-12 md:h-20 lg:h-24 overflow-hidden relative w-full">
          {elegantPhrases.map((phrase, index) => (
            <h2 
              key={index} 
              ref={addToPhraseRefs}
              className="absolute top-0 left-0 w-full text-[#D4AF37] font-sans text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.4em] font-semibold text-center will-change-transform will-change-opacity"
            >
              {phrase}
            </h2>
          ))}
        </div>

        <h1 
          ref={brandText} 
          className="absolute text-white font-serif text-5xl md:text-8xl lg:text-[10rem] tracking-tight leading-none will-change-transform will-change-opacity drop-shadow-2xl font-light"
        >
          DELLA<span className="text-[#D4AF37]">.</span>
        </h1>

      </div>

      {/* 5. Precision Counter */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-40 flex items-start gap-1 overflow-hidden">
        <div className="flex flex-col items-end">
          <span className="text-[#D4AF37] text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-1 opacity-70">Initializing Grid</span>
          <div className="flex items-baseline">
            <span 
              ref={counterValueRef}
              className="text-white text-4xl md:text-6xl font-light font-sans tracking-tighter tabular-nums leading-none"
            >
              000
            </span>
            <span className="text-gray-500 text-lg md:text-xl font-bold ml-1">%</span>
          </div>
        </div>
      </div>

      {/* Decorative Static Coordinates */}
      <div className="decorative-coords absolute top-8 left-8 md:top-12 md:left-12 z-40 opacity-40">
        <p className="text-white text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono leading-loose">
          
          <span className="text-[#D4AF37] mt-1 inline-block">AHMEDABAD, INDIA</span>
        </p>
      </div>

    </div>
  );
};

export default UltraPremiumLoader;