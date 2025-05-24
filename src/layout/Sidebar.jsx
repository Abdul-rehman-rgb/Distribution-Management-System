import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dashboard from "../assets/images/icons/dashboard.png";
import order from "../assets/images/icons/order.png";
import inventory from "../assets/images/icons/inventry.png";
import Manufacturer from "../assets/images/icons/manufacture.png";
import Taker from "../assets/images/icons/taker.png";
import Shop from "../assets/images/icons/shop.png";
import Report from "../assets/images/icons/report.png";
import Warehouse from "../assets/images/icons/warehouse.png";
import Setting from "../assets/images/icons/setting.png";

// Add other icons as needed
const navItems = [
  { name: "Dashboard", icon: dashboard, path: "/" },
  { name: "Orders", icon: order, path: "/orders" },
  { name: "Inventory", icon: inventory, path: "/inventory" },
  { name: "Manufacturer", icon: Manufacturer, path: "/manufacturer" },
  { name: "Order Takers", icon: Taker, path: "/order-takers" },
  { name: "Shops", icon: Shop, path: "/shop" },
  { name: "Warehouse", icon: Warehouse, path: "/warehouse" },
  { name: "Report", icon: Report, path: "/report" },
  { name: "Setting", icon: Setting, path: "/setting" },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="py-4 text-primary flex justify-center align-center text-center">
      <nav className="mb-6 flex gap-8 overflow-x-auto lg:overflow-x-hidden">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex h-[118px] w-[120px] flex-shrink-0 flex-col items-center justify-center gap-[14px] rounded-[12px] px-2 py-4 text-center transition-all duration-200 sm:w-32 ${
              isActive(item.path)
                ? "border border-[rgba(234,125,0,0.5)] bg-white text-primary"
                : "bg-white text-primary hover:bg-gray-100"
            }`}
          >
            <img src={item.icon} alt={item.name} className="mb-1 h-6 w-6" />
            <span className="text-xs poppins-medium">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
