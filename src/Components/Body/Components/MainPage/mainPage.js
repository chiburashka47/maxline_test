import React, { Component } from "react";
import "./style/mainPage.scss";
import { getIcon } from "../../../../Services/PngDrawer";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.filterList = ["1", "X", "2", "1X", "12", "X2", "Ф1", "Ф2", "М", "Б"];
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

          <div className="eventTable">
            <div className="eventNameColumn">
              <div className="eventName">Название события</div>
            </div>
            {this.filterList.map((name) => {
              return (
                <div className="eventFilterColumn">
                  <div className="eventFilter">{name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mainPageNews"></div>
        <div className="mainPageMenu"></div>
      </div>
    );
  }
}
