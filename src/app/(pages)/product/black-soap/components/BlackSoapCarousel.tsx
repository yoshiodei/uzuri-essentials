"use client";
import Image from "next/image";
import { useEffect } from "react";
import React from 'react';

export default function BlackSoapCarousel() {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div className="w-full h-auto px-[15px] lg:px-[150px] py-2 lg:py-0 lg:pb-5">
      <div className="w-full h-[35vh] lg:h-auto lg:bg-white rounded-lg">
      <div className="mt-[15px] lg:px-[150px] pt-[10px] lg:pt-[15px] pb-[70px] lg:pb-[90px]">
      <div
        id="carouselExampleCrossfade"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel">
        {/* <!--Carousel indicators--> */}
  <div
    className="absolute flex gap-3 lg:gap-5 inset-x-0 bottom-[-55px] lg:bottom-[-95px] z-[2] mx-[15%] mb-[0px] lg:mb-4 flex list-none justify-center p-0"
    data-twe-carousel-indicators>
    <button
      type="button"
      data-twe-target="#carouselExampleCrossfade"
      data-twe-slide-to="0"
      data-twe-carousel-active
      className="box-content overflow-hidden h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-lg flex-initial cursor-pointer border lg: border-2 border-primary bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1">
        <Image
        src="/images/black_soapA1.png"
        width={200}
        height={200}
        alt="Black soap" 
        className="block w-full h-full object-cover"
        />
      </button>
    <button
      type="button"
      data-twe-target="#carouselExampleCrossfade"
      data-twe-slide-to="1"
      className="box-content overflow-hidden h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-lg flex-initial cursor-pointer border border-2 border-primary bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2">
        <Image
        src="/images/black_soapA2.png"
        width={200}
        height={200}
        alt="Black soap" 
        className="block w-full h-full object-cover"
        />
      </button>
    <button
      type="button"
      data-twe-target="#carouselExampleCrossfade"
      data-twe-slide-to="2"
      className="box-content overflow-hidden h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-lg flex-initial cursor-pointer border border-2 border-primary bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3">
      <Image
        src="/images/black_soapA3.png"
        width={200}
        height={200}
        alt="Black soap" 
        className="block w-full h-full object-cover"
        />
      </button>
  </div>

  {/* <!--Carousel items--> */}
  <div
    className="rounded-lg border-2 border-primary relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/* <!--First item--> */}
    <div
      className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-fade
      data-twe-carousel-item
      data-twe-carousel-active>
      {/* <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="block w-full"
        alt="Wild Landscape" /> */}
       <Image src="/images/black_soapA1.png" height={600} width={1000} className="block w-full h-[220px]" alt="black soap" />
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-fade
      data-twe-carousel-item>
      <Image src="/images/black_soapA2.png" height={600} width={1000} className="block w-full h-[220px]" alt="black soap" />
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-fade
      data-twe-carousel-item>
      <Image src="/images/black_soapA3.png" height={600} width={1000} className="block w-full h-[220px]" alt="black soap" />
    </div>
  </div>

  {/* <!--Carousel controls - prev item--> */}
  <button
    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCrossfade"
    data-twe-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        className="h-10 w-10 text-primary">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous
    </span>
  </button>
  {/* <!--Carousel controls - next item--> */}
  <button
    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselExampleCrossfade"
    data-twe-slide="next">
    <span className="inline-block h-8 w-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
        className="h-10 w-10 text-primary">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next
      </span>
  </button>
</div>
    </div>
      </div>      
    </div>
  )
}
