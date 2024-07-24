"use client";
import Navbar from "@/components/Navbar";
import PendingPoolTable from "@/components/PendingPoolTable";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("Pending Pool");
  console.log(tab);

  return (
    <div className="bg-gray-800  h-screen">
      <Navbar tab={tab} setTab={setTab} />

      {/* Dynamic Section */}

      <div className="mx-8 mt-10">
        {tab === "Pending Pool" && (
          <h1 className="text-lg font-bold text-white uppercase">
            PENDING POOL
          </h1>
        )}
        {tab === "Open positions" && (
          <h1 className="text-lg font-bold text-white uppercase">
            Open positions
          </h1>
        )}
        {tab === "Closed positions" && (
          <h1 className="text-lg font-bold text-white uppercase">
            Closed positions
          </h1>
        )}
        {tab === "Settings" && (
          <h1 className="text-lg font-bold text-white uppercase">Settings</h1>
        )}

        {/* Description  */}
        {tab === "Pending Pool" && (
          <p className="text-sm font-bold text-white mt-2">
            Presenting your current Pending Pool, updated in real-time
          </p>
        )}

        {tab === "Open positions" && (
          <p className="text-sm font-bold text-white mt-2">
            Presenting your current open positions, updated in real-time
          </p>
        )}

        {tab === "Closed positions" && (
          <p className="text-sm font-bold text-white mt-2">
            Presenting your closed positions
          </p>
        )}

        <div className=" flex justify-between mt-4">
          <div className="flex items-center gap-5">
            <div className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1 ">
              <Image src={"/filter.svg"} alt="" width={16} height={16} />
              <h1 className="text-white text-base font-bold">Filter</h1>
              <Image
                src={"/dropdown.svg"}
                alt=""
                width={10}
                height={10}
                className="mt-1"
              />
            </div>
            {tab === "Open positions" && (
              <>
                <div className="flex items-center gap-2 text-[#FFFFFF91]">
                  <div className="mr-2">
                    <p className="text-[14px] font-bold">Show hidden</p>
                  </div>
                  <p className="text-[14px] font-bold">Open position: 17</p>
                  <p className="text-[14px] font-bold">
                    Total Invested SOL: 14
                  </p>
                  <p className="text-[14px] font-bold">Total Current SOL: 11</p>
                </div>
              </>
            )}
            {tab === "Closed positions" && (
              <>
                <div className="flex items-center gap-2 text-[#FFFFFF91]">
                  <p className="text-[14px] font-bold">
                    Closed Positions PNL: 177 SOL
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1 ">
            <Image src={"/filter.svg"} alt="" width={16} height={16} />
            <h1 className="text-white text-base font-bold">Settings </h1>
          </div>
        </div>
      </div>

      <div className="mt-5 p-5">
        <PendingPoolTable />
      </div>
    </div>
  );
}
