import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
//import { Component } from "react";
 //import logo from "../image/f5.jpg"


const Navbar = () => {
  return (
    <>
      <div className="Container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="Navbar" to="/">
              {/* { <img src={logo} alt="logo" ></img> } */}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/" 
                    
                  > Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/About">
                    About
                  </NavLink>
                </li>

                {/* <li className="nav-item">
                  <NavLink className="Navbar" to="/Navbar">
                    Navbar
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Register">
                    Register
                  </NavLink>
                </li>

                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/courses">
                    courses
                  </NavLink>
                </li>

                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/Logout">
                    Logout
                  </NavLink>
                </li>

                
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;

