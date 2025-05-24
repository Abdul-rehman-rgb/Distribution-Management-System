import React from "react";
import CardHeading from "./CardHeading";

const OrderCard = ({ label, value, image }) => {
  return (
    <div className="flex flex-row justify-between rounded-lg bg-white px-5 py-4">
      {/* Left Side */}
      <div>
        <p className="poppins-medium text-sm text-gray-500">{label}</p>
        <CardHeading title={value} />
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end justify-between">
        <img src={image} alt={label} className="h-auto w-[44px]" />
      </div>
    </div>
  );
};

export default OrderCard;
