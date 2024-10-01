import Image from 'next/image';
import React from 'react';
import BlackSoapCarousel from './components/BlackSoapCarousel';

export default function BlackSoapProducts() {
  return (
    <main className="min-h-[80vh] py-[15px] lg:py-8">
      <BlackSoapCarousel />
      <div className="px-[15px] lg:px-[150px] flex flex-col gap-y-2 lg:gap-y-5 mt-3 lg:mt-0">
        <div>
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Price</h6>   
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-600">Ghc 123.00</h2>   
        </div>
        <div className="w-full h-[2px] bg-primary-light my-2" />
        <div>
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Description</h6>   
          <p className="text-base lg:text-lg text-slate-600">Our African Black Soap is handcrafted using traditional methods. Sourced from natural ingredients indigenous to West Africa, this soap is known for its unique properties that cleanse, nourish, and protect your skin.</p>   
        </div>
        <div className="w-full h-[2px] bg-primary-light my-2" />
        <div>
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Health Benefits</h6>   
          <p className="text-base lg:text-lg text-slate-600">African Black Soap deeply cleanses, reduces acne, exfoliates, evens skin tone, soothes irritation, and keeps skin moisturized and soft.</p>   
        </div>
        <div className="w-full h-[2px] bg-primary-light my-2" />
        <div className="">
          <h6 className="text-lg lg:text-xl font-bold text-primary lg:mb-1">Ingredients</h6>   
          <ul className="ps-1 lg:ps-3">
            <li className="lg:text-lg font-semibold text-slate-600">- Cocoa Pod Ash</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Shea Butter</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Coconut Oil</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Plantain Skin Ash</li>
            <li className="lg:text-lg font-semibold text-slate-600">- Palm Kerenl Oil</li>
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