import React from "react";
import logo from "../assets/images/logo.png";
import profile from "../assets/images/Profile.png";
import bell from "../assets/images/bell.png";
import SearchInput from "../components/SearchInput";

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
          <h1 className="text-[24px] poppins-semibold max-sm:text-[12px] md:text-[24px] tracking-[0.4px] text-[#151D48]">
            Good Morning, John!
          </h1>
        </div>

        {/* Search Bar */}
        <div>
          <SearchInput />
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
            <div className="hidden md:block text-left leading-tight poppins-regular">
              <span className="block text-sm text-gray-700 truncate max-w-[120px]">
                John Doe
              </span>
              <span className="block text-xs text-gray-500 truncate max-w-[120px]">
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
