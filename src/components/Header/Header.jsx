import React, { useState, useRef, useEffect } from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Refs for Animation
  const headerBgRef = useRef(null);
  const topStripRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const ctaBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinkRefs = useRef([]);
  
  navLinksRef.current = [];
  mobileLinkRefs.current = [];

  const mainLinks = ['Residential', 'Offices', 'Rental', 'Retail', 'Hospitality'];

  // Handle Scroll for Glassmorphism & Strip Hiding
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock Body Scroll when Mobile Menu is Open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
  }, [isMobileOpen]);

  // Premium GSAP Animations
  useGSAP(() => {
    // --- 1. HEAVY ONLOAD ANIMATION ---
    const tlLoad = gsap.timeline({ delay: 3.8 }); 
    
    // Background and top strip drop down
    tlLoad.fromTo([headerBgRef.current, topStripRef.current], 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.1 }
    )
    // Logo fades up and scales slightly
    .fromTo(logoRef.current,
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
      "-=0.6"
    )
    // Nav links and CTA cascade down smoothly
    .fromTo([...navLinksRef.current, ctaBtnRef.current],
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power2.out' },
      "-=0.8"
    );

    // --- 2. EDITORIAL MOBILE MENU REVEAL ---
    if (isMobileOpen) {
      const tlMobile = gsap.timeline();
      tlMobile.to(mobileMenuRef.current, {
        y: '0%', 
        duration: 0.8,
        ease: 'power3.inOut',
      })
      .fromTo(mobileLinkRefs.current, 
        { y: 40, opacity: 0, rotationX: -20 }, 
        { y: 0, opacity: 1, rotationX: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' },
        "-=0.4"
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: '-100%',
        duration: 0.6,
        ease: 'power3.inOut',
      });
    }
  }, [isMobileOpen]);

  const addToNavRefs = (el) => {
    if (el && !navLinksRef.current.includes(el)) navLinksRef.current.push(el);
  };

  const addToMobileRefs = (el) => {
    if (el && !mobileLinkRefs.current.includes(el)) mobileLinkRefs.current.push(el);
  };

  return (
    <header className="fixed top-0 z-[100] w-full transition-all duration-700">
      
      {/* --- TIER 1: THE EXECUTIVE STRIP --- */}
      <div 
        ref={topStripRef}
        className={`hidden lg:flex w-full bg-[#050505] transition-all duration-700 ease-in-out overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-[36px] opacity-100 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full flex justify-between items-center text-[9px] tracking-[0.3em] uppercase font-semibold text-gray-500">
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-500 flex items-center gap-2"><Instagram size={12} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-500 flex items-center gap-2"><Facebook size={12} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors duration-500 flex items-center gap-2"><Linkedin size={12} /></a>
          </div>
          <div className="flex items-center gap-10">
            <a href="/investors" className="hover:text-white transition-colors duration-500">Investors</a>
            <a href="/foundation" className="hover:text-white transition-colors duration-500">Della Foundation</a>
            <a href="/press" className="hover:text-white transition-colors duration-500">Press Area</a>
          </div>
        </div>
      </div>

      {/* --- TIER 2: PRIMARY LUXURY NAVBAR --- */}
      <nav 
        ref={headerBgRef}
        className={`w-full transition-all duration-700 ${
          isScrolled 
            ? 'bg-[#050505]/90 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-b border-white/5 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            
            {/* LOGO: Image + Text Aligned */}
            <a ref={logoRef} href="/" className="flex-shrink-0 flex items-center gap-4 z-50 group">
                {/* Brand Logo Image */}
                <img 
                  src="https://cdn.dellatownships.com/images/logo/della-townships-logo.webp" 
                  alt="Della Logo" 
                  className="h-8 md:h-10 w-auto object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Architectural Divider */}
                <div className="h-8 w-px bg-white/20"></div>

                {/* Brand Text */}
               <div className="flex flex-col justify-center">
                 
                 <span className="text-xl sm:text-2xl font-serif font-light tracking-widest text-white leading-none drop-shadow-lg mb-1 ">
                   DELLA<span className="text-[#D4AF37] font-bold">.</span>
                 </span>
                 <span className="text-[7px] sm:text-[8px] tracking-[0.4em] uppercase text-gray-400 font-medium leading-none transition-colors duration-500 group-hover:text-white">
                   Ahmedabad International City
                 </span>
               </div>
            </a>

            {/* LINKS: Perfectly Centered */}
            <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-10 text-[10px] xl:text-[11px] font-medium tracking-[0.2em] uppercase text-gray-300">
              {mainLinks.map((item) => (
                <a ref={addToNavRefs} key={item} href={`/${item.toLowerCase()}`} className="relative group py-2">
                  <span className="group-hover:text-white transition-colors duration-500">{item}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#D4AF37] transform -translate-x-1/2 transition-all duration-500 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA & MOBILE: Right Aligned */}
            <div className="flex justify-end items-center gap-6 z-[120]">
              <button ref={ctaBtnRef} className="hidden lg:block relative px-8 py-3 bg-transparent border border-white/20 text-white text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.2em] rounded overflow-hidden group">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Request Invite</span>
                <div className="absolute inset-0 w-full h-full bg-[#D4AF37] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
              </button>

              {/* SMART HAMBURGER MENU (CSS Morphing) */}
              <button 
                onClick={() => setIsMobileOpen(!isMobileOpen)} 
                className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-end gap-[5px] group focus:outline-none"
              >
                <span className={`block h-[1px] bg-white transition-all duration-300 ease-in-out ${isMobileOpen ? 'w-6 rotate-45 translate-y-[6px]' : 'w-7 group-hover:w-6'}`}></span>
                <span className={`block h-[1px] bg-[#D4AF37] transition-all duration-300 ease-in-out ${isMobileOpen ? 'w-6 opacity-0 translate-x-2' : 'w-5 group-hover:w-6'}`}></span>
                <span className={`block h-[1px] bg-white transition-all duration-300 ease-in-out ${isMobileOpen ? 'w-6 -rotate-45 -translate-y-[6px]' : 'w-6'}`}></span>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* --- EDITORIAL MOBILE MENU --- */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 z-[110] bg-[#050505]/95 backdrop-blur-2xl h-[100dvh] w-full transform -translate-y-full lg:hidden flex flex-col"
      >
        <div className="h-20 flex items-center px-6 border-b border-white/5 mt-4">
           <span className="text-2xl font-serif font-light tracking-widest text-white leading-none">
             DELLA<span className="text-[#D4AF37] font-bold">.</span>
           </span>
        </div>
        
        <div className="flex-1 overflow-y-auto px-8 py-10 flex flex-col justify-center">
          <div className="space-y-6">
            {mainLinks.map((item, i) => (
               <div key={`main-${i}`} className="overflow-hidden">
                 <a ref={addToMobileRefs} href={`/${item.toLowerCase()}`} className="block text-4xl sm:text-5xl font-serif font-light text-gray-400 hover:text-[#D4AF37] transition-colors duration-500">
                   {item}
                 </a>
               </div>
            ))}
          </div>
          
          <div className="my-10 border-t border-white/10 w-12"></div>
          
          {/* Sub-links in Mobile */}
          <div className="grid grid-cols-2 gap-y-6">
             {["Investors", "Foundation", "Press", "Careers"].map((item, i) => (
               <div key={`sub-${i}`} className="overflow-hidden">
                 <a ref={addToMobileRefs} href={`#${item.toLowerCase()}`} className="block text-[10px] text-gray-500 uppercase tracking-[0.2em] hover:text-white transition-colors">
                   {item}
                 </a>
               </div>
             ))}
          </div>
        </div>

        <div className="p-6 border-t border-white/5 bg-[#050505]">
            <button className="w-full bg-[#D4AF37] text-black font-bold py-5 rounded uppercase tracking-[0.2em] text-[10px] hover:bg-white transition-colors duration-500 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              Request Private Invite
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;