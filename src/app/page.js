import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800  h-screen">
   <Navbar/>
      <div className="mx-8 mt-10">
         <h1 className="text-lg font-bold text-white">PENDING POOL</h1>
         <p className="text-sm font-bold text-white mt-2">Presenting your current Pending Pool, updated in real-time</p>
         <div className=" flex justify-between mt-7">
          <div className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1 ">
             <Image src={'/filter.svg'} width={16} height={16} />
             <h1 className="text-white text-base font-bold">Filter</h1>
             <Image src={'/dropdown.svg'} width={10} height={10} className='mt-1' />
          </div>
          <div className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1 ">
             <Image src={'/filter.svg'} width={16} height={16} />
             <h1 className="text-white text-base font-bold">Settings </h1>
          </div>
         </div>
      </div>
    </div>
  );
}
