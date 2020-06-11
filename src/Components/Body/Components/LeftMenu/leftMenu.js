import React, { Component } from "react";
import "./style/leftMenu.scss";
import { getIcon } from "../../../../Services/PngDrawer";
import LeftMenuList from "./Components/LeftMenuList/leftMenuList";

export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.leftMenuList = [
      {
        name: "Футбол",
        icon: "football",
        arrow: "arrowGreen",
        type: "sport",
      },
      {
        name: "Теннис",
        icon: "tennis",
        arrow: "arrowGreen",
        type: "sport",
      },
      {
        name: "Баскетбол",
        icon: "basketball",
        arrow: "arrowGreen",
        type: "sport",
      },
      {
        name: "Волейбол",
        icon: "voleyball",
        arrow: "arrowDownGreen",
        type: "sport",
      },
      {
        name: "Клубы. Международные",
        icon: "cup",
        arrow: "arrow",
        type: "country",
      },
      {
        name: "Бразилия",
        icon: "brazil",
        arrow: "arrow",
        type: "country",
      },
      {
        name: "Дания",
        icon: "danmark",
        arrow: "arrow",
        type: "country",
      },
      {
        name: "Польша",
        icon: "poland",
        arrow: "arrowDown",
        type: "country",
      },
      {
        name: "Мужчины. Плюслига",
        icon: "mans",
        arrow: "",
        type: "gender",
      },
      {
        name: "Женшины. LSK",
        icon: "womans",
        arrow: "",
        type: "gender",
      },
      {
        name: "Республика Корея",
        icon: "korea",
        arrow: "arrowDown",
        type: "country",
      },
      {
        name: "Шотландия",
        icon: "scotland",
        arrow: "arrow",
        type: "country",
      },
      {
        name: "Хоккей",
        icon: "hokey",
        arrow: "arrowGreen",
        type: "sport",
      },
      {
        name: "Гандбол",
        icon: "handball",
        arrow: "arrowGreen",
        type: "sport",
      },
      {
        name: "Киберспорт",
        icon: "cybersport",
        arrow: "arrowGreen",
        type: "sport",
      },
    ];
  }

  render() {
    return (
      <div className="leftMenu">
        <div className="leftMenuContainer">
          <div className="leftMenuTitle">Виды спорта</div>
          <div className="leftMenuMenu">
            <div className="leftMenuAll">Все события</div>
            <div className="leftMenuLive">LIVE</div>
          </div>
          <div className="leftMenuFavorite">
            <div className="leftMenuFavoriteImg">
              {getIcon("star", "13px", "13px")}
            </div>
            <div className="leftMenuFavoriteText">Избранное</div>
            <div className="leftMenuFavoriteCount">45</div>
          </div>
          <LeftMenuList list={this.leftMenuList} />
        </div>
      </div>
    );
  }
}
