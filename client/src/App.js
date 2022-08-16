import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Contact from "./components/layout/Contact";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Testimonals from "./components/layout/Testimonals";
import ScrollToTop from "./components/layout/ScrollToTop";
import Recommend from "./components/layout/Recommend";
import './App.css';
import Hotels from "./components/layout/Hotels";
import Tour from "./components/layout/Tour";
import Tour1 from "./components/layout/tour1";
import Tour2 from "./components/layout/tour2";
import Tour3 from "./components/layout/tour3";
import Checkout from "./components/layout/Checkout";
class App extends Component {

  render() {
    const pathname = window.location.pathname;
   console.log(pathname,'location')
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <ScrollToTop />
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tour" component={Tour} />
            <Route exact path="/tour1" component={Tour1} />
            <Route exact path="/tour2" component={Tour2} />
            <Route exact path="/tour3" component={Tour3} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/hotels" component={Hotels} />
            <Route exact path="/checkout" component={Checkout} /> 
            { (pathname==='/home' || pathname==='/')?
            <><Services />
            <Recommend />
            <Testimonals /></>
            : <></>}
            
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;