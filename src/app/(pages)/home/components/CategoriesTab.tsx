import React from 'react'

export default function CategoriesTab() {
  const categoryList: string[] = [
    'All', 'Shea Butter', 'African Black Soap', 'Kente',
  ]

  return (
    <>
      <div className="overflow-x-auto pb-1 lg:pb-[0]">
        <div className="flex gap-2 lg:gap-5">
          { categoryList.map((item) => (
            <button
              className="px-[20px] lg:px-[30px] flex text-sm lg:text-base items-center font-bold text-primary bg-primary-light h-[35px] lg:h-[45px] rounded-full text-nowrap"
              key={item}
            >
              {item}
            </button>
            ))
          }
       </div> 
      </div>
      <hr className="border-slate-300 mb-2 lg:mb-5" />
    </>
  )
}
