import React from "react";
import "../App.css";
import "./Nav.css";
import "../index.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../img/testimonials/favicon.png";
const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/main">
            <img src={logo} className="mt-6 pb-2" alt="Logo" id="title"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"><i id="title"></i></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <img src={logo} alt="Logo" to="/main" />
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                id="title"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 p-3">
                <li className="nav-item" tabIndex={0}>
                  <Link
                    className="nav-link"
                    id="title" 
                    // aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item" tabIndex={1}>
                  <Link className="nav-link" to="/service" id="title">
                    Service
                  </Link>
                </li>
                <li className="nav-item" tabIndex={2}>
                  <Link className="nav-link" to="/project" id="title">
                    Project
                  </Link>
                </li>

                {/* ---------------Dropdown Team --------------------------- */}
                <NavDropdown
                  id="title"
                  title="Team"
                  menuVariant="dark"
                >
                  <NavDropdown.Item to="/team" tabIndex={3}>
                    <Link to="/team" id="title">Team</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/collaboratives" tabIndex={4}>
                    <Link to="/collaboratives" id="title">Collaboratives</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item to="/events" tabIndex={5}>
                    <Link to="/events" id="title">Events</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/faqs" tabIndex={6}>
                    <Link to="/faqs" id="title">FAQ's</Link>
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <li className="nav-item dropdown">
          <Link 
           className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Team
          </Link>
          <ul className="dropdown" aria-label='dropdownmenu' >
            <li><Link className="dropdown-item" to="#">Team</Link></li>
            <li><Link className="dropdown-item" to="#">Collaboratives</Link></li>
            <li><Link className="dropdown-item" to="#">Events</Link></li>
            <li><Link className="dropdown-item" to="#">Gallery</Link></li>
          </ul>
        </li> */}

                <li className="nav-item" tabIndex={7}>
                  <Link className="nav-link" to="/about" id="title">
                    About
                  </Link>
                </li>

                <li className="nav-item" tabIndex={8}>
                  <Link className="nav-link" to="/contact" id="title">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search" tabIndex={9}>
                <input
                  className="form-control me-2 bg-dark"
                
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit" id="title">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
