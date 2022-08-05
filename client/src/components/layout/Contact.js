import React, { Component } from "react";
import './Contact.css';


class Contact extends Component {
    render() {
        return (
            <div>

                <main>


                <div class="upper_main">
                    <h2>Contact Us</h2>
                    <p>If you have any Questions, Comment or Concerns</p>
                    <p>feel free to contact us</p>
                </div>
                <div class="form_content">
                    <div class="left box">
                        <div class="address detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="topic">Address</div>
                            <div class="text-one">Travel Tourism</div>
                            <div class="text-two">3242, Mississauga, ON, Canada</div>
                        </div>
                        <div class="phone detail">
                            <i class="fas fa-phone-alt"></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">888-888-8888</div>
                        </div>
                        <div class="email detail">
                            <i class="fas fa-envelope"></i>
                            <div class="topic">Email</div>
                            <div class="text-one">tour@travel.com</div>
                        </div>
                    </div>

                    <div class="right box">
                        <div class="topic-text">Send us a message</div>
                        <form action="#">
                            <div class="input-box full-name">
                                <label for="name">Full Name</label>
                                <input type="text" id="fullname" placeholder="Enter your name"></input>
                            </div>
                            <div class="input-box email-address">
                                <label for="email">Email Address</label>
                                <input type="text" id="emailaddress" placeholder="Enter your email"></input>
                            </div>
                            <div class="input-box message-box">
                                <label for="message">Message</label>
                                <input type="text" placeholder="Write a Message"></input>
                            </div>
                            <div class="button">
                                <input type="button" value="Send"></input>
                            </div>
                        </form>
                    </div>

                </div>

                <div class="picture_content">
                    <div class="left box">
                        <div id="image1"></div>
                    </div>
                    <div class="middle box">
                        <div id="image2"></div>
                    </div>
                    <div class="right box">
                        <div id="image3"></div>
                    </div>
                </div>


                <div class="bottom_main">
                    <div id="bottom_image">
                        <div>
                            <p> “ Traveling – it leaves you speechless, then turns you into a storyteller ”</p>
                        </div>
                    </div>
                </div>
                </main>
            </div>

        );
    }
}

export default Contact;
