import React, { useCallback } from "react";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex gap-10 max-w-7xl mx-auto">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-yellow-200">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome" className="text-base">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation" className="text-base">
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="text-base">
              <IoCartSharp />
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="text-base">
              <FaAd />
              Add a review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings" className="text-base">
              <FaList />
              Bookings{" "}
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/" className="text-base">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="text-base">
              <FaSearch />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      {/* main content of the dashboard */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
