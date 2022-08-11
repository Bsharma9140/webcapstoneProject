import React, { Component } from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';


class Contact extends Component {
    render() {
        return (
            <div>
                <div className="background3">
                    <img src={require("../../images/pexels-daniel-ap-837932.jpg")} alt="" />
                </div>


                <main>


                    <div class="upper_main">
                        <h2>Contact Us</h2>
                        <p>If you have any Questions, Comment or Concerns</p>
                        <p>feel free to contact us</p>
                    </div>
                    <div class="form_content">
                        <div class="left box">
                            <div class="address detail">
                            <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                                <div class="topic">Address</div>
                                <div class="text-one">Travelvio</div>
                                <div class="text-two">3252 Kariya Drive, Mississauga</div>
                                <div class="text-three">ON, Canada</div>
                            </div>
                            <div class="phone detail">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                <div class="topic">Phone</div>
                                <div class="text-one">+1 888-888-8888</div>
                            </div>
                            <div class="email detail">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                <div class="topic">Email</div>
                                <div class="text-one">travelvio@gmail.com</div>
                            </div>
                        </div>

                        <div class="right box">
                            <div class="topic-text">Send us a Message</div>
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
                                <button type="submit" class="btn2">Submit</button>
                            </form>
                        </div>

                    </div>





                </main>
            </div>

        );
    }
}

export default Contact;
