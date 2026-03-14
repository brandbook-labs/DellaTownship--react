import React, { useEffect, useState } from 'react';
import { 
  Heart, Sparkles, Scissors, Gem, 
  ArrowRight, Crown, ShoppingBag, 
  Star, Palette
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- 1. STRATEGIC BUNDLES (Bridal/Trousseau Packages) ---
const BUNDLES = [
  {
    id: 'B01',
    title: 'The Trousseau Edit',
    subtitle: 'For the Bride',
    desc: 'A complete wardrobe for your pre-wedding festivities. Haldi, Mehendi, and Sangeet.',
    includes: ['Yellow Silk Suit Set', 'Floral Pastel Lehenga', 'Custom Blouse Stitching'],
    price: '₹45,000',
    save: 'Save ₹5,000',
    icon: Heart,
    color: 'text-rose-500',
    borderColor: 'group-hover:border-rose-200'
  },
  {
    id: 'B02',
    title: 'The Royal Mahalaxmi',
    subtitle: 'Bridal Exclusive',
    desc: 'The ultimate bridal package. From your main wedding lehenga to reception elegance.',
    includes: ['Heavy Zardosi Lehenga', 'Reception Kanjeevaram Saree', 'Bridal Dupatta Draping'],
    price: '₹1,25,000',
    save: 'Most Popular',
    icon: Crown,
    color: 'text-[#800020]',
    borderColor: 'group-hover:border-[#800020]/30'
  },
  {
    id: 'B03',
    title: 'Festive Family Pack',
    subtitle: 'For the Family',
    desc: 'Coordinated outfits for the immediate family ensuring picture-perfect moments.',
    includes: ['2 Handloom Sarees', '2 Silk Kurta Sets', 'Kids Festive Wear (2)'],
    price: '₹65,000',
    save: 'High Value',
    icon: Sparkles,
    color: 'text-[#D4AF37]',
    borderColor: 'group-hover:border-[#D4AF37]/40'
  }
];

// --- 2. INDIVIDUAL SERVICES / COLLECTIONS ---
const SERVICES = [
  {
    id: '01',
    title: 'Bridal Lehengas',
    category: 'Wedding',
    desc: 'Hand-embroidered masterpieces designed for your most special day.',
    features: ['Custom Fits', 'Zardosi Work', 'Velvet & Silk', 'Heavy Dupattas'],
    icon: Crown,
    price: '₹25,000+',
  },
  {
    id: '02',
    title: 'Pure Silk Sarees',
    category: 'Handloom',
    desc: 'Authentic Kanjeevaram, Banarasi, and Chanderi silks sourced directly from weavers.',
    features: ['Pure Zari', 'Bridal Silks', 'Soft Silks', 'Temple Borders'],
    icon: Gem,
    price: '₹8,000+',
  },
  {
    id: '03',
    title: 'Custom Stitching',
    category: 'Tailoring',
    desc: 'In-house boutique tailoring for perfect blouse fits and suit alterations.',
    features: ['Designer Blouses', 'Latkan Work', 'Pico & Fall', 'Perfect Fit Guarantee'],
    icon: Scissors,
    price: '₹1,500+',
  },
  {
    id: '04',
    title: 'Festive Kurtas',
    category: 'Casual & Party',
    desc: 'Elegant Anarkalis, straight cuts, and sharara sets for everyday elegance.',
    features: ['Cotton Silk', 'Georgette', 'Chikankari', 'Hand Block Prints'],
    icon: Star,
    price: '₹2,500+',
  },
  {
    id: '05',
    title: 'Menswear Styling',
    category: 'Ethnic',
    desc: 'Classic Kurta Pajamas, Nehru Jackets, and Sherwanis for the modern man.',
    features: ['Raw Silk', 'Custom Tailoring', 'Matching Safas', 'Groom Sets'],
    icon: Palette,
    price: '₹4,000+',
  },
  {
    id: '06',
    title: 'Bridal Styling Consult',
    category: 'Service',
    desc: 'Not sure what suits you? Book a 1-on-1 session with our in-house stylist.',
    features: ['Color Analysis', 'Draping Ideas', 'Jewelry Pairing', 'Fabric Guide'],
    icon: Sparkles,
    price: 'Free Consult',
  }
];

// --- 3. WORKFLOW ---
const PROCESS = [
  { step: '01', title: 'Discover', text: 'Browse our collections online or visit our boutique to explore fabrics.' },
  { step: '02', title: 'Consult', text: 'Speak with our stylists for custom fittings, color palettes, and alterations.' },
  { step: '03', title: 'Craft', text: 'Our master tailors and artisans bring your vision to life with precision.' },
  { step: '04', title: 'Deliver', text: 'Experience the perfect fit. Delivered to your doorstep or ready for pickup.' },
];

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger CSS animations on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-16 md:pt-24 pb-20 overflow-hidden">
      
      {/* === HERO SECTION === */}
      <div className={`max-w-7xl mx-auto px-6 mb-20 md:mb-28 text-center transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <span className="text-[#800020] font-medium text-sm tracking-widest uppercase mb-4 block">
            House of Mahalaxmi
         </span>
         <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6 text-gray-900">
            Collections & <br/>
            <span className="italic font-normal text-gray-500">Bespoke Services.</span>
         </h1>
         <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            From ready-to-wear festive collections to custom bridal trousseaus, discover how we bring timeless elegance to your wardrobe.
         </p>
      </div>

      {/* === SECTION 1: STRATEGIC BUNDLES (Bridal Packages) === */}
      <div className={`max-w-7xl mx-auto px-6 mb-24 md:mb-32 transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 flex items-center gap-3">
               Curated Packages
            </h2>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 w-fit">
               Designed for your big day
            </span>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUNDLES.map((bundle) => (
               <div 
                 key={bundle.id} 
                 className={`group relative p-8 rounded-2xl border bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl shadow-sm border-gray-200 ${bundle.borderColor}`}
               >
                 {/* Badge */}
                 <div className="absolute top-0 right-0 bg-gray-50 px-4 py-1.5 rounded-bl-xl rounded-tr-xl border-l border-b border-gray-200">
                     <span className={`text-[10px] font-bold uppercase tracking-widest ${bundle.color}`}>
                         {bundle.save}
                     </span>
                 </div>

                 {/* Header */}
                 <div className="mb-6 mt-2">
                     <div className={`w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-5 ${bundle.color}`}>
                        <bundle.icon size={22} strokeWidth={1.5} />
                     </div>
                     <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-1 block">{bundle.subtitle}</span>
                     <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 leading-tight">{bundle.title}</h3>
                     <p className="text-sm text-gray-600 leading-relaxed min-h-[48px]">{bundle.desc}</p>
                 </div>

                 {/* Includes List */}
                 <div className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                     {bundle.includes.map((inc, i) => (
                         <div key={i} className="flex items-start gap-3">
                             <div className={`mt-1 shrink-0 w-1.5 h-1.5 rounded-full ${bundle.color.replace('text-', 'bg-')}`}></div>
                             <span className="text-sm font-medium text-gray-700">{inc}</span>
                         </div>
                     ))}
                 </div>

                 {/* Price & CTA */}
                 <div className="mt-auto pt-6 border-t border-gray-100">
                     <div className="flex justify-between items-end mb-5">
                         <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Starting at</span>
                         <span className={`text-2xl font-serif font-bold ${bundle.color}`}>{bundle.price}</span>
                     </div>
                     <Link 
                        to="/contact" 
                        className={`w-full py-3.5 bg-gray-900 hover:bg-[#800020] text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md`}
                     >
                        Book Consultation <ArrowRight size={16} />
                     </Link>
                 </div>
               </div>
            ))}
         </div>
      </div>

      {/* === SECTION 2: CORE COLLECTIONS & SERVICES === */}
      <div className={`max-w-7xl mx-auto px-6 mb-24 md:mb-32 transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900 flex items-center gap-3">
               Shop & Services
            </h2>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest border-b border-gray-300 pb-1 w-fit">
               Explore our offerings
            </span>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
               <div 
                 key={service.id} 
                 className="group relative p-8 rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-[#800020]/30 hover:shadow-lg flex flex-col h-full cursor-pointer"
               >
                 {/* Header */}
                 <div className="flex justify-between items-start mb-6">
                     <div className="p-3 rounded-full bg-gray-50 text-gray-600 group-hover:bg-[#800020]/5 group-hover:text-[#800020] transition-colors">
                        <service.icon size={24} strokeWidth={1.5} />
                     </div>
                     <span className="text-xs font-medium tracking-widest text-gray-300 uppercase">
                        {service.id}
                     </span>
                 </div>

                 {/* Content */}
                 <div className="mb-6 flex-grow">
                     <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#800020] transition-colors">{service.title}</h3>
                     <p className="text-sm text-gray-600 leading-relaxed">
                        {service.desc}
                     </p>
                 </div>

                 {/* Feature Tags */}
                 <div className="flex flex-wrap gap-2 mb-8">
                     {service.features.map(feat => (
                        <span key={feat} className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm bg-gray-100 text-gray-600">
                           {feat}
                        </span>
                     ))}
                 </div>

                 {/* Footer */}
                 <div className="flex justify-between items-end mt-auto pt-6 border-t border-gray-100">
                     <div>
                         <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">Starting at</span>
                         <span className="font-serif font-bold text-lg text-gray-900">{service.price}</span>
                     </div>
                     <Link 
                        to="/shop" 
                        className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white flex items-center justify-center transition-all"
                     >
                        <ArrowRight size={18} className="group-hover:-rotate-45 transition-transform duration-300" />
                     </Link>
                 </div>
               </div>
            ))}
         </div>
      </div>

      {/* === SECTION 3: WORKFLOW === */}
      <div className="bg-white border-y border-gray-200 py-20 md:py-28">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-[#800020] font-medium text-sm tracking-widest uppercase mb-4 block">The Mahalaxmi Experience</span>
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">How We <span className="italic font-normal text-gray-500">Work</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
               {PROCESS.map((proc, index) => (
                  <div key={proc.step} className="relative pt-6 md:pt-8 border-t border-gray-200 hover:border-[#800020] transition-colors group">
                     {/* Number Badge */}
                     <span className="absolute -top-4 left-0 bg-gray-50 px-2 text-gray-300 group-hover:text-[#800020] text-sm font-bold tracking-widest transition-colors">
                        {proc.step}
                     </span>
                     <h3 className="text-lg font-serif font-bold mb-3 text-gray-900">{proc.title}</h3>
                     <p className="text-gray-600 text-sm leading-relaxed pr-4">{proc.text}</p>
                     
                     {/* Connector Line (Desktop Only) */}
                     {index < PROCESS.length - 1 && (
                         <div className="hidden md:block absolute top-0 right-0 w-12 h-[1px] bg-gray-200 group-hover:bg-[#800020] transition-colors transform translate-x-1/2 -translate-y-[1px]"></div>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* === CTA SECTION === */}
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
         <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Ready to find your <br className="hidden md:block"/> <span className="italic text-[#800020] font-normal">perfect fit?</span>
         </h2>
         <p className="text-gray-600 mb-10 text-lg">
            Shop our latest arrivals online or book a consultation with our styling team for a bespoke bridal experience.
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
               to="/shop" 
               className="px-8 py-4 bg-[#800020] text-white font-medium text-sm uppercase tracking-wider rounded-md hover:bg-[#600018] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#800020]/20"
            >
               <ShoppingBag size={18} /> Shop Now
            </Link>
            <Link 
               to="/contact" 
               className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-medium text-sm uppercase tracking-wider rounded-md hover:bg-gray-50 hover:border-gray-400 transition-colors"
            >
               Book Consultation
            </Link>
         </div>
      </div>

    </div>
  );
}