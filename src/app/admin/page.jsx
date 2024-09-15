import AdBox from '@/components/adbox'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {

    const data = [
        { title: 'Total Wallets Created', count: 582 },
        { title: 'Total Wallets SOL Balance', count: 500 },
        { title: 'Total Wallets active in the past 24H', count: 50 },
        { title: 'Total platform volume in the past 24H (SOL)', count: 114 },
        { title: 'AVG user trades in the past 24H', count: 0.5 },
        { title: 'AVG user auto buy amount (SOL)', count: 11 },
        { title: 'Total platform fees (SOL)', count: 410 },
        { title: 'Platform fees in the past 24H (SOL)', count: 50 },
        { title: 'AVG user volume', count: 89 },
        // Add more data if needed
    ];
    return (
        <div
            className="w-full h-full"
            style={{
                background: `
            radial-gradient(177.06% 84.54% at 140% 15.46%, #063F69 20.1%, #1A0D40 40.1%, #0F0F0F 67.1%),
            radial-gradient(67.66% 67.66% at 10.18% 91.4%, rgba(5, 0, 235, 0.34) 0%, rgba(0, 179, 235, 0.104615) 32%, rgba(0, 38, 235, 0) 82.5%)
          `,
                backgroundBlendMode: 'overlay',
            }}
        >
            <div className="">
                <nav className="bg-[#171717] border-gray-200 px-5 pt-5 w-full h-[112px] items-center">
                    <div className="flex justify-between ">
                        <Link href="" className="flex items-center space-x-3 rtl:space-x-reverse" >
                            <Image src={"/logo.png"} className="cursor-pointer" alt="image" width={180} height={180} />
                        </Link>
                        <div className="flex justify-between gap-10">
                            <Image src={"/xlogo.svg"} height={24} width={24} alt="img" className='cursor-pointer' />
                            <Image src={"/docorlogo.svg"} height={32} width={32} alt="img" className='cursor-pointer' />
                        </div>
                    </div>
                </nav>
            </div>

            <div className='flex justify-center relative z-10'>
                <div className='mt-[105px] px-24 w-[1048px]'>
                    <h1 className="text-[45px] font-normal flex text-white justify-center">
                        Admin
                        <span className="text-[#A04BF5] pl-2"> Dashboard</span>
                    </h1>
                </div>
            </div>

            <div className='grid grid-cols-3 px-[173px] mt-[90px] gap-5'>
                {data.map((item, index) => (
                    <AdBox key={index} title={item.title} count={item.count} />
                ))}
            </div>

            <div className='flex justify-center gap-[16px] mt-[53px] pb-20'>
                <button
                    className="text-[20px] font-bold text-white px-[70px] rounded-[42px] py-[28px] text-center"
                    style={{
                        background: 'linear-gradient(92.49deg, rgba(226, 52, 115, 0.79) 8.07%, #95041E 80.13%)',
                    }}
                >
                    Reset data
                </button>

                <button
                    className="text-[20px] font-bold text-white px-[70px] rounded-[42px] py-[28px] text-center"
                    style={{
                        background: 'linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)',
                    }}
                >
                    Download
                </button>
            </div>

        </div>
    )
}
