import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div className={`py-6 px-14 max-sm:px-4 py-4 bg-primary ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
