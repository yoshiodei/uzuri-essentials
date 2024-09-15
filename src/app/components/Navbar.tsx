import React from 'react'
import { App_Name } from '../config'

export default function Navbar() {
  return (
    <nav className="bg-primary w-full h-[10vh] px-[15px] lg:px-[100px] flex items-center justify-center">
      <div className="w-full xl:w-[1400px]">
        <h1 className="text-font-light lg:text-3xl text-xl font-bold">{App_Name}</h1>    
      </div>
    </nav>
  )
}
