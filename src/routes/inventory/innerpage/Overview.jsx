import OutlineBtn from "../../../components/Buttons/OutlineBtn";
import cloud from "../../../assets/images/icons/cloud.svg";
import filterlines from "../../../assets/images/icons/filterlines.svg";
import MainHeading from "../../../components/MainHeading";
import Paragragh from "../../../components/Paragragh";
import SearchInput from "../../../components/SearchInput";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import InventoryCard from "../../../components/InventoryCard";
import InventoryTable from "../../../components/InventoryTable";
import InventoryNav from "../../../layout/InventoryNav";
import ProductInventoryChart from "../../../components/ProductInventoryChart";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Order = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6">
                <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <MainHeading heading="Stock Overview Table" />
                        <Paragragh para="Real-time data on stock levels, location, and status." />
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
                    <InventoryTable />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 rounded-sm bg-white">
                    <ProductInventoryChart />
                </div>
        </>
    );
};

export default Order;
