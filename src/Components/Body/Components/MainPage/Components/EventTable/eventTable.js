import React from "react";
import "./style/eventTable.scss";
import { getIcon } from "../../../../../../Services/PngDrawer";

export default function EventTable({ filterList }) {
  const differenceDrawer = (item) => {
    if (item.difference) {
      return <div className="filterElementDifference">{item.difference}</div>;
    }
  };

  const arrowDrawerRed = (item) => {
    let arrow;
    if (item.arrow) {
      if (item.arrow === "redArrow") {
        arrow = <div className={item.arrow}>{getIcon("redRectangle")}</div>;
      }
    }

    return arrow;
  };
  const arrowDrawerGreen = (item) => {
    let arrow;
    if (item.arrow) {
      if (item.arrow === "greenArrow") {
        arrow = <div className={item.arrow}>{getIcon("greenRectangle")}</div>;
      }
    }

    return arrow;
  };

  const tableElement = (item, option) => {
    let className = "filterElement";
    if (option) {
      className += ` ${option}`;
    }

    return (
      <div className={className}>
        {arrowDrawerGreen(item)}
        {differenceDrawer(item)}
        {coefElement(item, option)}
        {arrowDrawerRed(item)}
      </div>
    );
  };

  const coefElement = (item, option) => {
    let filterElementCoef = "filterElementCoef";

    if (item.difference) {
      filterElementCoef += " underlineCoef";
    } else if (item.arrow) {
      if (item.arrow === "greenArrow") {
        filterElementCoef += " greenCoef";
      } else if (item.arrow === "redArrow") {
        filterElementCoef += " redCoef";
      }
    }

    return <div className={filterElementCoef}>{item.coef}</div>;
  };

  return (
    <div className="tableContainer flexColumn">
      <div className="eventTable">
        <div className="eventNameColumn">
          <div className="eventName">Название события</div>
          <div className="eventNameElementFirst flexColumn">
            <div className="eventNameElementTop flexRow">
              <div className="eventNameImgContainer flexColumn">
                <div className="eventNameImgContainerRow flexRow">
                  {getIcon("starTransponent", "16px", "16px")}
                  {getIcon("field")}
                </div>
                <div className="eventNameImgContainerRow flexRow">
                  {getIcon("play")}
                  {getIcon("tv")}
                </div>
              </div>

              <div className="eventNameTeamNames flexRow">
                <div className="eventNameTeamNamesContainer flex-column">
                  <div className="eventNameTeamNameText">
                    Вестерн Сидней Уондерерз
                  </div>
                  <div className="eventNameTeamNameText">Ньюкасл Джетс</div>
                </div>
                <div className="eventNameTeamNameImg">{getIcon("skale")}</div>
              </div>
            </div>

            <div className="eventNameElementBottom flexRow">
              <div className="eventNameMatchTime">14:35</div>
              <div></div>
              <div className="eventNameGoals">
                77:72 (16:25, 23:23, 14:10, 24:14)
              </div>
              <div className="eventNameTime">64:00</div>
              <div className="eventNameCoef">+124</div>
            </div>
          </div>

          <div className="eventNameElement">1-я карта</div>
          <div className="eventNameElement borderBottomGreen">1-я карта</div>
        </div>
        {filterList.map((item, i) => {
          return (
            <div key={i} className="eventFilterColumn">
              <div className="eventFilter">{item.name}</div>
              <div className="eventFilterElementContainer">
                {item.firstItem ? (
                  tableElement(item.firstItem, "firstElem")
                ) : (
                  <div className="filterElement firstElem">-</div>
                )}

                {item.secondItem ? (
                  tableElement(item.secondItem)
                ) : (
                  <div className="filterElement">-</div>
                )}
                {item.thirdItem ? (
                  tableElement(item.thirdItem, "lastElem")
                ) : (
                  <div className="filterElement lastElem">-</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="tableFooter flexRow">
        <div className="tableFooterWeather">
          <p className="weatherTitle">Погода:</p>
          <div className="wheaterContainer flexRow">
            <div className="weatherImg">{getIcon("weather")}</div>
            <p className="weatherText">+5°C</p>
          </div>
          <div className="wheaterContainer flexRow">
            <div className="weatherImg">{getIcon("wind")}</div>
            <p className="weatherText">0.6</p>
          </div>
          <div className="wheaterContainer flexRow">
            <div className="weatherImg">{getIcon("barel")}</div>
            <p className="weatherText">763</p>
          </div>
          <div className="wheaterContainer flexRow">
            <div className="weatherImg">{getIcon("drop")}</div>
            <p className="weatherText">69%</p>
          </div>
        </div>
        <div className="tableFooterInfo">
          <div className="footerInfoContainer flexRow">
            <div className="footerInfoText">Стадион</div>
            <div className="footerInfoImg">{getIcon("stadium")}</div>
            <div className="footerInfoText">Повторы</div>
            <div className="footerInfoImg">{getIcon("timer")}</div>
            <div className="footerInfoText">Статистика</div>
            <div className="footerInfoImg">{getIcon("circle")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
