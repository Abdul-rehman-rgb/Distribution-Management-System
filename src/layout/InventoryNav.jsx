import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const inventoryTabs = [
  { name: "Stock Overview", path: "/inventory" },
  { name: "Reorder Suggestion", path: "/inventory/reorder" },
  { name: "Stock Transfer", path: "/inventory/stocktransfer" },
  { name: "Audit Logs", path: "/inventory/auditlog" },
  // Add more tabs if needed
];

const InventoryNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path || location.pathname === path + "/";

  return (
    <div className="mb-6 overflow-x-auto whitespace-nowrap">
      <div className="flex gap-4 min-w-max">
        {inventoryTabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => navigate(tab.path)}
            className={`px-3 sm:px-4 py-2 text-sm sm:text-[18px] poppins-medium border-b-2 transition-colors duration-300 ${
              isActive(tab.path)
                ? "border-secondary text-secondary"
                : "border-transparent text-gray-500 hover:text-secondary"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InventoryNav;
