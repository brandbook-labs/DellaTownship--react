import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { 
  CheckCircle2, Download, Home, FileText, Package, Truck
} from 'lucide-react';

export default function SuccessPage() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger entry animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // --- MOCK APPAREL DATA ---
  const orderData = location.state || {
    orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
    date: new Date().toLocaleDateString(),
    method: 'upi',
    customer: {
        name: "Priya Sharma",
        mobile: "+91 98765 43210",
        address: "Flat 4B, Rose Apartments, Koramangala, Bengaluru, Karnataka - 560034"
    },
    items: [
        {
            id: 1,
            name: "Banarasi Silk Saree",
            type: "Handloom",
            details: "Zari Work - Maroon",
            hsn: "5007",
            rate: 12500,
            qty: 1,
            unit: "pc",
            gstRate: 5,
            baseAmount: 12500
        },
        {
            id: 2,
            name: "Embroidered Velvet Lehenga",
            type: "Bridal",
            details: "Heavy Embroidery",
            hsn: "6204",
            rate: 35000,
            qty: 1,
            unit: "pc",
            gstRate: 12,
            baseAmount: 35000
        }
    ]
  };

  // --- CALCULATIONS ---
  const totals = orderData.items.reduce((acc, item) => {
      const itemTax = item.baseAmount * (item.gstRate / 100);
      return {
          subtotal: acc.subtotal + item.baseAmount,
          totalTax: acc.totalTax + itemTax
      };
  }, { subtotal: 0, totalTax: 0 });

  const grandTotal = totals.subtotal + totals.totalTax;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  };

  // --- PDF GENERATION (Official Invoice) ---
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22); doc.setTextColor(128, 0, 32); // Maroon color
    doc.text("House of Mahalaxmi", 14, 20);
    doc.setFontSize(10); doc.setTextColor(100);
    doc.text("Silk City, Kanchipuram, India", 14, 26);
    doc.text("GSTIN: 33AAAAA0000A1Z5", 14, 31);

    // Invoice Meta
    doc.setFontSize(12); doc.setTextColor(0);
    doc.text("TAX INVOICE", 150, 20, { align: 'right' });
    doc.setFontSize(10);
    doc.text(`Invoice #: ${orderData.orderId}`, 150, 26, { align: 'right' });
    doc.text(`Date: ${orderData.date}`, 150, 31, { align: 'right' });

    // Customer
    doc.line(14, 35, 196, 35);
    doc.text(`Bill To: ${orderData.customer.name}`, 14, 42);
    doc.text(`Mobile: ${orderData.customer.mobile}`, 14, 47);
    
    // Split address to fit in PDF
    const splitAddress = doc.splitTextToSize(`Address: ${orderData.customer.address}`, 100);
    doc.text(splitAddress, 14, 52);

    // Table Data
    const tableRows = orderData.items.map(item => [
        item.name + `\n(${item.details})`, 
        item.hsn,
        item.gstRate + "%",
        item.qty,
        formatPrice(item.baseAmount)
    ]);

    doc.autoTable({
        startY: 65,
        head: [['Description', 'HSN', 'GST', 'Qty', 'Taxable Val']],
        body: tableRows,
        theme: 'grid',
        headStyles: { fillColor: [128, 0, 32], textColor: [255, 255, 255] }, // Maroon header
        styles: { fontSize: 9, cellPadding: 3, valign: 'middle' },
        columnStyles: { 0: { cellWidth: 70 }, 4: { halign: 'right' } }
    });

    const finalY = doc.lastAutoTable.finalY + 10;
    
    // Totals
    doc.text("Total Taxable Value:", 140, finalY);
    doc.text(formatPrice(totals.subtotal), 196, finalY, { align: 'right' });

    doc.text("Total GST:", 140, finalY + 6);
    doc.text(formatPrice(totals.totalTax), 196, finalY + 6, { align: 'right' });

    doc.setFontSize(14); doc.setFont("helvetica", "bold");
    doc.text("Grand Total:", 140, finalY + 16);
    doc.text(formatPrice(grandTotal), 196, finalY + 16, { align: 'right' });

    doc.save(`Invoice_${orderData.orderId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pt-16 md:pt-24 pb-20 overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LEFT COLUMN: Message & Actions --- */}
        <div className={`pt-10 transition-all duration-1000 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-sm">
                <CheckCircle2 size={40} />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-gray-900">
                Order <br/> <span className="text-[#800020] font-normal italic">Confirmed</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-md leading-relaxed mb-10">
                Thank you for shopping with us! Your order <strong>#{orderData.orderId}</strong> has been successfully placed. We've sent a confirmation email with your receipt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                 <button 
                    onClick={handleDownloadPDF}
                    className="flex-1 bg-[#800020] text-white font-bold uppercase py-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#600018] transition-colors group shadow-md shadow-[#800020]/20"
                 >
                    <Download size={20} /> 
                    <span>Download Invoice</span>
                 </button>
                 
                 <Link to="/" className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold uppercase py-4 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
                    <Home size={20} /> 
                    <span>Back to Home</span>
                 </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                   What happens next?
                </h4>
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                            <Package size={18} />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900">Order Processing</p>
                            <p className="text-sm text-gray-500 mt-1">We are preparing your items for dispatch. This usually takes 1-2 business days.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                            <Truck size={18} />
                        </div>
                        <div>
                            <p className="text-base font-bold text-gray-900">Shipping & Delivery</p>
                            <p className="text-sm text-gray-500 mt-1">You will receive a tracking link via SMS/Email once your package is handed to our delivery partner.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- RIGHT COLUMN: The Invoice UI --- */}
        <div className={`w-full transition-all duration-1000 delay-200 ease-out transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl relative">
                 {/* Top Decor */}
                 <div className="absolute top-0 left-0 w-full h-1.5 bg-[#800020]"></div>

                 <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-100">
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900">Receipt</h3>
                            <p className="text-sm text-gray-500 mt-1">{orderData.date}</p>
                        </div>
                        <div className="text-right">
                             <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-bold uppercase mb-2">
                                <CheckCircle2 size={14} /> Paid
                             </div>
                             <p className="text-sm text-gray-500">
                                {orderData.method === 'upi' ? 'Online (UPI)' : 'Cash on Delivery'}
                             </p>
                        </div>
                    </div>

                    {/* Simple Item List */}
                    <div className="mb-8">
                        <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest font-bold mb-4 border-b border-gray-100 pb-2">
                            <span>Item Description</span>
                            <span>Amount</span>
                        </div>
                        
                        <div className="space-y-6">
                            {orderData.items.map((item, i) => (
                                <div key={i} className="flex justify-between items-start">
                                    <div className="pr-4">
                                        <h4 className="text-base font-bold text-gray-900 leading-tight">{item.name}</h4>
                                        <p className="text-sm text-gray-500 mt-1">
                                            {item.details} • Qty: {item.qty}
                                        </p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <span className="block text-base font-medium text-gray-900">
                                            {formatPrice(item.baseAmount)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Totals Section */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-3">
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Subtotal</span>
                            <span className="font-medium text-gray-900">{formatPrice(totals.subtotal)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Estimated GST</span>
                            <span className="font-medium text-gray-900">{formatPrice(totals.totalTax)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between items-end mt-2">
                            <span className="text-base font-bold uppercase text-gray-900">Grand Total</span>
                            <span className="text-3xl font-serif font-bold text-[#800020] leading-none">
                                {formatPrice(grandTotal)}
                            </span>
                        </div>
                    </div>

                 </div>

                 {/* Footer note */}
                 <div className="bg-gray-50 p-4 text-center border-t border-gray-200 flex items-center justify-center gap-2 text-gray-500 text-xs uppercase tracking-widest">
                    <FileText size={16} /> Official Tax Invoice available via download
                 </div>
            </div>
        </div>

      </div>

    </div>
  );
}