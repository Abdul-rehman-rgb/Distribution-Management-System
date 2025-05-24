import React from "react";

const OutlineBtn = ({ BtnName, iconSrc, altText = "icon", className = "" }) => {
  return (
    <button
      className={`flex items-center poppins-medium gap-2 border border-[#A9A9A9] btnColor 
                  rounded-md px-3 h-9 sm:h-10 max-sm:min-w-[86px] sm:min-w-[102px] 
                  text-[14px] sm:text-base hover:bg-gray-100 transition ${className}`}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={altText}
          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
        />
      )}
      {BtnName}
    </button>
  );
};

export default OutlineBtn;
