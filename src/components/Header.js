import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        {/*Logo Section  */}
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width='150'
            height='40'
            objectFit='contain'
            className="cursor-pointer "
        
          />
        </div>
        {/* search */}
        <div
          className="hidden sm:flex items-center h-10 rounded-md
               bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer"
        >
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md
                 focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right Section */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div className="link">
            <p>Hello Archit</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="cursor-pointer relative flex items-center">
            <span
              className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center
                       font-bold rounded-full text-black"
            >
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div
        className="flex items-center bg-amazon_blue-light
              text-white text-sm space-x-3 p-2 pl-6"
      >
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's deals</p>
        <p className="hidden link md:inline-flex">Electronics</p>
        <p className="hidden link md:inline-flex">Food & Grocery</p>
        <p className="hidden link md:inline-flex">Buy Again</p>
      </div>
    </header>
  );
}

export default Header;
