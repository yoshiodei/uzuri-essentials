'use client'
import React, { RefObject } from 'react';

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLDivElement | null>;
};

const CollectionSection: React.FC<CollectionSectionProps> = ({ collectionRef }) => {
  return (
    <div className="p-5" ref={collectionRef as React.RefObject<HTMLDivElement>}>
      <div className="flex flex-col justify-center items-center mb-5">
        <h2 className="mb-1 text-primary font-bold text-center text-lg">Black</h2>
        <div className="h-[3px] w-[40px] bg-primary"/>
      </div>
      <div className="">
        
      </div>    
    </div>
  )
}

export default CollectionSection
