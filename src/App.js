import "./App.css";
import React from "react";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";
import Greeting from "./Components/Greeting";

function App() {
  return (
    <div className='App'>
      <Header />
      <SideBar />
      <Greeting />
    </div>
  );
}

export default App;
