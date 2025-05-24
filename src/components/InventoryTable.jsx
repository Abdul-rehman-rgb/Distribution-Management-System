import React, { useState } from "react";
import prev from '../assets/images/icons/prev.svg';
import doubleprev from '../assets/images/icons/doubleprev.svg';

import next from '../assets/images/icons/next.svg';
import doublenext from '../assets/images/icons/doublenext.svg';

const data = [
    { id: "#1", Productname: "Product A", SKU: "SKU-1", quantity: "10", date: "2024-01-01", location: "NY", status: "Delivered" },
    { id: "#2", Productname: "Product B", SKU: "SKU-2", quantity: "20", date: "2024-01-02", location: "LA", status: "Pending" },
    { id: "#3", Productname: "Product C", SKU: "SKU-3", quantity: "30", date: "2024-01-03", location: "TX", status: "Delivered" },
    { id: "#4", Productname: "Product D", SKU: "SKU-4", quantity: "40", date: "2024-01-04", location: "TX", status: "Delivered" },
    { id: "#5", Productname: "Product X", SKU: "SKU-5", quantity: "5", date: "2024-02-01", location: "MI", status: "Pending" },
    { id: "#6", Productname: "Product Y", SKU: "SKU-6", quantity: "15", date: "2024-02-02", location: "CA", status: "Delivered" },
    { id: "#7", Productname: "Product M", SKU: "SKU-7", quantity: "7", date: "2024-03-01", location: "FL", status: "Pending" },
    { id: "#8", Productname: "Product N", SKU: "SKU-8", quantity: "14", date: "2024-03-02", location: "GA", status: "Delivered" },
    { id: "#9", Productname: "Product O", SKU: "SKU-9", quantity: "21", date: "2024-03-03", location: "WA", status: "Delivered" },

];

const PAGE_SIZE = 3;

const PaginatedTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    const paginatedData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-[768px] w-full text-left text-sm">
                <thead className="poppins-medium text-[12px] text-[#333333]">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Product Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            SKU
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Quantity
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Last Updated
                        </th>
                        
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Location
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item, index) => (
                        <tr
                            key={item.id}
                            className={`text-[14px] text-[#666666] hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >

                            <td className="px-6 py-4">{item.Productname}</td>

                            <th
                                scope="row"
                                className="text[14px] poppins-medium px-6 py-4 whitespace-nowrap text-[#666666]"
                            >
                                {item.SKU}
                            </th>
                            <td className="px-6 py-4">{item.quantity}</td>
                            <td className="px-6 py-4">{item.date}</td>

                            <td className="px-6 py-4">
                               {item.location}
                            </td>
                            <td className="px-6 py-4">
                                <div
                  className={`poppins-semibold rounded px-2 py-2 text-center text-[11px] ${
                    item.status === "Delivered"
                      ? "bg-[#DEF7E7] text-[#22C55E]"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {item.status}
                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="mt-4 flex items-center justify-center space-x-3">
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
                >
                    <img src={doubleprev} alt="" className="h-6 w-6" />
                </button>
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
                >
                    <img src={prev} alt="" className="h-6 w-6" />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`rounded-[100px] border border-[#F5F5F5] px-5 py-3 ${currentPage === i + 1 ? "bg-secondary text-white" : "rounded-[26.24px] border border-[#F5F5F5] px-5 py-3"}`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
                >
                                        <img src={next} alt="" className="h-6 w-6" />

                </button>
                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
                >
                    <img src={doublenext} alt="" className="h-6 w-6" />

                </button>
            </div>
        </div>
    );
};

export default PaginatedTable;
