import React, { useState, useMemo } from "react";
import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  ShoppingBag
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- MOCK CLOTHING CART DATA WITH VERIFIED IMAGES ---
const INITIAL_CART = [
  {
    id: 1,
    title: "Banarasi Silk Saree with Zari Work",
    category: "Sarees",
    type: "Handloom",
    price: 12500,
    gstRate: 5,
    // Verified Saree Image
    image: "https://images.pexels.com/photos/8388720/pexels-photo-8388720.jpeg?auto=compress&cs=tinysrgb&w=600",
    quantity: 1,
  },
  {
    id: 2,
    title: "Embroidered Velvet Bridal Lehenga",
    category: "Lehengas",
    type: "Bridal",
    price: 35000,
    gstRate: 12,
    // Verified Lehenga Image
    image: "https://images.pexels.com/photos/14480562/pexels-photo-14480562.jpeg?auto=compress&cs=tinysrgb&w=600",
    quantity: 1,
  },
  {
    id: 3,
    title: "Gold Plated Kundan Necklace",
    category: "Jewelry",
    type: "Accessories",
    price: 2500,
    gstRate: 3,
    // Verified Jewelry Image
    image: "https://images.pexels.com/photos/13018260/pexels-photo-13018260.jpeg?auto=compress&cs=tinysrgb&w=600",
    quantity: 1,
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);
  const navigate = useNavigate();

  // --- CALCULATIONS ---
  const totals = useMemo(() => {
    return cartItems.reduce((acc, item) => {
        const itemTotal = item.price * item.quantity;
        const itemTax = itemTotal * (item.gstRate / 100);
        
        return {
            subtotal: acc.subtotal + itemTotal,
            tax: acc.tax + itemTax
        };
    }, { subtotal: 0, tax: 0 });
  }, [cartItems]);

  const grandTotal = totals.subtotal + totals.tax;

  // Handlers
  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
      navigate("/checkout", { 
          state: { 
              items: cartItems,
              totals: {
                  subtotal: totals.subtotal,
                  tax: totals.tax,
                  grandTotal: grandTotal
              }
          } 
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-12 md:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-8 md:mb-12 border-b border-gray-200 pb-6 text-center md:text-left">
          <button
            onClick={() => navigate("/shop")}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#800020] text-sm font-medium mb-4 transition-colors"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </button>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-none">
            Shopping <span className="text-gray-400 font-normal">Bag</span>
          </h1>
          <p className="text-gray-500 text-sm mt-3 font-medium">
            You have {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* === LEFT: CART ITEMS LIST === */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {cartItems.map((item) => {
                // Per Item Calculations
                const itemBaseTotal = item.price * item.quantity;
                const itemTax = itemBaseTotal * (item.gstRate / 100);
                const itemFinalTotal = itemBaseTotal + itemTax;

                return (
                  <div
                    key={item.id}
                    className="group flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white border border-gray-100 shadow-sm p-4 rounded-xl hover:shadow-md transition-shadow"
                  >
                    {/* Image */}
                    <div className="w-full sm:w-32 aspect-[4/5] sm:h-36 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                          <div className="flex-1 pr-4">
                              <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">
                                {item.category}
                              </p>
                              <h3 className="text-lg font-serif font-bold leading-tight text-gray-900">
                                {item.title}
                              </h3>
                          </div>

                          {/* --- ITEM PRICE DISPLAY --- */}
                          <div className="text-left sm:text-right mt-2 sm:mt-0">
                              <span className="block text-xl font-bold text-gray-900 leading-none">
                                  {formatPrice(itemFinalTotal)}
                              </span>
                              <span className="block text-xs text-gray-500 mt-1.5">
                                  {formatPrice(itemBaseTotal)} + {item.gstRate}% GST
                              </span>
                          </div>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex items-center justify-between mt-4 sm:mt-0">
                        <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-1 border border-gray-200">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 rounded transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-6 text-center text-gray-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 rounded transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs font-bold text-gray-400 hover:text-red-600 uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                        >
                          <Trash2 size={16} /> <span className="hidden sm:inline">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* === RIGHT: ORDER SUMMARY (Sticky) === */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-6 md:p-8">
                
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-6">Order Summary</h3>

                {/* BREAKDOWN */}
                <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(totals.subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Estimated GST</span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(totals.tax)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">
                      Free
                    </span>
                  </div>
                </div>

                {/* TOTAL AT BOTTOM */}
                <div className="mb-6">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-base font-bold text-gray-900">Total</span>
                        <h2 className="text-3xl font-serif font-bold text-[#800020] tracking-tight leading-none">
                            {formatPrice(grandTotal)}
                        </h2>
                    </div>
                    <p className="text-right text-xs text-gray-500">Inclusive of all taxes</p>
                </div>

                {/* CHECKOUT BUTTON */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#800020] hover:bg-[#600018] text-white font-bold uppercase py-4 rounded-md text-sm tracking-widest transition-colors flex items-center justify-center gap-2 group mb-4 shadow-md shadow-[#800020]/20"
                >
                  Proceed to Checkout
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
                  <ShieldCheck size={16} className="text-green-600" />
                  Secure Encrypted Checkout
                </div>

              </div>
            </div>
          </div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-24 border border-dashed border-gray-300 rounded-2xl bg-white shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">
              Your bag is empty
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm text-center">
              Looks like you haven't added anything to your bag yet. Let's find you something beautiful.
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="bg-[#800020] text-white px-8 py-3.5 rounded-md font-bold uppercase text-sm hover:bg-[#600018] transition-colors shadow-md shadow-[#800020]/20"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}