import React, { useState } from "react";
import prev from "../assets/images/icons/prev.svg";
import doubleprev from "../assets/images/icons/doubleprev.svg";
import next from "../assets/images/icons/next.svg";
import doublenext from "../assets/images/icons/doublenext.svg";

const data = [
  { id: "#1", Product: "Product A", stock: "10", quantity: "1000" },
  { id: "#2", Product: "Product A", stock: "10", quantity: "200" },
  { id: "#3", Product: "Product A", stock: "10", quantity: "10" },
  { id: "#4", Product: "Product A", stock: "10", quantity: "50" },
  { id: "#5", Product: "Product A", stock: "10", quantity: "30" },
  { id: "#6", Product: "Product A", stock: "10", quantity: "90" },
  { id: "#7", Product: "Product A", stock: "10", quantity: "1100" },
];

const PAGE_SIZE = 3;

const ReorderSuggestionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const paginatedData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="w-full">
      {/* Table Wrapper with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left">
          <thead className="poppins-medium text-[12px] sm:text-sm text-[#989898]">
            <tr>
              <th className="px-3 py-2 sm:px-4 sm:py-3">Product</th>
              <th className="px-3 py-2 sm:px-4 sm:py-3">Current Stock</th>
              <th className="px-3 py-2 sm:px-4 sm:py-3">Suggested Quantity</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={item.id}
                className={`text-[14px] sm:text-base text-[#666666] hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="px-3 py-3 sm:px-4 sm:py-4">{item.Product}</td>
                <td className="px-3 py-3 sm:px-4 sm:py-4">{item.stock}</td>
                <td className="px-3 py-3 sm:px-4 sm:py-4">{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-full border border-gray-200 px-3 py-2"
        >
          <img src={doubleprev} alt="First Page" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="rounded-full border border-gray-200 px-3 py-2"
        >
          <img src={prev} alt="Prev Page" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`rounded-full px-4 py-2 text-sm border ${
              currentPage === i + 1 ? "bg-secondary text-white border-secondary" : "border-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="rounded-full border border-gray-200 px-3 py-2"
        >
          <img src={next} alt="Next Page" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="rounded-full border border-gray-200 px-3 py-2"
        >
          <img src={doublenext} alt="Last Page" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  );
};

export default ReorderSuggestionTable;
