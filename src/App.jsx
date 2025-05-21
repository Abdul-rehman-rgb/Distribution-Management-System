import React from "react";
import { ThemeProvider } from "../comtext/theme-context";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from "@/routes/layout";
import Dashboard from "@/routes/dashboard/page";
import Order from "@/routes/order/page";
import Inventory from "@/routes/inventory/page";
import Manufacturer from "@/routes/manufacturer/page";
import Taker from "@/routes/taker/page";
import Shop from "@/routes/shop/page";
import Warehouse from "@/routes/warehouse/page";
import Report from "@/routes/Report/page";
import Setting from "@/routes/setting/page";

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
      },
      {
        path: "inventory",
        element: <Inventory />,
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
    <ThemeProvider storageKey="theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
