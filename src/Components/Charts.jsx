import React, { Component } from "react";
import BarChartAxis from "./BarChartAxis";
//* A component that determines what type of chart => UserCharts
// => UserCharts A component that wraps the three smaller charts into a block

/**
 * A component that determines what type of chart is to be displayed.
 * @component
 *  @param {string} user - The user ID
 * @param {string} endpoint - The endpoint for the API call
 * @param {type} type - The type of chart to be displayed, ex barChart, lineChart, radialBarChart / radarChart
 * @return {Component }
 */
export class Charts extends Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;
    this.type = this.props.type;
    this.endpoint = this.props.endpoint;
  }
  render() {
    return (
      <div>
        {/* <BarChartAxis user={this.user} endpoint={this.endpoint} />; */}
        {/* <BarChartAxis /> */}
      </div>
    );
  }
}

export default Charts;
