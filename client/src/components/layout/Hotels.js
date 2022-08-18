import React, { Component} from "react";
import styled from "styled-components";
import Destination1 from "../../assets/Destination1.png";
import Destination2 from "../../assets/Destination2.png";
import Destination3 from "../../assets/Destination3.png";
import Destination4 from "../../assets/Destination4.png";
import Destination5 from "../../assets/Destination5.png";
import Destination6 from "../../assets/Destination6.png";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import './Hotels.css';
import { getHotels } from "../../actions/authActions";
import {  withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const data = [
  {
    image: Destination1,
    title: "The Hilton",
    subTitle: "Singapore, officialy thr Republic of Singapore, is a",
    cost: "38,800",
    duration: "Approx 2 night trip",
    href:"/hotelsDetail/1"
  },
  {
    image: Destination2,
    title: "The Ramada",
    subTitle: "Thailand is a Southeast Asia country. It's known for",
    cost: "54,200",
    duration: "Approx 2 night trip",
    href:"/hotelsDetail/2"
  },
  {
    image: Destination3,
    title: "The Crown",
    subTitle: "Paris, France's capital, is a major European city and a",
    cost: "45,500",
    duration: "Approx 2 night trip",
    href:"/hotelsDetail/3"
  },
  {
    image: Destination4,
    title: "The Hilton",
    subTitle: "New Zealand is an island country in the",
    cost: "24,100",
    duration: "Approx 1 night trip",
    href:"/hotelsDetail/4"
  },
  {
    image: Destination5,
    title: "Radisson",
    subTitle: "Bora Bora is a small South Pacific island northwest of",
    cost: "95,400",
    duration: "Approx 2 night 2 day trip",
    href:"/hotelsDetail/5"
  },
  {
    image: Destination6,
    title: "The Marriott",
    subTitle: "London, the capital of England and the United",
    cost: "38,800",
    duration: "Approx 3 night 2 day trip",
    href:"/hotelsDetail/6"
  },
];

class Hotels extends Component  {
  constructor() {
    super();
    this.state = {
      
      errors: {}
    };
  }
  
  componentDidMount() {
      this.props.getHotels();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  render(){
    return (
      <div>
  
        <div className="backgroundHotel">
          <img src={require("../../images/pexels-pixabay-258154.jpg")} alt="" />
        </div>
        <Section id="recommend">
          <div className="title">
            <h2>Hotels</h2>
          </div>
         
          <div className="destinations">
            {data.map((destination) => {
              return (
                <div className="destination">
                  <img src={destination.image} alt="" />
                  <h3>{destination.title}</h3>
                  <p>{destination.subTitle}</p>
                  <div className="info">
                    <div className="services">
                      <img src={info1} alt="" />
                      <img src={info2} alt="" />
                      <img src={info3} alt="" />
                    </div>
                    <h4>{destination.cost}</h4>
                  </div>
                  <div className="distance">
                    <span>1000 Kms</span>
                    <span>{destination.duration}</span>
                    <span><a href={destination.href}>Select</a></span>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>);
    }
  
  
}

Hotels.propTypes = {
 getHotels: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //auth: state.auth,
  //errors: state.errors
});

export default connect(
  mapStateToProps,
  { getHotels }
)(withRouter(Hotels));

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
        a {
          color: black;
        }
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