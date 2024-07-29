import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logobazaar.png"; // Adjust the path as needed

const Header: React.FC = () => {
  return (
    <header
      className="header_section mystyle-header"
      style={{ marginBottom: "10px" }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container mystyle-navbar">
          <Link to="/" className="navbar-brand mystyle-navbar-brand">
            <img src={logo} alt="Logo" className="mystyle-logo" />
          </Link>
          <button
            className="navbar-toggler mystyle-navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mystyle-navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mystyle-navbar-nav">
              <li className="nav-item mystyle-nav-item">
                <Link to="/" className="nav-link mystyle-nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item mystyle-nav-item">
                <Link to="/product" className="nav-link mystyle-nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item mystyle-nav-item">
                <Link to="/blog" className="nav-link mystyle-nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item mystyle-nav-item">
                <Link to="/about" className="nav-link mystyle-nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
