import Image from 'next/image';
import React from 'react';

export default function KenteProducts({ params }: { params: { id: string } }) {

  return (
    <main className="min-h-[80vh] py-[15px] lg:py-8">
      <div className="h-[40vh] w-full flex items-center justify-center">
        <Image
          src={`/images/${params.id}`}
          alt="Product"
          height={200}
          width={200}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="px-[15px] lg:px-[150px] flex flex-col gap-y-2 lg:gap-y-5 mt-3 lg:mt-0">
        <div>
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Price</h6>   
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-600">Ghc 123.00</h2>   
        </div>
        <div>
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Description</h6>   
          <p className="text-base lg:text-lg text-slate-600">Discover the vibrant beauty of authentic Kente cloth, handcrafted with rich cultural heritage and bold, eye-catching designs perfect for any occasion.</p>   
        </div>
        <div className="flex justify-center lg:justify-start mt-10">
          <div className="rounded-lg border border-primary p-3 w-[250px] flex flex-col bg-primary-light">
            <h5 className="text-primary font-bold">Contact Detail</h5>
            <hr className="my-1 border-primary" />
            <h6 className="text-primary font-semibold">Email: uzuri@email.com</h6>
            <h6 className="text-primary font-semibold">Phone: 0244 123 123</h6>
          </div>
        </div>
      </div>
    </main>
  )
}