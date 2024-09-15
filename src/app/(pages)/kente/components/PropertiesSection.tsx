import React from 'react';
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineColorLens } from "react-icons/md";
import { MdOutlineDiamond } from "react-icons/md";


export default function PropertiesSection() {
  return (
    <div className="relative w-full h-auto overflow-hidden bg-secondary py-5">
        <div className="flex w-max animate-marquee space-x-20">
          <div className="flex gap-x-2 items-center">
            <MdOutlineWorkspacePremium className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Premium Quality</h3>
          </div>
          <div className="flex gap-x-2 items-center">
            <LuShieldCheck className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Durable Fabric</h3>
          </div>
          <div className="flex gap-x-2 items-center">
            <MdOutlineColorLens className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Vibrant Colors</h3>
          </div>
          <div className="flex gap-x-2 items-center">
            <MdOutlineDiamond className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Appealing Design</h3>
          </div>

          <div className="flex gap-x-2 items-center">
            <MdOutlineWorkspacePremium className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Premium Quality</h3>
          </div>
          <div className="flex gap-x-2 items-center">
            <LuShieldCheck className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Durable Fabric</h3>
          </div>
          <div className="flex gap-x-2 items-center">
            <MdOutlineColorLens className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Vibrant Colors</h3>
          </div>
          <div className="flex gap-x-2 items-center">
            <MdOutlineDiamond className="text-3xl text-primary" />
            <h3 className="font-bold text-primary">Appealing Design</h3>
          </div>
        </div>
    </div>
  )
}
