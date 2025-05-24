import React from "react";
import search from "../assets/images/icons/search.svg";

const SearchInput = () => {
    return (
        <div className="relative w-full">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <img
                    src={search}
                    alt="Search"
                    className="h-5 w-5"
                />
            </span>
            <input
                type="text"
                placeholder="Search orders, tasks, inventory, and more..."
                className="poppins-regular bg-primary h-auto w-full max-w-[383px] rounded-[15px] border-none pr-3 pl-10 focus:outline-none"
            />
        </div>
    );
};

export default SearchInput;
