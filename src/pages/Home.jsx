import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThemedTownships from '../components/Common/Categories';
import FounderVision from '../components/Common/AboutJimmy';
import DellaAhmedabadPartners from '../components/Common/AhmedabadBigPartners';
import DellaHero from '../components/Hero/Hero';
import LeadWizard from '../components/Common/LeadWizard';
import ProjectIntro from '../components/Common/ProjectIntro';
import RacingDistrictSection from '../components/Common/DellaMonteCarloRacing';
import GolfDistrictSection from '../components/Common/GolfDistrictSection';
import DesignDistrictSection from '../components/Common/DesignDistrictSection';
import WellnessDistrictSection from '../components/Common/EuropeanWellness';
import CinematicGrain from '../components/Common/CinematicGrain';

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
      <ProjectIntro />
      <RacingDistrictSection />
      <GolfDistrictSection />
      <DesignDistrictSection/>
      <WellnessDistrictSection/>
      {/* <ThemedTownships /> */}
      {/* <FounderVision/> */}
      <DellaAhmedabadPartners />
      <LeadWizard />
      <CinematicGrain />
      

   
    </>
  )
}

export default Home
