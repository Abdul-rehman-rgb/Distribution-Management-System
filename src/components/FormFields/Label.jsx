import React from "react";

const Label = ({ htmlFor, children, className = "" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-2 block text-[12px] poppins-medium text-fourthColor ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
