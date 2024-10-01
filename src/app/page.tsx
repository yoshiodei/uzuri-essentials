'use client'
import { useRouter } from 'next/navigation';
import { GiRolledCloth } from "react-icons/gi";
import { FaSoap } from "react-icons/fa6";
import { SiRoundcube } from "react-icons/si";
import Image from 'next/image';


export default function Index() {
  const router = useRouter();

  return (
    <div className="bg-primary-light w-full h-[100vh] flex flex-col items-center p-5 gap-y-5">
      <div className="text-primary text-center mt-10">
        <h3 className="text-2xl mb-3 font-semibold">Welcome To</h3>
        {/* <h3 className="text-3xl">Uzuri Essentials</h3> */}
        <div className="flex justify-center">
          <Image
            src="/images/Uzuri_Essentials_Logo.png"
            alt="Uzuri Essentials Logo"
            priority={true}
            height={100}
            width={500}
            className="w-[80%] h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-5 mt-10">
        <div className="flex flex-col items-center gap-y-2 mb-3">
          <h5 className="text-2xl font-semibold text-primary">Our Shops</h5>
          <div className="h-[4px] w-[50px] bg-primary" />
        </div>
        <button onClick={() => router.push("/kente")} className="bg-primary rounded-lg w-[320px] h-[60px] flex items-center justify-center gap-x-7 px-5">
          <GiRolledCloth className="text-[1.8em] text-white" /> 
          <p className="text-white text-[1.4em] font-semibold">Kente Cloth</p>
        </button>
        <button onClick={() => router.push("/black-soap")} className="bg-primary rounded-lg w-[320px] h-[60px] flex items-center justify-center gap-x-7 px-5">
          <FaSoap className="text-[1.8em] text-white" /> 
          <p className="text-white text-[1.4em] font-semibold">Black Soap</p>
        </button>
        <button onClick={() => router.push("/shea-butter")} className="bg-primary rounded-lg w-[320px] h-[60px] flex items-center justify-center gap-x-7 px-5">
          <SiRoundcube className="text-[1.8em] text-white" /> 
          <p className="text-white text-[1.4em] font-semibold">Shea Butter</p>
        </button>
      </div>
    </div>  
  );
}