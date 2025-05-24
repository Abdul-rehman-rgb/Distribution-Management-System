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
                    <span className="text-sm poppins-semibold text-primary md:text-base">
                        {MainHeading}
                    </span>
                    <CardHeading title={title} />
                </div>
                <h1 className="text-2xl poppins-bold text-primary md:text-3xl">
                    {amount}
                </h1>
                <h6 className="text-sm poppins-regular text-primary md:text-base">
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
