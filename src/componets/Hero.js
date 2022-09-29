// import PropTypes from "prop-types";
import React, { Component } from "react";

export class Hero extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl animate__animated animate__fadeInRight animate__delay-faster"
            />
            <div className="animate__animated animate__fadeInLeft animate__delay-faster">
              <h1 className="text-5xl font-bold">IPL News!</h1>
              <p className="py-6">
                Get the stats of the previous games in the IPL, so that you can
                get to know about the stats in a click and back your die-hard
                fanship in the game.
              </p>
              <a href="/IPL/data">
                <button className="btn btn-primary">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
