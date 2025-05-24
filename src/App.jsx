import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@/routes/layout";
import Dashboard from "@/routes/dashboard/page";
import Order from "@/routes/order/page";
import InventoryLayout from "@/routes/inventory/layout";
import Manufacturer from "@/routes/manufacturer/page";
import Taker from "@/routes/taker/page";
import Shop from "@/routes/shop/page";
import Warehouse from "@/routes/warehouse/page";
import Report from "@/routes/Report/page";
import Setting from "@/routes/setting/page";
import OrderDetails from "./routes/order/innerpages/OrderDetails";
import Overview from "./routes/inventory/innerpage/Overview";
import Reorder from "./routes/inventory/innerpage/Reorder";
import Stock from "./routes/inventory/innerpage/Stock";
import Audit from "./routes/inventory/innerpage/Audit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "orders",
                element: <Order />,

                children: [
                    {
                        path: "details",
                        element: <OrderDetails />,
                    },
                ],
            },
            {
                path: "inventory",
                element: <InventoryLayout />,
                children: [
                    { index: true, element: <Overview /> },
                    { path: 'reorder', element: <Reorder /> },
                    { path: 'stocktransfer', element: <Stock /> },
                    { path: 'auditlog', element: <Audit /> },
                    
                ],
            },
            {
                path: "manufacturer",
                element: <Manufacturer />,
            },
            {
                path: "order-takers",
                element: <Taker />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "warehouse",
                element: <Warehouse />,
            },
            {
                path: "report",
                element: <Report />,
            },
            {
                path: "setting",
                element: <Setting />,
            },
        ],
    },
]);

const App = () => {
    return (
        // <ThemeProvider storageKey="theme">
        // </ThemeProvider>
            <RouterProvider router={router} />

    );
};

export default App;
