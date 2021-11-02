import React, { Component } from "react";
import Greeting from "../Components/Greeting";
import DailyActivity from "../Components/DailyActivity";
import UserCharts from "../Components/Charts";
import UserPerformance from "../Pages/UserPerformance";

export class Dashboard extends Component {
  render() {
    return (
      <main>
        <Greeting />
        <div className='main__content'>
          {/* first chart dailyActivity */}
          <DailyActivity />

          {/* 3 bottom charts */}
          <UserCharts />
          {/* calories,protein lipide , UserInfo */}
          <UserPerformance />
        </div>
      </main>
    );
  }
}

export default Dashboard;
