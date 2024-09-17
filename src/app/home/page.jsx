import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div
            className="relative w-full h-full overflow-x-hidden"
            style={{
                background: `
          radial-gradient(177.06% 84.54% at 180% 15.46%, #063F69 10.1%, 25.1%, #0F0F0F 67.1%), 
          radial-gradient(67.66% 67.66% at 10.18% 91.4%, rgba(5, 0, 235, 0.34) 0%, rgba(0, 179, 235, 0.104615) 32%, rgba(0, 38, 235, 0) 82.5%)`,
                backgroundBlendMode: 'overlay',
            }}
        >
            {/* Circle */}
            <div
                className="absolute border border-[#55555533] rounded-full opacity-100 z-0"
                style={{
                    width: '623px',
                    height: '623px',
                    top: '1738px',
                    left: '648px',
                }}
            ></div>

            <div
                className="absolute border border-[#55555533] rounded-full opacity-100 z-0"
                style={{
                    width: '1032px',
                    height: '1032px',
                    top: '1499px',
                    left: '444px',
                }}
            ></div>

            <div
                className="absolute border border-[#55555533] rounded-full opacity-100 z-0"
                style={{
                    width: '1484px',
                    height: '1484px',
                    top: '1268px',
                    left: '218px',
                }}
            ></div>

            {/* star */}


            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '526px',
                    left: '232px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '1350px',
                    left: '1700px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '1676px',
                    left: '145px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '1614px',
                    left: '1298px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '2078px',
                    left: '696px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '2261px',
                    left: '1676px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '2671px',
                    left: '254px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '2763px',
                    left: '812px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '3516px',
                    left: '642px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '3644px',
                    left: '444px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '3810px',
                    left: '1450px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div
                className="absolute rounded-full opacity-100 z-0"
                style={{
                    width: '28px',
                    height: '28px',
                    top: '3870px',
                    left: '1550px',
                }}
            >
                <Image src={"/star.svg"} width={28} height={27} alt="img" />
            </div>

            <div className="relative z-10">
                <nav className="bg-[#171717] border-gray-200 px-5 pt-5 w-full h-[112px] items-center">
                    <div className="flex justify-between ">
                        <Link href="" className="flex items-center space-x-3 rtl:space-x-reverse" >
                            <Image src={"/logo.png"} className="" alt="ima" width={180} height={180} />
                        </Link>
                        <div className="flex justify-between gap-10">
                            <Image src={"/xlogo.svg"} height={24} width={24} alt="img" className='cursor-pointer' />
                            <Image src={"/docorlogo.svg"} height={32} width={32} alt="img" className='cursor-pointer' />
                            <div className="relative inline-block p-[3px] rounded-[48px] bg-gradient-to-r from-[#0C4D69] to-[#18B18C]">
                                <button
                                    className="flex items-center justify-center gap-2 px-[48px] py-[16px] rounded-[48px] text-white text-[20px] font-bold bg-[#171717] w-full h-full"
                                >
                                    <Image src={"/bhoot.svg"} height={24} width={24} alt="Launch Icon" />
                                    <h1>Launch</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='flex justify-center relative z-10'>
                <div className='mt-[105px] px-24 w-[1048px]'>
                    <h1 className='text-[55px] text-center font-bold text-white '>
                        Trade Smarter With Blockbit Solana Sniper Bot
                    </h1>
                    <h1 className="text-[20px] mt-[36px] flex justify-center font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#2593F9] via-[#2593F9] to-[#00FFD1]">
                        Start Trading Today For Free
                    </h1>
                </div>
            </div>

            <div className='flex justify-center relative z-10'>
                <div className="relative inline-block mt-[36px] p-[3px] rounded-[48px] bg-gradient-to-r from-[#0C4D69] to-[#18B18C]">
                    <button
                        className="flex items-center justify-center gap-2 px-[48px] py-[16px] rounded-[48px] text-white text-[20px] font-bold bg-[#171717] w-full h-full"
                    >
                        <Image src={"/bhoot.svg"} height={32} width={32} alt="Launch Icon" />
                        <h1 className='text-[20px] font-bold' >Connect Wallet</h1>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center mt-[36px] space-x-2 relative z-20">
                <input
                    type="checkbox"
                    className="appearance-none h-6 w-6 rounded-full border-[2px] border-black bg-black checked:bg-green-500 ring-4 ring-white"
                />
                <label className="text-[#989898] text-[15px] font-normal">
                    By connecting, I agree to the Terms & Privacy
                </label>
            </div>

            <div className='flex justify-center mt-[29px] relative z-10'>
                <Image
                    src="/tableimg.svg"
                    alt="img"
                    layout="responsive"
                    width={1332}   // Provide intrinsic width
                    height={751}   // Provide intrinsic height
                    className="max-w-[1332px] h-auto"
                />
            </div>

            <div className="flex flex-col lg:flex-row justify-between px-[20px] md:px-[50px] lg:px-[169px] items-center mt-[50px] md:mt-[150px] lg:mt-[328px] relative z-10">
                <div className="w-full max-w-[466px] mx-auto text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[20px] font-normal text-[#989898]">01.</h1>
                    <h1 className="text-[28px] sm:text-[32px] md:text-[48px] font-normal text-white">Auto Scan</h1>
                    <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal text-[#989898]">
                        Scan the Solana blockchain and discover new tokens based on your filters
                    </p>
                    <div className="relative inline-block mt-[24px] sm:mt-[36px] p-[3px] rounded-[48px] bg-gradient-to-r from-[#0C4D69] to-[#18B18C]">
                        <button className="flex items-center justify-center gap-2 px-[20px] sm:px-[30px] md:px-[48px] py-[12px] sm:py-[16px] rounded-[48px] text-white text-[14px] sm:text-[16px] md:text-[20px] font-bold bg-[#171717] w-full h-full">
                            <h1 className="text-[14px] sm:text-[16px] md:text-[20px] font-bold">Start Trading</h1>
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-[902px]">
                    <Image
                        src="/table.svg"
                        alt="img"
                        layout="responsive"
                        width={902}
                        height={418}
                        className="w-full h-auto"
                    />
                </div>
            </div>



            <div className="flex flex-col lg:flex-row justify-between px-[20px] md:px-[50px] lg:px-[169px] items-center mt-[50px] md:mt-[100px] lg:mt-[122px] relative z-10">
                <div className="w-full max-w-[466px] text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[16px] sm:text-[20px] font-normal text-[#989898]">02.</h1>
                    <h1 className="text-[32px] sm:text-[48px] font-normal text-white">Auto Buy & Sell</h1>
                    <p className="text-[14px] sm:text-[20px] font-normal text-[#989898]">
                        Auto buy & sell based on your strategy setup.
                    </p>
                    <div className="relative inline-block mt-[24px] sm:mt-[36px] p-[3px] rounded-[48px] bg-gradient-to-r from-[#0C4D69] to-[#18B18C]">
                        <button className="flex items-center justify-center gap-2 px-[20px] sm:px-[48px] py-[12px] sm:py-[16px] rounded-[48px] text-white text-[14px] sm:text-[20px] font-bold bg-[#171717] w-full h-full">
                            <h1 className="text-[14px] sm:text-[20px] font-bold">Start Trading</h1>
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-[895px]">
                    <Image
                        src="/tableimg1.svg"
                        alt="img"
                        layout="responsive"
                        width={895}
                        height={515}
                        className="w-full h-auto"
                    />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row justify-between px-[20px] md:px-[50px] lg:px-[169px] items-center mt-[50px] md:mt-[100px] lg:mt-[122px] relative z-10">
                <div className="w-full max-w-[466px] text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="text-[16px] sm:text-[20px] font-normal text-[#989898]">03.</h1>
                    <h1 className="text-[32px] sm:text-[48px] font-normal text-white">Extreme Speed</h1>
                    <p className="text-[14px] sm:text-[20px] font-normal text-[#989898]">
                        Execute trades in milliseconds and surpass your competitors
                    </p>
                    <div className="relative inline-block mt-[24px] sm:mt-[36px] p-[3px] rounded-[48px] bg-gradient-to-r from-[#0C4D69] to-[#18B18C]">
                        <button className="flex items-center justify-center gap-2 px-[20px] sm:px-[48px] py-[12px] sm:py-[16px] rounded-[48px] text-white text-[14px] sm:text-[20px] font-bold bg-[#171717] w-full h-full">
                            <h1 className="text-[14px] sm:text-[20px] font-bold">Start Trading</h1>
                        </button>
                    </div>
                </div>

                <div className="w-full max-w-[897px]">
                    <Image
                        src="/tableimg.svg"
                        alt="img"
                        layout="responsive"
                        width={897}
                        height={492}
                        className="w-full h-auto"
                    />
                </div>
            </div>


            <div className=' relative z-10 mt-[120px] pb-32'>
                <div className='flex justify-center'>
                    <div className='mt-[105px] px-24 w-[1048px]'>
                        <h1 className='text-[48px] text-center font-normal text-white '>
                            Join our Trading Community
                        </h1>
                        <h1 className="text-[20px] mt-[36px] flex justify-center font-normal bg-clip-text text-transparent bg-gradient-to-r from-[#2593F9] via-[#2593F9] to-[#00FFD1]">
                            Start Earning Today!
                        </h1>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="relative inline-block mt-[36px] p-[3px] rounded-[48px] bg-gradient-to-r from-[#0C4D69] to-[#18B18C]">
                        <button
                            className="flex items-center justify-center gap-2 px-[48px] py-[16px] rounded-[48px] text-white text-[20px] font-bold bg-[#1b1a1a] w-full h-full"
                        >
                            <h1 className='text-[20px] font-bold' >Join Discord</h1>
                            <Image src={"/discordwhite.svg"} height={23} width={23} color="white" alt="Launch Icon" />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page