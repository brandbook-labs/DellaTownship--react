import React, { useState, useEffect } from 'react';
import { Home, Store, Building2, Users, Clock, Calendar, CalendarDays } from 'lucide-react';

const LeadWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    intent: '',
    specificInterest: '',
    subCategory: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    isWhatsApp: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validate the final step before allowing submission
  useEffect(() => {
    if (step === 4) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid =
        formData.name.trim().length > 2 &&
        emailRegex.test(formData.email) &&
        formData.phone.trim().length >= 10;
      setIsFormValid(isValid);
    }
  }, [formData.name, formData.email, formData.phone, step]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectionAndAdvance = (field, value, skipStep = false) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (skipStep) {
      setStep(4);
    } else {
      nextStep();
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => {
    if (step === 4 && formData.intent === 'Channel Partner') {
      setStep(1);
    } else {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    console.log('Final Payload Submitted:', formData);
    setStep(5);
  };

  // --- Reusable Option Card (Supports Text, Icons, and Images) ---
  const OptionCard = ({ label, subLabel, field, value, icon: Icon, img }) => {
    const isSelected = formData[field] === value;

    // Render Image-Based Card (Used in Step 2)
    if (img) {
      return (
        <button
          type="button"
          onClick={() => handleSelectionAndAdvance(field, value, false)}
          className={`group relative text-left transition-all duration-500 focus:outline-none w-full overflow-hidden rounded-xl h-32 border
            ${isSelected ? 'border-[#C5A059] ring-1 ring-[#C5A059]' : 'border-white/10 hover:border-[#C5A059]/50'}`}
        >
          <img src={img} alt={label} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-4 w-full z-10">
            <span className={`block text-lg font-serif leading-tight transition-colors duration-500 ${isSelected ? 'text-[#C5A059]' : 'text-white'}`}>
              {label}
            </span>
          </div>
        </button>
      );
    }

    // Render Text/Icon-Based Card (Used in Step 1 & 3)
    return (
      <button
        type="button"
        onClick={() => handleSelectionAndAdvance(field, value, value === 'Channel Partner')}
        className={`group relative p-5 lg:p-6 text-left transition-all duration-500 focus:outline-none w-full overflow-hidden border-b flex items-center gap-5
          ${isSelected
              ? 'border-[#C5A059] bg-[#C5A059]/5'
              : 'border-white/10 bg-transparent hover:border-white/40 hover:bg-white/5 hover:rounded-xl'
          }`}
      >
        <div className={`absolute left-0 top-0 h-full w-[2px] bg-[#C5A059] transition-transform duration-500 origin-bottom ${isSelected ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`} />
        
        {Icon && (
          <div className={`p-3 rounded-full border transition-colors duration-500 ${isSelected ? 'border-[#C5A059] text-[#C5A059] bg-[#C5A059]/10' : 'border-white/10 text-gray-400 group-hover:text-white group-hover:border-white/30'}`}>
            <Icon size={20} strokeWidth={1.5} />
          </div>
        )}

        <div>
          <span className={`block text-xl font-serif transition-colors duration-500 ${isSelected ? 'text-[#C5A059]' : 'text-gray-200 group-hover:text-white'}`}>
            {label}
          </span>
          {subLabel && (
            <span className={`block text-[10px] uppercase tracking-[0.2em] mt-1.5 transition-colors duration-500 ${isSelected ? 'text-gray-400' : 'text-gray-600 group-hover:text-gray-400'}`}>
              {subLabel}
            </span>
          )}
        </div>
      </button>
    );
  };

  // --- Render Steps ---

  const renderStep1 = () => (
    <div className="animate-fade-in-up">
      <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 font-serif leading-[1.1]">
        How would you like to <br />
        <span className="text-[#C5A059] italic">experience Della?</span>
      </h2>
      <div className="flex flex-col gap-2">
        <OptionCard icon={Home} label="Live & Invest" subLabel="Villas, Residences & Plots" field="intent" value="Live & Invest" />
        <OptionCard icon={Store} label="Brand Collaborations" subLabel="Retail, F&B & Healthcare" field="intent" value="Brand Collaborations" />
        <OptionCard icon={Building2} label="Commercial & GCC" subLabel="Offices & R&D Hubs" field="intent" value="Commercial & GCC" />
        <OptionCard icon={Users} label="Channel Partner" subLabel="Broker Registration" field="intent" value="Channel Partner" />
      </div>
    </div>
  );

  const renderStep2 = () => {
    const config = {
      'Live & Invest': {
        title: 'Which lifestyle aligns',
        italicText: 'with your vision?',
        options: [
          { label: 'Motor Racing District', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/motor-sport/popup/della-townships-ahmedabad-monte-carlo-international-motorsport-hero.webp' },
          { label: 'Championship Golf', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-international-golfcourse/della-townships-ahmedabad-international-golf-course-hero.webp' },
          { label: 'Design District', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/residences/design-district-residences-popup-3.webp' },
          { label: 'European Wellness', img: 'https://cdn.dellatownships.com/images/wellness-nagpur/luxury-meets/rooftop-restaurant-infinity-pool-della-townships-wellness-nagpur.webp' }
        ],
      },
      'Brand Collaborations': {
        title: 'Select your',
        italicText: 'industry domain.',
        options: [
          { label: 'Fashion & Couture', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/fashionenclave/fashionenclave-big-popup.webp' },
          { label: 'Art & Galleries', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/private-office/popup-office-7.webp' },
          { label: 'Medical Wellness', img: 'https://cdn.dellatownships.com/images/wellness-nagpur/luxury-meets/healthy-ageing-suite-first-floor-della-townships-wellness-nagpur.webp' },
          { label: 'Luxury F&B', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/luxuryretail/luxuryretail-big-popup.webp' }
        ],
      },
      'Commercial & GCC': {
        title: 'What scale of infrastructure',
        italicText: 'are you seeking?',
        options: [
          { label: 'Private Office', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/grid-factfiles/popup/della-townships-ahmedabad-design-district-private-offices-popup.webp' },
          { label: 'R&D Center', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/gcc-hubs/3.webp' },
          { label: 'Co-creation Studio', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-monte-carlo-international/private-office/popup-office-7.webp' },
          { label: 'Entire Floorplate', img: 'https://cdn.dellatownships.com/images/della-international-ahmedabad/della-design-district/artenclave/artenclave-popup-9.webp' }
        ],
      },
    }[formData.intent];

    if (!config) return null;

    return (
      <div className="animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 font-serif leading-[1.1]">
          {config.title} <br />
          <span className="text-[#C5A059] italic">{config.italicText}</span>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {config.options.map((option) => (
            <OptionCard key={option.label} label={option.label} img={option.img} field="specificInterest" value={option.label} />
          ))}
        </div>
      </div>
    );
  };

  const renderStep3 = () => {
    let options = [];
    let subtitle = '';

    if (formData.intent === 'Live & Invest') {
      subtitle = 'Preferred Property Type';
      options = [
        { label: 'Private Villa', icon: Home },
        { label: 'Branded Residence', icon: Building2 },
        { label: 'Luxury Plot', icon: Store }
      ];
    } else if (formData.intent === 'Brand Collaborations') {
      subtitle = 'Partnership Model';
      options = [
        { label: 'Retail Leasing', icon: Store },
        { label: 'Franchise/Operations', icon: Users },
        { label: 'Strategic Joint Venture', icon: Building2 }
      ];
    } else {
      subtitle = 'Expected Timeline';
      options = [
        { label: 'Immediate', icon: Clock },
        { label: '3 - 6 Months', icon: Calendar },
        { label: '6+ Months', icon: CalendarDays }
      ];
    }

    return (
      <div className="animate-fade-in-up">
        <h2 className="text-4xl lg:text-5xl font-light text-white mb-4 font-serif leading-[1.1]">
          Help us curate the <br />
          <span className="text-[#C5A059] italic">right portfolio.</span>
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8 font-bold">
          {subtitle}
        </p>
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <OptionCard key={option.label} label={option.label} icon={option.icon} field="subCategory" value={option.label} />
          ))}
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="animate-fade-in-up w-full max-w-md">
      <h2 className="text-4xl lg:text-5xl font-light text-white mb-10 font-serif leading-[1.1]">
        Where shall our team <br />
        <span className="text-[#C5A059] italic">reach you?</span>
      </h2>
      <div className="space-y-8">
        <div className="relative group">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b border-white/20 py-2 text-xl text-white focus:outline-none focus:border-[#C5A059] transition-colors font-light"
            required
          />
          <label className="absolute left-0 top-2 text-gray-500 text-lg transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#C5A059] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-5 peer-valid:text-[10px] peer-valid:text-gray-400 peer-valid:uppercase peer-valid:tracking-widest pointer-events-none">
            Full Name
          </label>
        </div>
        
        <div className="relative group">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b border-white/20 py-2 text-xl text-white focus:outline-none focus:border-[#C5A059] transition-colors font-light"
            required
          />
          <label className="absolute left-0 top-2 text-gray-500 text-lg transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#C5A059] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-5 peer-valid:text-[10px] peer-valid:text-gray-400 peer-valid:uppercase peer-valid:tracking-widest pointer-events-none">
            Corporate or Personal Email
          </label>
        </div>

        <div className="relative group">
          <input
            type="tel"
            name="phone"
            placeholder=" "
            value={formData.phone}
            onChange={handleChange}
            className="peer w-full bg-transparent border-b border-white/20 py-2 text-xl text-white focus:outline-none focus:border-[#C5A059] transition-colors font-light"
            required
          />
          <label className="absolute left-0 top-2 text-gray-500 text-lg transition-all duration-300 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#C5A059] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-5 peer-valid:text-[10px] peer-valid:text-gray-400 peer-valid:uppercase peer-valid:tracking-widest pointer-events-none">
            Mobile Number
          </label>
        </div>

        <label className="flex items-center space-x-4 text-gray-400 cursor-pointer hover:text-white transition-colors w-max pt-4 group">
          <div className="relative flex items-center justify-center w-5 h-5 border border-white/30 rounded-sm group-hover:border-[#C5A059] transition-colors">
            <input
              type="checkbox"
              name="isWhatsApp"
              checked={formData.isWhatsApp}
              onChange={handleChange}
              className="absolute opacity-0 cursor-pointer w-full h-full"
            />
            {formData.isWhatsApp && <div className="w-2.5 h-2.5 bg-[#C5A059]"></div>}
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold">Connect via WhatsApp</span>
        </label>
        
        <button
          onClick={handleSubmit}
          disabled={!isFormValid}
          className={`w-full py-5 mt-8 transition-all duration-500 text-xs font-bold uppercase tracking-[0.2em] relative overflow-hidden group
            ${isFormValid ? 'text-black bg-[#C5A059] cursor-pointer' : 'text-gray-500 bg-white/5 cursor-not-allowed border border-white/10'}`}
        >
          {isFormValid && (
            <div className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full z-0"></div>
          )}
          <span className="relative z-10">{isFormValid ? 'Request Private Portfolio' : 'Complete Details to Proceed'}</span>
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-left animate-fade-in-up">
      <div className="w-16 h-16 border border-[#C5A059] text-[#C5A059] flex items-center justify-center mb-10 relative">
        <div className="absolute inset-2 bg-[#C5A059]/20"></div>
        <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 font-serif">
        Welcome to <br />
        <span className="text-[#C5A059] italic font-medium">Della.</span>
      </h2>
      <p className="text-gray-400 max-w-md font-light leading-relaxed text-lg">
        {formData.name ? `${formData.name.split(' ')[0]}, your` : 'Your'} private portfolio has been requested. Our dedicated concierge team will be in touch shortly regarding your interest in {formData.specificInterest || 'Della International City'}.
      </p>
    </div>
  );

  return (
    <section className="w-full min-h-screen pb-40 flex items-center justify-center font-sans relative">
      
      {/* HEIGHT-LOCKED CONTAINER */}
      <div className="w-[95%] max-w-[1400px] h-[800px] flex flex-col lg:flex-row bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative z-10">
        
        {/* LEFT PANE: Cinematic Branding */}
        <div className="hidden lg:flex lg:w-5/12 h-full relative bg-black">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000" 
            alt="Della Architecture" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]"></div>
          
          <div className="relative z-10 p-16 flex flex-col justify-between h-full">
            <div>
              <p className="text-[#C5A059] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Della International City</p>
              <div className="h-px w-12 bg-[#C5A059]/50"></div>
            </div>
            
            <div>
              <h1 className="text-5xl font-serif text-white leading-tight mb-4">
                The First Step to <br />
                <span className="italic font-light text-gray-300">Global Living.</span>
              </h1>
              <p className="text-sm text-gray-400 font-light max-w-xs leading-relaxed">
                Connect with our concierge team to explore bespoke investment opportunities and private residences.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANE: The Wizard */}
        <div className="w-full lg:w-7/12 h-full p-8 md:p-12 lg:p-16 relative flex flex-col">
          
          {/* Subtle Progress Indicator */}
          {step < 5 && (
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <div
                className="bg-[#C5A059] h-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          )}

          {/* TOP NAVIGATION HEADER (Replaces bottom footer) */}
          {step < 5 && (
            <div className="flex items-center justify-between w-full mb-8 min-h-[24px]">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-500 hover:text-[#C5A059] transition-colors text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group"
                >
                  <span className="transform transition-transform group-hover:-translate-x-1">←</span> Return
                </button>
              ) : (
                <div></div> // Placeholder to keep step indicator right-aligned
              )}
              <span className="text-gray-600 text-[9px] uppercase tracking-[0.3em] font-semibold">
                Step {step} / 4
              </span>
            </div>
          )}

          {/* Form Area - Flex-grow and scrollable if content gets too tall */}
          <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col justify-center"> 
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
            {step === 5 && renderSuccess()}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default LeadWizard;