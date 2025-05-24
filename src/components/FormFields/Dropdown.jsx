import React from "react";

const Dropdown = ({ className = "", options = [], ...props }) => {
  return (
    <select
      className={`w-full rounded-lg border border-[#737791] bg-white px-[16px] py-[12px] text-[#483415] poppins-regular text-[12px] focus:border-[#EA7D00] focus:ring-[#EA7D00] shadow ${className}`}
      {...props}
    >
      {options.map(({ value, label }, idx) => (
        <option key={idx} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
