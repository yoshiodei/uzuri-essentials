'use client'
import React, { useState } from 'react'
import { GiRolledCloth } from "react-icons/gi";
import { FaSoap } from "react-icons/fa6";
import { SiRoundcube } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { App_Name } from '../config'

export default function Navbar() {
  
  const [toggleNav, setToggleNav] = useState(false);

  const router = useRouter();
  const navigatePage = (page: string): void => {
    setToggleNav(false);
    router.push(page);
  };  

  return (
    <nav className="bg-primary w-[100vw] h-[10vh] px-[15px] lg:px-[100px] flex items-center justify-between relative">
      <div className="w-full xl:w-[1400px]">
        <h1 className="text-font-light lg:text-3xl text-xl font-bold">{App_Name}</h1>    
      </div>
      <button
        onClick={() => setToggleNav(true)}
        className="flex flex-col gap-y-2 items-center justify-center"
      >
        <div className="rounded-full h-[3px] w-[40px] bg-white" />
        <div className="rounded-full h-[3px] w-[40px] bg-white" />
        <div className="rounded-full h-[3px] w-[40px] bg-white" />
      </button>

      <div className={`absolute top-0 right-0 transition transition-transform duration-300 ease-in-out w-[100vw] p-5 h-[100vh] bg-primary-light ${toggleNav ? 'translate-x-0' : 'translate-x-full hidden'} top-0 z-30`}>
        <div className="flex justify-end">
          <button
            onClick={() => setToggleNav(false)}
            className="flex justify-center items-center w-[40px] h-[40px] rounded bg-primary"
          >
            <IoClose className="w-[90%] h-[90%] text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-y-2 mb-3 mt-12">
          <h5 className="text-2xl font-semibold text-primary">Our Shops</h5>
          <div className="h-[4px] w-[50px] bg-primary" />
        </div>
        <div className="flex flex-col items-center gap-y-5">
          <button onClick={() => navigatePage("/kente")} className="bg-primary rounded-lg w-[320px] h-[60px] flex items-center justify-center gap-x-7 px-5">
            <GiRolledCloth className="text-[1.8em] text-white" /> 
            <p className="text-white text-[1.4em] font-semibold">Kente Cloth</p>
          </button>
          <button onClick={() => navigatePage("/black-soap")} className="bg-primary rounded-lg w-[320px] h-[60px] flex items-center justify-center gap-x-7 px-5">
            <FaSoap className="text-[1.8em] text-white" /> 
            <p className="text-white text-[1.4em] font-semibold">Black Soap</p>
          </button>
          <button onClick={() => navigatePage("/shea-butter")} className="bg-primary rounded-lg w-[320px] h-[60px] flex items-center justify-center gap-x-7 px-5">
            <SiRoundcube className="text-[1.8em] text-white" /> 
            <p className="text-white text-[1.4em] font-semibold">Shea Butter</p>
          </button>
        </div>
      </div>
    </nav>
  )
}
