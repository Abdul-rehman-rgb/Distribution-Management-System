import React from "react";

const InputField = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full rounded-lg border border-[#737791] bg-white px-[16px] py-[12px] text-[#483415] poppins-regular text-[12px] focus:border-[#EA7D00] focus:ring-[#EA7D00] shadow  ${className}`}
      {...props}
    />
  );
};

export default InputField;
