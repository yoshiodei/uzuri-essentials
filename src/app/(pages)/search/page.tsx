import DisplayProducts from '../../components/DisplayProducts'
import SearchInput from '../../components/SearchInput'
import React from 'react'

export default function Search() {
  return (
    <main className="min-h-[80vh] py-[0] lg:py-8">
      <div className="px-[15px] lg:px-[0] mt-2 lg:mt-5">
        <SearchInput />
      </div>  
      <div className="px-[15px] lg:px-[150px] py-2 lg:py-5 text-base lg:text-xl font-bold text-primary">
        <h5>Showing Results for: &quot; Natural Shea Butter &quot;</h5>
      </div>
      <div className="px-[15px] lg:px-[150px] py-2 lg:py-5">
        <DisplayProducts />    
      </div>
    </main>
  )
}
