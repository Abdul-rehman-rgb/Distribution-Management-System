// src/components/Button.jsx
import React from "react";

const Button = ({ type = "button", className = "", children, ...rest }) => {
  return (
    <button
      type={type}
      className={`w-full sm:w-auto flex-1 rounded-[12px] py-2.5 text-white hover:bg-blue-800 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
