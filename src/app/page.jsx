"use client";
import ClosedPoolTable from "@/components/ClosedPoolTable";
import FilterForm from "@/components/FilterForm";
import InfoCard from "@/components/InfoCard";
import MobileSettingsContent from "@/components/MobileSettingContent";
import Navbar from "@/components/Navbar";
import OpeningPoolTable from "@/components/OpeningPoolTable";
import PendingPoolTable from "@/components/PendingPoolTable";
import Questions from "@/components/Questions";
import SettingsContent from "@/components/SettingsContent";
import TermsCondition from "@/components/TermsCondition";
import { Copy, Settings, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [tab, setTab] = useState("Pending Pool");
  const [isOpen, setIsOpen] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false);

  const [IsTerm, setIsTerm] = useState(false);

  const handleterms = () => {
    setIsTerm(true);
  };

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseTerms = () => {
    setIsTerm(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const CustomCloseButton = ({ closeToast }) => (
    <X size={12} color="white" className="text-white " onClick={closeToast} />
  );

  const notify = () => {
    toast.success(
      <div className="flex items-center ">
        <div className="ml-3">
          <h1 className="text-base font-bold text-white">
            Transaction Completed
          </h1>
          <div className="w-full flex items-center justify-between gap-12">
            <p className="text-xs font-normal text-white">
              Sold 1,000,000 PEPE For 0.9 SOL{" "}
            </p>
            <p className="text-xs font-normal text-[#28DEAF] ml-3">
              View transaction.
            </p>
          </div>
        </div>
      </div>,
      {
        position: "top-right",
        padding: "0px",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: <CustomCloseButton />,
        style: {
          backgroundColor: "#1a202c",
          width: "450px",
          right: "150px",
          top: "70px",
          height: "88px",
        },
      }
    );
  };
  const Error = () => {
    toast.error(
      <div className="flex items-center ">
        <div className="ml-3">
          <h1 className="text-base font-bold text-white">Transaction Failed</h1>
          <div className="w-full flex items-center justify-between gap-28 ml-2">
            <p className="text-xs font-normal text-white">Insufficient funds</p>
          </div>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: <CustomCloseButton />,
        style: {
          backgroundColor: "#1a202c",
          width: "300px",
          right: "0px",
          top: "70px",
          height: "88px",
        },
      }
    );
  };

  // const tabHandler = (id) => {
  //   setTab(id);
  //   console.log(id);
  // };

  console.log(tab);
  return (
    <div className="bg-[#121212]  relative flex flex-col justify-start h-screen overflow-auto pb-9">
      <ToastContainer />
      <div className="hidden lg:flex">
        <Navbar tab={tab} setTab={setTab} />
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="h-[86px] bg-[#171717] w-full flex justify-between items-center px-4 object-contain">
          <Image
            src={"/mobilelogo.png"}
            className="w-[65%]"
            alt="image"
            width={180}
            height={180}
          />

          <Image
            src={"/navigation.png"}
            className="object-cover mr-3"
            alt="image"
            onClick={() => setSideBar(true)}
            width={30}
            height={30}
          />
        </div>
        {/* Mobile Side Navigation */}
        {sideBar && (
          <>
            <div className="fixed flex justify-center items-start inset-0 w-screen h-screen z-50 bg-[#121212] p-3">
              <Image
                src={"/eclipse.png"}
                alt=""
                width={200}
                height={200}
                className="w-[820px] h-[750px] relative -left-5 -top-3"
              />
              <div className=" flex flex-col justify-center items-center z-40 absolute top-5">
                <div className="text-center space-y-8">
                  <p
                    className="text-[32px] font-bold text-white"
                    onClick={() => {
                      setSideBar(false);
                      setTab("Pending Pool");
                    }}
                  >
                    Pending Pool
                  </p>
                  <p
                    className="text-[32px] font-bold text-white"
                    onClick={() => {
                      setSideBar(false);
                      setTab("Open positions");
                    }}
                  >
                    Open positions
                  </p>
                  <p
                    className="text-[32px] font-bold text-white"
                    onClick={() => {
                      setSideBar(false);
                      setTab("Closed positions");
                    }}
                  >
                    Closed positions
                  </p>
                  <p
                    className="text-[32px] font-bold text-white"
                    onClick={() => {
                      setSideBar(false);
                      setTab("Settings");
                    }}
                  >
                    Settings
                  </p>
                </div>
                <div className="mt-3">
                  <div className="flex gap-5">
                    <div className="flex  rounded-[48px] px-4 my-4 gap-2 cursor-pointer items-center border-[1px] border-[#6767671A] py-3 bg-[#1D102B1F] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                      <h1 className="text-white text-base font-bold">786.0</h1>
                      <Image
                        src={"/solano.svg"}
                        width={20}
                        height={20}
                        alt="image"
                      />
                    </div>
                    <div className="flex  rounded-[48px] px-4 my-4 cursor-pointer items-center border-[1px] border-[#6767671A] py-3 bg-[#1D102B1F] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                      <h1 className="text-white text-base font-bold">
                        64ec2c...c898
                      </h1>
                    </div>
                  </div>
                </div>

                {tab === "Settings" && (
                  <>
                    <div className="flex items-center gap-3 mt-3">
                      <Image
                        src={"/image2.png"}
                        width={41}
                        height={41}
                        alt="image"
                      />
                      <div className="flex justify-start p-5 items-center border-[1px] border-[#363636] bg-[#19191D] w-[258px] h-[76px] rounded-[8px] gap-5">
                        <Image
                          src={"/Logout.png"}
                          width={25}
                          height={25}
                          alt="image"
                          className="object-cover"
                        />
                        <p className="text-[16px] font-bold text-white">
                          DISCONNECT
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {tab === "Settings" ? (
        <Image
          src={"/settingbg.png"}
          alt=""
          width={200}
          height={200}
          className="w-[620px] h-[650px] absolute -right-32 lg:right-60 lg:top-12"
        />
      ) : (
        <Image
          src={"/eclipse.png"}
          alt=""
          width={200}
          height={200}
          className="w-[520px] h-[550px] absolute -left-10 top-12"
        />
      )}

      {tab === "Pending Pool" && (
        <>
          <div className="mx-8 mt-10 hidden lg:flex lg:flex-col">
            <h1
              className="text-lg font-bold text-white uppercase"
              onClick={() => setProfilePopup(true)}
            >
              PENDING POOL
            </h1>

            <p className="text-sm font-bold text-white mt-2">
              Presenting your current Pending Pool, updated in real-time
            </p>

            <div className="flex justify-between items-center mt-[24px]">
              <div className="relative">
                <div
                  className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <Image
                    src="/filter.svg"
                    alt="Filter"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-white text-base font-bold">Filter</h1>
                  <Image
                    src="/dropdown.svg"
                    alt="Dropdown"
                    width={10}
                    height={10}
                    className="mt-1"
                  />
                </div>

                {isOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                    <FilterForm onClose={handleClose} />
                  </div>
                )}
              </div>

              {/*this button is for checking terms and condition toast */}
              <div className={`relative ${IsTerm ? "overflow-hidden" : ""}`}>
                {/* Main page content */}
                <div
                  className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1 cursor-pointer"
                  onClick={handleterms}
                >
                  <h1 className="text-white text-base font-bold">
                    Terms & Cond.
                  </h1>
                </div>

                {IsTerm && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                    <TermsCondition onAccept={handleCloseTerms} />
                  </div>
                )}
              </div>

              {/*this button is check for error toast */}

              <div
                className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1"
                onClick={Error}
              >
                <h1 className="text-white text-base font-bold">Error toast</h1>
              </div>

              <div
                className="border rounded-[48px] cursor-pointer flex justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>

          {/* Mobile Design */}
          <div className="mx-8 mt-12  lg:hidden">
            <h1
              className="text-[20px] font-bold text-white uppercase"
              onClick={() => setProfilePopup(true)}
            >
              PENDING POOL
            </h1>
            <p className="text-[16px] font-bold text-[#FFFFFF91] mt-2">
              Presenting your current Pending Pool, updated in real-time
            </p>

            <div className="flex items-center mt-5">
              <p className="text-[16px] font-bold text-[#FFFFFF]">Quick Buy:</p>
              <div className="border rounded-[48px] cursor-pointer flex justify-around gap-2 items-center px-3 py-1.5 w-[110px]">
                <Image src={"/sol.png"} alt="" width={24} height={24} />
                <div className="h-6 w-[2px] bg-[#99969D]"></div>
              </div>

              <div
                className="border rounded-[48px] cursor-pointer flex justify-between gap-2 items-center px-3 py-1.5 ml-3"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Open positions" && (
        <>
          <div className="mx-8 mt-10 hidden lg:flex lg:flex-col">
            <h1 className="text-lg font-bold text-white uppercase">
              Open positions
            </h1>

            <p className="text-sm font-bold text-white mt-2">
              Presenting your current open positions, updated in real-time
            </p>

            <div className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <Image
                      src="/filter.svg"
                      alt="Filter"
                      width={16}
                      height={16}
                    />
                    <h1 className="text-white text-base font-bold">Filter</h1>
                    <Image
                      src="/dropdown.svg"
                      alt="Dropdown"
                      width={10}
                      height={10}
                      className="mt-1"
                    />
                  </div>

                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                      <FilterForm onClose={handleClose} />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-[#FFFFFF91]">
                  <label className="inline-flex items-center cursor-pointer pl-2">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                    <div
                      className="relative w-6 h-2 bg-gray-200 rounded-[4px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-1 after:start-[0px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
                    ></div>
                    <span className="text-sm font-medium text-grfay-900 dark:text-gray-300 pl-4">
                      Show hidden
                    </span>
                  </label>
                  <p className="text-[16px] font-bold">Open position: 17</p>
                  <p className="text-[16px] font-bold">
                    Total Invested SOL: 14
                  </p>
                  <p className="text-[16px] font-bold">Total Current SOL: 11</p>
                </div>
              </div>

              <div
                className="border cursor-pointer rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>

          {/* Mobile Design */}
          <div className="mx-8 mt-4  lg:hidden">
            <h1
              className="text-[20px] font-bold text-white uppercase"
              onClick={() => setProfilePopup(true)}
            >
              OPEN POSITIONS
            </h1>
            <p className="text-[16px] font-bold text-[#FFFFFF91] mt-2">
              Presenting your current open positions, updated in real-time
            </p>

            <div className="flex justify-between items-center mt-2">
              <div className="flex flex-col justify-start gap-2">
                <div
                  className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                  onClick={handleButtonClick}
                >
                  <Image
                    src="/filter.svg"
                    alt="Filter"
                    width={16}
                    height={16}
                  />
                  <h1 className="text-white text-base font-bold">Filter</h1>
                  <Image
                    src="/dropdown.svg"
                    alt="Dropdown"
                    width={10}
                    height={10}
                    className="mt-1"
                  />
                </div>

                <label className="inline-flex items-center cursor-pointer pl-2">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                  <div
                    className="relative w-6 h-2 bg-gray-200 rounded-[4px] peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:-top-1 after:start-[0px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all 
                     peer-checked:bg-[#28DEAF]"
                  ></div>
                  <span className="text-sm font-medium text-[#FFFFFF91] pl-4">
                    Show hidden
                  </span>
                </label>
              </div>

              <div className="flex flex-col justify-end items-end">
                <div className="flex flex-col items-end">
                  <p className="text-[16px] font-bold text-[#FFFFFF91]">
                    Open position: 17
                  </p>
                  <p className="text-[16px] font-bold text-[#FFFFFF91]">
                    Total Invested SOL: 14
                  </p>
                  <p className="text-[16px] font-bold text-[#FFFFFF91]">
                    Total Current SOL: 11
                  </p>
                </div>
                <div
                  className="border rounded-[48px] cursor-pointer w-fit flex justify-between gap-2 items-center px-3 py-1.5 ml-3"
                  onClick={notify}
                >
                  <Image src={"/setting.svg"} alt="" width={24} height={24} />
                  <h1 className="text-white text-base font-bold">Settings</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Closed positions" && (
        <>
          <div className="mx-8 mt-10  hidden lg:flex lg:flex-col">
            <h1 className="text-lg font-bold text-white uppercase">
              Closed positions
            </h1>
            <p className="text-sm font-bold text-white mt-2">
              Presenting your closed positions
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <Image
                      src="/filter.svg"
                      alt="Filter"
                      width={16}
                      height={16}
                    />
                    <h1 className="text-white text-base font-bold">Filter</h1>
                    <Image
                      src="/dropdown.svg"
                      alt="Dropdown"
                      width={10}
                      height={10}
                      className="mt-1"
                    />
                  </div>

                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                      <FilterForm onClose={handleClose} />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-5 ml-3">
                  <div className="flex items-center gap-2 text-[#FFFFFF91]">
                    <p className="text-[14px] font-bold">
                      Closed Positions PNL: 177 SOL
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="border rounded-[48px] flex cursor-pointer justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>

          {/* Mobile Design */}
          <div className="px-5 mt-5 lg:hidden">
            <h1 className="text-lg font-bold text-white uppercase">
              Closed positions
            </h1>
            <p className="text-sm font-bold text-[#FFFFFF91] mt-2">
              Presenting your closed positions
            </p>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div
                    className="border rounded-[48px] flex justify-between gap-2 items-center px-3 py-1.5 cursor-pointer"
                    onClick={handleButtonClick}
                  >
                    <Image
                      src="/filter.svg"
                      alt="Filter"
                      width={16}
                      height={16}
                    />
                    <h1 className="text-white text-base font-bold">Filter</h1>
                    <Image
                      src="/dropdown.svg"
                      alt="Dropdown"
                      width={10}
                      height={10}
                      className="mt-1"
                    />
                  </div>

                  {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                      <FilterForm onClose={handleClose} />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-5 ml-3">
                  <div className="flex items-center gap-2 text-[#FFFFFF91]">
                    <p className="text-[14px] font-bold">
                      Closed Positions PNL: 177 SOL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-end w-full pr-5 mt-3">
              <div
                className="border rounded-[48px] flex cursor-pointer justify-between gap-2 items-center px-3 py-1.5"
                onClick={notify}
              >
                <Image src={"/setting.svg"} alt="" width={24} height={24} />
                <h1 className="text-white text-base font-bold">Settings</h1>
              </div>
            </div>
          </div>
        </>
      )}

      {tab === "Settings" && (
        <>
          <div className="mx-8 mt-10 relative hidden lg:flex lg:flex-col">
            <h1 className="text-lg font-bold text-white uppercase">Settings</h1>
            <div className="flex items-center gap-5 mt-3">
              <h1 className="text-base font-bold text-white uppercase">
                Trading wallet
              </h1>
              <div className="bg-[#23242D] rounded-full p-2  flex items-center justify-between w-1/2 px-4">
                <span className=" text-white ">
                  E1kNdiernvienwoeinvejrhbi2hyuybefvuerbvhufvm5Sfvnuinv
                </span>
                <Copy size={24} color="white" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="flex flex-col relative w-full lg:hidden p-5">
            <h1 className="text-lg font-bold text-white uppercase">Settings</h1>
            <div className="flex flex-col gap-5 mt-3">
              <h1 className="text-base font-bold text-[#FFFFFF38] uppercase">
                Trading wallet
              </h1>
              <div className="bg-[#23242D] rounded-[1000px] p-2 py-4 flex items-center justify-between px-4">
                <p className="text-[#FFFFFF] break-all">
                  E1kNdiernvienwoeinvejrhbi2hyuybefvuerbvhufvm5Sfvnuinv
                </p>
                <Copy size={24} color="white" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </>
      )}

      <div className="mt-5 p-5 z-40 relative h-full">
        {tab === "Pending Pool" && <PendingPoolTable />}
        {tab === "Open positions" && <OpeningPoolTable />}
        {tab === "Closed positions" && <ClosedPoolTable />}
        {tab === "Settings" && <SettingsContent />}
        {tab === "Settings" && <MobileSettingsContent />}
      </div>
    </div>
  );
}
