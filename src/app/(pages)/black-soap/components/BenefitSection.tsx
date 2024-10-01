import Image from 'next/image'
import React from 'react'

export default function BenefitSection() {
    return (
        <div className="px-5 pt-8 relative w-full h-[43vh] overflow-hidden py-5 bg-white">
          <h2 className="mb-3 text-primary text-[1.2em] text-center leading-tight font-semibold">
            Experience the natural power of African Black Soap.
          </h2>
          <h4 className="text-slate-400 text-[0.95em] text-center leading-tight font-semibold">
            Crafted with plant-based ingredients to cleanse, exfoliate, and hydrate your skin.
          </h4>
          <Image
            src="/images/woman_in_bath_tub.png"
            alt="Lady In Bath Thub"
            height={400}
            width={1200}
            className="absolute z-30 h-auto w-[98vw] bottom-[-10px] right-0"
          />
          {/* <Image
            src="/images/black_soap2.png"
            alt="Black Soap"
            height={900}
            width={1200}
            className="absolute z-20 w-auto h-[10vh] bottom-[10px] left-[85px]"
          /> */}
        </div>    
      )
}
