import React from 'react';
import { FaHandSparkles } from "react-icons/fa"
import { MdSoap } from "react-icons/md";
import { FaBacterium } from "react-icons/fa";
import { FaSoap } from "react-icons/fa";

export default function PropertiesSection() {
    return (
        <div className="relative w-full h-auto overflow-hidden bg-secondary py-5">
            <div className="flex w-max animate-marquee space-x-20">
              <div className="flex gap-x-2 items-center">
                <FaSoap className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Natural Ingredients</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <MdSoap className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Gentil Cleansing</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaBacterium className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Tough On Germs</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaHandSparkles className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Natural Exfoliant</h3>
              </div>

              <div className="flex gap-x-2 items-center">
                <FaSoap className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Natural Ingredients</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <MdSoap className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Gentil Cleansing</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaBacterium className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Tough On Germs</h3>
              </div>
              <div className="flex gap-x-2 items-center">
                <FaHandSparkles className="text-3xl text-primary" />
                <h3 className="font-bold text-primary">Natural Exfoliant</h3>
              </div>
    
            </div>
        </div>
      )
}
