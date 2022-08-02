import React, { Component } from "react";
import './About.css';


class About extends Component {
    render() {
        return (
            <div>
                <main>
            <h2>About Us</h2>
            <p>Our mission is to be the leading and most trustworthy travel management company
            that sets the standard for professionalism, reliability and transparency to its customers.</p>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="d-block w-100" src="../../images/ab1.jpg" alt="First slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="../../images/Canada.jpg" alt="Second slide"></img>
                  </div>
                  <div class="carousel-item">
                    <img class="d-block w-100" src="../../images/Dubai.jpg" alt="Third slide"></img>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            <div class="fullwidth-block" data-bg-color="#f1f1f1">
                <div class="container">
                    <h2 class="section-title">Our Team</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="team wow fadeInRight">
                                <figure class="team-image">
                                    <img src="../../images/person-team-1.png" alt=""></img>
                                </figure>
                                <h2 class="team-name">Mansi Chinaiwala</h2>
                                <small class="team-title">Founder</small>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>

                            <div class="team wow fadeInRight">
                                <figure class="team-image">
                                    <img src="../../images/person-team-2.png" alt=""></img>
                                </figure>
                                <h2 class="team-name">Bharti Sharma</h2>
                                <small class="team-title">Founder</small>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="team wow fadeInRight" data-wow-delay=".4s">
                                <figure class="team-image">
                                    <img src="../../images/person-team-3.png" alt=""></img>
                                </figure>
                                <h2 class="team-name">Vikas Puri</h2>
                                <small class="team-title">Founder</small>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>

                            <div class="team wow fadeInRight" data-wow-delay=".4s">
                                <figure class="team-image">
                                    <img src="../../images/person-team-4.png" alt=""></img>
                                </figure>
                                <h2 class="team-name">Hardik Patel</h2>
                                <small class="team-title">Founder</small>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

                
            </div>

        );
    }
}

export default About;
