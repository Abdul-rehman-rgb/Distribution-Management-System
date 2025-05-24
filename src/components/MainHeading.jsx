import React from "react";
import clsx from "clsx";

const MainHeading = ({ heading, color = "text-primary", fontSize = "text-[18px] sm:text-[20px]" }) => {
  return (
    <h1 className={clsx(color, fontSize, "font-bold")}>
      {heading}
    </h1>
  );
};

export default MainHeading;
