// components/GradientButton.js

import React from "react";

const GradientButton = ({ image, alt = "icon", className = "", children }) => {
  return (
    <button
      className={`w-full sm:w-auto sm:min-w-[102px] h-[34px] sm:h-10 px-4 text-[14px] sm:text-base poppins-medium text-white flex items-center gap-2 rounded-md border border-[#EA7D00] bg-gradient-to-r from-[#EA7D00] to-[#896235] transition hover:brightness-95 ${className}`}
    >
      <img
        src={image}
        alt={alt}
        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
      />
      {children}
    </button>
  );
};

export default GradientButton;
