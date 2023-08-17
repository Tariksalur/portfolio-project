import React from "react";
const NavBar = () => {
  return (
    <div className="">
      <nav className=" border-bottom-solid border-b-8 border-bottom-color:rgb(7 34 85) ">
        <ul className="text-center">
          <li className="text-left pl-8 pt-4">
            <a href="#">HOME</a>
          </li>
          <li className="TodoList">
            <a href="#">TODO LİST</a>
          </li>
          <li className="navsirketler">
            <a href="#">COMPANIES</a>
          </li>
          <li>
            <a href="#">ELON MUSK</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
