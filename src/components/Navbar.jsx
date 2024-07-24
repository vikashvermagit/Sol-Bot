'use client'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 px-5 w-full ">
            <div className=" flex  items-center justify-between">
                <div className='flex justify-between items-center gap-2'>
                    <Link href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src={'/logo.png'} className="" alt="Flowbite Logo" width={180} height={180} />
                    </Link>

                    <div className={`items-center justify-between `} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="#" className="text-lg block py-2 px-3 font-normal text-[#858686]  rounded md:bg-transparent  md:p-0 md:dark:text-white " aria-current="page">Pending Pool</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-lg block py-2 px-3 font-normal rounded md:p-0 text-[#858686]  hover:text-white ">Open positions</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-lg block py-2 px-3 font-normal rounded md:p-0 text-[#858686]  hover:text-white ">Closed positions</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-lg block py-2 px-3 font-normal rounded md:p-0 text-[#858686]  hover:text-white ">Settings</Link>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className='flex justify-between gap-2'>
                    <div className="bg-gradient-to-r from-[#271197] to-[#00AC82] rounded-[8px] px-3 py-1.5 my-3 flex items-center gap-16  justify-between shadow-md">
                        <div>
                            <h2 className="text-white text-sm font-semibold">Purchase Premium</h2>
                            <p className="text-white text-xs">Pay 0% Fees</p>
                        </div>
                        <div>
                            <Image src="/crownicon.svg" alt="Crown Icon" width={22} height={18} />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='border rounded-[48px] px-4 gap-1 flex justify-between items-center my-4 border-[#676767] '>
                            <h1 className='text-white text-base font-bold'>786.0</h1>
                            <Image src={'/solano.svg'} width={20} height={20} alt='image' />
                        </div>
                        <div className='flex border rounded-[48px] px-4 my-4 border-[#676767] items-center'>
                            <h1 className='text-white text-base font-bold'>64ec2c...c898</h1>
                        </div>
                    </div>


                    <div className="flex items-center ">
                        <button
                            type="button"
                            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                        >
                            <span className="sr-only">Open user menu</span>
                            <Image className="w-8 h-8 rounded-full" src="/usericon.png" alt="user photo" width={32} height={32} />
                        </button>

                    </div>
                </div>




            </div>
        </nav>
    )
}

export default Navbar