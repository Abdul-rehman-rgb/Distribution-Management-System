import React from 'react';

const Paragragh = ({ para, color = "", className = "" }) => {
  return (
    <p className={`poppins-regular text-[14px] ${color} ${className}`}>
      {para}
    </p>
  );
};

export default Paragragh;
