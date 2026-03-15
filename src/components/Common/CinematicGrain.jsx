import React from 'react';

const ModernGrain = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] h-full w-full overflow-hidden opacity-[0.12] mix-blend-screen">
      <svg className="absolute left-[-25%] top-[-25%] h-[150%] w-[150%] animate-[filmJitter_8s_steps(10)_infinite]">
        
        <filter id="cinematicNoise">
          {/* 1. Generates the noise */}
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="1" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
          {/* 2. THIS STRIPS THE COLOR -> Turns rainbow static into pure cinematic B&W grain */}
          <feColorMatrix type="saturate" values="0" />
        </filter>
        
        <rect width="100%" height="100%" filter="url(#cinematicNoise)" />
      </svg>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes filmJitter {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-1%, -1%); }
          20% { transform: translate(1%, 1%); }
          30% { transform: translate(-2%, 1%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-1%, 2%); }
          60% { transform: translate(2%, -2%); }
          70% { transform: translate(-2%, -1%); }
          80% { transform: translate(1%, 2%); }
          90% { transform: translate(-1%, 1%); }
        }
      `}} />
    </div>
  );
};

export default ModernGrain;