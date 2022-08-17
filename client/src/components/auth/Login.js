import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import './Login.css';




class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div class="loginClass">

        <div className="backgroundLogin">
          <img src={require("../../images/pexels-frans-van-heerden-625409.jpg")} alt="" />
        </div>
        <main>

          <div class="form_contentLogin">
            <div class="left box">

            </div>
            <div class="right1 box">
              <div >

                <div class="custom-link1">
                <Link to="/home">Back to Home</Link>
                  <div class="topic-text"><b>LOGIN</b> Below</div>
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                    </p>
                  </div>
                
                  <form noValidate onSubmit={this.onSubmit}>
                  <div class="input-box email-address">
                                <label for="email">Email </label>
                    
                      <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email || errors.emailnotfound
                        })}
                        placeholder="Enter your email"/>
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                    </div>
                    <div class="input-box email-address">
                                <label for="password"> Password</label>
                      <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {
                          invalid: errors.password || errors.passwordincorrect
                        })}
                        placeholder="Enter your password"/>
                      <span className="red-text">
                        {errors.password}
                        {errors.passwordincorrect}
                      </span>
                      
                    </div>
                    
                      <button
                        type="submit"
                        class="btn1"
                      >
                        Login
                      </button>
                   
                  </form>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

