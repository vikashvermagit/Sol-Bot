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
                <><h1 className="text-[35px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-normal flex justify-center text-center flex-wrap">
                    Generate and Save your
                    <span className="text-[#A04BF5] pl-1 sm:pl-2"> Trading wallet</span>
                </h1>
                    <div
                        className="rounded-[48px] justify-center mt-[50px] sm:mt-[60px] mb-[40px] flex text-white w-full max-w-[1087px] h-[472px] sm:h-[513px]  mx-auto"
                        style={{
                            background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                            backgroundBlendMode: "lighten"
                        }}
                    >
                        <div className="p-4 sm:p-6">
                            <h2 className="text-[20px] sm:text-[25px] mt-[40px] sm:mt-[60px] font-normal flex justify-center mb-4">
                                Your trading wallet address is
                            </h2>
                            <h2 className="mb-4 text-[24px] sm:text-[30px] font-bold flex justify-center mt-[16px]">
                                Steew3242f4.......43grg65rR
                            </h2>
                            <h2 className="text-[18px] sm:text-[25px] font-normal flex justify-center w-full max-w-[487px] mx-auto text-center">
                                Click Generate to take control over your Trading wallet and private keys
                            </h2>
                            <button
                                onClick={handleGenerateClick}
                                className="w-full max-w-[573px] mt-[40px] sm:mt-[76px] mx-auto items-center justify-center flex text-white text-[18px] sm:text-[20px] font-bold rounded-[42px] py-[20px] sm:py-[28px]"
                                style={{
                                    background: "linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)"
                                }}
                            >
                                Generate
                            </button>
                        </div>
                    </div>

                </>
            ) : (
                <><h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-normal flex justify-center text-center flex-wrap">
                    This is your
                    <span className="text-[#A04BF5] pl-1 sm:pl-2"> Trading wallet</span>
                </h1>
                    <div
                        className="rounded-[24px] sm:rounded-[48px] mt-[50px] sm:mt-[78px] mb-[40px] sm:mb-[50px] text-white w-[364px] sm:w-[1087px] h-[472px] sm:h-[513px] mx-auto"
                        style={{
                            background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                            backgroundBlendMode: "lighten",
                        }}
                    >
                        <div className="px-[24px] sm:px-[97px] pt-[30px] sm:pt-[54px]">
                            <h2 className="text-[18px] sm:text-[20px] font-bold mb-4 ml-1 sm:ml-3">BLOCKBIT TRADING WALLET</h2>
                            <div className="flex justify-between w-full max-w-[545px] bg-[#9292921A] rounded-[15px] sm:rounded-[25px] py-[16px] sm:py-[26px] px-[16px] sm:px-[24px] mt-[15px] sm:mt-[22px]">
                                <h1 className="text-[14px] sm:text-[15px] font-normal truncate">
                                    SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32
                                </h1>
                                <Image src={"/copy.svg"} width={20} height={20} alt="img" className="cursor-pointer" />
                            </div>

                            <div className="bg-[#9292921A] sm:bg-transparent px-[15px] sm:px-0 rounded-[24px]">
                                <h2 className="mb-4 text-[18px] sm:text-[20px] font-bold mt-[30px] pt-5 sm:mt-[37px]">
                                    TRADING WALLET PRIVATE KEY
                                </h2>
                                <h1 className="text-[16px] sm:text-[20px] font-normal text-[#9F9F9F]">
                                    Please copy the below private key and store it in a safe place.
                                </h1>
                                <h1 className="text-[16px] sm:text-[20px] font-bold text-[#9F9F9F]">
                                    Your private key will NOT be shown again.
                                </h1>
                                <div className="sm:bg-[#9292921A] bg-none w-full max-w-[890px] mt-[20px] sm:mt-[30px] items-center mx-auto rounded-[24px] sm:rounded-[42px] px-[10px] py-[8px] sm:py-[10px]">
                                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                                        <h1 className="text-[14px] sm:text-[15px] sm:pl-6 font-bold text-center sm:text-left">
                                            Double click to reveal your private key
                                        </h1>
                                        <button
                                            onDoubleClick={nextStep}
                                            className="text-white font-bold py-[12px] sm:py-[20px] rounded-[24px] sm:rounded-[42px] text-[16px] sm:text-[20px] px-[60px] sm:px-[69px] sm:mx-[16px]"
                                            style={{
                                                background: 'linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 63.33%, #75CFD4 99.67%)',
                                            }}
                                        >
                                            Double click 2X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            )
            }
        </div >
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
            <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-normal flex justify-center text-center">
                This is your
                <span className="text-[#A04BF5] pl-2">Trading wallet</span>
            </h1>
            <div
                className="rounded-[48px] mt-[20px] sm:mt-[40px] lg:mt-[78px] mb-[30px] sm:mb-[40px] lg:mb-[50px] text-white w-[367px] sm:w-[1087px] h-[496px] sm::h-[513px] mx-auto"
                style={{
                    background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                    backgroundBlendMode: "lighten"
                }}>

                <div className="px-4 sm:px-[50px] pt-[24px] sm:pt-[40px] lg:pt-[54px]">
                    <h2 className="text-[20px] font-bold mb-4 ml-2 sm:ml-3">BLOCKBIT TRADING WALLET</h2>
                    <div className="flex justify-between w-full max-w-[545px] bg-[#9292921A] rounded-[15px] sm:rounded-[25px] py-[16px] sm:py-[26px] px-[16px] sm:px-[24px] mt-[15px] sm:mt-[22px]">
                        <h1 className="text-[14px] sm:text-[15px] font-normal truncate">
                            SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32
                        </h1>
                        <Image src={"/copy.svg"} width={20} height={20} alt="Copy Icon" className="cursor-pointer" />
                    </div>
                    <h2 className="text-[20px] font-bold mt-[22px]">TRADING WALLET PRIVATE KEY</h2>
                    <h1 className="text-[14px] sm:text-[20px] font-normal text-[#9F9F9F] mt-2">
                        Please copy the below private key and store it in a safe place.
                    </h1>
                    <h1 className="text-[14px] sm:text-[20px] font-bold text-[#9F9F9F] mt-2">
                        Your private key will NOT be shown again.
                    </h1>
                </div>


                <div className="bg-[#9292921A] w-[317px] sm:w-[890px] mt-[12px] sm:ml-[50px] ml-[25px] rounded-[25px] px-[1px] py-[8px]">
                    <div className="flex justify-between items-center sm:px-[26px] px-[10px]  gap-2 sm:gap-0">
                        <h1 className="sm:text-[15px] text-[14px] sm:pl-6 font-normal break-words sm:w-[700px] w-[277px]">
                            SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32
                        </h1>
                        <Image src={'/copy.svg'} width={20} height={20} alt="Copy Icon" className='cursor-pointer pr-2' />
                    </div>
                </div>

                <button
                    onClick={() => setShowPopup(true)}
                    className="sm:w-[573px] w-[290px] mt-[20px] mx-auto items-center justify-center flex text-white text-[20px] font-bold rounded-[42px] py-[24px] sm:px-[198px] px-[48px] "
                    style={{
                        background: "linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)"
                    }}
                >
                    I copied, Continue
                </button>

                {showPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 ">
                        <div
                            className="text-white items-center rounded-[24px] sm:rounded-[32px] lg:rounded-[48px] shadow-lg  py-[97px] sm:p-8 w-[90%] max-w-[870px] h-auto lg:h-[373px] text-center"
                            style={{
                                background: "linear-gradient(102.61deg, #5522A9 7.76%, #6136A7 96.71%)"
                            }}
                        >
                            <h2 className="text-[22px] sm:text-[28px] lg:text-[35px] px-6 sm:px-18 pt-[20px] sm:pt-[35px] lg:pt-[45px] mb-4">
                                Are you sure you saved your <strong>Private key?</strong>
                            </h2>

                            <div className="flex flex-col-reverse sm:flex-row justify-center gap-4 sm:gap-8 px-[58px] mt-6 sm:mt-10">
                                {/* Dismiss button */}
                                <button
                                    onClick={() => setShowPopup(false)}
                                    className="bg-[#360951] text-[20px] sm:text-[18px] lg:text-[20px] text-white font-bold py-[24px] sm:py-[24px] lg:py-[28px] px-[37px] sm:px-[40px] lg:px-[46px] rounded-[42px] sm:rounded-[42px]"
                                >
                                    No! take me back
                                </button>

                                {/* Continue button */}
                                <button
                                    onClick={nextStep}
                                    className="bg-white text-purple-900 text-[20px] sm:text-[18px] lg:text-[20px] font-bold py-[24px] sm:py-[24px] lg:py-[28px] px-[46px] sm:px-[40px] lg:px-[64px] rounded-[42px] sm:rounded-[42px]"
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
            <h1 className="text-center text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] font-normal">
                Deposit funds to your
                <span className="text-[#A04BF5] pl-2">Trading wallet</span>
            </h1>
            <div
                className="rounded-[20px] sm:rounded-[30px] lg:rounded-[48px] flex justify-center items-center mt-[30px] sm:mt-[40px] lg:mt-[60px] mb-[30px] sm:mb-[40px] lg:mb-[50px] text-white w-[367px] sm:w-[1087px] h-[496px] lg:h-[513px] px-4 py-6"
                style={{
                    background: "linear-gradient(180deg, rgba(207, 243, 255, 0.1) 0%, rgba(53, 53, 53, 0.1) 100%)",
                    backgroundBlendMode: "lighten"
                }}
            >
                <div className="text-center w-full">
                    <div>
                        <h2 className="text-[20px] font-bold mb-2">Your current Balance</h2>
                        <div className="flex justify-center items-center">
                            <h2 className="text-[70px] sm:text-[70px] font-normal">12.5</h2>
                            <Image src={'/solano.svg'} width={24} height={24} alt="img" className="ml-2 sm:ml-4 pt-2 hidden sm:flex" />
                        </div>
                        <h1 className="text-[15px] font-bold text-[#9F9F9F] mt-4 ">
                            PLEASE DEPOSIT FUNDS TO YOUR TRADING WALLET USING THIS ADDRESs
                        </h1>
                    </div>

                    <div className="flex  justify-between gap-2 items-center text-start sm:text-center w-[343px] sm:w-[545px] mx-auto bg-[#9292921A] rounded-[15px] sm:rounded-[25px] py-[11px] sm:py-[26px] px-[16px] sm:px-[24px] mt-[26px] sm:mt-[22px]">
                        <h1 className="text-[12px] sm:text-[15px] font-normal break-words w-[285px] sm:w-full">
                            SDsdfre345dfsdf334345fdniGDFG549fd42lfdsmlt9f3k32
                        </h1>
                        <Image src={"/copy.svg"} width={20} height={20} alt="img" className="cursor-pointer  sm:mt-0" />
                    </div>

                    <button
                        className="w-full max-w-[320px] sm:max-w-[573px] mt-[26px] sm:mt-[16px] text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold rounded-[32px] sm:rounded-[42px] py-[16px] sm:py-[24px] lg:py-[28px] mx-auto"
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
