import { Info, Lock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import InfoCard from "./InfoCard";

const SettingTp = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [isChecked1, setIsChecked1] = useState(true);
  const [infoPop, setInfoPop] = useState(false);

  const toggleDropdown = () => setInfoPop(!infoPop);

  return (
    <>
      <div className="mt-5">
        <div className="flex items-center gap-1 py-1 mt-4 relative">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Take Profits</p>
          <Info size={20} color="white" onClick={toggleDropdown} />
          {infoPop && (
            <div className="absolute right-10 top-3">
              <InfoCard />
            </div>
          )}
        </div>

        <div className="flex items-center gap-5 mt-3">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm mr-1 font-medium rounded-l-[8px] ml-3 w-10">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 py-1 mt-4">
          <p className="text-[16px] font-bold text-[#FFFFFF]">Stop Loss</p>
          <Info size={20} color="white" />
        </div>

        <div className="flex items-center gap-5">
          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex  w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-10">
                ROI%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <div>
              <input
                type="text"
                className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
              />
            </div>
          </div>

          <div className="bg-[#0F0F0F] border border-[#7A7A7A] flex justify-between w-[174px] h-[40px] rounded-[8px] items-center">
            <div className="flex items-center gap-1">
              <span className="text-[#7A7A7A] text-sm font-medium rounded-l-[8px] ml-3 w-12">
                Amt.%
              </span>
              <div className="h-6 w-[2px] bg-[#404040]"></div>
            </div>
            <input
              type="text"
              className=" text-white bg-transparent border-none outline-none hover:border-none py-1 px-2"
            />
          </div>
          <div className="w-[300px] rounded-[16px] bg-[#1A1A1A] h-[55px] flex justify-evenly items-center">
            <div className="flex items-center gap-1">
              <Info size={20} color="white" />

              <p className="text-[12px] font-bold text-[#FFFFFF]">
                LP Burned Audit
              </p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
              />
              <div
                className="relative w-6 h-2 bg-gray-200 rounded-[14px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-0.5 after:start-[0px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
              ></div>
            </label>
            <Image
              src={"/crown1.png"}
              alt=""
              width={15}
              height={15}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingTp;
