import Image from 'next/image';
import React from 'react';

export default function KenteProducts() {
  return (
    <main className="min-h-[80vh] py-[15px] lg:py-8">
      <div className="h-[40vh] w-full flex items-center justify-center">
        <Image
          src="/images/cloth-3.jpeg"
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
          <p className="text-base lg:text-lg text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt dolores rem reprehenderit beatae consequuntur, necessitatibus ad asperiores. Natus vel neque ratione.</p>   
        </div>
        <div className="">
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Ingredients</h6>   
          <ul className="ps-1 lg:ps-3">
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
          </ul> 
        </div>
        <div className="">
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Health Benefits</h6>   
          <ul className="ps-1 lg:ps-3">
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Lorem ipsum</li>
          </ul> 
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