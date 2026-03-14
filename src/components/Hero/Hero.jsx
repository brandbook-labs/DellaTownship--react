import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-[#FAF8F5] py-12 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#800020]/10 text-[#800020] text-sm font-medium mb-6 w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#800020] animate-pulse"></span>
              New Festive Collection
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15] mb-6">
              Timeless Elegance, <br className="hidden lg:block" />
              <span className="text-[#800020]">Woven for You.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover House of Mahalaxmi's exclusive range of handcrafted silk sarees, bridal lehengas, and premium ethnic wear designed for every celebration.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a 
                href="/shop" 
                className="flex items-center justify-center gap-2 bg-[#800020] text-white px-8 py-4 rounded-md font-medium hover:bg-[#600018] transition-colors w-full sm:w-auto shadow-md"
              >
                <ShoppingBag size={20} />
                Shop Now
              </a>
              <a 
                href="/collections" 
                className="flex items-center justify-center gap-2 bg-transparent text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-md font-medium hover:border-[#800020] hover:text-[#800020] transition-colors w-full sm:w-auto"
              >
                View Collections
                <ArrowRight size={20} />
              </a>
            </div>
            
            {/* Simple Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-gray-200 flex items-center justify-center lg:justify-start gap-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">10k+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Authentic Silk</p>
              </div>
            </div>

          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            
            {/* Decorative background blob/shadow */}
            <div className="absolute top-4 right-4 lg:right-12 w-[90%] sm:w-[75%] h-full bg-[#D4AF37]/20 rounded-t-[140px] rounded-b-2xl -z-10"></div>
            
            {/* Main Image with Arch Shape */}
            <div className="relative w-[90%] sm:w-[75%] aspect-[3/4] lg:mr-8 overflow-hidden rounded-t-[140px] rounded-b-2xl border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1610030469983-98e550d615e1?q=80&w=1000&auto=format&fit=crop" 
                alt="Beautiful traditional Indian saree" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Small Floating "Best Seller" Card */}
            <div className="absolute bottom-8 left-0 lg:left-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FAF8F5] rounded-full flex items-center justify-center border border-gray-100">
                <span className="text-xl">✨</span>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Best Seller</p>
                <p className="text-xs text-gray-500">Kanjeevaram Silk</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;