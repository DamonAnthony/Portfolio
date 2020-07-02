import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="transparent">
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">About Me</a>
          </li>
          <li>
            <a href="badges.html">Projects</a>
          </li>
          <li>
            <a href="collapsible.html">Testimonials</a>
          </li>
          <li>
            <a href="!#">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
