import React from 'react'

export default function SearchInput() {
  return (
    <div className="flex justify-center gap-x-1 lg:gap-x-3 py-2 lg:py-5 mt-4 lg:mt-0">
      <input
        placeholder="Search Products"
        className="w-full lg:w-[35vw] h-[2.6em] text-sm lg:text-base lg:h-[2.7em] border border-grey-100 rounded bg-white px-3"
      />
      <button className="text-white font-semibold text-sm lg:text-base lg:font-bold rounded bg-primary w-[100px] lg:w-[150px] h-[2.6em] lg:h-[2.7em]" >Search</button>    
    </div>
  )
}
