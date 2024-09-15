import React from 'react';

function AdBox({ title, count }) {
    return (
        <div className="relative m-3 px-[20px] rounded-[48px] overflow-hidden w-full">
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-[#CFF3FF1A] to-[#3535351A]"
                style={{ backgroundBlendMode: 'lighten' }}
            />
            {/* Content */}
            <div className="relative z-10 rounded-[48px]">
                <h1 className="text-[20px] md:text-[25px] text-white font-normal text-center px-[10px] pt-[20px] md:pt-[26px] flex justify-center">
                    {title}
                </h1>
                <h1 className="text-[35px] md:text-[45px] text-white font-bold flex justify-center pt-[15px] md:pt-[21px] pb-[24px]">
                    {count}
                </h1>
            </div>
        </div>
    );
}

export default AdBox;
