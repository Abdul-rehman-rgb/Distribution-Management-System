import React from "react";
import { Outlet } from "react-router-dom";
import InventoryNav from "../../layout/InventoryNav";
import InventoryMain from "./page";

const layout = () => {
    return(
        <>
        <InventoryMain />
        <InventoryNav />
        <Outlet />
        </>
    );
};

export default layout;
