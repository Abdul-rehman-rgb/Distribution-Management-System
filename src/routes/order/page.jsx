import React from "react";
import DataTable from "../../components/Table";
import MainHeading from "../../components/MainHeading";
import Paragragh from "../../components/Paragragh";
import SearchInput from "../../components/SearchInput";
import OutlineBtn from "../../components/Buttons/OutlineBtn";
import order from "../../assets/images/order.svg";
import pending from "../../assets/images/pending.svg";
import transit from "../../assets/images/transit.svg";
import cancel from "../../assets/images/cancel.svg";
import complete from "../../assets/images/complete.svg";
import OrderCard from "../../components/OrderCard";
import filterlines from "../../assets/images/icons/filterlines.svg";
import cloud from "../../assets/images/icons/cloud.svg";
import plus from "../../assets/images/icons/plus.svg";
import calender from "../../assets/images/icons/calender.svg";
import refresh from "../../assets/images/icons/refresh.svg";
import FillBtn from "../../components/Buttons/FillBtn";
import {  useNavigate } from "react-router-dom";
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Order = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/orders/details");
    };
    return (
        <>
            <div className="flex flex-row gap-4 max-sm:flex-col md:flex-row">
                <FillBtn
                    BtnName="Add new order"
                    iconSrc={plus}
                    onClick={handleClick}
                />
                <button className="poppins-medium text-secondary flex h-9 items-center gap-2 rounded-md bg-[#F8EDE2] px-6 text-[14px] transition hover:bg-gray-100 max-sm:min-w-[86px] sm:h-10 sm:min-w-[102px] sm:text-base">
                    <img
                        src={calender}
                        alt="icon"
                        className="h-4 w-4 object-contain sm:h-5 sm:w-5"
                    />
                    Select Date Range
                </button>

                <OutlineBtn
                    className="poppins-medium text-secondary flex h-9 items-center gap-2 rounded-md border border-[#EA7D00] px-3 text-[14px] transition hover:bg-gray-100 max-sm:min-w-[86px] sm:h-10 sm:min-w-[102px] sm:text-base"
                    BtnName="Refresh"
                    iconSrc={refresh}
                />{" "}

                <OutlineBtn
                    BtnName="Filter"
                    iconSrc={cloud}
                />
            </div>
            <div className="margin grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                <OrderCard
                    label={"Total Orders"}
                    value={"1,245"}
                    image={order}
                />
                <OrderCard
                    label={"Pending Orders"}
                    value={"512"}
                    image={pending}
                />
                <OrderCard
                    label={"In Transit Orders"}
                    value={"512"}
                    image={transit}
                />
                <OrderCard
                    label={"Cancelled Orders"}
                    value={"78"}
                    image={cancel}
                />
                <OrderCard
                    label={"Completed Orders"}
                    value={"92%"}
                    image={complete}
                />
            </div>
            <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6">
                {/* Header section */}
                <div className="flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <MainHeading heading="Orders" />
                        <Paragragh para="Real-time data on product and manage products." />
                    </div>
                    <div className="flex items-center gap-2 max-sm:flex-col">
                        <SearchInput />
                        <div className="flex justify-between max-sm:flex-row max-sm:gap-2">
                            <div className="mr-2">
                                <OutlineBtn
                                    BtnName="Export"
                                    iconSrc={filterlines}
                                />
                            </div>
                            <OutlineBtn
                                BtnName="Filter"
                                iconSrc={cloud}
                            />
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div>
                    <DataTable BtnText={"Order Details"} />
                </div>
            </div>
            {/* <Bar
                data={{
                    labels: ["A", "B", "C"],
                    datasets: [
                        {
                            label: "Revenue",
                            data: [200, 300, 400],
                        },
                        {
                            label: "Loss",
                            data: [50, 30, 40],
                        },
                    ],
                }}
            /> */}
{/* <Line
  data={{
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 300, 400],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4, // for curved lines
      },
      {
        label: 'Loss',
        data: [50, 30, 40],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  }}
  options={{
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Revenue vs Loss',
      },
    },
  }}
/> */}

            {/* <Outlet /> */}
        </>
    );
};

export default Order;
