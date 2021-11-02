import React, { Component } from "react";
import Charts from "./Charts";
import PropTypes from "prop-types";
import "../Styles/DailyActivity.css";
import BarChartAxis from "./BarChartAxis";

/**
 * DailyActivity component and it renders the div element
 * The data displayed is the weight of the user and the calories burned.
 * @Component for showing the daily activity of the user as a Bar Chart.
 * @param {string} user - The user ID
 * @return {Component} - JSX React Component
 */
export class DailyActivity extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
  }
  render() {
    return (
      <div style={{ marginLeft: "150px" }} className='dailyActivity'>
        <h2>Daily activity</h2>
        {/* <Charts type='barChart' user={this.user} endpoint='/activity' />
        //Charts */}
        <BarChartAxis />
      </div>
    );
  }
}

export default DailyActivity;

DailyActivity.propTypes = {
  user: PropTypes.string.isRequired,
};
