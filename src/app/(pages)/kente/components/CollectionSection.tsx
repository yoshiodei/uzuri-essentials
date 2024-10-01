'use client'
import React, { RefObject } from 'react';
import KenteCard from './KenteCard'

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLDivElement | null>;
};

const CollectionSection: React.FC<CollectionSectionProps> = ({ collectionRef }) => {
  return (
    <div className="p-5" ref={collectionRef as React.RefObject<HTMLDivElement>}>
      <div className="flex flex-col justify-center items-center mb-5">
        <h2 className="mb-1 text-primary font-bold text-center text-lg">Our Kente Collection</h2>
        <div className="h-[3px] w-[40px] bg-primary"/>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <KenteCard image="cloth-1.jpeg" />
        <KenteCard image="cloth-2.jpeg" />
        <KenteCard image="cloth-3.jpeg" />
        <KenteCard image="cloth-4.jpeg" />
        <KenteCard image="cloth-5.jpeg" />
        <KenteCard image="cloth-6.jpeg" />
        <KenteCard image="cloth-7.jpeg" />
        <KenteCard image="cloth-8.jpeg" />
        <KenteCard image="cloth-9.jpeg" />
        <KenteCard image="cloth-10.jpeg" />
        <KenteCard image="cloth-11.jpeg" />
        <KenteCard image="cloth-12.jpeg" />
        <KenteCard image="cloth-13.jpeg" />
        <KenteCard image="cloth-14.jpeg" />
        <KenteCard image="cloth-15.jpeg" />
        <KenteCard image="cloth-16.jpeg" />
        <KenteCard image="cloth-17.jpeg" />
        <KenteCard image="cloth-18.jpeg" />
        <KenteCard image="cloth-19.jpeg" />
      </div>    
    </div>
  )
}

export default CollectionSection
