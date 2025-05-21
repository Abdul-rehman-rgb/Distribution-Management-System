import React from "react";

const CardHeading = ({ title, color = "#1F2937", fontSize = "24px" }) => {
    return (
        <h1
            style={{ color: color, fontSize: fontSize, fontWeight: "600" }}
            className="font-poppins leading-[36px]"
        >
            {title}
        </h1>
    );
};

export default CardHeading;
