'use client'
import Image from 'next/image';
import React, { RefObject } from 'react';
import { useRouter } from 'next/navigation'

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLDivElement | null>;
};

const SheaButterCollection: React.FC<CollectionSectionProps> = ({ collectionRef }) => {
  const router = useRouter();
  
  return (
    <div className="p-5" ref={collectionRef as React.RefObject<HTMLDivElement>}>
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="mb-1 text-primary font-bold text-center text-lg">Our Shea Butter</h2>
        <div className="h-[3px] w-[40px] bg-primary"/>
      </div>
      <div className="flex flex-col items-center gap-y-10">
        <div className="h-[300px] w-[300px] bg-white rounded-full relative">
          <Image
            src="/images/shea_butter3.png"
            alt="Black Soap"
            className="absolute w-[300px] h-auto top-[30px]"
            height={500}
            width={800}
          />
        </div>  
        <button
          onClick={() => router.push('/product/shea-butter')} 
          className="rounded text-white bg-primary text-lg font-semibold px-5 py-2 mb-10"
        >
          View Product
        </button>  
      </div>    
    </div>
  )
}

export default SheaButterCollection;
