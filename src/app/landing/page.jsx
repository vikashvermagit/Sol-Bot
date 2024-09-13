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
                    </h1><div
                        className="rounded-[48px] justify-center mt-[78px] mb-[50px] flex text-white w-[1087px] h-[513px]"
                        style={{
                            background: "linear-gradient(180deg, rgba(207, 243, 255, 0.5) 0%, rgba(53, 53, 53, 0.5) 100%)",
                            backgroundBlendMode: "lighten"
                        }}
                    >
                            <div className="p-6">
                                <h2 className="text-[25px] font-normal flex justify-center mb-4">Next Step: Additional Information</h2>
                                <h2 className="mb-4 text-[30px] font-bold flex justify-center mt-[16px]">
                                    Your new content goes here...
                                </h2>
                                <button
                                    onClick={nextStep} // If there's another step
                                    className="w-[573px] mt-[76px] mx-auto items-center justify-center flex text-white text-[20px] font-bold rounded-[42px] py-[28px]"
                                    style={{
                                        background: "linear-gradient(92.49deg, rgba(121, 23, 198, 0.79) 8.07%, #9F75D4 80.13%)"
                                    }}
                                >
                                    Proceed
                                </button>
                            </div>
                        </div></>
            )}
        </div>
    );
};

// Card Content for Step 2 without buttons
const Step2 = () => {
    return (
        <div>
            <h2 className="text-2xl mb-4">Step 2: Information</h2>
            <p className="mb-4">Here you can gather some important information, but there's no button to proceed here. You need to wait for 5 seconds to auto-move to the next step.</p>
        </div>
    );
};

// Card Content for Step 3 with some other functionalities (e.g., confirmation)
const Step3 = ({ restartSteps }) => {
    return (
        <div>
            <h2 className="text-2xl mb-4">Step 3: Finalize</h2>
            <p className="mb-4">You're at the last step. Please confirm to finish or restart the process.</p>
            <button
                onClick={restartSteps}
                className="px-6 py-2 bg-green-600 text-white rounded-lg"
            >
                Restart
            </button>
        </div>
    );
};


export default function page() {
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
    if (currentStep === 2) {
        setTimeout(() => {
            setCurrentStep(3);
        }, 5000);
    }

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
                            <Image src={"/logo.png"} className="" alt="image" width={180} height={180} />
                        </Link>
                        <div className="flex justify-between gap-10">
                            <Image src={"/xlogo.svg"} height={24} width={24} alt="" />
                            <Image src={"/docorlogo.svg"} height={32} width={32} alt="" />
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
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 restartSteps={restartSteps} />}
            </div>
        </div>
    )
}
