import React, { useState } from "react";
import Star from "../assets/images/star.png";

const ActivityTab = ({
    title = "AI Powered Suggestions",
    bgColor = "bg-white",
    textColor = "text-[#151D48]",
    viewAllColor = "text-[#EA7D00]",
    tabActiveColor = "text-[#EA7D00] border-[#EA7D00]",
    tabInactiveColor = "text-gray-500 hover:text-[#151D48]",
    cardBg = "bg-[#F9F9FF]",
    className = ""
}) => {
    const [activeTab, setActiveTab] = useState("Stock Alerts");

    const activities = [
        { type: "Marketing Campaign", message: "Orders are piling up; complete processing today to maintain efficiency." },
        { type: "Operational Suggestions", message: "Orders are piling up; complete processing today to maintain efficiency." },
        { type: "Marketing Campaign", message: "Orders are piling up; complete processing today to maintain efficiency." },
        { type: "Operational Suggestions", message: "Orders are piling up; complete processing today to maintain efficiency." },
        { type: "Marketing Campaign", message: "Orders are piling up; complete processing today to maintain efficiency." },
    ];

    const filteredActivities =
        activeTab === "Stock Alerts"
            ? activities
            : activities.filter((a) => a.type === activeTab);

    return (
        <div className={`h-[380px] overflow-y-auto rounded-lg p-4 sm:p-6 ${bgColor} ${className}`}>
            {/* Header */}
            <div className="flex flex-col max-sm:flex-row justify-between sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div className="flex items-center gap-2">
                    <img src={Star} alt="Star" className="h-5 w-5" />
                    <h3 className={`text-[14px] sm:text-[16px] font-bold ${textColor}`}>{title}</h3>
                </div>
                <div>
                    <span className={`text-[14px] sm:text-[16px] cursor-pointer hover:underline ${viewAllColor}`}>
                        View All
                    </span>
                </div>
            </div>

            {/* Tabs */}
            <div className="mb-4 flex flex-wrap gap-2 sm:gap-4">
                {["Stock Alerts", "Marketing Campaign", "Operational Suggestions"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1.5 text-[11px] sm:text-[12px] md:text-[13px] font-medium capitalize rounded transition-all duration-200 ${
                            activeTab === tab ? `border-b-2 ${tabActiveColor}` : tabInactiveColor
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Activities List */}
            {filteredActivities.map((activity, index) => (
                <div
                    key={index}
                    className={`mb-4 flex w-full flex-col gap-2 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 ${cardBg}`}
                >
                    <span className="text-xs sm:text-sm font-normal text-gray-400">
                        Process New Orders
                    </span>
                    <p className={`text-[14px] sm:text-base text-[#151D48]`}>
                        {activity.message}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ActivityTab;
