import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItem = (
        <>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/create">AddEmployee</Link>
          </li>
          <li>
            <Link to="/addUser">AddUser</Link>
          </li>
          <li>
            <Link to="/users">AllUser</Link>
          </li>
          </>
    )
    return (
        <div className="navbar bg-[#0b4bcb] z-50 text-white opacity-100  sticky top-0 px-6 md:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a href=' '
           
            className="btn btn-ghost font-bold text-2xl text-[#0bf222]"
          >
            Settyl
          </a>
       
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-medium">{navItem}</ul>
        </div>
      </div>
     
    );
};

export default Navbar;