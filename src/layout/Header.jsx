import React from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/Profile.png";
import bell from "../assets/images/bell.png";
import search from "../assets/images/icons/search.svg";

const Header = () => {
  return (
    <>
      <header className="grid grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center gap-4 px-4 md:px-14 py-4 bg-white">
        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-[auto] w-[143px] md:h-[auto] w-[80px] max-sm:h-[auto] w-[83px]" />
        </div>

        {/* Greeting */}
        <div className="sm:justify-self-end md:justify-self-center max-sm:justify-self-end">
          <h1 className="text-[20px] max-sm:text-[12px] md:text-[24px] font-semibold tracking-[0.4px] text-[#151D48]">
            Good Morning, John!
          </h1>
        </div>

        {/* Search Bar */}
        <div>
          <div className="relative w-full">
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={search} alt="Search" className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search orders, tasks, inventory, and more..."
              className="h-[45px] w-[383px] rounded-[15px] border-none bg-[#F4F6F9] pr-3 pl-10 focus:outline-none max-sm:w-[232px] h-[42px]"
            />
          </div>
        </div>

        {/* Notification + Profile */}
        <div className="flex justify-end items-center gap-4">
          {/* Bell */}
          <button
            aria-label="Notifications"
            className="bg-[#FDF2E6] p-2 rounded inline-flex items-center justify-center hover:bg-[#fce4c7] transition"
          >
            <img src={bell} className="h-6 w-6" alt="Notification Bell" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2">
            <img src={profile} alt="User" className="h-8 w-8 rounded-full" />
            <div className="hidden md:block text-left leading-tight">
              <span className="block text-sm font-medium text-gray-700 truncate max-w-[120px]">
                John Doe
              </span>
              <span className="block text-xs font-medium text-gray-500 truncate max-w-[120px]">
                Admin View
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
