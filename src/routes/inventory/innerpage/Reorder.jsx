import OutlineBtn from "../../../components/Buttons/OutlineBtn";
import cloud from "../../../assets/images/icons/cloud.svg";
import filterlines from "../../../assets/images/icons/filterlines.svg";
import MainHeading from "../../../components/MainHeading";
import Paragragh from "../../../components/Paragragh";
import SearchInput from "../../../components/SearchInput";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import PaginatedTable from "../../../components/Table";
import SalesTrendsChart from "../../../components/SalesTrendsChart";
import GradientButton from "../../../components/Buttons/GradientButton ";
import outlinedown from "../../../assets/images/icons/outlinedown.svg";
import ReorderChart from "../../../components/ReorderChart";
import ReorderSuggestionTable from "../../../components/ReorderSuggestionTable";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Reorder = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6">
                <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <MainHeading heading="Reorder Suggestions" />
                        <Paragragh para="AI generated suggestion to maintain stock levels and avoid shortages." />
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
                    <PaginatedTable BtnText={"Reorder Now"} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-sm bg-white p-6 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mt-8">
                <div>
                    <ReorderChart />
                </div>
                <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 sm:p-6">
                    {/* Header Section: Heading + Button */}
                    <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <MainHeading heading="Sales Trends" />
                        <GradientButton image={outlinedown}>This Year</GradientButton>
                    </div>

                    {/* Table Section */}
                    <div>
                        <ReorderSuggestionTable />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reorder;
