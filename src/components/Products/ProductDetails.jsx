import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Added useParams and Link
import { 
  Heart, ShoppingBag, Star, Truck, 
  ShieldCheck, ArrowRight, Minus, Plus, 
  ChevronDown, ChevronUp, Ruler, RotateCcw
} from 'lucide-react';

// --- MOCK PRODUCT DATA ---
// Note: In a real app, you would use the 'id' from useParams to fetch 
// the correct product data from your backend. For now, we use a single mock object.
const product = {
  id: 'PRD-001',
  brand: 'House of Mahalaxmi',
  name: 'Handcrafted Maroon Velvet Bridal Lehenga',
  price: 35000,
  oldPrice: 42000,
  rating: 4.9,
  reviews: 128,
  description: 'Make your special day unforgettable with our masterfully crafted velvet lehenga. Featuring intricate zardosi, sequins, and zari embroidery, this majestic piece seamlessly blends traditional royal artistry with modern elegance.',
  images: [
    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610030469983-98e550d615e1?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583391733958-d25e0b46410f?q=80&w=1000&auto=format&fit=crop',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'],
  details: [
    { label: 'Fabric', value: 'Premium Velvet (Lehenga & Blouse), Soft Net (Dupatta)' },
    { label: 'Work', value: 'Heavy Zari, Zardosi, and Thread embroidery' },
    { label: 'Inclusions', value: 'Semi-stitched Lehenga, Unstitched Blouse piece, 1 Dupatta' },
    { label: 'Care Instructions', value: 'Dry clean only. Store in a cool, dry place away from direct sunlight.' }
  ]
};

export default function ProductDetails() {
  // 1. Grab the ID from the URL (e.g., localhost:5173/product/1 -> id = "1")
  const { id } = useParams(); 

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('details'); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
    // You can console.log(id) here to see that the router is successfully passing it!
  }, [id]); // Add 'id' to dependency array so it scrolls to top if the ID changes

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- BREADCRUMBS --- */}
        <nav className="flex text-xs font-medium text-gray-500 mb-8 uppercase tracking-widest">
          <Link to="/" className="hover:text-[#800020] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/women" className="hover:text-[#800020] transition-colors">Women</Link>
          <span className="mx-2">/</span>
          <Link to="/collections/wedding" className="hover:text-[#800020] transition-colors">Lehengas</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 truncate">{product.name}</span>
        </nav>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* ========================================== */}
          {/* LEFT: IMAGE GALLERY                        */}
          {/* ========================================== */}
          <div className="lg:col-span-7 flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
             
             {/* Thumbnails */}
             <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-24 shrink-0 scrollbar-hide snap-x">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-20 h-24 lg:w-full lg:h-32 rounded-lg overflow-hidden shrink-0 snap-center transition-all duration-300 border-2 ${
                      selectedImage === idx ? 'border-[#800020]' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    {selectedImage !== idx && <div className="absolute inset-0 bg-white/20"></div>}
                  </button>
                ))}
             </div>

             {/* Main Image */}
             <div className="w-full aspect-[3/4] md:aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden relative">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-top transition-opacity duration-500"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#800020] hover:bg-white transition-all shadow-sm">
                  <Heart size={20} />
                </button>
             </div>
          </div>

          {/* ========================================== */}
          {/* RIGHT: PRODUCT INFO                        */}
          {/* ========================================== */}
          <div className="lg:col-span-5 flex flex-col">
            
            <p className="text-[#800020] font-medium text-xs tracking-widest uppercase mb-2">
              {product.brand}
            </p>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
               <div className="flex items-center gap-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"} />
                 ))}
               </div>
               <span className="text-sm font-medium text-gray-500 underline decoration-gray-300 underline-offset-4 cursor-pointer hover:text-gray-900">
                 {product.reviews} Reviews
               </span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-200">
               <span className="text-3xl font-serif font-bold text-gray-900 leading-none">
                 {formatPrice(product.price)}
               </span>
               {product.oldPrice && (
                 <span className="text-lg text-gray-400 line-through mb-0.5">
                   {formatPrice(product.oldPrice)}
                 </span>
               )}
               <span className="text-xs text-green-600 font-bold uppercase tracking-wider mb-1 ml-2 bg-green-50 px-2 py-1 rounded-sm">
                 Save {formatPrice(product.oldPrice - product.price)}
               </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
               <div className="flex justify-between items-center mb-4">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">Select Size</h3>
                 <button className="flex items-center gap-1 text-xs font-medium text-[#800020] hover:underline underline-offset-2">
                   <Ruler size={14} /> Size Guide
                 </button>
               </div>
               <div className="flex flex-wrap gap-3">
                 {product.sizes.map((size) => (
                   <button
                     key={size}
                     onClick={() => setSelectedSize(size)}
                     className={`px-4 py-3 border rounded-md text-sm font-medium transition-all ${
                       selectedSize === size 
                         ? 'border-[#800020] bg-[#800020]/5 text-[#800020] shadow-sm' 
                         : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                     }`}
                   >
                     {size}
                   </button>
                 ))}
               </div>
            </div>

            {/* Add to Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
               {/* Quantity */}
               <div className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3 w-full sm:w-32 bg-white">
                 <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-gray-900">
                   <Minus size={16} />
                 </button>
                 <span className="font-bold text-gray-900">{quantity}</span>
                 <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-gray-900">
                   <Plus size={16} />
                 </button>
               </div>
               
               {/* Add Button */}
               <Link to="/cart" className="flex-1 bg-[#800020] hover:bg-[#600018] text-white font-bold uppercase tracking-widest text-sm py-4 rounded-md transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#800020]/20">
                 <ShoppingBag size={18} /> Add to Bag
               </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mb-10 p-5 bg-gray-50 rounded-xl border border-gray-100">
               <div className="flex items-center gap-3">
                 <Truck size={20} className="text-[#800020]" />
                 <div>
                   <p className="text-sm font-bold text-gray-900">Free Shipping</p>
                   <p className="text-xs text-gray-500">On orders over ₹5000</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <RotateCcw size={20} className="text-[#800020]" />
                 <div>
                   <p className="text-sm font-bold text-gray-900">Easy Returns</p>
                   <p className="text-xs text-gray-500">7-day return policy</p>
                 </div>
               </div>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-200">
               {/* Details Accordion */}
               <div className="border-b border-gray-200">
                 <button 
                   onClick={() => toggleAccordion('details')}
                   className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
                 >
                   <span className="text-sm font-bold uppercase tracking-widest text-gray-900">Product Details</span>
                   {activeAccordion === 'details' ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
                 </button>
                 <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'details' ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="space-y-3">
                      {product.details.map((detail, idx) => (
                        <li key={idx} className="flex flex-col sm:flex-row text-sm">
                          <span className="font-bold text-gray-900 sm:w-1/3">{detail.label}:</span>
                          <span className="text-gray-600 sm:w-2/3">{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
               </div>

               {/* Shipping Accordion */}
               <div className="border-b border-gray-200">
                 <button 
                   onClick={() => toggleAccordion('shipping')}
                   className="w-full py-5 flex justify-between items-center text-left focus:outline-none"
                 >
                   <span className="text-sm font-bold uppercase tracking-widest text-gray-900">Shipping & Delivery</span>
                   {activeAccordion === 'shipping' ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
                 </button>
                 <div className={`overflow-hidden transition-all duration-300 ${activeAccordion === 'shipping' ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Standard orders are dispatched within 2-3 business days. Custom-fit orders require an additional 5-7 days for tailoring. You will receive a tracking link via email once your order is shipped.
                    </p>
                 </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}