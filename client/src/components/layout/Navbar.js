import { fontFamily, fontSize } from "@mui/system";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-pre-fixed">
        <nav>
        <div className="row">
        <div className="col s4">
              <Link
                to="/home"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: "25px"
                }}
                className="black-text"
              >
                TRAVELVIO
              </Link>
              </div>
        <div className="col s1">
              <Link
                to="/home"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="black-text"
              >
                Home
              </Link>
              </div>
              <div className="col s1">
              <Link
                to="/about"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="black-text"
              >
                About
              </Link>
              </div>
              <div className="col s1">
              <Link
                to="/hotel"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="black-text"
              >
                Hotels
              </Link>
              </div>
              <div className="col s1">
              <Link
                to="/tour"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="black-text"
              >
                Tours
              </Link>
              </div>
              <div className="col s1">
              <Link
                to="/contact"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="black-text"
              >
                Contact
              </Link>
              </div>
              <div className="col s1">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="black-text"
              >
                LogIn
              </Link>
              </div>
              <div className="col s1">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
             
            </div>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
