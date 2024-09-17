import Image from "next/image";
import React from "react";

const PendingPoolTable = () => {
  return (
    <>
      <div className=" h-[360px] overflow-hidden overflow-y-scroll custom-scrollbar relative">
        <table className="w-[100%] border-collapse leading-7">
          <thead className="">
            <tr className="text-[#858686] leading-3 sm:text-[13px] xl:text-[14px] border-t border-[#515151] bg-[#121212] h-[45px] text-[16px] font-bold">
              <th className=" text-left px-4 p-1">Pair</th>
              <th className=" text-left px-4 p-1">Created</th>
              <th className=" text-left px-4 p-1">Contract audit</th>
              <th className=" text-left px-4 p-1">Pooled SOL</th>
              <th className=" text-left px-4 p-1">Pooled Token</th>
              <th className=" text-left px-4 p-1">24H change (%)</th>
              <th className=" text-left px-4 p-1">LP Burned</th>
              <th className=" text-left px-4 p-1">Status</th>
              <th className=" text-left px-4 p-1"></th>
            </tr>
          </thead>

          <tbody className="font-medium  ">
            <tr className="leading-6 cursor-pointer bg-[#171717] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[16px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[16px]">21h</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[16px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">FAD</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">MAD</p>
                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">TOP 10 HOLDERS</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[16px]">5</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[16px]">10%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[16px] text-[#FF3A3A]">-20%</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[#FFFFFF] text-[16px]">
                    Not burned
                  </p>
                  <Image
                    src="/Cross.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[#D9A900] text-[16px]">
                  Waiting...
                </p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/eagle.png"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[19px] h-[24px]"
                  />
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Quick Buy
                  </button>
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer bg-[#0F0F0F] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[16px]">WINSTON</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[16px]">3 mins</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[16px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">FAD</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">MAD</p>
                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">TOP 10 HOLDERS</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[16px]">50</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[16px]">90%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[16px] text-[#17C654]">+20%</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[#FFFFFF] text-[16px]">
                    Burned
                  </p>
                  <Image
                    src="/Check.png"
                    alt=""
                    width={12}
                    height={12}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[#17C654] text-[16px]">
                  Buying!
                </p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/eagle.png"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[19px] h-[24px]"
                  />
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Quick Buy
                  </button>
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer bg-[#171717] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[16px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[16px]">21h</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[16px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">FAD</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">MAD</p>
                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">TOP 10 HOLDERS</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[16px]">5</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[16px]">10%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[16px] text-[#FF3A3A]">-20%</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[#FFFFFF] text-[16px]">
                    Not burned
                  </p>
                  <Image
                    src="/Cross.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[#D9A900] text-[16px]">
                  Waiting...
                </p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/eagle.png"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[19px] h-[24px]"
                  />
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Quick Buy
                  </button>
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>

            <tr className="leading-6 cursor-pointer bg-[#0F0F0F] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[16px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[16px]">16 days</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[16px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">FAD</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">MAD</p>
                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">TOP 10 HOLDERS</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[16px]">5</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[16px]">10%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[16px] text-[#FF3A3A]">-20%</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[#FFFFFF] text-[16px]">
                    Not burned
                  </p>
                  <Image
                    src="/Cross.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[#D9A900] text-[16px]">
                  Waiting...
                </p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/eagle.png"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[19px] h-[24px]"
                  />
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Quick Buy
                  </button>
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer bg-[#171717] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[16px]">WIF</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[16px]">16 days</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[16px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">FAD</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">MAD</p>
                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">TOP 10 HOLDERS</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[16px]">5</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[16px]">10%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[16px] text-[#FF3A3A]">-20%</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[#FFFFFF] text-[16px]">
                    Not burned
                  </p>
                  <Image
                    src="/Cross.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[#D9A900] text-[16px]">
                  Waiting...
                </p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/eagle.png"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[19px] h-[24px]"
                  />
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Quick Buy
                  </button>
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
            <tr className="leading-6 cursor-pointer bg-[#0F0F0F] h-[70px]">
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold uppercase gap-1">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/img.png"}
                    alt=""
                    width={26}
                    height={26}
                    className="w-[26px] h-[26px] rounded-full"
                  />
                  <p className="font-bold text-[16px]">WINSTON</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[14px] font-bold">
                <p className="font-bold text-[16px]">3 mins</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white text-[16px] font-medium  uppercase">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-[12px]">FAD</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">MAD</p>
                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className=" font-medium text-[12px]">TOP 10 HOLDERS</p>

                    <Image
                      src={"/Check.png"}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/sol.png"}
                    alt=""
                    width={20}
                    height={20}
                    className="w-[18px] h-[18px]"
                  />
                  <p className="font-bold text-[16px]">50</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-white">
                <div>
                  <p className="font-bold text-[16px]">90%</p>
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[16px] text-[#17C654]">+20%</p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-[#FFFFFF] text-[16px]">
                    Burned
                  </p>
                  <Image
                    src="/Check.png"
                    alt=""
                    width={12}
                    height={12}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap">
                <p className="font-bold text-[#17C654] text-[16px]">
                  Buying!
                </p>
              </td>
              <td className=" text-left p-1 px-4 whitespace-nowrap text-[#FFFFFF]">
                <div className="flex items-center gap-3">
                  <Image
                    src="/eagle.png"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[19px] h-[24px]"
                  />
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Quick Buy
                  </button>
                  <button
                    type="button"
                    className="bg-[#2B2B2B] rounded-[52px] py-[6px] px-[24px] text-[#FFFFFF] text-[16px]"
                  >
                    Cancel
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="bg-gradient-to-r from-[#3E4BD8] to-[#5A67F2] fixed end-1 bottom-10 z-10 flex justify-center gap-[31px] w-[379px] text-start rounded-[34px] items-center">
            <h1 className="text-base font-bold ml-[30px] text-white">Need Help? Join our Discord Server for Support</h1>
            <Image src={'discord.svg'} width={88} height={88} alt="discord"
              className="rounded-[34px] mt-[19px] mb-[20px] mr-[20px]"
            />
          </div>
      </div>
    </>
  );
};

export default PendingPoolTable;
