import React, { Component } from "react";
import PropTypes from "prop-types";
import "../Styles/Greeting.css";

/**
 * Greeting component and it renders the div element
 * @Component
 * @return {Component} - JSX React Component
 */
export class Greeting extends Component {
  render() {
    return (
      <div className='greeting'>
        <h1 className='greeting__text'>
          Hello{" "}
          <span className='greeting__text--name'>{this.props.name}Thomas</span>
        </h1>
        <p className='greeting__status'>
          Congratulations, you've reached yesterday"s goal!👏
        </p>
      </div>
    );
  }
}
// PropTypes exports a range of validators that can be used to make sure the data you receive is valid.
// In this example, we’re using PropTypes.string. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
