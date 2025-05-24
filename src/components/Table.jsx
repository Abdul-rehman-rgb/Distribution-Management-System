import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import prev from '../assets/images/icons/prev.svg';
import doubleprev from '../assets/images/icons/doubleprev.svg';

import next from '../assets/images/icons/next.svg';
import doublenext from '../assets/images/icons/doublenext.svg';

const data = [
    {
        id: "#456456545",
        name: "Sundar Lal",
        article: "SKU123",
        date: "12/01/2025",
        status: "Delivered",
    },
    {
        id: "#456454645",
        name: "Sundar Lal",
        article: "SKU123",
        date: "12/01/2025",
        status: "Delivered",
    },
    {
        id: "#456456425",
        name: "Jetha Lal",
        article: "SKU123",
        date: "12/01/2025",
        status: "Pending",
    },
    {
        id: "#456415645",
        name: "Jetha Lal",
        article: "SKU123",
        date: "12/01/2025",
        status: "Pending",
    },
];

const PAGE_SIZE = 3;

const PaginatedTable = ({BtnText}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const handleClick = (page) => {
        navigate(`?page=${page}`);
    };

    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    const paginatedData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-[768px] w-full text-left text-sm">
                <thead className="poppins-medium text-[14px] text-[#333333] uppercase">
                    <tr>
                        <th
                            scope="col"
                            className="p-4"
                        >
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    className="h-4 w-4 rounded-sm border-[#EA7D00] bg-gray-100 text-[#EA7D00] focus:ring-2 focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="checkbox-all border-[#EA7D00] text-[#EA7D00]"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Order ID
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Customer Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Article Number
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Order Date
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Location
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item, index) => (
                        <tr
                            key={item.id}
                            className={`text-[14px] text-[#666666] hover:bg-gray-50 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-table-${item.id}`}
                                        type="checkbox"
                                        className="h-4 w-4 rounded-sm border-[#EA7D00] text-[#EA7D00] focus:border-[#EA7D00] focus:ring-2"
                                    />
                                    <label
                                        htmlFor={`checkbox-table-${item.id}`}
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td className="px-6 py-4">{item.id}</td>

                            <th
                                scope="row"
                                className="text[14px] poppins-medium px-6 py-4 whitespace-nowrap text-[#666666]"
                            >
                                {item.name}
                            </th>
                            <td className="px-6 py-4">{item.article}</td>
                            <td className="px-6 py-4">{item.date}</td>
                            <td className="px-6 py-4">
                                <div className="poppins-semibold rounded bg-[#DEF7E7] px-2 py-2 text-center text-[11px] text-[#22C55E] transition-colors">
                                    Delivered
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={handleClick}
                                    className="poppins-medium bg-secondary rounded px-4 py-2 text-[11px] text-white transition-colors hover:bg-blue-700"
                                >
                                    {BtnText}
                                </button>
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
