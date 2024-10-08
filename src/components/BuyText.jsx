import React from "react";

const BuyText = () => {
  return (
    <div className="lg:w-[735px] lg:h-[289px]">
      <div className="lg:bg-black lg:p-12 rounded-lg flex flex-col gap-5">
        <span className="text-[32px] font-bold text-white">
          What is Auto-Buy?
        </span>
        <p className="text-[#858686] text-[20px] font-medium leading-8">
          The Auto Buy functionality is configured to determine the precise
          conditions under which tokens from the Pending Pool are purchased.
          Once the specified criteria are fulfilled, the bot will automatically
          execute the purchase, and the token will be reflected in the open
          positions.
        </p>
      </div>

      <div className="flex lg:justify-end gap-5 mt-14 mb-5">
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

export default BuyText;
