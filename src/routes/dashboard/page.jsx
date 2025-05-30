import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import line from "../../assets/images/line.png";
import mark from "../../assets/images/mark.png";
import chartImage from "../../assets/images/chart.png";
import arrowIcon from "../../assets/images/icons/arrow.png";
import SalesCard from "../../components/SalesCard";
import TopPerformerCard from "../../components/TopPerformerCard";
import ActivityCard from "../../components/ActivityCard";
import ActivityTab from "../../components/ActivityTab";
import SalesTrendsChart from "../../components/SalesTrendsChart";
import calender from "../../assets/images/icons/calender.svg";
import refresh from "../../assets/images/icons/refresh.svg";
import OutlineBtn from "../../components/Buttons/OutlineBtn";
import cloud from "../../assets/images/icons/cloud.svg";

const page = () => {
    const lineData = [
        { name: "Jan", value: 20 },
        { name: "Feb", value: 40 },
        { name: "Mar", value: 35 },
        { name: "Apr", value: 60 },
        { name: "May", value: 50 },
    ];

    const barData = [
        { name: "Jan", uv: 400 },
        { name: "Feb", uv: 300 },
        { name: "Mar", uv: 500 },
        { name: "Apr", uv: 200 },
        { name: "May", uv: 700 },
        { name: "Jun", uv: 600 },
    ];

    return (
        <>
            <div className="margin flex flex-row gap-4 max-sm:flex-col md:flex-row">
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
            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2">
                <TopPerformerCard
                    MainHeading={"Top Performer Today!"}
                    image={line}
                    title="Electronics"
                    amount="$ 356K"
                    subtext="of total sales"
                    styles={{
                        background:
                            "linear-gradient(90deg, rgba(194, 255, 202, 0.5) 0%, rgba(215, 255, 220, 0.5) 56.5%, rgba(194, 255, 202, 0.5) 100%)",
                    }}
                />
                <TopPerformerCard
                    MainHeading={"Biggest Bottleneck Today!"}
                    image={mark}
                    title="Electronics"
                    amount="12 Orders"
                    subtext="Delayed"
                    styles={{
                        background:
                            "linear-gradient(90deg, rgba(255, 199, 200, 0.5) 0%, rgba(255, 219, 220, 0.5) 51.17%, rgba(255, 199, 200, 0.5) 100%)",
                    }}
                />
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                <SalesCard
                    title="Revenue"
                    amount="$ 356K"
                    percentage="50% This Week"
                    buttonText="This Week"
                    arrow={arrowIcon}
                    chart={chartImage}
                />
                <SalesCard
                    title="Total Orders"
                    amount="5,000"
                    percentage="50% This Week"
                    buttonText="This Week"
                    arrow={arrowIcon}
                    chart={chartImage}
                />
                <SalesCard
                    title="Sales"
                    amount="$13.000"
                    percentage="50% This Week"
                    buttonText="This Week"
                    arrow={arrowIcon}
                    chart={chartImage}
                />
                <SalesCard
                    title="Orders Overview"
                    amount="$13.000"
                    percentage="50% This Week"
                    buttonText="This Week"
                    arrow={arrowIcon}
                    chart={chartImage}
                />
            </div>
            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <ActivityCard />
                <ActivityTab />
            </div>

            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex h-[450px] flex-col rounded-lg bg-[#F9F9FF] sm:p-6">
                    <div className="mb-4 flex flex-col justify-between gap-2 max-sm:flex-row sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <h3 className={`text-[16px] font-medium text-[#737791] sm:text-[16px]`}>Activity Feed</h3>
                        </div>
                        <div>
                            <span className={`cursor-pointer text-[14px] text-[#EA7D00] hover:underline sm:text-[16px]`}>View All</span>
                        </div>
                    </div>

                    {/* Scrollable area */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="mb-4 flex w-full flex-col gap-2 rounded-2xl bg-white px-4 py-3 sm:px-6 sm:py-4"
                                style={{ boxShadow: "0px 20px 50px rgba(55, 69, 87, 0.04)" }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-1 text-sm font-semibold text-[#1C1F4A]">
                                            <span>Orders</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="font-regular text-[16px] text-[#737791] sm:text-base">
                                    A new joined customer placed a new order (#348798343).
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <SalesTrendsChart />
                </div>
            </div>

            {/* Graphs */}
            <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 shadow">
                    <h3 className="mb-2 font-semibold">Top Performer</h3>
                    <ResponsiveContainer
                        width="100%"
                        height={200}
                    >
                        <LineChart data={lineData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#10B981"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="rounded-lg bg-white p-4 shadow">
                    <h3 className="mb-2 font-semibold">Sales Trends</h3>
                    <ResponsiveContainer
                        width="100%"
                        height={200}
                    >
                        <BarChart data={barData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar
                                dataKey="uv"
                                fill="#3B82F6"
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default page;
