import React, { useState } from "react";
import prev from "../assets/images/icons/prev.svg";
import doubleprev from "../assets/images/icons/doubleprev.svg";
import next from "../assets/images/icons/next.svg";
import doublenext from "../assets/images/icons/doublenext.svg";
import update from "../assets/images/icons/update.svg";
import deleteicon from "../assets/images/icons/delete.svg";
import recursive from "../assets/images/recursive.svg";

const data = [
    {
        id: "#456456545",
        name: "Sundar Lal",
        role: "Role",
        icon: update,
        ActionType: "SKU123",
        Timestamp: "12/01/2025",
        Description: "Reduced 20 units of SKU123",
    },
    {
        id: "#456454645",
        name: "Sundar Lal",
        role: "Role",
        icon: deleteicon,
        ActionType: "SKU123",
        Timestamp: "12/01/2025",
        Description: "Reduced 20 units of SKU123",
    },
    {
        id: "#456456425",
        name: "Jetha Lal",
        role: "Role",
        icon: update,
        ActionType: "SKU123",
        Timestamp: "12/01/2025",
        Description: "Reduced 20 units of SKU123",
    },
    {
        id: "#456415645",
        name: "Jetha Lal",
        role: "Role",
        icon: recursive,
        ActionType: "SKU123",
        Timestamp: "12/01/2025",
        Description: "Reduced 20 units of SKU123",
    },
];

const PAGE_SIZE = 3;

const AuditTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / PAGE_SIZE);

    const paginatedData = data.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[768px] text-left text-sm">
                <thead className="poppins-medium text-[12px] text-[#989898]">
                    <tr>
                        <th
                            scope="col"
                            className="p-4"
                        ></th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            User Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Role
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Action Type
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Timestamp
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3"
                        >
                            Description
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
                                </div>
                            </td>
                            <td className="px-6 py-4">{item.name}</td>

                            <th
                                scope="row"
                                className="px-6 py-4"
                            >
                                {item.role}
                            </th>
                            <td className="px-6 py-4">{item.ActionType}</td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={item.icon}
                                        className="h-5 w-5"
                                    />
                                    {item.Timestamp}
                                </div>
                            </td>

                            <td className="px-6 py-4">{item.Description}</td>
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
                    <img
                        src={doubleprev}
                        alt=""
                        className="h-6 w-6"
                    />
                </button>
                <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
                >
                    <img
                        src={prev}
                        alt=""
                        className="h-6 w-6"
                    />
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
                    <img
                        src={next}
                        alt=""
                        className="h-6 w-6"
                    />
                </button>
                <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="rounded-[26.24px] border border-[#F5F5F5] px-3 py-3"
                >
                    <img
                        src={doublenext}
                        alt=""
                        className="h-6 w-6"
                    />
                </button>
            </div>
        </div>
    );
};

export default AuditTable;
