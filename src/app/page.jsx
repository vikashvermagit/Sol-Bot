"use client";
import ClosedPoolTable from "@/components/ClosedPoolTable";
import FilterForm from "@/components/FilterForm";
import Navbar from "@/components/Navbar";
import OpeningPoolTable from "@/components/OpeningPoolTable";
import PendingPoolTable from "@/components/PendingPoolTable";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [tab, setTab] = useState("Pending Pool");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };




  const notify = () => {
    toast.success(
      <div className="flex items-center ">

        <div className="ml-3">
          <h1 className="text-base font-bold text-white">Transaction Completed</h1>
          <p className="text-xs font-normal text-white">Sold 1,000,000 PEPE For 0.9 SOL <a href="/link" className="text-[#28DEAF] no-underline text-xs font-normal">View transaction</a>.</p>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { backgroundColor: '#1a202c', width: '500px', maxWidth: '400px', marginRight: '5px' }
      }
    );
  };

  return (
    <div className="bg-[#121212] h-screen relative flex flex-col justify-start">
      <ToastContainer />
      <Navbar tab={tab} setTab={setTab} />

      <Image
        src={"/eclipse.png"}
        alt=""
        width={200}
        height={200}
        className="w-[520px] h-[550px] absolute -left-10 top-12"
      />

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

        <div className="flex justify-between mt-4">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1 cursor-pointer"
                onClick={handleButtonClick}>

                <Image src="/filter.svg" alt="Filter" width={16} height={16} />
                <h1 className="text-white text-base font-bold">Filter</h1>
                <Image
                  src="/dropdown.svg"
                  alt="Dropdown"
                  width={10}
                  height={10}
                  className="mt-1"
                />
              </div>

              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                  <FilterForm onClose={handleClose} />
                </div>
              )}


            </div>
            {tab === "Open positions" && (
              <div className="flex items-center gap-2 text-[#FFFFFF91]">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <div
                    className="relative w-10 h-4 bg-gray-200 rounded-[14px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-0.5 after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
                  ></div>
                  <span className="text-sm font-medium text-grfay-900 dark:text-gray-300">
                    Show hidden
                  </span>
                </label>
                <p className="text-[14px] font-bold">Open position: 17</p>
                <p className="text-[14px] font-bold">Total Invested SOL: 14</p>
                <p className="text-[14px] font-bold">Total Current SOL: 11</p>
              </div>
            )}
            {tab === "Closed positions" && (
              <div className="flex items-center gap-2 text-[#FFFFFF91]">
                <p className="text-[14px] font-bold">
                  Closed Positions PNL: 177 SOL
                </p>
              </div>
            )}
          </div>
          <div
            className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1"
            onClick={notify}
          >
            <Image src={"/filter.svg"} alt="" width={16} height={16} />
            <h1 className="text-white text-base font-bold">Settings</h1>
          </div>
        </div>
      </div>

      <div className="mt-5 p-5 z-40 relative h-full">
        {tab === "Pending Pool" && <PendingPoolTable />}
        {tab === "Open positions" && <OpeningPoolTable />}
        {tab === "Closed positions" && <ClosedPoolTable />}
      </div>
    </div>
  );
}
