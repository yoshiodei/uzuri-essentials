import React from 'react'
import ProductCard from '../../../components/ProductCard'
import DisplayProducts from '../../../components/DisplayProducts'
import CategoriesTab from './CategoriesTab'
import CategoryTitle from './CategoryTitle'

export default function Categories() {
  return (
    <div className="py-2 lg:py-5 px-[0] lg:px-[150px] flex flex-col gap-2 lg:gap-5">
        <CategoryTitle />
        <CategoriesTab />
        <DisplayProducts />
    </div>
  )
}
