import React from "react";
const NavBar = () => {

return (

    <nav className="navbar">
    <ul>
      <li className="ana">
        <a href="#">HOME</a>
      </li>
      <li className="TodoList">
        <a href="#">TODO LİST</a>
      </li>
      <li className="navsirketler">
        <a href="#">COMPANIES</a>
      </li>
      <li>
        {" "}
        <a href="#">ELON MUSK</a>
      </li>
    </ul>
  </nav>

);
};
export default NavBar;