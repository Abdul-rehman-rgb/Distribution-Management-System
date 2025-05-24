import React from "react";

const CardHeading = ({ title, color = "#000", fontSize = "24px", className = "" }) => {
    return (
        <h1
            className={`poppins-semibold font-semibold leading-[36px] ${className}`}
            style={{ color, fontSize }}
        >
            {title}
        </h1>
    );
};

export default CardHeading;
