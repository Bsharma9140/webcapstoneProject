import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import './Register.css';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
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

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="background2">
          <img src={require("../../images/pexels-daniel-frese-2983472.jpg")} alt="" />
        </div>
        <main>

          <div class="form_content2">
            <div class="left box">

            </div>

            <div class="right box">
              <div class="address detail">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Already have an account?</div>
                <div class="custom-link"><Link to="/login">Log in</Link><br></br>
                  <Link to="/home">
                    Back to
                    home
                  </Link>
                </div>
              </div>
              <div class="topic-text">REGISTRATION</div>
              <form noValidate onSubmit={this.onSubmit}>
                <div class="input-box full-name">
                  <label for="name">Full Name</label>
                  <input onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames("", {
                      invalid: errors.name
                    })} placeholder="Enter your name"></input>
                  <span className="red-text">{errors.name}</span>
                </div>
                <div class="input-box email-address">
                  <label for="email">Email Address</label>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email
                    })}
                    placeholder="Enter your email"></input>
                  <span className="red-text">{errors.email}</span>
                </div>
                <div class="input-box email-address">
                  <label for="password"> Password</label>
                  <input onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password
                    })} placeholder="Enter your password"></input>
                  <span className="red-text">{errors.password}</span>
                </div>
                <div class="input-box email-address">
                  <label for="password2">Confirm Password</label>
                  <input onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2
                    })} placeholder="Enter your confirm password"></input>
                  <span className="red-text">{errors.password2}</span>
                </div>
                <button type="submit" class="btn2">Submit</button>

              </form>
            </div>
          </div>
        </main>
      </div>

    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));