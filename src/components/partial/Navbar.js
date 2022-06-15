import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./3.png";
class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="header d-lg-flex justify-content-between align-items-center">
            <div className="header-agile">
              <h1>
                <Link to="/" className="navbar-brand logo">
                  <img src={logo} alt="logo" width="200" />
                </Link>
              </h1>
            </div>
            <div className="nav_w3ls">
              <nav>
                <label htmlFor="drop" className="toggle mt-lg-0 mt-1">
                  <span className="fa fa-bars" aria-hidden="true"></span>
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu">
                  <li className="mr-lg-3 mr-2 active">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li className="mr-lg-3 mr-2">
                    <Link to="/about">About</Link>
                  </li> */}
                  <li className="mr-lg-3 mr-2 p-0">
                    {/* <!-- First Tier Drop Down --> */}
                    <label htmlFor="drop-2" className="toggle">
                      Dropdown{" "}
                      <span
                        className="fa fa-angle-down"
                        aria-hidden="true"
                      ></span>{" "}
                    </label>
                    <a href="#">
                      Products{" "}
                      <span
                        className="fa fa-angle-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                    <input type="checkbox" id="drop-2" />
                    <ul className="inner-dropdown">
                      <li>
                        <Link to="/services">FVSumm</Link>
                      </li>
                      <li>
                        <Link to="/single">FHAD</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="mr-lg-3 mr-2">
                    <Link to="/gallery">Services</Link>
                  </li>
                  <li className="mr-lg-3 mr-2">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
