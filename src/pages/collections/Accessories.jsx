import React, { useState, useEffect } from 'react';
import { ChevronDown, ShoppingBag, Heart, Eye, Star, SlidersHorizontal } from 'lucide-react';

const products = [
  { id: 51, name: 'Gold Plated Kundan Choker', category: 'Jewelry', price: 3500, oldPrice: 4200, rating: 4.9, reviews: 112, image: 'https://images.unsplash.com/photo-1599643478524-fb66f7f6f52e?q=80&w=600&auto=format&fit=crop', badge: 'Bestseller' },
  { id: 52, name: 'Pearl Embellished Potli Bag', category: 'Bags', price: 1800, oldPrice: null, rating: 4.8, reviews: 45, image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=600&auto=format&fit=crop' },
  { id: 53, name: 'Handcrafted Bridal Juttis', category: 'Footwear', price: 2200, oldPrice: 2800, rating: 4.7, reviews: 67, image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=600&auto=format&fit=crop', badge: 'Trending' },
  { id: 54, name: 'Oxidized Silver Jhumkas', category: 'Jewelry', price: 850, oldPrice: null, rating: 4.9, reviews: 230, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop' },
];

export default function AccessoriesCollection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => setIsLoaded(true), []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav className="flex text-xs font-medium text-gray-500 mb-8 uppercase tracking-widest">
          <a href="/" className="hover:text-[#800020] transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Accessories</span>
        </nav>

        <div className={`mb-12 transition-all duration-700 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Accessories</h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            The perfect finishing touches. Elevate your ethnic look with our handcrafted jewelry, designer potli bags, and traditional footwear.
          </p>
        </div>

        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 mb-8 border-y border-gray-200 transition-all duration-700 delay-100 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
           <div className="text-sm font-medium text-gray-500">Showing {products.length} products</div>
           <div className="flex items-center gap-4 w-full sm:w-auto">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center">
                 <SlidersHorizontal size={16} /> Filters
              </button>
              <div className="relative w-full sm:w-auto">
                 <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none w-full sm:w-auto bg-transparent border border-gray-300 rounded-md py-2 pl-4 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:border-[#800020] cursor-pointer">
                   <option value="featured">Sort by: Featured</option>
                   <option value="newest">Newest Arrivals</option>
                   <option value="price-low">Price: Low to High</option>
                 </select>
                 <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
           </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12 transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
}

const ProductCard = ({ product }) => {
  const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  return (
    <div className="group flex flex-col cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg mb-4">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        {product.badge && <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-gray-900 uppercase tracking-wider rounded-sm shadow-sm z-10">{product.badge}</div>}
        <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent z-20">
          <div className="flex w-full gap-2 justify-center">
            <button className="flex-1 bg-white text-gray-900 py-2.5 rounded-sm font-medium hover:bg-[#800020] hover:text-white transition-colors text-sm flex items-center justify-center gap-2"><ShoppingBag size={16} /> Add</button>
            <button className="p-2.5 bg-white text-gray-900 rounded-sm hover:text-[#800020] transition-colors"><Heart size={18} /></button>
            <button className="p-2.5 bg-white text-gray-900 rounded-sm hover:text-gray-600 transition-colors"><Eye size={18} /></button>
          </div>
        </div>
        <button className="lg:hidden absolute bottom-2 right-2 h-10 w-10 bg-white/90 backdrop-blur-sm text-gray-900 flex items-center justify-center rounded-full shadow-md active:scale-95 transition-transform z-20"><ShoppingBag size={18} /></button>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mb-1">{product.category}</p>
        <h3 className="text-sm md:text-base font-serif font-medium text-gray-900 group-hover:text-[#800020] transition-colors leading-snug line-clamp-2 mb-2">{product.name}</h3>
        <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base md:text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>}
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
            <span className="text-xs text-gray-500">{product.rating} <span className="hidden sm:inline">({product.reviews})</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};