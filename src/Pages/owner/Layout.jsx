import React, { useEffect } from "react";
import NavbarOwner from "../../Components/ownerComponents/NavbarOwner";
import Sidebar from "../../Components/ownerComponents/Sidebar";
import { Outlet } from "react-router";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { isOwner, navigate } = useAppContext();

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner]);
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
