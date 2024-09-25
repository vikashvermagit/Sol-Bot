import React from "react";

const Questions = () => {
  return (
    <div className="lg:w-[735px] lg:h-[289px]">
      <div className="lg:bg-black lg:p-12 rounded-lg flex flex-col gap-5">
        <span className="text-[28px] lg:text-[32px] font-bold text-white">
          What is a Pending Pool?
        </span>
        <p className="text-[#858686] text-[20px] font-medium leading-8">
          The Pending Pool serves as the initial filter for all tokens emerging
          from the Solana blockchain. Upon a token&apos;s launch on the
          blockchain, the bot conducts a scan based on the predefined criteria
          within the Pending Pool settings. Tokens that satisfy these criteria
          are listed in the Pending Pool, awaiting the conditions necessary for
          an automatic purchase.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:flex lg:justify-end gap-5 mt-14 mb-5">
        <button className=" hover:border border-[#17C654] bg-[#17C654] border rounded-[7px] px-6 py-3 text-white text-base font-bold">
          Update
        </button>
        <button className="bg-[#202020] hover:border  hover:bg-[#2c2c2c] border rounded-[7px] px-6 py-3 text-white text-base font-bold">
          Canel
        </button>
      </div>
    </div>
  );
};

export default Questions;
