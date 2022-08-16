
import React, { Component } from "react";

import styled from "styled-components";
import './tour1.css';

class Tour1 extends Component {
    render() {
        return (
            <div class="singapore">
                
                <main>
             
      <div class="tour-pageheader">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="tour-caption">
                            <h1 class= "h1style">Singapore</h1>
                            <p><strong class="tour-rate">$1499</strong>( 3 nights | 4 days )</p>
                            <a href="/checkout" class="btn btn-primary mb10">Book Your Tour</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
                        <div class="highlights-section mb60">
                            
                            <h4 class="mb30">Singapore Highlights</h4>
                            <div class="slide-thumb-gallery">
                                <div class="owl-carousel" data-slider-id="1">
                                    <div>
                                        <img src={require("../../images/slide_big_1.jpg")} alt="" />
                                        </div>
                                        
                                </div>
                                <div class="owl-thumbs" data-slider-id="1">
                                    <button class="owl-thumb-item"><img src={require("../../images/slide_small_1.jpg")} alt="" class="img-fluid"></img></button>
                                    <button class="owl-thumb-item"><img src={require("../../images/slide_small_2.jpg")} alt="" class="img-fluid"></img></button>
                                    <button class="owl-thumb-item"><img src={require("../../images/slide_small_3.jpg")} alt="" class="img-fluid"></img></button>
                                    <button class="owl-thumb-item"><img src={require("../../images/slide_small_4.jpg")} alt="" class="img-fluid"></img></button>
                                </div>
                            </div>
                        </div>
                        <div class="journey-section mb60">
                            <h3 class="mb30">Journey</h3>
                            <div class="well-bg-block">
                                <h4 class="journey-day-title">Day 1 : LAND AT SINGAPORE</h4>
                                <p>Feel bliss taking over as soon as you land at Changi International Airport from where you will be escorted to your hotel by our representative. After the check-in, you can comfortably unwind until the evening post which you will be heading for the Singapore Night Safari.
                                     Overnight stay at your hotel.</p>
                            </div>
                            <div class="well-bg-block">
                                <h4 class="journey-day-title">Day 2 : EXPLORING SINGAPORE</h4>
                                <p>Day 2 brings with it the actual action that is going to take place in your Singapore tour as not only will you be exploring tourist attractions like Mount Faber, Merlion Park, Chinatown, Chocolate Shop but also Jewellery Factory and Little India.
                                     Overnight stay at your hotel.</p>
                            </div>
                            <div class="well-bg-block">
                                <h4 class="journey-day-title">Day 3 : VISITING UNIVERSAL STUDIOS AND S.E.A. AQUARIUM</h4>
                                <p>Relish those childhood memories with your family at the Universal Studios, 
                                    Singapore a theme park snuggled on Sentosa Island in Resorts World Sentosa. 
                                    The theme park has seven themed zones and lets you take the joy of the 24 rides, 
                                    attractions and shows. It also screens your most loved television series and films
                                     Shrek 4-D Adventure, Madagascar: A Crate Adventure, Jurassic Park Rapids Adventure, 
                                     TRANSFORMERS The Ride: The Ultimate 3D Battle, to name a few. Followed by an astounding 
                                     experience to the S.E.A Aquarium which shelters over 100,000 marine animals falling in the 
                                     category of more than 800 species in 49 habitats.
                                     Roam around the city with your family and head to your hotel for overnight stay.</p>
                            </div>
                            <div class="well-bg-block">
                                <h4 class="journey-day-title">Day 4 : DEPARTURE</h4>
                                <p>With a good morning meal, you bid goodbye to Changi International Airport and board your 
                                    flight to home or any tourist destination you plan to visit.</p>
                            </div>
                        </div>
                        
                        <div class="reviews-section mb60">
                            <h3 class="mb40">Customer Reviews</h3>
                            <div class="review-block">
                                <div class="review-img"><img src={require("../../images/user_img_1.jpg")} alt="" class="rounded-circle"></img></div>
                                <div class="review-content">
                                    <h5 class="title-bold d-inline">Jennifer Wirtz</h5>
                                    <div class="star-rating">
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                    </div>
                                    <p>Vivamus velit ligula tempus id dui apretium imperdiet liguorbi sit amet pharetra leo. Integer tempus enim vel placerat consectetu ecenascula.</p>
                                </div>
                            </div>
                            <div class="review-block">
                                <div class="review-img"><img src={require("../../images/user_img_2.jpg")} alt="" class="rounded-circle"></img></div>
                                <div class="review-content">
                                    <h5 class="title-bold d-inline">Maria Hershberger</h5>
                                    <div class="star-rating">
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                    </div>
                                    <p>Eempus id dui apretium imperdiet ligorbi sitamet pharetra leonteger tempus enimvel placerat consectaecenas vehicula.</p>
                                </div>
                            </div>
                            <div class="review-block">
                                <div class="review-img"><img src={require("../../images/user_img_3.jpg")} alt="" class="rounded-circle"></img></div>
                                <div class="review-content">
                                    <h5 class="title-bold d-inline">Della Betty</h5>
                                    <div class="star-rating">
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                        <span><i class="fa fa-star"></i></span>
                                    </div>
                                    <p>Nullam orci exegestaset finibus amolestie ut nisuspendisse mollisleo sedcongue iaculis eratneque consectetur nisiquis feugia.</p>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
                        <div class="widget-primary support-list">
                            <div class="widget-primary-title">
                                <h3>Why Book With Us?</h3>
                            </div>
                            <ul class="arrow list-none">
                                <li>24X7 service and support</li>
                                <li>Totally complaint in all aspects</li>
                                <li>Dedicated, trustworthy team</li>
                                <li>Professional happy services</li>
                            </ul>
                        </div>
                        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="section-title">
                        <h2>Similar Packages</h2>
                    </div>
                </div>
            </div>
            <div class="flex">
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
                                    <a href="tour2" class="btn-link">Go for Maldives <i class="fa fa-angle-right"></i></a></div>
                            </div>
                        </div>
                    
                </div>
              
            </div>
        </div>
                        
                        
                        <div id="contact-map" class="widget-map"></div>
                    </div>
                </div>
            </div>
        </div>   
    
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

export default Tour1;