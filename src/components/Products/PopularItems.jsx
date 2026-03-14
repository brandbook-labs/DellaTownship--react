import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, ArrowRight, Shirt } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// --- CLOTHING DATA WITH IMAGES ---
const products = [
  {
    id: 1,
    name: 'Banarasi Silk Saree with Zari Work',
    category: 'Sarees',
    price: 12500,
    oldPrice: 15000,
    rating: 5.0,
    reviews: 112,
    // Red Silk Saree
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d615e1?q=80&w=600&auto=format&fit=crop', 
    badge: 'Bestseller',
    tabs: ['All', 'Best Sellers', 'Trending'],
  },
  {
    id: 2,
    name: 'Embroidered Velvet Bridal Lehenga',
    category: 'Lehengas',
    price: 35000,
    oldPrice: 42000,
    rating: 4.9,
    reviews: 48,
    // Bridal Lehenga
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
    badge: 'New',
    tabs: ['All', 'New Arrivals'],
  },
  {
    id: 3,
    name: 'Cotton Floral Anarkali Suit',
    category: 'Kurtas',
    price: 3200,
    oldPrice: null,
    rating: 4.7,
    reviews: 156,
    // Yellow/White Anarkali Suit
    image: 'https://images.unsplash.com/photo-1583391733958-d25e0b46410f?q=80&w=600&auto=format&fit=crop',
    tabs: ['All', 'Trending'],
  },
  {
    id: 4,
    name: 'Kanjeevaram Temple Border Saree',
    category: 'Sarees',
    price: 18000,
    oldPrice: 21000,
    rating: 4.8,
    reviews: 320,
    // Traditional South Indian Saree
    image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=600&auto=format&fit=crop',
    badge: 'Sale',
    tabs: ['All', 'Best Sellers'],
  },
  {
    id: 5,
    name: 'Mens Classic Silk Kurta Pajama',
    category: 'Menswear',
    price: 4500,
    oldPrice: 5500,
    rating: 4.8,
    reviews: 84,
    // Men's White Kurta
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600&auto=format&fit=crop',
    tabs: ['All', 'New Arrivals', 'Trending'],
  },
  {
    id: 6,
    name: 'Chanderi Handloom Saree',
    category: 'Sarees',
    price: 6500,
    oldPrice: null,
    rating: 4.6,
    reviews: 45,
    // Printed Handloom Fabric/Kurta
    image: 'https://images.unsplash.com/photo-1583391733975-eb76fad0e867?q=80&w=600&auto=format&fit=crop',
    tabs: ['All', 'Trending'],
  },
  {
    id: 7,
    name: 'Gold Plated Kundan Necklace Set',
    category: 'Jewelry',
    price: 2500,
    oldPrice: 3500,
    rating: 4.9,
    reviews: 210,
    // Bridal Jewelry Close-up
    image: 'https://images.unsplash.com/photo-1599643478524-fb66f7f6f52e?q=80&w=600&auto=format&fit=crop',
    badge: 'Trending',
    tabs: ['All', 'Best Sellers', 'Trending'],
  },
  {
    id: 8,
    name: 'Designer Georgette Gown',
    category: 'Dresses',
    price: 8500,
    oldPrice: 10000,
    rating: 4.5,
    reviews: 56,
    // Flowing Gown/Dress
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=600&auto=format&fit=crop',
    tabs: ['All', 'New Arrivals'],
  },
];

const categories = ["All", "New Arrivals", "Best Sellers", "Trending"];

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter products based on the currently active tab
  const filteredProducts = products.filter(product => 
    product.tabs.includes(activeTab)
  );

  return (
    <section className="bg-white py-16 md:py-24 text-gray-900 font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* --- HEADER & TABS --- */}
        <div className="mb-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 border-b border-gray-200 pb-6 text-center md:text-left">
          
          {/* Titles */}
          <div>
            <span className="text-[#800020] font-medium text-sm tracking-widest uppercase mb-2 block">
              Discover Fashion
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Curated <span className="text-gray-500 font-normal">Collections</span>
            </h2>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide snap-x">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors snap-center ${
                  activeTab === category
                    ? 'bg-[#800020] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 min-h-[500px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No products found in this category.
            </div>
          )}
        </div>

        {/* Mobile View All Button */}
        <Link to="/women" className="mt-10 w-full md:hidden flex items-center justify-center gap-2 border border-gray-300 py-4 text-sm font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-colors rounded-md">
            View All Products
            <ArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
}

// --- PRODUCT CARD COMPONENT ---
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  // State to track if the image failed to load
  const [imgError, setImgError] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    navigate('/cart');
  };

  const handleViewDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group flex flex-col cursor-pointer animate-in fade-in zoom-in-95 duration-500"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-lg mb-4">
        
        {/* CONDITIONAL RENDERING: Shows image OR the cloth placeholder */}
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)} // Triggers placeholder on failure
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 group-hover:bg-gray-200 transition-colors duration-500">
            <Shirt size={48} strokeWidth={1} className="mb-3 opacity-60" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 text-center px-4">
              Preview <br/> Unavailable
            </span>
          </div>
        )}
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs font-bold text-gray-900 uppercase tracking-wider rounded-sm shadow-sm z-10">
            {product.badge}
          </div>
        )}

        {/* Desktop Hover Actions */}
        <div className="hidden lg:flex absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/50 to-transparent z-20">
          <div className="flex w-full gap-2 justify-center">
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-white text-gray-900 py-2.5 rounded-sm font-medium hover:bg-[#800020] hover:text-white transition-colors text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag size={16} /> Add to Cart
            </button>
            <button 
              onClick={handleViewDetails}
              className="p-2.5 bg-white text-gray-900 rounded-sm hover:text-[#800020] transition-colors shadow-sm"
            >
              <Eye size={18} />
            </button>
          </div>
        </div>
        
        {/* Mobile Quick Add Button */}
        <button 
          onClick={handleAddToCart}
          className="lg:hidden absolute bottom-2 right-2 h-9 w-9 sm:h-10 sm:w-10 bg-white/90 backdrop-blur-sm text-gray-900 flex items-center justify-center rounded-full shadow-md active:scale-95 transition-transform z-20"
        >
            <ShoppingBag size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        
        <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-[#800020] transition-colors leading-snug line-clamp-2 mb-2">
          {product.name}
        </h3>

        <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
          {/* Pricing */}
          <div className="flex items-center gap-2">
            <span className="text-base md:text-lg font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star size={10} className="sm:w-3 sm:h-3 fill-[#D4AF37] text-[#D4AF37]" />
            <span className="text-[10px] sm:text-xs text-gray-500">
              {product.rating} <span className="hidden sm:inline">({product.reviews})</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};