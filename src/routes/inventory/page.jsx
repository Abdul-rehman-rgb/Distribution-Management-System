import React from "react";
import InventoryCard from "../../components/InventoryCard";
import OutlineBtn from "../../components/Buttons/OutlineBtn";
import FillBtn from "../../components/Buttons/FillBtn";
import cloud from "../../assets/images/icons/cloud.svg";
import plus from "../../assets/images/icons/plus.svg";
import calender from "../../assets/images/icons/calender.svg";
import refresh from "../../assets/images/icons/refresh.svg";
import solarbox from "../../assets/images/icons/solarbox.svg";
import dollarIcon from "../../assets/images/icons/dollar.svg";
import errorIcon from "../../assets/images/icons/error.svg";
import clockIcon from "../../assets/images/icons/clock.svg";
import chartImg from "../../assets/images/chart.png";

const InventoryMain = () => {
    return (
        <>
            <div className="margin flex flex-row gap-4 max-sm:flex-col md:flex-row">
                <FillBtn
                    BtnName="Add new order"
                    iconSrc={plus}
                />
                <button className="poppins-medium text-secondary flex h-9 items-center gap-2 rounded-md bg-[#F8EDE2] px-6 text-[14px] transition hover:bg-gray-100 max-sm:min-w-[86px] sm:h-10 sm:min-w-[102px] sm:text-base">
                    <img
                        src={calender}
                        alt="icon"
                        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                    />
                    Select Date Range
                </button>

                <OutlineBtn
                    className="poppins-medium text-secondary flex h-9 items-center gap-2 rounded-md border border-[#EA7D00] px-3 text-[14px] transition hover:bg-gray-100 max-sm:min-w-[86px] sm:h-10 sm:min-w-[102px] sm:text-base"
                    BtnName="Refresh"
                    iconSrc={refresh}
                />{" "}

                <OutlineBtn
                    BtnName="Filter"
                    iconSrc={cloud}
                />
            </div>
            <div className="mb-6 grid grid-cols-2 gap-4 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <InventoryCard
                    title="Total Inventory Value"
                    amount="£13.000"
                    percentage="50% than last Week"
                    icon={dollarIcon}
                    iconBgColor="bg-[#F4FCF7]"
                    chart={chartImg}
                />
                <InventoryCard
                    title="Total Inventory Value"
                    amount="£13.000"
                    percentage="50% than last Week"
                    icon={solarbox}
                    iconBgColor="bg-[#F4F9FC]"
                    chart={chartImg}
                />
                <InventoryCard
                    title="Total Inventory Value"
                    amount="£13.000"
                    percentage="50% than last Week"
                    icon={errorIcon}
                    iconBgColor="bg-[#FCF4F4]"
                    chart={chartImg}
                />
                <InventoryCard
                    title="Total Inventory Value"
                    amount="£13.000"
                    percentage="50% than last Week"
                    icon={clockIcon}
                    iconBgColor="bg-[#FCF9F4]"
                    chart={chartImg}
                />
            </div>
        </>
    );
};

export default InventoryMain;
