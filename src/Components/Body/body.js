import React, { Component } from "react";
import LeftMenu from "./Components/LeftMenu/leftMenu";
import Commercial from "./Components/Commercial/commercial";
import MainPage from "./Components/MainPage/mainPage";
import "./style/body.scss";

export default class Body extends Component {
  render() {
    return (
      <div className="bodyContainer">
        <LeftMenu />
        <MainPage />
        <Commercial />
      </div>
    );
  }
}
