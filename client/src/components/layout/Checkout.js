import React, { Component } from "react";
import './Checkout.css';



class Checkout extends Component {
    render() {
        return (
            <div>
                <div className="background4">
                    <img src={require("../../images/checkout.jpg")} alt="" />
                </div>

                <div class="wrapper">
                    <h1>Checkout</h1>

                    <div class="row">
                        <form method="get">
                            <div class="col-7 col">
                                <h3 class="topborder"><span>Billing Details</span></h3>
                                <label for="country">Country</label>
                                <select name="country" id="country" required>
                                    <option value="">Please select a country</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Not Canada">Not Canada</option>
                                </select>
                                <div class="width50 padright">
                                    <label for="fname">First Name</label>
                                    <input type="text" name="fname" id="fname" required />
                                </div>
                                <div class="width50">
                                    <label for="lname">Last Name</label>
                                    <input type="text" name="lname" id="lname" required />
                                </div>
                                <label for="address">Address</label>
                                <input type="text" name="address" id="address" required />

                                <label for="city">Town / City</label>
                                <input type="text" name="city" id="city" required />
                                <div class="width50 padright">
                                    <label for="province">Province</label>
                                    <select name="province" id="province" required>
                                        <option value="">Please select a province</option>
                                        <option value="ab">Alberta</option>
                                        <option value="bc">British Columbia</option>
                                        <option value="mb">Manitoba</option>
                                        <option value="nb">New Brunswick</option>
                                        <option value="nl">Newfoundland and Labrador</option>
                                        <option value="ns">Nova Socia</option>
                                        <option value="on">Ontario</option>
                                        <option value="pe">Prince Edward Island</option>
                                        <option value="qc">Quebec</option>
                                        <option value="sk">Saskatchewan</option>
                                        <option value="not-canada">Not Canada</option>
                                    </select>
                                </div>
                                <div class="width50">
                                    <label for="postcode">Postcode</label>
                                    <input type="text" name="postcode" id="postcode" placeholder="Postcode / Zip" required />
                                </div>

                                <div class="adjust">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" id="email" required />
                                </div>
                                <div class="adjust">
                                    <label for="tel">Phone</label>
                                    <input type="text" name="tel" id="tel" required />
                                </div>


                                <label for="notes" class="notes">Order Notes</label>
                                <textarea name="notes" id="notes" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                            <div class="col-5 col order">
                                {/* <h3 ><span>Your Order</span></h3> */}
                                <img class="img-adjust" src={require("../../images/check.jpg")} alt="hotel/tour image" height={450}
                                    width={400}></img>
                                {/* <div class="row">
                                    <h4 class="inline">Room/Tour Details</h4>

                                </div>
                                <div>
                                    <p class="prod-description inline">Deluxe Suite<div class="qty inline"><span class="smalltxt">x</span> 1</div>
                                    </p>
                                </div>
                                <div><h5>Rate</h5></div>

                                <div><h5>Total Amount</h5></div> */}

                              
                                <div>
                                    <h3 class="topborder"><span>Payment Method</span></h3>
                                    <input type="radio" value="banktransfer" name="payment" checked /><p>Direct Bank Transfer</p>
                                    <p class="padleft">
                                        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.
                                    </p>
                                </div>

                                <div><input type="radio" value="cheque" name="payment" /><p>Cheque Payment</p></div>
                                <div>
                                    <input type="radio" value="card" name="payment" /><p>Card</p>
                                    
                                      <form>
                                    <input type="text" placeholder="Card Number" class="card"></input>
                                    <input type="text" placeholder="Name on card"></input>
                                    {/* <div class="half"> */}
                                    <input type="text" placeholder="MM/YY"></input>
                                    <input type="text" placeholder="CVC"></input>
                                    {/* </div>   */}
                                </form>

                                </div>
                                <input type="submit" name="submit" value="Place Order" class="redbutton" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

export default Checkout;
