import React from 'react';
import { 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin,
  ArrowUpRight
} from 'lucide-react';

export default function LuxuryFooter() {
  const col1Links = [
    { name: '12 Townships Pre Launched', href: '#' },
    { name: 'Operational Townships', href: '#' },
    { name: 'Della CDDMO', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Della Foundation', href: '#' },
    { name: 'GCC Hubs', href: '#' },
    { name: 'Collaborative Designers', href: '#' },
  ];

  const col2Links = [
    { name: 'Della Design Districts', href: '#' },
    { name: 'Medical Wellness', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Salutogenic Living', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Site Map', href: '#' },
  ];

  return (
    <footer className="text-white font-sans overflow-hidden relative z-10 pt-10 lg:pt-20">
      
      {/* Massive Background Watermark (Adds Editorial Scale) */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[20vw] font-serif font-bold text-white/[0.008] pointer-events-none select-none whitespace-nowrap z-0">
        DELLA
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* --- MAIN ASYMMETRICAL GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-20">
          
          {/* LEFT PANE: Branding, Newsletter & Socials (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div>
              <h2 className="text-5xl lg:text-7xl font-serif font-light mb-8">
                DELLA<span className="text-[#C5A059]">.</span>
              </h2>
              <p className="text-gray-400 text-sm lg:text-base font-light leading-relaxed max-w-sm mb-12">
                India's first luxury integrated city. Redefining global living through architecture, wellness, and motorsport.
              </p>
            </div>

            {/* Premium Newsletter Input */}
            <div className="w-full max-w-md mb-12">
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Stay Informed</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent border-b border-white/20 text-white text-lg lg:text-xl py-3 pr-12 focus:outline-none focus:border-[#C5A059] transition-colors font-light placeholder-gray-600"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-[#C5A059] transition-colors p-2">
                  <ArrowRight size={24} strokeWidth={1.5} className="transform transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Minimalist Socials */}
            <div>
              <div className="flex gap-6">
                {[
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Youtube, label: 'YouTube' },
                  { Icon: Twitter, label: 'Twitter' }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    aria-label={social.label}
                    className="text-gray-500 hover:text-[#C5A059] hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.Icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANE: Links and Addresses (7 Columns nested into 3) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pt-4">
            
            {/* Links Column 1 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-8">The Portfolio</h4>
              <ul className="space-y-4">
                {col1Links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="group flex items-center gap-2 w-max text-gray-400 hover:text-[#C5A059] transition-colors">
                      <span className="text-[11px] uppercase tracking-widest font-medium transition-transform duration-300 group-hover:translate-x-1">
                        {link.name}
                      </span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Corporate</h4>
              <ul className="space-y-4">
                {col2Links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="group flex items-center gap-2 w-max text-gray-400 hover:text-[#C5A059] transition-colors">
                      <span className="text-[11px] uppercase tracking-widest font-medium transition-transform duration-300 group-hover:translate-x-1">
                        {link.name}
                      </span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Addresses Column */}
            <div className="flex flex-col space-y-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              
              {/* HQ */}
              <div>
                <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Headquarters</h4>
                <address className="not-italic text-gray-400 text-xs leading-relaxed font-light mb-4">
                  Della Tower, Jame Jamshed Road,<br/>
                  Parsi Colony, Dadar (E),<br/>
                  Mumbai - 400014, India.
                </address>
                <div className="space-y-2">
                  <a href="tel:180030006177" className="block text-[11px] tracking-widest text-[#C5A059] hover:text-white transition-colors">
                    1800 3000 6177
                  </a>
                  <a href="mailto:info@dellatownships.com" className="block text-[11px] tracking-widest text-[#C5A059] hover:text-white transition-colors">
                    info@dellatownships.com
                  </a>
                </div>
              </div>

              {/* Regional */}
              <div>
                <h4 className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Regional Offices</h4>
                
                <div className="mb-6 border-l border-white/10 pl-4 hover:border-[#C5A059] transition-colors duration-300">
                  <p className="text-[10px] text-white uppercase tracking-widest mb-1">Lonavala</p>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">Kunegaon Lonavala, MH - 410401</p>
                </div>

                <div className="border-l border-white/10 pl-4 hover:border-[#C5A059] transition-colors duration-300">
                  <p className="text-[10px] text-white uppercase tracking-widest mb-1">Jaipur</p>
                  <p className="text-gray-400 text-xs font-light leading-relaxed">Horizon Towers, Malviya Nagar, RJ - 302017</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* --- BOTTOM COPYRIGHT BAR --- */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-semibold text-center md:text-left">
            &copy; {new Date().getFullYear()} DELLA TOWNSHIPS <span className="mx-2 text-white/20">|</span> ALL RIGHTS RESERVED
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors">Legal Disclaimer</a>
          </div>
        </div>

      </div>

      {/* Inline Styles for Entrance Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />
    </footer>
  );
}