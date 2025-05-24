// components/SuccessModal.js
import React from "react";
import MainHeading from "./MainHeading";
import Paragragh from "./Paragragh";
import CancelBtn from "./FormFields/CancelBtn";
import checked from "../assets/images/icons/checked.svg";
import cross from "../assets/images/icons/cross.svg";
import Button from "./FormFields/Button";

const SuccessModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-40 p-4">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[724px] rounded-lg bg-white p-6 shadow-md">
                {/* Close button top-right */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 focus:outline-none"
                    aria-label="Close modal"
                >
                    <img src={cross} alt="Close" className="w-[32px] h-[32px]" />
                </button>

                <div className="flex flex-col items-center text-center px-4 sm:px-6">
                    <img
                        src={checked}
                        alt="Success"
                        className="mb-4 h-[120px] w-[120px]"
                    />
                    <MainHeading heading="Transfer Request Created Successfully" />
                    <Paragragh
                        className="text-[16px] md:text-[18px] lg:text-[20px] mt-2 max-w-xl text-[#737791]"
                        para="Your request to transfer Product A from warehouse A to warehouse B has been created successfully. You can track it in Stock Transfer now!"
                    />

                    {/* Buttons container */}
                    <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-between hover:bg-gray-100">
                        <CancelBtn
                            className="bg-red-500 sm:flex-1"
                            onClick={onClose}
                        >
                            Create another request
                        </CancelBtn>

                        <Button
                            type="button"
                            className="bg-secondary sm:flex-1"
                        >
                            Done
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
