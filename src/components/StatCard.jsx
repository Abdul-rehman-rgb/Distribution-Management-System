import React from "react";
import Paragragh from "./Paragragh"; // Make sure the path is correct
import CardHeading from "./CardHeading"; // Make sure the path is correct

const StatCard = ({ icon, title, value }) => {
    return (
        <div className="flex w-full flex-col items-center gap-4 rounded-[12px] bg-white px-6 py-7 sm:flex-row sm:items-start">
            <div className="flex-shrink-0">
                <img
                    src={icon}
                    alt="icon"
                    className="h-14 w-14 object-contain"
                />
            </div>
            <div className="text-center sm:text-left">
                <Paragragh
                    color="#737791"
                    className="poppins-medium"
                    para={title}
                />
                <CardHeading
                    title={value}
                    fontSize="40px"
                    color="#483415"
                />
            </div>
        </div>
    );
};

export default StatCard;
