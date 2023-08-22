import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-sky-700 text-white w-full z-[9999] fixed top-0 right-0 left-0">
      <ul className="flex">
        <li className="flex-grow text-center py-4 text-2xl">
          <a href="#">HOME</a>
        </li>
        <li className="flex-grow text-center py-4 text-2xl">
          <a href="#">TODO LIST</a>
        </li>
        <li className="flex-grow text-center py-4 text-2xl">
          <a href="#">COMPANIES</a>
        </li>
        <li className="flex-grow text-center py-4 text-2xl">
          <a href="#">ELON MUSK</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;