// src/components/SalesCard.jsx
import React from 'react';

const SalesCard = ({
  title,
  amount,
  percentage,
  buttonText,
  arrow,
  chart,
}) => {
  return (
    <div className="flex flex-row justify-between rounded-lg bg-white px-5 py-4 shadow-md">
      {/* Left Side */}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h1 className="mt-3 mb-3 text-2xl font-bold text-[#151D48] md:text-3xl">
          {amount}
        </h1>
        <p className="text-sm text-gray-500">{percentage}</p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end justify-between">
        <button className="flex items-center gap-1 text-[10px] font-medium text-[#EA7D00]">
          {buttonText}
          {arrow && <img src={arrow} alt="arrow" className="h-3 w-3" />}
        </button>
        {chart && <img src={chart} alt="chart" className="mt-2 h-auto w-[66px]" />}
      </div>
    </div>
  );
};

export default SalesCard;
