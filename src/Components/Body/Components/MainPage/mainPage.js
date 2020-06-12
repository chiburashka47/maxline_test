import React, { Component } from "react";
import "./style/mainPage.scss";
import { getIcon } from "../../../../Services/PngDrawer";
import EventTable from "./Components/EventTable/eventTable";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.filterList = ["1", "X", "2", "1X", "12", "X2", "Ф1", "Ф2", "М", "Б"];
    this.filter = [
      {
        name: "1",
        firstItem: { arrow: "greenArrow", coef: "2.23" },
        secondItem: { arrow: "greenArrow", coef: "2.23" },
        thirdItem: { arrow: "greenArrow", coef: "2.23" },
      },
      {
        name: "X",
        firstItem: { coef: "4.3" },
        secondItem: { coef: "4.3" },
        thirdItem: { coef: "4.3" },
      },
      {
        name: "2",
        firstItem: { arrow: "redArrow", coef: "1.23" },
        secondItem: { arrow: "redArrow", coef: "1.23" },
        thirdItem: { arrow: "redArrow", coef: "1.23" },
      },
      {
        name: "1X",
      },
      {
        name: "12",
      },
      {
        name: "X2",
      },
      {
        name: "Ф1",
        firstItem: { arrow: "greenArrow", coef: "1.81", difference: "(+5.0)" },
        secondItem: { arrow: "greenArrow", coef: "1.81", difference: "(+5.0)" },
        thirdItem: { arrow: "greenArrow", coef: "1.81", difference: "(+5.0)" },
      },
      {
        name: "Ф2",
        firstItem: { arrow: "redArrow", coef: "2.09", difference: "(-5.0)" },
        secondItem: { arrow: "redArrow", coef: "2.09", difference: "(-5.0)" },
        thirdItem: { arrow: "redArrow", coef: "2.09", difference: "(-5.0)" },
      },
      {
        name: "М",
        firstItem: { coef: "2.05", difference: "(6.0)" },
        secondItem: { coef: "2.05", difference: "(6.0)" },
        thirdItem: { coef: "2.05", difference: "(6.0)" },
      },
      {
        name: "Б",
        firstItem: { coef: "1.82", difference: "(6.0)" },
        secondItem: { coef: "1.82", difference: "(6.0)" },
        thirdItem: { coef: "1.82", difference: "(6.0)" },
      },
    ];
  }
  render() {
    return (
      <div className="mainPageContainer">
        <div className="mainPageTitile">
          Главная / LIVE / Counter-StrikeLOOTBET / Season 6.
        </div>
        <div className="mainPageEvent">
          <div className="EventTitle">
            <div className="EventTitleImg">{getIcon("footballWhite")}</div>
            <p className="EventTitleText">
              Футбол. NBA 2K. Регулярный кубок. 4х5 мин.
            </p>
          </div>

          <EventTable filterList={this.filter} />
        </div>
        <div className="mainPageNews"></div>
        <div className="mainPageMenu"></div>
      </div>
    );
  }
}
