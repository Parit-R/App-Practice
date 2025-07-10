import "./NavbarStyles.css";
import { Component } from "react"; //use Component class form the react
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    //it like use render funtion to show the UI
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Untitle</h1>

        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar; //basicly allow other file to asses Navbar
