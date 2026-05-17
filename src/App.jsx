import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes, useLocation } from "react-router";
import Home from "./Pages/Home";
import CarDetails from "./Pages/CarDetails";
import Cars from "./Pages/Cars";
import MyBooking from "./Pages/MyBooking";
import Footer from "./Components/Footer";
import Layout from "./Pages/owner/Layout";
import Dashboard from "./Pages/owner/Dashboard";
import AddCar from "./Pages/owner/AddCar";
import Managecar from "./Pages/owner/Managecar";
import ManageBooking from "./Pages/owner/ManageBooking";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { showLogin, setShowLogin } = useAppContext();
  const isOwnerPath = useLocation().pathname.startsWith("/owner");
  return (
    <>
      <Toaster />
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBooking />} />

        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<Managecar />} />
          <Route path="manage-bookings" element={<ManageBooking />} />
        </Route>
      </Routes>

      {!isOwnerPath && <Footer />}
    </>
  );
};

export default App;
