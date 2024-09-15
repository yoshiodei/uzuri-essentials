import React from 'react'
import ProductCard from './ProductCard'

export default function DisplayProducts() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
  )
}
