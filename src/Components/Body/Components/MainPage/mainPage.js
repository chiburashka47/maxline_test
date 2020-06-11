import React, { Component } from "react";
import "./style/mainPage.scss";

export default class MainPage extends Component {
  render() {
    return (
      <div className="mainPageContainer">
        <div className="mainPageTitile">
          Главная / LIVE / Counter-StrikeLOOTBET / Season 6.
        </div>
        <div className="mainPageEvent"></div>
        <div className="mainPageNews"></div>
        <div className="mainPageMeny"></div>
      </div>
    );
  }
}
