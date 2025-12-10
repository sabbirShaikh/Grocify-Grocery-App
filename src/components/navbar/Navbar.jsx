import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";
import { SlClose } from "react-icons/sl";
import { FaHome } from "react-icons/fa";
import { BsInfoSquareFill } from "react-icons/bs";
import { FaTruckLoading } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

function Navbar() {
  const [isShaddow, setIsShaddow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsShaddow(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log(isShaddow);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShaddow]);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <header
        className={`bg-white fixed top-0 right-0 left-0 ${
          isShaddow ? "shadow-lg" : ""
        } z-50`}
      >
        <nav className="max-w-[1400px] px-10 mx-auto h-[10vh] md:h-[12vh] flex items-center justify-between">
          {/* logo */}
          <NavLink className="navbar text-4xl font-semibold">
            Gr<span className="text-orange-500 font-bold">O</span>cify
          </NavLink>

          {/* Desktop menu */}
          <ul className="md:flex md:gap-x-5 hidden font-semibold items-center text-lg text-zinc-600 tracking-wider">
            <NavLink className="hover:text-orange-600">Home</NavLink>
            <NavLink className="hover:text-orange-600">About us</NavLink>
            <NavLink className="hover:text-orange-600">Process</NavLink>
            <NavLink className="hover:text-orange-600">Contact us</NavLink>
          </ul>

          {/* nav actions */}
          <div className="flex items-center gap-x-6">
            {/* search input */}
            <div className="md:flex hidden border-orange-400 p-1 border-2  rounded-full items-center">
              <input
                type="text"
                className="focus:outline-none px-3 text-lg"
                placeholder="search here..."
                autoComplete="no"
              />
              <button className="text-white h-10 w-10 bg-orange-400 rounded-full text-2xl flex items-center justify-center hover:cursor-pointer hover:bg-orange-500">
                <IoSearchSharp />
              </button>
            </div>

            {/* wish list */}
            <NavLink className="text-zinc-600 text-3xl">
              <FaRegHeart />
            </NavLink>
            {/* cart */}
            <NavLink className="text-zinc-600 text-3xl">
              <FaOpencart />
            </NavLink>
            <button
              className="text-zinc-600 md:hidden text-3xl"
              onClick={handleMenu}
            >
              {showMenu ? <SlClose /> : <CiMenuFries />}
            </button>
          </div>

          {/* mobile menu */}
          <ul
            className={`flex flex-col bg-zinc-900/20 backdrop-blur-xl w-70 transition-all duration-500 rounded-xl gap-y-8 p-15 absolute md:hidden  font-semibold items-center text-xl text-zinc-500 tracking-wider top-30 ${
              showMenu ? "left-1/2" : "-left-full"
            } transform -translate-x-1/2`}
          >
            <NavLink className="hover:text-orange-600 flex items-center gap-2">
              <FaHome /> Home
            </NavLink>
            <NavLink className="hover:text-orange-600 flex items-center gap-2">
              <BsInfoSquareFill /> About us
            </NavLink>
            <NavLink className="hover:text-orange-600 flex items-center gap-2">
              <FaTruckLoading /> Process
            </NavLink>
            <NavLink className="hover:text-orange-600 flex items-center gap-2">
              <MdContacts /> Contact us
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
