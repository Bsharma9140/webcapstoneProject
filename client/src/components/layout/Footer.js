import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
export default function Footer() {
  return (
    <div>
    <footer>
  <div class="content">
    <div class="left box">
      <div class="upper">
        <div class="topic">Contact Details</div>
        <p>TRAVELVIO</p>
        <p>3252 Kariya Drive, Mississauga, ON, Canada</p>
      </div>
      <div class="lower">
        <div class="phone">
          <a href="#"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> &nbsp; +1 888-888-8888</a>
        </div>
        <div class="email">
          <a href="#"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> &nbsp; travelvio@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="middle box">
        <div class="topic">Useful Links</div>
        <div><Link to="/home">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/hotel">Hotels</Link></div>
        <div><Link to="/tour">Tours</Link></div>
        <div><Link to="/contact">Contact</Link></div>
    </div>
    <div class="right box">
      <div class="topic">Subscribe us</div>
      <form action="#">
        <input type="text" placeholder="Enter email address"></input>
        <input type="submit" name="" value="Send"></input>
        <div class="media-icons">
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
          <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
          <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
          <a href="https://in.linkedin.com/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </div>
        </form>
    </div>
  </div>
  <div class="bottom">
    <p>Copyright © 2022 <Link to="/home">Travelvio</Link> All rights reserved</p>
  </div>
</footer>
</div>
  );
}

