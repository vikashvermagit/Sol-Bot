'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const PopupPass = () => {
    const [showPopup, setShowPopup] = useState(true);

    const handleClose = () => {
        setShowPopup(false);
    };

    if (!showPopup) {
        return null;
    }
    return (
        <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-4 w-full md:w-[400px]">
            <div className="flex-shrink-0">
                <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
            </div>
            <div className="flex justify-between ">
                <div className=''>
                    <h3 className="text-base font-semibold">Transaction Completed</h3>
                    <p className="text-[11px]">Sold 1,000,000 PEPE For 0.9 SOL</p>
                </div>

                <div className='border'>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-200  ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <Link href="#" className="text-sm text-teal-400 hover:underline border">
                        View transaction
                    </Link>


                </div>

            </div>

        </div>
    )
}

export default PopupPass