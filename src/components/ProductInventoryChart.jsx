import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import MainHeading from "./MainHeading";
import refresh from "../assets/images/arrowdown.svg";
import GradientButton from "./Buttons/GradientButton ";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ProductInventoryChart = () => {
  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Sales",
        data: [450, 300, 150], // example data values
        backgroundColor: ["#22C55E", "#FACC15", "#EF4444"], // Green, Yellow, Red
        hoverOffset: 20,
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#6B7280", // text-gray-500
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.parsed}`,
        },
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="mx-auto w-full rounded-2xl bg-white p-4 sm:p-6">
      <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        {/* Left: Heading and Stats */}
        <div>
          <MainHeading heading="Product Inventory" />
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">

         <GradientButton image={refresh}>
  This Year
</GradientButton>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full max-w-xs mx-auto">
  <Pie data={data} options={options} />
</div>


      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 justify-center">
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

export default ProductInventoryChart;
