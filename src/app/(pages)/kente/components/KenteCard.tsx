'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function KenteCard({image}: {image:string}) {
  const router = useRouter();

  return (
    <button 
      className="rounded bg-white h-auto w-full p-2 flex flex-col items-between gap-y-2"
      onClick={() => router.push(`/product/kente/${image}`)}
    >
      <div className="w-full rounded bg-primary-light h-[100px] border border-primary-light overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt="Kente Cloth"
          height={200}
          width={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h6 className="text-[0.8em] text-slate-400 font-semibold">Price Per Yard</h6>
        <h2 className="font-bold text-primary">Ghc 123.00</h2>
      </div>        
    </button>
  )
}
