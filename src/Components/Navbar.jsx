import React from "react";
import { MdMenu, MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-2 flex flex-row justify-between items-center">
      <div className="flex gap-4 flex-row items-center">
        <button><MdMenu className="text-[40px]" /></button>
        <input
          className="rounded-md w-72 focus:outline-none p-2"
          placeholder="Search"
        />
        <button className="rounded-lg w-28 bg-red-500 p-2 ring-2 ring-red-900 hover:opacity-80 active:opacity-40">
          Matematica
        </button>
        <button className="rounded-lg w-28 bg-blue-500 p-2 ring-2 ring-blue-900 hover:opacity-80 active:opacity-40">
          Fisica
        </button>
        <button className="rounded-lg w-28 bg-green-500 p-2 ring-2 ring-green-900 hover:opacity-80 active:opacity-40">
          Chimica
        </button>
      </div>

      <button className="flex gap-2 flex-row items-center ring-2 py-2 px-4 rounded-lg ring-black">
        Login
        <MdLogin className="text-[23px]" />
      </button>
    </div>
  );
};

export default Navbar;
