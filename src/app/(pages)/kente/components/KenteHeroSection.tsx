'use client'
import React, { RefObject } from 'react';
import Image from 'next/image';
import LadyInKente from '../../../../../public/images/woman-in-kente.png';

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLDivElement | null>;
};

const KenteHeroSection: React.FC<CollectionSectionProps> = ({ collectionRef }) => {
  const handleScroll = () => {
    if(collectionRef.current){
    collectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-5 pt-5 h-[80vh] bg-[url('/images/adinkra-bg2.png')] bg-cover bg-center relative overflow-hidden">
      <div className="flex flex-col gap-y-2">  
        <h2 className="text-primary font-extrabold text-[2em] leading-tight">Wrap Yourself in Tradition</h2>
        <p className="text-[0.95em] font-bold text-slate-600 w-[300px] leading-tight">Shop the finest Kente fabrics, crafted with centuries-old techniques for your modern lifestyle.</p>
        <button onClick={() => handleScroll() } className="rounded bg-primary text-white text-lg font-semibold px-3 py-[5px] w-[170px] h-[38px] mt-3">Explore</button>
      </div>
        <Image
          src="/images/woman-in-kente.png"
          // src="/next.svg"
          alt="Lady in Beautiful Kente Fabric"
          height={420}
          width={220}
          className="absolute w-auto h-[46vh] z-20 bottom-[0px] right-[50px]"
        />
    </div>
  )
}

export default KenteHeroSection;