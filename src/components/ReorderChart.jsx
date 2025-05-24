import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Title } from "chart.js";
import MainHeading from "./MainHeading";
import outlinedown from "../assets/images/icons/outlinedown.svg";
import GradientButton from "./Buttons/GradientButton ";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const ReorderChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Sales",
                data: [70, 60, 75, 40, 20, 35, 50, 55, 70, 80, 65, 30],
                backgroundColor: [
                    "#22C55E",
                    "#22C55E",
                    "#22C55E",
                    "#FACC15",
                    "#EF4444",
                    "#FACC15",
                    "#FACC15",
                    "#FACC15",
                    "#22C55E",
                    "#22C55E",
                    "#22C55E",
                    "#EF4444",
                ],
                borderRadius: 10,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.raw}%`,
                },
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#6B7280" }, // text-gray-500
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: (value) => `${value}%`,
                    color: "#6B7280",
                },
                grid: { color: "#E5E7EB" }, // border-gray-200
            },
        },
    };

    return (
        <div className="w-full max-w-3xl rounded-2xl p-4 sm:p-6 lg:w-full">
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                {/* Left: Heading and Stats */}
                <div>
                    <MainHeading heading="Sales Trends" />
                </div>

                {/* Right: Buttons */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
                    <GradientButton
                        children={"This Year"}
                        image={outlinedown}
                    />
                </div>
            </div>

            {/* Chart */}
            <Bar
                data={data}
                options={options}
            />

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-green-500"></span> High
                </div>
                <div className="flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span> Medium
                </div>
                <div className="flex items-center gap-1">
                    <span className="h-3 w-3 rounded-full bg-red-500"></span> Low
                </div>
            </div>
        </div>
    );
};

export default ReorderChart;
