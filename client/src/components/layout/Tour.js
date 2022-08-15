import React, { Component } from "react";
import './Tour.css';
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import styled from "styled-components";

class Tour extends Component {
    render() {
        return (
            <div>
                
                <main>
                <div className="backgroundTour">
        <img src={require("../../images/pexels-nubia-navarro-nubikini-386009.jpg")} alt="" />
      </div>
           
    <section class="traveltips">
        <h1>TRAVEL TIPS</h1>
        <p>Read up before you go</p>
        
        <div class="traveltips_row">
            <div class="traveltips-col">
            <img src={require("../../images/Visas_2.jpg")} alt="" />

                <h3>VISAS</h3>
            </div>
            
            <div class="traveltips-col">
            <img src={require("../../images/Transport_2.jpg")} alt="" />
               
                <h3>TRANSPORT</h3>
            </div>
            
            <div class="traveltips-col">
            <img src={require("../../images/Weather.jpg")} alt="" />
           
            <h3>WEATHER</h3>
            </div>
            <div class="traveltips-col">
            <img src={require("../../images/Safety.jpg")} alt="" />
              
            <h3>SAFETY</h3>
            </div>
            <div class="traveltips-col">
            <img src={require("../../images/History_white_1.jpg")} alt="" />
              
            <h3>HISTORY</h3>
            </div>
        </div>
        
        <div class="traveltips_row">
            <div class="traveltips-col">
            <img src={require("../../images/Airport.jpg")} alt="" />
               
            <h3>AIRPORTS</h3>
            </div>
            
            <div class="traveltips-col">
            <img src={require("../../images/Itinerary_travel.jpg")} alt="" />
                
            <h3>INTINERARIES</h3>
            </div>
            
            <div class="traveltips-col">
            <img src={require("../../images/Festivals.jpg")} alt="" />
       
            <h3>FESTIVALS</h3>
            </div>
            <div class="traveltips-col">
            <img src={require("../../images/Etiquite.jpg")} alt="" />
               
            <h3>ETIQUETTE</h3>
            </div>
            <div class="traveltips-col">
            <img src={require("../../images/Payments.jpg")} alt="" />
         
            <h3>PAYMNETS</h3>
            </div>
        </div>
        
            </section>
        
            
          
    <Section id="recommend">
         <center><h1>Tour Packages</h1></center>
        
         <div class="container">
           
            <div class="flex">
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                
                   <div class="destination-block">
                            <div class="desti-img">
                            <img src={require("../../images/singapore1.jpg")}alt=""></img>
                                <a href="#" class="desti-title">Singapore</a>
                                <div class="overlay">
                                </div>
                                <div class="text">
                                    <h3 class="mb20 text-white">Singapore</h3>
                                    <ul class="angle list-none">
                                        <li>4 Nights / 3 days</li>
                                        <li>3 Star hotel</li>
                                        <li>Breakfast and Dinner</li>
                                    </ul>
                                    <p class="price">$1599</p>
                                    <a href="/tour1" class="btn-link">Go for Singapore <i class="fa fa-angle-right"></i></a></div>
                            </div>
                        </div>
                   
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    
                   <div class="destination-block">
                            <div class="desti-img">
                            <img src={require("../../images/maldives1.jpg")}alt=""></img>
                                <a href="#" class="desti-title">Maldives</a>
                                <div class="overlay">
                                </div>
                                <div class="text">
                                    <h3 class="mb20 text-white">Maldives</h3>
                                    <ul class="angle list-none">
                                        <li>3 Nights / 4 days</li>
                                        <li>3 Star hotel</li>
                                        <li>Breakfast and Dinner</li>
                                    </ul>
                                    <p class="price">$1499</p>
                                    <a href="/tour2" class="btn-link">Go for Maldives <i class="fa fa-angle-right"></i></a></div>
                            </div>
                        </div>
                    
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                    
                   <div class="destination-block">
                            <div class="desti-img">
                            <img src={require("../../images/newyork1.jpg")}alt=""></img>
                                <a href="#" class="desti-title">New York</a>
                                <div class="overlay">
                                </div>
                                <div class="text">
                                    <h3 class="mb20 text-white">New York</h3>
                                    <ul class="angle list-none">
                                        <li>3 Nights / 4 days</li>
                                        <li>3 Star hotel</li>
                                        <li>Breakfast and Dinner</li>
                                    </ul>
                                    <p class="price">$1899</p>
                                    <a href="/tour3" class="btn-link">Go for Newyork <i class="fa fa-angle-right"></i></a></div>
                            </div>
                        </div>
                    
                </div>
              
            </div>
        </div>
   
    </Section>
  </main>
</div>

        );
    }
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
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
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
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
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

export default Tour;