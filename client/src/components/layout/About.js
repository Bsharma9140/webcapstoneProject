import React, { useState } from "react";
import styled from "styled-components";
import Mansi from "../../images/mansi.jpg";
import Vikas from "../../images/vikas.jpg";
import Bharti from "../../images/bharti.jpg";
import Hardik from "../../images/hardik.jpg";
import './About.css';

export default function About() {
    const data = [
        {
            image: Mansi,
            title: "Mansi Chinaiwala",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        },
        {
            image: Vikas,
            title: "Vikas Puri",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        },
        {
            image: Bharti,
            title: "Bharti Sharma",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        },
        {
            image: Hardik,
            title: "Hardik Patel",
            subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        },
    ];


    const [active, setActive] = useState(1);
    return (
        <div>
            <div className="backgroundAbout">
                <img src={require("../../images/pexels-johannes-plenio-1146708.jpg")} alt="" />
            </div>
            <main>
                <div class="about_main">
                    <h2>About Us</h2>
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
                        <div id="maldives_image"></div>
                    </div>
                    <div class="right box">
                        <div id="newyork_image1"></div>
                    </div>
                    <div class="right box">
                        <div id="newyork_image"></div>
                    </div>
                </div>



            </main>
            <Section id="recommend1">
                <div className="title">
                    <h3>Team Members</h3>
                </div>
                <div className="packages">

                </div>
                <div className="abouts">
                    {data.map((about) => {
                        return (
                            <div className="about">
                                <img src={about.image} alt="" />
                                <h4>{about.title}</h4>
                                <p>{about.subTitle}</p>
                                <div className="info">
                                    <div className="services">

                                    </div>

                                </div>

                            </div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
}

const Section = styled.section`
    padding: 2rem 0;
    font-family: VNFGothamBold,Helvetica,Arial,sans-serif;
    .title {
      text-align: center;
      h2 {
        font-size: 2rem;
        letter-spacing: 0.2rem;
        font-family: Bradley Hand, cursive;
      }
    }
    .packages {
      display: flex;
      justify-content: center;
      margin: 2rem 0;
      ul {
        display: flex;
        list-style-type: none;
        width: max-content;
        li {
          padding: 1rem 2rem;
          border-bottom: 0.1rem solid black;
        }
        .active {
          border-bottom: 0.5rem solid #8338ec;
        }
      }
    }
    .abouts {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      padding: 0 3rem;
      .about {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: #FC5B6215;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          transform: translateX(0.4rem) translateY(-1rem);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        h4 {
          letter-spacing: 0.1rem;
        }
        p {
          font-family: VNFGothamBold,Helvetica,Arial,sans-serif;
          text-align: justify;
          font-size: 14px;
          line-height: 25px;
        }
        img {
          width: 100%;
          border-radius: 7rem;
        }
        .info {
          display: flex;
          align-items: center;
          .services {
            display: flex;
            gap: 0.3rem;
            img {
              border-radius: 1rem;
              background-color: #4d2ddb84;
              width: 2rem;
              /* padding: 1rem; */
              padding: 0.3rem 0.4rem;
            }
          }
          display: flex;
          justify-content: space-between;
        }
        .distance {
          display: flex;
          justify-content: space-between;
        }
      }
    }
    @media screen and (min-width: 280px) and (max-width: 768px) {
      .packages {
        ul {
          li {
            padding: 0 0.5rem;
            font-size: 2vh;
            padding-bottom: 1rem;
          }
          .active {
            border-bottom-width: 0.3rem;
          }
        }
      }
      .abouts {
        grid-template-columns: 1fr;
        padding: 0;
      }
    }
  `;

