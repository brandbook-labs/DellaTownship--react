import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Instagram, Facebook, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for Animation
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinkRefs = useRef([]);

  // Handle Scroll to hide Top Strip
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Body Scroll for Mobile Menu
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  // GSAP Animations
  useGSAP(() => {
    // 1. Initial Loading Animation
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    // 2. Mobile Menu Animation
    if (isMobileOpen) {
      const tl = gsap.timeline();
      tl.to(mobileMenuRef.current, {
        x: '0%',
        duration: 0.6,
        ease: 'expo.out',
      })
      .fromTo(mobileLinkRefs.current, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
        "-=0.4"
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'expo.inOut',
      });
    }
  }, [isMobileOpen]);

  // Helper to collect refs for staggering
  const addToRefs = (el) => {
    if (el && !mobileLinkRefs.current.includes(el)) {
      mobileLinkRefs.current.push(el);
    }
  };

  return (
    <header ref={headerRef} className="fixed top-0 z-50 w-full">
      {/* --- TIER 1: TOP CORPORATE STRIP (Hides on Scroll) --- */}
      <div 
        className={`hidden md:flex w-full bg-[#050505] border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-[36px] opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-500">
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300"><Instagram size={13} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300"><Facebook size={13} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-300"><Linkedin size={13} /></a>
          </div>
          <div className="flex items-center gap-8">
            <a href="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About Us</a>
            <a href="/investors" className="hover:text-[#D4AF37] transition-colors duration-300">Investors</a>
            <a href="/foundation" className="hover:text-[#D4AF37] transition-colors duration-300">The Laugh Foundation</a>
            <a href="/press" className="hover:text-[#D4AF37] transition-colors duration-300">Press</a>
          </div>
        </div>
      </div>

      {/* --- TIER 2: PRIMARY NAVBAR --- */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-2xl' : 'bg-[#0a0a0a]'} text-white border-b border-white/5 font-sans`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Left */}
            <a href="/" className="flex-shrink-0 flex items-center gap-3 z-50 group">
               <div className="flex flex-col justify-center">
                 <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-gray-500 font-medium leading-none mb-1 ml-0.5 transition-colors group-hover:text-gray-400">
                   Ahmedawad International City
                 </span>
                 <span className="text-xl sm:text-2xl font-serif font-bold tracking-widest text-white leading-none">
                   DELLA<span className="text-[#D4AF37]">.</span>
                 </span>
               </div>
            </a>

            {/* Nav & Action Right */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center space-x-10 text-sm font-medium tracking-wide text-gray-300">
                <a href="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</a>
                <a href="/vision" className="hover:text-[#D4AF37] transition-colors duration-300">The Vision</a>
                <a href="/lifestyle" className="hover:text-[#D4AF37] transition-colors duration-300">Lifestyle</a>
                
                {/* Dropdown */}
                <div 
                  className="relative group h-20 flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none">
                    Properties <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`absolute top-[80px] right-0 w-64 bg-[#111111] border border-white/10 rounded-lg shadow-2xl p-2 transition-all duration-300 origin-top-right ${isServicesOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                    <div className="flex flex-col">
                      <a href="#" className="px-4 py-3 rounded-md hover:bg-[#1a1a1a] hover:text-[#D4AF37] text-sm font-medium transition-colors">Luxury Villas</a>
                      <a href="#" className="px-4 py-3 rounded-md hover:bg-[#1a1a1a] hover:text-[#D4AF37] text-sm font-medium transition-colors">Premium Apartments</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium CTA Button */}
              <button className="px-7 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-[11px] font-bold uppercase tracking-[0.2em] rounded hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
                Get In Touch
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileOpen(true)} className="text-white p-2 hover:text-[#D4AF37] transition-colors">
                <Menu size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      

      {/* --- MOBILE FULL SCREEN MENU --- */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl h-screen w-full transform translate-x-full md:hidden flex flex-col"
      >
        <div className="h-20 flex items-center justify-end px-4 border-b border-white/10">
           <button onClick={() => setIsMobileOpen(false)} className="p-2 text-gray-400 hover:text-white transition-colors">
             <X size={32} strokeWidth={1.5} />
           </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 space-y-12 flex flex-col justify-center">
          <div className="space-y-6">
            {["Home", "The Vision", "Lifestyle"].map((item, i) => (
               <div key={`main-${i}`} className="overflow-hidden">
                 <a ref={addToRefs} href={`/${item.toLowerCase().replace(' ', '-')}`} className="block text-4xl font-serif font-light text-white hover:text-[#D4AF37] transition-colors">
                   {item}
                 </a>
               </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 w-16"></div>
          
          <div className="space-y-5">
             {["Intro", "Motor Racing", "Golf", "Design", "Wellness"].map((item, i) => (
               <div key={`sub-${i}`} className="overflow-hidden">
                 <a ref={addToRefs} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block text-sm text-gray-400 uppercase tracking-[0.2em] hover:text-white transition-colors">
                   {item}
                 </a>
               </div>
             ))}
          </div>
        </div>

        <div className="p-8 border-t border-white/10">
            <button className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors duration-300">
              Get In Touch
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;