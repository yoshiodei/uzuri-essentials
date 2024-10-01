'use client'
import React, { useRef } from 'react'
import BlackSoapHeroSection from './components/BlackSoapHeroSection'
import PropertiesSection from './components/PropertiesSection';
import BenefitSection from './components/BenefitSection';
import BlackSoapCollection from './components/BlackSoapCollection';

const BlackSoap = () => {
  const collectionRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <BlackSoapHeroSection collectionRef={collectionRef} />  
      <PropertiesSection />
      <BenefitSection />
      <BlackSoapCollection collectionRef={collectionRef} />
    </main>
  )
}

export default BlackSoap;