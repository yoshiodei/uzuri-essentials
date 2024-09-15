'use client'

import React from 'react';
import Image from 'next/image';
import LadyInKente from '../../../../../public/images/woman-in-kente.png';

export default function KenteHeroSection() {
  return (
    <div className="px-5 pt-5 h-[78vh] bg-[url('/images/adinkra-bg2.png')] bg-cover bg-center relative overflow-hidden">
      <div className="flex flex-col gap-y-2">  
        <h2 className="text-primary font-extrabold text-[2em] leading-tight">Wrap Yourself in Tradition</h2>
        <p className="text-[0.95em] font-bold text-slate-600 w-[300px] leading-tight">Shop the finest Kente fabrics, crafted with centuries-old techniques for your modern lifestyle.</p>
        <button className="rounded bg-primary text-white text-sm font-bold px-3 py-[5px] w-[120px] mt-3">Explore</button>
      </div>
      <Image
        src="/images/woman-in-kente.png"
        // src="/next.svg"
        alt="Lady in Beautiful Kente Fabric"
        height={420}
        width={220}
        className="absolute z-20 bottom-[-15px] right-[20px]"
      />
    </div>
  )
}
