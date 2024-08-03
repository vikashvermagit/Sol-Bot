'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const TermsCondition = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className='bg-black w-[495px] p-8 rounded-[8px] border border-[#515151]'>
            <span className='text-white text-2xl font-bold'>Accept Terms and Conditions</span>
            <div className='mt-5'>
                <span className='text-[#989898] text-base font-normal'>To proceed, please accept our</span>
                <Link href={''} className="text-[#17C654] underline ml-2 text-base font-semibold">Terms and Conditions</Link>
            </div>
            <div className="flex items-center mt-2 gap-2">
                <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors duration-300 ${isChecked ? 'border-green-500 bg-green-500' : 'border-gray-400 bg-transparent'}`}
                    onClick={() => setIsChecked(!isChecked)}
                >
                    {isChecked && (
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    )}
                </div>
                <span className='text-[#989898] text-base font-normal '>I’ve read and accept the Terms and Conditions</span>

            </div>
            <button className='bg-[#17C654] mt-8 ml-80 rounded-[7px] px-6 py-3 text-white text-base font-bold'>Accept</button>


        </div>
    )
}

export default TermsCondition