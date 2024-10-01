import Image from 'next/image'
import React from 'react'

export default function BenefitSection() {
    return (
        <div className="px-5 pt-8 relative w-full h-[32vh] overflow-hidden py-5 bg-white">
          <h2 className="mb-3 text-primary text-[1.2em] text-center leading-tight font-semibold">
            Nourish Your Skin Naturally.
          </h2>
          <h4 className="text-slate-400 text-[0.95em] text-center leading-tight font-semibold">
            Unlock Radiant, Soft Skin with 100% Natural Shea Butter.
          </h4>
          <Image
            src="/images/shea_butter2.png"
            alt="Lady In Bath Thub"
            height={400}
            width={1200}
            className="absolute z-30 h-auto w-[100vw] bottom-0 right-0"
          />
        </div>    
      )
}