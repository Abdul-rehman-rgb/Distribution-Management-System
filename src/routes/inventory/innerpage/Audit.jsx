import React from "react";
import book from "../../../assets/images/notebook.svg";
import recursive from "../../../assets/images/recursive.svg";
import team from "../../../assets/images/team.svg";
import StatCard from "../../../components/StatCard";
import cloud from "../../../assets/images/icons/cloud.svg";
import DataTable from "../../../components/Table";

import filterlines from "../../../assets/images/icons/filterlines.svg";
import MainHeading from "../../../components/MainHeading";
import SearchInput from "../../../components/SearchInput";
import OutlineBtn from "../../../components/Buttons/OutlineBtn";
import Paragragh from "../../../components/Paragragh";
import AuditTable from "../../../components/AuditTable";

const Audit = () => {
    return (
        <>
            <div className="flex flex-row gap-4 md:flex-row max-sm:flex-col">
                 <StatCard
                        icon={book}
                        title="Transfer Request"
                        value="1,500"
                    />
                    <StatCard
                        icon={recursive}
                        title="Recent Changes"
                        value="50"
                    />
                    <StatCard
                        icon={team}
                        title="User Involved"
                        value="10"
                    />
            </div>
            <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6">
                {/* Header section */}
                <div className="flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <MainHeading heading="Audit Logs" />
                        <Paragragh para="Records of all inventory-related actions, changes, and user activities." />
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
                    <AuditTable BtnText={"Order Details"} />
                </div>
            </div>
        </>
    );
};

export default Audit;
