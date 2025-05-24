import React from "react";

const FillBtn = ({
  BtnName,
  iconSrc,
  altText = "icon",
  bgColor = "#EA7D00",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 poppins-medium text-white 
                 rounded-md px-4 py-2 max-w-full text-[14px] sm:text-base transition-colors
                 max-w-full"
      style={{ backgroundColor: bgColor }}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={altText}
          className="w-5 h-5"
        />
      )}
      <span className="truncate">{BtnName}</span>
    </button>
  );
};

export default FillBtn;
