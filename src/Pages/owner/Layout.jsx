import React from "react";
import NavbarOwner from "../../Components/ownerComponents/NavbarOwner";
import Sidebar from "../../Components/ownerComponents/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <NavbarOwner />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
