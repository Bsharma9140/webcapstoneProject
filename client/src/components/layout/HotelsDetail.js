import React, { Component} from "react";
import styled from "styled-components";
import './Hotels.css';
import hotelData from './HotelsData.json';


class HotelsDetail extends Component  {
  constructor() {
    super();
    this.state = {
      hotelData:hotelData.hotel,
      id:0,
      hotel:{},
      errors: {}
    };
  }
  
  componentDidMount() {
      var path = window.location.pathname && window.location.pathname.split('/');
      var hotel_id = path[2];
      this.state.id= hotel_id;
      var hoteldata = this.state.hotelData.find(x=>x.id===hotel_id);
      this.setState({hotel:hoteldata})
  }

  render(){
    const hotel = this.state.hotel;
    return (
      <div class="singapore">
                
      <main>
             
      <div class="tour-pageheader">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="tour-caption">
                            <h1 class= "h1style">{this.state.hotel.name}</h1>
                            <p><strong class="tour-rate">{this.state.hotel.price}</strong>{this.state.hotel.perDay}</p>
                            <a href={this.state.hotel.href} class="btn btn-primary mb10">Book Your Tour</a>
                            
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
                            
                            <h4 class="mb30">{this.state.hotel.name + " Highlights"}</h4>
                            <div class="slide-thumb-gallery">
                                <div class="owl-carousel" data-slider-id="1">
                                    <div>
                                        <img src={require('../../images/hotel1.jpg')} alt="" />
                                        </div>
                                        
                                </div>
                                <div class="owl-thumbs" data-slider-id="1">
                                    <button class="owl-thumb-item"><img src={require('../../images/hotel2.jpg')} alt="" class="img-fluid"></img></button>
                                    <button class="owl-thumb-item"><img src={require('../../images/hotel3.jpg')} alt="" class="img-fluid"></img></button>
                                    <button class="owl-thumb-item"><img src={require('../../images/hotel4.jpg')} alt="" class="img-fluid"></img></button>
                                    <button class="owl-thumb-item"><img src={require('../../images/hotel5.jpg')}alt="" class="img-fluid"></img></button>
                                </div>
                            </div>
                        </div>
                        <div class="journey-section mb60">
                            <h3 class="mb30">Description</h3>
                            <div class="well-bg-block">
                                
                                <p>{this.state.hotel.description}</p>
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

                    </div>
                </div>
            </div>
        </div>   
    
  </main>
</div>);
    }
  
  
}

export default HotelsDetail;

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
