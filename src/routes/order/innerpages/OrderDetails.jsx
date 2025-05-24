import React from "react";
import Paragragh from "../../../components/Paragragh";
import mobile from "../../../assets/images/mobile.png";

const OrderDetails = () => {
    return (
        <>
            <div className="flex flex-row justify-between rounded-md border border-[#EA7D00] bg-[#FEF5EB] px-6 py-6 sm:flex-row">
                <div>
                    <h2 className="poppins-regular text-[20px] text-[#131330]">#96459761</h2>
                    <Paragragh
                        color={"text-[#475156]"}
                        para={"1 Product  · Order Placed on 17 Jan, 2021 at 7:32 PM"}
                    />
                </div>
                <div>
                    <h2 className="poppins-regular text-[20px] text-[#131330]">Yes</h2>
                    <Paragragh
                        color={"text-[#475156]"}
                        para={"Invoice sent to customer"}
                    />
                </div>
                <div>
                    <h1 className="poppins-semibold text-[28px] text-[#0CB91D]">$1199.00</h1>
                </div>
            </div>

            <div className="mt-5 mb-5 bg-white">
                <Paragragh para={"Order expected delivery: 23 Jan, 2021"} />
                <h1 className="mt-4 mb-2 text-lg font-semibold text-gray-800">Product</h1>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
                        <thead className="poppins-medium bg-[#E4E7E9] text-[12px] text-[#475156] uppercase">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    Product
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    Article number
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    Unit Price
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
                                    Shelf life
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    Sub-Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 bg-white">
                                <th
                                    scope="row"
                                    className="poppins-medium px-6 py-4 text-[14px] whitespace-nowrap text-[#475156]"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={mobile}
                                            alt="Google Pixel 6 Pro"
                                            className="h-12 w-12 object-contain"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">SMARTPHONE</h4>
                                            <Paragragh
                                                color={"text-[#475156]"}
                                                para={"Google Pixel 6 Pro - 5G Android Phone"}
                                            />
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4 text-gray-700">SKU3434</td>
                                <td className="px-6 py-4 text-gray-700">$899</td>
                                <td className="px-6 py-4 text-gray-700">x1 carton</td>
                                <td className="px-6 py-4 text-gray-700">2 Months</td>
                                <td className="px-6 py-4 text-gray-700">$899</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] poppins-medium mt-20 mb-10">
                <div className="border-r border-r-[#E4E7E9] border-r-2 pr-4">
                    <h3 className="text-[18px] text-thirdColor">Billing Address</h3>
                    <div className="flex flex-col space-y-5 space-x-3">
                        <h4 className="text-thirdColor">Kevin Gilbert</h4>
                        <Paragragh color="text-[#5F6C72]" para={"East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"} />
                        <div>
                          <strong className="text-thirdColor poppins-medium text-[14px]">Phone Number:</strong>
                        <span className="text-[#5F6C72] poppins-regular"> +1-202-555-0118</span>
                        </div>
                         <div>
                          <strong className="text-thirdColor poppins-medium text-[14px]">Email:</strong>
                        <span className="text-[#5F6C72] poppins-regular">  kevin.gilbert@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="border-r border-r-[#E4E7E9] border-r-2 pr-4">
                    <h3 className="text-[18px] text-thirdColor">Billing Address</h3>
                    <div className="flex flex-col space-y-5 space-x-3">
                        <h4 className="text-thirdColor">Kevin Gilbert</h4>
                        <Paragragh color="text-[#5F6C72]" para={"East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"} />
                        <div>
                          <strong className="text-thirdColor poppins-medium text-[14px]">Phone Number:</strong>
                        <span className="text-[#5F6C72] poppins-regular"> +1-202-555-0118</span>
                        </div>
                         <div>
                          <strong className="text-thirdColor poppins-medium text-[14px]">Email:</strong>
                        <span className="text-[#5F6C72] poppins-regular">  kevin.gilbert@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="border-r border-r-[#E4E7E9] border-r-2 pr-4">
                    <h3 className="text-[18px] text-thirdColor">Billing Address</h3>
                    <div className="flex flex-col space-y-5 space-x-3">
                        <h4 className="text-thirdColor">Kevin Gilbert</h4>
                        <Paragragh color="text-[#5F6C72]" para={"East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh"} />
                        <div>
                          <strong className="text-thirdColor poppins-medium text-[14px]">Phone Number:</strong>
                        <span className="text-[#5F6C72] poppins-regular"> +1-202-555-0118</span>
                        </div>
                         <div>
                          <strong className="text-thirdColor poppins-medium text-[14px]">Email:</strong>
                        <span className="text-[#5F6C72] poppins-regular">  kevin.gilbert@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderDetails;
