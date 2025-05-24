import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Outlet } from "react-router-dom";
import { cn } from "../utils/cn";
import Wrapper from "../components/Wrapper";
import Footer from "../layout/Footer";

const layout = () => {
    return (
        <div className="min-h-screen transition-colors">
            <div className={cn("transition-[margin] duration-300")}>
                <Header />
                <Wrapper>
                    <Sidebar />
                    <Outlet />
                </Wrapper>
                <Footer />
                {/* <div className='h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6'>*/}
            </div>
        </div>
    );
};

export default layout;
