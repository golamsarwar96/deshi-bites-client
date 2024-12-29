import { NavLink } from "react-router-dom";
import logo from "../../assets/Icons/icon.png";
import bgImg from "../../assets/Icons/bgImg.png";
const Navbar = () => {
  const links = (
    <div className="flex justify-center items-start gap-2">
      <NavLink to="/" className="px-5 py-3 ">
        Home
      </NavLink>
      <NavLink to="/" className="px-5 py-3 ">
        Contact Us
      </NavLink>
      <NavLink to="/" className="px-5 py-3">
        Dashboard
      </NavLink>
      <NavLink to="/menu" className="px-5 py-3">
        Our Menu
      </NavLink>
      <NavLink to="/" className="px-5 py-3">
        Our Shop
      </NavLink>
    </div>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white max-w-screen-xl">
      <div className="navbar-start w-[30%] mx-auto">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <a className="btn btn-ghost text-3xl">Deshi Bites</a>
          </div>
          <div>
            <img className="w-10 h-10" src={logo} alt="" />
          </div>
        </div>
      </div>

      <div className="navbar-end w-full">
        <div className=" hidden lg:flex mr-5">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
