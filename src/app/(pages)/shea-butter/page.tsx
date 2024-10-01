'use client'
import React, { useRef } from 'react'
import SheaButterHeroSection from './components/SheaButterHeroSection';
import PropertiesSection from './components/PropertiesSection';
import BenefitSection from './components/BenefitSection';
import SheaButterCollection from './components/SheaButterCollection';

const SheaButter = () => {
    const collectionRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement | null>(null);


    return (
        <main>
          <SheaButterHeroSection collectionRef={collectionRef} />
          <PropertiesSection />
          <BenefitSection />
          <SheaButterCollection collectionRef={collectionRef} />
        </main>
      )
}

export default SheaButter;