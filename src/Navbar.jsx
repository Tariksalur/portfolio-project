import React from "react";
import "./App.css";
const NavBar = () => {

return (

    <nav class="navbar">
    <ul>
      <li class="ana">
        <a href="#">HOME</a>
      </li>
      <li class="TodoList">
        <a href="#">TODO LİST</a>
      </li>
      <li class="navsirketler">
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