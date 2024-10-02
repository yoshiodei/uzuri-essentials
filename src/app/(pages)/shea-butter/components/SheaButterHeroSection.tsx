import React, { RefObject } from 'react';
import Image from 'next/image'

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLDivElement | null>;
};

const SheaButterHeroSection: React.FC<CollectionSectionProps> = ({ collectionRef }) => {
    const handleScroll = () => {
      if(collectionRef.current){
      collectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <div className="px-5 pt-5 h-[80vh] bg-[url('/images/adinkra-bg2.png')] bg-cover bg-center relative overflow-hidden">
        <div className="flex flex-col gap-y-2">  
          <h2 className="text-primary font-extrabold text-[2em] leading-tight">Nourish Your Skin with Every Touch.</h2>
          <p className="text-[0.95em] font-bold text-slate-600 w-[80vw] leading-tight">Your skin deserves the best. Nurture your skin with the richness of pure Shea Butter</p>
          <button onClick={() => handleScroll()} className="rounded bg-primary text-white text-lg font-semibold px-3 py-[5px] w-[170px] h-[38px] mt-3">Explore</button>
        </div>
        <Image
          src="/images/shea_butter.png"
          // src="/next.svg"
          alt="Person holding shea butter"
          height={500}
          width={200}
          className="absolute w-auto h-[48vh] z-20 bottom-0 left-0"
          />
      </div>
    )
  }
  
  export default SheaButterHeroSection;