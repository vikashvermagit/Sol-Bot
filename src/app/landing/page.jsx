"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Step Progress Bar Component
const StepProgressBar = ({ currentStep }) => {
    return (
        <div className="flex justify-center items-center gap-4 pt-[96px]">
            <div className="border rounded-full flex px-[24px] py-[9.5px] gap-4">
                {[1, 2, 3].map((step, index) => (
                    <div
                        key={index}
                        className={`w-[30px] h-[30px] rounded-full flex items-center justify-center border ${currentStep >= step ? "bg-[#A04BF5]" : "bg-gray-700"
                            }`}
                    >

                    </div>
                ))}
            </div>

        </div>
    );
};

//onClick={nextStep} Card Content for Step 1 with buttons

const Step1 = ({ nextStep }) => {
    const [showNextCard, setShowNextCard] = useState(false);

    const handleGenerateClick = () => {
        setShowNextCard(true); // Switch to next card
    };

    return (
        <div>


            {!showNextCard ? (
                <><h1 className="text-[45px] font-normal flex justify-center">
                    Generate and Save your
                    <span className="text-[#A04BF5] pl-2"> Trading wallet</span>
                </h1><div
                    className="rounded-[48px] justify-center mt-[78px] mb-[50px] flex text-white w-[1087px] h-[513px]"
                    style={{
                        background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                        backgroundBlendMode: "lighten"
                    }}
                >
                        <div className="p-6">
                            <h2 className="text-[25px] mt-[60px] font-normal flex justify-center mb-4">Your trading wallet address is</h2>
                            <h2 className="mb-4 text-[30px] font-bold flex justify-center mt-[16px]">
                                Steew3242f4.......43grg65rR
                            </h2>
                            <h2 className="text-[25px] font-normal flex justify-center w-[487px] mx-auto text-center">
                                Click Generate to take control over your Trading wallet and private keys
                            </h2>
                            <button
                                onClick={handleGenerateClick}
                                className="w-[573px] mt-[76px] mx-auto items-center justify-center flex text-white text-[20px] font-bold rounded-[42px] py-[28px]"
                                style={{
                                    background: "linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)"
                                }}
                            >
                                Generate
                            </button>
                        </div>
                    </div></>
            ) : (
                <><h1 className="text-[45px] font-normal flex justify-center">
                    This is your
                    <span className="text-[#A04BF5] pl-2"> Trading wallet</span>
                </h1>
                    <div
                        className="rounded-[48px]  mt-[78px] mb-[50px] text-white w-[1087px] h-[513px]"
                        style={{
                            background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                            backgroundBlendMode: "lighten"
                        }}>

                        <div className=" px-[125px] pt-[54px]">
                            <h2 className="text-[20px] font-bold mb-4 ml-3">BLOCKBIT TRADING WALLET</h2>
                            <div className="flex justify-between w-[545px] bg-[#9292921A] rounded-[25px] py-[26px] px-[24px] mt-[22px]">
                                <h1 className="text-[15px] font-normal">SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32</h1>
                                <Image src={"/copy.svg"} width={20} height={20} alt="img" className='cursor-pointer'  />
                            </div>
                            <h2 className="mb-4 text-[20px] font-bold mt-[37px]">
                                TRADING WALLET PRIVATE KEY
                            </h2>

                            <h1 className="text-[20px] font-normal text-[#9F9F9F]">Please copy the below private key and store it in a safe place.</h1>
                            <h1 className="text-[20px] font-bold text-[#9F9F9F]">Your private key will NOT be shown again.</h1>

                        </div>
                        <div className=" bg-[#9292921A] w-[890px] mt-[30px] items-center ml-[100px] rounded-[42px] px-[1px] py-[10px]">
                            <div className="flex justify-between items-center">
                                <h1 className="text-[15px] pl-6 font-bold">Double click to reveal your private key</h1>
                                <button
                                    onDoubleClick={nextStep}
                                    className="text-white font-bold py-[20px] rounded-[42px] text-[20px] px-[69px] mx-[16px]" // Added mx-[16px] for horizontal margin
                                    style={{
                                        background: 'linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 63.33%, #75CFD4 99.67%)',
                                    }}
                                >
                                    Double click 2X
                                </button>
                            </div>

                        </div>
                    </div></>
            )}
        </div>
    );
};

