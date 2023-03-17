import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const menuItem = (
    <React.Fragment>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/features">FEATURES</Link>
      </li>
      <li>
        <Link to="/collection">COLLECTION</Link>
      </li>
      <li>
        <Link to="/shop">SHOP</Link>
      </li>
      <li>
        <Link to="/aboutus">ABOUT US</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      {/*----------------- frist Part -----------------------
      -------------------------------------------------------*/}
      <div className="text-white navbar bg-cyan-600	">
        <div className="navbar-start">
          <button
            className="btn btn-outline text-white 
           nab-btn "
          >
            USD
            <AiOutlineDown></AiOutlineDown>
          </button>
        </div>
        <div className="navbar-center">
          <Link className="text-2xl">Online Store</Link>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-ghost ">
            Sign In
          </Link>
          <span> | </span>
          <Link to="/signup" className="btn btn-ghost ">
            Create an New Acount
          </Link>
        </div>
      </div>
      {/*---------------- socend Part -----------------
      -----------------------------------------------*/}
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-2">{menuItem}</ul>
          </div>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">0 Items</span>
                <span className="text-info">Subtotal: $ 00</span>
                <div className="card-actions">
                  <button className="btn btn-info text-white btn-block bg-cyan-600">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
