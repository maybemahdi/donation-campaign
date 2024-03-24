import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Group.png";
const Nav = () => {
  return (
    <div className="navbar bg-base-100 my-5">
      <div className="navbar-start">
        <div className="dropdown -ml-7">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md space-y-4 dropdown-content mt-3 z-[1] py-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to={"/"} className={({ isActive, isPending }) =>
              isActive ? "text-primary" : isPending ? "pending" : ""
            }>Home</NavLink>
            <NavLink to={"/donation"} className={({ isActive, isPending }) =>
              isActive ? "text-primary" : isPending ? "pending" : ""
            }>Donation</NavLink>
            <NavLink to={"/statistics"} className={({ isActive, isPending }) =>
              isActive ? "text-primary" : isPending ? "pending" : ""
            }>Statistics</NavLink>
          </ul>
        </div>
        <img src={logo} alt="" />
        <div>
          <Link className="text-4xl ml-2 font-bold text-[#FF444A]">Donation</Link>
          <p className="text-[#0B0B0BB2] ml-2 text-[18px] font-medium tracking-[10px]">
            Campaign
          </p>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu text-base font-semibold gap-8 menu-horizontal px-1">
          <NavLink to={"/"} className={({ isActive, isPending }) =>
              isActive ? "text-primary" : isPending ? "pending" : ""
            }>Home</NavLink>
          <NavLink to={"/donation"} className={({ isActive, isPending }) =>
              isActive ? "text-primary" : isPending ? "pending" : ""
            }>Donation</NavLink>
          <NavLink to={"/statistics"} className={({ isActive, isPending }) =>
              isActive ? "text-primary" : isPending ? "pending" : ""
            }>Statistics</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
