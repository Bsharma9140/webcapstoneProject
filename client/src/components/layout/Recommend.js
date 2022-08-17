import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../../images/canadaN.jpg";
import Destination2 from "../../images/newzealandN.jpg";
import Destination3 from "../../images/maldivesN.jpg";
import Destination4 from "../../images/newyorkN.jpg";
import Destination5 from "../../images/switzerlandN.jpg";
import Destination6 from "../../images/amsterdamN.jpg";


export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "CANADA",
      subTitle: "The expanse of Canada's natural beauty, from mountains and glaciers to secluded lakes and forests, is almost unparalleled worldwide. But Canada's allure is not just the great outdoors. Canada has cosmopolitan cities that are... ",
    },
    {
      image: Destination2,
      title: "NEW ZEALAND",
      subTitle: "New Zealand is one of the most sought-after destinations in the world. With its snow-capped mountains, ancient glaciers, rolling hills, and copious amounts of wine, it's a destination unlike all others. Tucked away in the corner of the world,...",
    },
    {
      image: Destination3,
      title: "MALDIVES",
      subTitle: "The island nation of the Maldives is popular with honeymooners looking for seclusion and adventurers looking to explore the depths of the sea on a. Travelers seeking relaxation can unwind at one of the island spas,...",
    },
    {
      image: Destination4,
      title: "NEW YORK",
      subTitle: "As the most populous city in the U.S. – set at the forefront of food, fashion and the arts – NYC requires stamina. But don't let the Big Apple's frenetic sights and sounds intimidate you from soaking up its grandeur...",
    },
    {
      image: Destination5,
      title: "SWITZERLAND",
      subTitle: "Switzerland is a landlocked country in Central Europe. It has borders with France to the west, Italy to the south, Austria and Liechtenstein to the east and Germany to the north. The climate is temperate, but varies with altitude...",
    },
    {
      image: Destination6,
      title: "AMSTERDAM",
      subTitle: "Amsterdam is as pretty as a postcard with charm in spades. It's also one of the rare places that attracts history buffs, luxury-minded travelers, couples seeking romance and backpackers alike. Besides its cultural attractions, such as",
    },
  ];


  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>TOP DESTINATIONS</h2>
      </div>
      <div className="packages">
        
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
                  
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
               
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
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
      background-color: #FC5B6215;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      h3 {
        letter-spacing: 0.1rem;
        font-family: VNFGothamBold,Helvetica,Arial,sans-serif;
        font-size: 24px;
        font-weight: bold;
      }
      p {
        font-family: VNFGothamBold,Helvetica,Arial,sans-serif;
        text-align: justify;
        font-size: 14px;
        line-height: 25px;
      }
      img {
        width: 100%;
        border-radius: 0.5rem;
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
