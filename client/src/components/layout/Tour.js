import React, { Component } from "react";
import './Tour.css';

class Tour extends Component {
    render() {
        return (
            <div>

                <div className="backgroundTour">
                    <img src={require("../../images/pexels-nubia-navarro-nubikini-386009.jpg")} alt="" />
                </div>

                <main>


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



                    <section class="iternaries">
                        <h1>Tour Packages</h1>
                        <p>We have packages through the world</p>
                        <div class="iternaries_row">
                            <div class="iternaries_col">
                                <img src={require("../../images/Dubai.jpg")} alt="" />

                                <div class="layer">
                                    <button type="submit" class="btn-tour">Internatinal Tour</button>
                                </div>
                            </div>
                            <div class="iternaries_col">
                                <img src={require("../../images/Iternaries_europe_2.jpg")} alt="" />

                                <div class="layer">
                                    <button type="submit" class="btn-tour">Domestic Tour</button>

                                </div>
                            </div>
                            <div class="iternaries_col">
                                <img src={require("../../images/Usa.jpg")} alt="" />

                                <div class="layer">
                                    <button type="submit" class="btn-tour">Bussiness Tour</button>
                                </div>
                            </div>
                        </div>


                    </section>


                </main>


            </div>

        );
    }
}

export default Tour;
