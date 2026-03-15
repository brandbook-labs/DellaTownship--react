import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const DellaDynamicSEO = () => {
  // We don't set a default city here so we can show the generic fallback if the API fails
  const [userCity, setUserCity] = useState(null); 

  useEffect(() => {
    // 1. Check if we already have the city cached (saves API hits as they browse)
    const cachedCity = sessionStorage.getItem('dellaVisitorCity');
    if (cachedCity) {
      setUserCity(cachedCity);
      return;
    }

    let isMounted = true;

    // 2. Fetch IP Location
    fetch('https://ipapi.co/json/')
      .then(res => {
        if (!res.ok) throw new Error('API limit reached or network error');
        return res.json();
      })
      .then(data => {
        // For real estate, you might want to target Global NRIs as well, 
        // so we won't restrict this strictly to India (country_code === 'IN').
        if (isMounted && data.city) {
          setUserCity(data.city);
          sessionStorage.setItem('dellaVisitorCity', data.city); 
        }
      })
      .catch(err => {
        // Silently fail on ad-blockers or API limits. 
        // userCity remains null, triggering the standard fallback copy.
        console.warn("Location check bypassed. Serving standard national copy.");
      });

    return () => {
      isMounted = false; 
    };
  }, []);

  return (
    <Helmet>
      {/* Dynamic Title: 
        If city is found -> "Della International City Ahmedabad | Exclusive Real Estate for Mumbai Investors"
        If no city -> "Della International City Ahmedabad | Luxury Real Estate & Townships"
      */}
      <title>
        {userCity 
          ? `Della International City Ahmedabad | Exclusive Real Estate for ${userCity} Investors`
          : `Della International City Ahmedabad | Luxury Real Estate & Townships`
        }
      </title>
      
      {/* Dynamic Description: 
        Appends a targeted CTA for the user's specific city.
      */}
      <meta 
        name="description" 
        content={
          userCity
            ? `Discover an 1100-acre global-first integrated luxury township in Ahmedabad. Featuring Motor Racing, Golf, and Wellness. Exclusive private viewings available for ${userCity} residents.`
            : `Discover Della International City Ahmedabad. An 1100-acre global-first integrated township featuring a Motor Racing Circuit, Championship Golf Course, Design District, and European Wellness.`
        } 
      />
      
      {/* Optional: You can even localize Open Graph tags for WhatsApp/LinkedIn sharing if the user shares from their browser */}
      {userCity && (
        <meta 
          property="og:title" 
          content={`Della International City | Exclusive Pre-Launch for ${userCity}`} 
        />
      )}
    </Helmet>
  );
};

export default DellaDynamicSEO;