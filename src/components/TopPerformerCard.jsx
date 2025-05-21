import React from "react";
import CardHeading from "./CardHeading"; // adjust the path as needed

const TopPerformerCard = ({ image, title, amount, subtext, styles, MainHeading }) => {
    return (
        <div
            className={`flex h-auto flex-col items-center justify-between gap-4 rounded-lg p-8 md:h-[204px] md:flex-row`}
            style={styles}
        >
            <div className="text-center md:text-left">
                <div className="mb-3">
                    <span className="text-sm font-semibold text-[#151D48] md:text-base">
                        {MainHeading}
                    </span>
                    <CardHeading title={title} />
                </div>
                <h1 className="text-2xl font-bold text-[#151D48] md:text-3xl">
                    {amount}
                </h1>
                <h6 className="text-sm font-normal text-[#151D48] md:text-base">
                    {subtext}
                </h6>
            </div>
            <div className="flex w-full justify-center md:w-auto md:justify-end">
                <img src={image} alt="chart" className="h-auto max-w-full" />
            </div>
        </div>
    );
};

export default TopPerformerCard;
