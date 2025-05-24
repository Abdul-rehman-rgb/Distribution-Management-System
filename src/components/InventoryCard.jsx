// src/components/InventoryCard.jsx
import React from "react";
import CardHeading from "./CardHeading";

const InventoryCard = ({
    title,
    amount,
    percentage,
    chart,
    icon, // new prop
    iconBgColor, // new prop for background color of icon container
}) => {
    return (
        <div className="rounded-lg bg-white px-5 py-4 shadow-sm">
            {/* Icon */}
            <div className={`mb-5 flex h-[40px] w-[40px] items-center justify-center rounded-[10px] ${iconBgColor || "bg-[#F4FCF7]"}`}>
                {icon && (
                    <img
                        src={icon}
                        alt="icon"
                        className="h-5 w-5 object-contain"
                    />
                )}
            </div>

            {/* Main Content */}
            <div className="flex flex-row justify-between">
                {/* Left Side */}
                <div>
                    <p className="poppins-medium text-sm text-gray-500">{title}</p>
                    <CardHeading color="#483415" title={amount} />
                    <p className="poppins-medium text-sm text-gray-500">{percentage}</p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col items-end justify-end">
                    {chart && (
                        <img
                            src={chart}
                            alt="chart"
                            className="mt-2 h-auto w-[66px]"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default InventoryCard;
