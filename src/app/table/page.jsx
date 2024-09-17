import FilterForm from "@/components/FilterForm";
import InfoCard from "@/components/InfoCard";
import MemberShipCard from "@/components/MemberShipCard";
import PendingPoolTable from "@/components/PendingPoolTable";
import Questions from "@/components/Questions";
import TermsCondition from "@/components/TermsCondition";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div
      className="relative w-full h-full overflow-x-hidden"
      style={{
        background: `
          radial-gradient(177.06% 84.54% at 140% 15.46%, #063F69 20.1%, #1A0D40 40.1%, #0F0F0F 67.1%),
          radial-gradient(67.66% 67.66% at 10.18% 91.4%, rgba(5, 0, 235, 0.34) 0%, rgba(0, 179, 235, 0.104615) 32%, rgba(0, 38, 235, 0) 82.5%)`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
        <h1 className="text-[5rem]">Text Example</h1>
      </div>

      {/* Circle */}
      <div
        className="absolute border border-[#55555533] rounded-full z-0"
        style={{
          width: "30vw",
          height: "30vw",
          top: "130vh",
          left: "45vw",
        }}
      ></div>

      <div
        className="absolute border border-[#55555533] rounded-full z-0"
        style={{
          width: "50vw",
          height: "50vw",
          top: "100vh",
          left: "35vw",
        }}
      ></div>

      <div
        className="absolute border border-[#55555533] rounded-full z-0"
        style={{
          width: "70vw",
          height: "70vw",
          top: "85vh",
          left: "20vw",
        }}
      ></div>

      {/* Star */}
      <div
        className="absolute rounded-full z-0"
        style={{
          width: "2vw",
          height: "2vw",
          top: "30vh",
          left: "15vw",
        }}
      >
        <Image src={"/star.svg"} width={28} height={27} alt="star" />
      </div>

      <div
        className="absolute rounded-full z-0"
        style={{
          width: "2vw",
          height: "2vw",
          top: "250vh",
          left: "30vw",
        }}
      >
        <Image src={"/star.svg"} width={28} height={27} alt="star" />
      </div>

      <div
        className="absolute rounded-full z-0"
        style={{
          width: "2vw",
          height: "2vw",
          top: "260vh",
          left: "65vw",
        }}
      >
        <Image src={"/star.svg"} width={28} height={27} alt="star" />
      </div>

      <div
        className="absolute rounded-full z-0"
        style={{
          width: "2vw",
          height: "2vw",
          top: "265vh",
          left: "70vw",
        }}
      >
        <Image src={"/star.svg"} width={28} height={27} alt="star" />
      </div>
    </div>
  );
};

export default Page;
