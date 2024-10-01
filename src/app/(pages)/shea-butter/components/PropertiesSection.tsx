import React from 'react';

import { FaHandHoldingWater } from "react-icons/fa";
import { GiShieldBounces } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiWaterSplash } from "react-icons/gi";


export default function PropertiesSection() {
    return (
        <div className="relative w-full h-auto overflow-hidden bg-secondary py-5">
            <div className="flex w-max animate-marquee space-x-20">
              <div className="flex gap-x-2 items-center">
                <GiWaterSplash className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Deep Moisturization</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <GiShieldBounces className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Protects Skin</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <MdFaceRetouchingNatural className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Anti-aging</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaHandHoldingWater className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Soft Skin</h3>
              </div>
              
              <div className="flex gap-x-2 items-center">
                <GiWaterSplash className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Deep Moisturization</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <GiShieldBounces className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Protects Skin</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <MdFaceRetouchingNatural className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Anti-aging</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaHandHoldingWater className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Soft Skin</h3>
              </div>

              
    
            </div>
        </div>
      )
}
