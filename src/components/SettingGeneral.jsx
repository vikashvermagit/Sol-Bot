import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import MemberShipCard from "./MemberShipCard";

const SettingGeneral = () => {
  const [isOn, setIsOn] = useState(false);
  const [selected, setSelected] = useState("07:00");
  const [selected1, setSelected1] = useState("19:00");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const options = [{ value: "07:00" }];
  const options1 = [{ value: "19:00" }];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdown1 = () => setIsOpen1(!isOpen1);

  const handleSelect = (option) => {
    setSelected(option.value);
    setIsOpen(false);
  };

  const handleSelect1 = (option) => {
    setSelected1(option.value);
    setIsOpen1(false);
  };

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div className="mt-5 lg:p-0 p-4">
        <div className="flex items-center gap-3">
          <Image
            src={"/profile.png"}
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <button
            type="button"
            className="lg:w-[130px] w-[150px] h-[40px] lg:h-[35px] rounded-[52px] flex justify-center items-center text-[16px] lg:text-[12px] font-bold text-[#FFFFFF] bg-[#17C654]"
          >
            Upload image
          </button>
          <button
            type="button"
            className="lg:w-[100px] w-[120px] h-[40px] lg:h-[35px] text-[16px] lg:text-[12px] font-bold flex justify-center items-center bg-[#202020] text-[#FFFFFF] rounded-[52px]"
          >
            Remove
          </button>
        </div>

        <div className="w-[335px] mt-[18px]">
          <p className="lg:text-[10px] text-[12px] font-normal text-[#7A7A7A] leading-[14px]">
            Max file size 5MB. This is the image that would show on your
            collection profile page. Profile picture size (500x500px)
          </p>
        </div>

        <div className="flex items-center gap-1 py-1 mt-[30px] pl-8 lg:pl-0 lg:mt-[55px]">
          <p className="text-[16px] font-bold text-[#FFFFFF]">
            Bot running time
          </p>
          <Info size={20} color="white" />
        </div>

        <div className="flex items-center gap-3 pl-8 lg:pl-0">
          <div className="relative inline-block text-left mt-2">
            <div>
              <button
                type="button"
                onClick={toggleDropdown}
                className="inline-flex justify-between w-[120px] rounded-md shadow-sm px-4 py-2 bg-[#0F0F0F] text-sm font-medium text-[#7A7A7A] focus:outline-none border border-[#7A7A7A]"
              >
                {selected}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen && (
              <div className="origin-top-right absolute mt-2 w-[120px] rounded-md shadow-lg bg-[#333333] text-[#C0C0C0] ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect(option)}
                      className={`${
                        option.locked ? "text-[#C0C0C0]" : "text-[#C0C0C0]"
                      } group flex justify-between items-center px-4 py-2 text-sm w-full`}
                      disabled={option.locked}
                    >
                      {option.value}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <p className="text-[16px] font-bold text-[#858686]">to</p>
          <div className="relative inline-block text-left mt-2">
            <div>
              <button
                type="button"
                onClick={toggleDropdown1}
                className="inline-flex justify-between w-[120px] rounded-md shadow-sm px-4 py-2 bg-[#0F0F0F] text-sm font-medium text-[#7A7A7A] focus:outline-none border border-[#7A7A7A]"
              >
                {selected1}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {isOpen1 && (
              <div className="origin-top-right absolute mt-2 w-[120px] rounded-md shadow-lg bg-[#333333] text-[#C0C0C0] ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {options1.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSelect1(option)}
                      className={`${
                        option.locked ? "text-[#C0C0C0]" : "text-[#C0C0C0]"
                      } group flex justify-between items-center px-4 py-2 text-sm w-full`}
                      disabled={option.locked}
                    >
                      {option.value}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-[15px] lg:mt-[20px]">
          <p className="lg:text-[10px] text-[16px] font-normal text-[#7A7A7A] leading-[14px]">
            *Times are in UTC +0
          </p>
        </div>

        <div className="mt-[38px] flex items-center gap-3">
          <p className="lg:text-[12px] text-[16px] font-bold text-[#FFFFFF]">
            Turn the Bot On\Off
          </p>
          <div className="flex items-center">
            <div
              className={`relative w-14 h-6 rounded-full cursor-pointer ${
                isOn ? "bg-green-500" : "bg-[#FF3A3A]"
              }`}
              onClick={handleToggle}
            >
              <span
                className={`absolute top-1/2 transform -translate-y-1/2 text-xs font-bold ${
                  isOn ? "left-2 text-white" : "right-2 text-white"
                }`}
              >
                {isOn ? "ON" : "OFF"}
              </span>
              <div
                className={`absolute w-5 h-5 bg-white top-0.5 left-0.5 rounded-full shadow-md transform transition-transform duration-300 ${
                  isOn ? "translate-x-8" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <p className="text-white text-[20px] font-bold my-5 flex lg:hidden">
          Withdraw Funds
        </p>

        <div className="flex flex-col space-y-2 lg:hidden">
          <p className="text-[#FFFFFF80] text-[20px] font-bold">Amount</p>
          <div className="bg-[#0F0F0F] border  border-[#7A7A7A] flex w-[150px] h-[40px] gap-1 rounded-[8px] items-center">
            <div className="flex items-center gap-1 px-2 w-fit">
              <Image src={"/sol.png"} width={25} height={25} alt="image" />
            </div>
            <div className="h-6 w-[2px] bg-[#404040]"></div>

            <div className="w-full px-1">
              <input
                type="text"
                placeholder="Optimal"
                className=" text-white text-[14px] bg-transparent border-none outline-none hover:border-none  p-1.5 w-full"
              />
            </div>
          </div>

          <div className="flex lg:hidden">
            <p className="text-[20px]  font-bold text-[#FFFFFF80]">
              Withdraw address (SOL Only)
            </p>
          </div>

          <div className="bg-[#0F0F0F] border  border-[#7A7A7A] flex h-[40px]  gap-1 rounded-[8px] items-center w-full">
            <div className="w-full px-1">
              <input
                type="text"
                placeholder="Optimal"
                className=" text-white text-[14px] bg-transparent border-none outline-none hover:border-none  p-1.5 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingGeneral;
