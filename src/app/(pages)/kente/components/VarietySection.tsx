import Image from 'next/image'
import React from 'react'

export default function VarietySection() {
  return (
    <div className="px-5 pt-8 relative w-full h-[45vh] overflow-hidden py-5 bg-white">
      <h2 className="mb-3 text-primary text-[1.2em] text-center leading-tight font-semibold">
        Never run out of inspiration for styling your kente.
      </h2>
      <h4 className="text-slate-400 text-[0.8em] text-center leading-tight font-semibold">
        With our extensive collection, you&apos;re guaranteed endless possibilities to showcase your unique style.
      </h4>
      <Image
        src="/images/kente_designs.png"
        // src="/next.svg"
        alt="Kente Designs"
        height={900}
        width={1200}
        className="absolute z-20 bottom-[0px] right-[0px]"
      />
    </div>    
  )
}
