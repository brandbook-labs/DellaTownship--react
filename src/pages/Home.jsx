import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductShowcase from '../components/Products/PopularItems';
import ThemedTownships from '../components/Common/Categories';
import FounderVision from '../components/Common/AboutJimmy';
import DellaAhmedabadPartners from '../components/Common/AhmedabadBigPartners';
import DellaHero from '../components/Hero/Hero';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // wait for the DOM to load
      }
    }
  }, [hash]);
  return (
    <>
      <DellaHero />
      <ThemedTownships />
      <DellaAhmedabadPartners />
      <FounderVision/>
      <ProductShowcase />
      

   
    </>
  )
}

export default Home
