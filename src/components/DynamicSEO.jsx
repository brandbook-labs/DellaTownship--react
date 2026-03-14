import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const DynamicSEO = () => {
  const [city, setCity] = useState('India'); // Default fallback

  useEffect(() => {
    // 1. Fetch user's IP location
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        // Updated for E-commerce: Show city if they are anywhere in India
        if (data.city && data.country_code === 'IN') {
          setCity(data.city);
        }
      })
      .catch(err => console.error("Location check failed", err));
  }, []);

  return (
    <Helmet>
      {/* Dynamic Title showing User's City */}
      <title>Premium Silk Sarees & Bridal Wear in {city} | House of Mahalaxmi</title>
      
      {/* Dynamic Description */}
      <meta 
        name="description" 
        content={`Shop authentic handloom silk sarees, bridal lehengas, and premium ethnic fashion. Discover the latest festive collections with express delivery to ${city}.`} 
      />
    </Helmet>
  );
};

export default DynamicSEO;