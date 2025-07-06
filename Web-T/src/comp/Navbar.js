import "./NavbarStyles.css";
import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItem">
        <h1 className="navbar-logo">Untitle</h1>

        <ul className="nav-menu">
          <li>
            <a href="/">
              <i className="fa-solid fa-house-chimney"></i>Home
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
