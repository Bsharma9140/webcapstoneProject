import React, { Component } from "react";
import './Footer.css';


class Footer extends Component {
  render() {
    return (
        <div>
            <footer>
                <div class="content">
                    <div class="left box">
                        <div class="upper">
                            <div class="topic">Contact Details</div>
                            <p>Travel Tourism</p>
                            <p>3242, Mississauga, ON, Canada</p>
                        </div>
                        <div class="lower">
                            <div class="phone">
                            <a href="#"><i class="fas fa-phone-volume"></i>888-888-8888</a>
                            </div>
                            <div class="email">
                            <a href="#"><i class="fas fa-envelope"></i>tour@travel.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="middle box">
                        <div class="topic">Useful Links</div>
                        
                    </div>
                    <div class="right box">
                        <div class="topic">Subscribe us</div>
                        
                            <div class="media-icons">
                            <a link="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                            <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                            <a href="https://in.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        
                    </div>
                    
                </div>
                <div class="bottom">
                    <p>Copyright © 2022 <a>Travel Tourism</a> All rights reserved</p>
                </div>
            </footer>
        </div>
    );
  }
}

export default Footer;
