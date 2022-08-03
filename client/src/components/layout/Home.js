import React, { Component } from "react";
import './Home.css';


class Home extends Component {
  render() {
    return (
    
      <div>
      <main>
          <h2>Welcome to Travelvio</h2>
          <div class="main_content">
            <div class="left box">
              <div id="canada_image"></div>
              <h3>CANADA</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.  <a href="#">Read more...</a></p>
            </div>
            <div class="right box">
              <div id="newzealand_image"></div>
              <h3>NEW ZEALAND</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.  <a href="#">Read more...</a></p>
            </div>
          </div>
          <div class="main_content">
            <div class="left box">
              <div id="maldives_image"></div>
              <h3>MALDIVES</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.  <a href="#">Read more...</a></p>
            </div>
            <div class="right box">
              <div id="newyork_image"></div>
              <h3>NEW YORK CITY</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.  <a href="#">Read more...</a></p>
            </div>
          </div>
            
          <div class="middle_portion">
            <div class="left box">
              <div id="box1_image"></div>
            </div>
            <div class="right box">
              <h3>WE PROMISE OUTSTANDING ADVENTURE TRAVEL EXPERIENCES FOR PEOPLE WITH AN ADVENTUROUS SPIRIT.</h3>
              <p>Every active travel experience Boundless Journeys creates is complemented by signature accommodation,
                regional cuisine, and remarkable local guides who can show you the greatest hits and hidden gems of each
                destination. No matter where you want to go—or what you want to do—Boundless Journeys delivers unique,
                flexible, and exclusive travel at its best.</p>
              <h3>SO, WHAT ARE YOU IN THE MOOD FOR?</h3>
            </div>
          </div>
            
          <div class="main_content">
            <div class="left box">
              <div id="switzerland_image"></div>
              <h3>SWITZERLAND</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.  <a href="#">Read more...</a></p>
            </div>
            <div class="right box">
              <div id="amsterdam_image"></div>
              <h3>AMSTERDAM</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.  <a href="#">Read more...</a></p>
            </div>
          </div>
            
          <div class="bottom_main">
            <div id="bottom_image">
              <div>
                <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ”</p>
              </div>
            </div>
          </div>
        </main></div>
    );
  }
}

export default Home;
