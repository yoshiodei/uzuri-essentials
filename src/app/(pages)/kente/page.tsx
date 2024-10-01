'use client'
import React, { useRef } from 'react'
import KenteHeroSection from './components/KenteHeroSection'
import PropertiesSection from './components/PropertiesSection'
import VarietySection from './components/VarietySection'
import CollectionSection from './components/CollectionSection'

export default function Kente() {
  const collectionRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement | null>(null);

  return (
    <main>
      <KenteHeroSection collectionRef={collectionRef} />
      <PropertiesSection />
      <VarietySection />
      <CollectionSection collectionRef={collectionRef} />
    </main>
  )
}
