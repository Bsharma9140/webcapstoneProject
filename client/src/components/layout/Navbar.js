import React, { useState } from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={require("../../images/logo1.png")} alt="" />
            Travelvio
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>

        <ul>
          <li>
            <a href="home">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/tour">TOURS</a>
          </li>
          <li>
            <a href="/hotels">HOTELS</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          
          
        </ul>
        <ul>
          <a href="/login"><button >Login</button></a>
          <a href="/register"><button >Register</button></a>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState}>
        <ul>
          <li>
            <a href="home" onClick={() => setNavbarState(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={() => setNavbarState(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/tour" onClick={() => setNavbarState(false)}>
             Tour
            </a>
          </li>
          <li>
            <a href="/hotels" onClick={() => setNavbarState(false)}>
              Hotel
            </a>
          </li>
          <li>
            <a href="/contact" onClick={() => setNavbarState(false)}>
              Contact
            </a>
          </li>
          
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
   
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      img {
        height: 15%;
        width: 15%;
        padding-left: 0px;
      }
    }
    .toggle {
      display: none;
    }
  }
  ul {
    display: flex;
     
    gap: 2rem;
    list-style-type: none;
    letter-spacing: 0.1rem;
    padding-right: 2rem;
    li {
      a {
        text-decoration: none;
      
        color: black;
        font-size: 1rem;
        font-weight: 550;
        transition: 0.2s ease-in-out;
        &:hover {
          color: #FC5B62;
        }
      }
      }
    }
  }
  button {
    padding: 0.5rem 1rem;
    
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #FC5B62;
    border: 2px solid #FC5B62;
  
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: black;
          color: #FC5B62;
          border: 2px solid #FC5B62;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ state }) => (state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;
  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;

      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
`;