// Card Content for Step 2 without buttons
const Step2 = ({ nextStep }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleContinue = () => {
        // Handle the next step
        console.log("Proceed to the next step");
        setShowPopup(false);
    };
    return (

        <div className="relative">
            <h1 className="text-[45px] font-normal flex justify-center">
                This is your
                <span className="text-[#A04BF5] pl-2"> Trading wallet</span>
            </h1>
            <div
                className="rounded-[48px]  mt-[78px] mb-[50px] text-white w-[1087px] h-[513px]"
                style={{
                    background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                    backgroundBlendMode: "lighten"
                }}>

                <div className=" px-[125px] pt-[54px]">
                    <h2 className="text-[20px] font-bold mb-4 ml-3">BLOCKBIT TRADING WALLET</h2>
                    <div className="flex justify-between w-[545px] bg-[#9292921A] rounded-[25px] py-[26px] px-[24px] mt-[20px]">
                        <h1 className="text-[15px] font-normal">SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32</h1>
                        <Image src={"/copy.svg"} width={20} height={20} alt="img" className='cursor-pointer'  />
                    </div>
                    <h2 className="mb-2 text-[20px] font-bold mt-[22px]">
                        TRADING WALLET PRIVATE KEY
                    </h2>

                    <h1 className="text-[20px] font-normal text-[#9F9F9F]">Please copy the below private key and store it in a safe place.</h1>
                    <h1 className="text-[20px] font-bold text-[#9F9F9F]">Your private key will NOT be shown again.</h1>

                </div>
                <div className="bg-[#9292921A] w-[890px] mt-[12px] ml-[100px] rounded-[25px] px-[1px] py-[10px]">
                    <div className="flex justify-between items-center px-[26px] py-[10px]">
                        <h1 className="text-[15px] pl-6 font-normal break-words w-[700px]">
                            SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32
                        </h1>
                        <Image src={'/copy.svg'} width={20} height={20} alt="Copy Icon" className='cursor-pointer'  />
                    </div>
                </div>

                <button
                    onClick={() => setShowPopup(true)}
                    className="w-[573px] mt-[20px] mx-auto items-center justify-center flex text-white text-[20px] font-bold rounded-[42px] py-[24px] px-[198px]"
                    style={{
                        background: "linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)"
                    }}
                >
                    I copied, Continue
                </button>

                {showPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                        <div
                            className="text-white items-center rounded-[48px] shadow-lg p-8 w-[870px] h-[373px] text-center"
                            style={{
                                background: "linear-gradient(102.61deg, #5522A9 7.76%, #6136A7 96.71%)"
                            }}
                        >
                            <h2 className="text-[35px] px-28 pt-[45px] mb-4">Are you sure you saved your <strong>Private key?</strong></h2>

                            <div className="flex justify-center gap-8 mt-10">
                                {/* Dismiss button */}
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="bg-[#360951] text-[20px] text-white font-bold py-[28px] px-[46px] rounded-[42px]"
                                >
                                    No! take me back
                                </button>

                                {/* Continue button */}
                                <button
                                    onClick={nextStep}
                                    className="bg-white text-purple-900 text-[20px] font-bold py-[28px] px-[64px] rounded-[42px]"
                                >
                                    Yes, I saved it
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

// Card Content for Step 3 with some other functionalities (e.g., confirmation)
const Step3 = ({ restartSteps }) => {
    return (
        <div>
            <h1 className="text-[45px] font-normal flex justify-center">
                Deposit funds to your
                <span className="text-[#A04BF5] pl-2"> Trading wallet</span>
            </h1>
            <div
                className="rounded-[48px] flex justify-center items-center  mt-[60px] mb-[50px] text-white w-[1087px] h-[513px]"
                style={{
                    background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                    backgroundBlendMode: "lighten"
                }}>

                <div>
                    <div className="">
                        <h2 className="text-[20px] flex justify-center font-bold mb-2">Your current Balance</h2>
                        <div className="justify-center flex">
                            <h2 className="text-[100px] font-normal">12.5</h2>
                            <Image src={'/solano.svg'} width={30} height={30} alt="img" className="pt-10 ml-5" />
                        </div>
                        <h1 className="text-[15px] font-bold text-[#9F9F9F] flex justify-center ">PLEASE DEPOSIT FUNDS TO YOUR TRADING WALLET USING THIS ADDRESS</h1>
                    </div>

                    <div className="flex justify-between w-[545px] items-center bg-[#9292921A] rounded-[25px] py-[26px] px-[24px] mt-[22px]">
                        <h1 className="text-[15px] font-normal ">SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32</h1>
                        <Image src={"/copy.svg"} width={20} height={20} alt="img" className='cursor-pointer' />
                    </div>

                    <button
                        className="w-[573px] mt-[16px]  text-white text-[20px] font-bold rounded-[42px] py-[28px]"
                        style={{
                            background: "linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)"
                        }}
                    >
                        Refresh / Check Balance
                    </button>
                </div>



            </div>
        </div>
    );
};


export default function Page() {
    const [currentStep, setCurrentStep] = useState(1);

    // Auto-advance logic for step 2
    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    // Restart the steps from the beginning
    const restartSteps = () => {
        setCurrentStep(1);
    };

    // Automatically move from step 2 to step 3 after 5 seconds


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


            <StepProgressBar currentStep={currentStep} />

            {/* Step Card with dynamic content */}
            <div className="p-8 text-white shadow-lg mt-6 items-center flex justify-center mx-auto">
                {currentStep === 1 && <Step1 nextStep={nextStep} />}
                {currentStep === 2 && <Step2 nextStep={nextStep} />}
                {currentStep === 3 && <Step3 restartSteps={restartSteps} />}
            </div>
        </div>
    )
}
