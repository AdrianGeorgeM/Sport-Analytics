import React, { Component } from "react";
import getData from "../Api/api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export class BarChartAxis extends Component {
  constructor(props) {
    super(props);
    this.endpoint = this.props.endpoint;
    this.user = this.props.user;
    this.state = { error: null, isLoaded: false, data: {} };
  }
  componentDidMount() {
    getData(this.user, this.endpoint).then((response) => {
      this.setState(response);
    });
  }
  getDayFromDate(day) {
    const date = new Date(day);
    return date.getDate();
  }
  render() {
    return (
      <ResponsiveContainer width='99%' height='99%' debounce={1}>
        <BarChart data={this.state.data.sessions} barGap={8} barSize={7}>
          <CartesianGrid strokeDasharray='1 2' vertical={false} />
          <XAxis
            padding={{ left: 10, right: 10 }}
            scale='point'
            dataKey='day'
            tickFormatter={this.getDayFromDate}
            tickLine={false}
            tick={{ transform: "translate(0,16)" }}
            axisLine={{ stroke: "#DEDEDE" }}
          />
          <YAxis
            orientation='right'
            tickLine={false}
            axisLine={false}
            tick={{ transform: "translate(30,0)" }}
          />
          {/* https://github.com/recharts/recharts/issues/2135 */}
          <Tooltip
            cursor={{ fill: "rgba(196, 196, 196, 0.5)" }}
            content={this.getCustomTooltipElement}
          />
          <Legend
            iconSize={8}
            iconType='circle'
            verticalAlign='top'
            align='right'
            formatter={this.getLegendText}
            wrapperStyle={{
              paddingBottom: "47px",
            }}
          />
          <Bar
            dataKey='kilogram'
            name='Weight (kg)'
            fill='#282D30'
            radius={[3, 3, 0, 0]}
          />
          <Bar
            dataKey='calories'
            name='Burned calories (kCal)'
            fill='#E60000'
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default BarChartAxis;
