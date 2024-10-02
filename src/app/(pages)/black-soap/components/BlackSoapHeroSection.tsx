import React, { RefObject } from 'react';
import Image from 'next/image'

interface CollectionSectionProps {
  collectionRef: RefObject<HTMLDivElement | null>;
};

const BlackSoapHeroSection: React.FC<CollectionSectionProps> = ({ collectionRef }) => {
  const handleScroll = () => {
    if(collectionRef.current){
    collectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="px-5 pt-5 h-screen bg-[url('/images/adinkra-bg2.png')] bg-cover bg-center relative overflow-hidden">
      <div className="flex flex-col gap-y-2">  
        <h2 className="text-primary font-extrabold text-[2em] leading-tight">Experience the Purity of Nature.</h2>
        <p className="text-[0.95em] font-bold text-slate-600 w-[80vw] leading-tight">Our African Black Soap is made from natural ingredients sourced directly from the rich soils of West Africa.</p>
        <button onClick={() => handleScroll()} className="rounded bg-primary text-white text-lg font-semibold px-3 py-[5px] w-[170px] h-[38px] mt-3">Explore</button>
      </div>
      <Image
        src="/images/black_soap.png"
        // src="/next.svg"
        alt="African black soap"
        height={500}
        width={200}
        className="absolute w-auto h-[45vh] z-20 bottom-[20px] right-[0px]"
        />
    </div>
  )
}

export default BlackSoapHeroSection;
