import React, { Component } from "react";
import "./style/header.scss";
import Logo from "./Components/Logo/logo";
import NavMenu from "./Components/NavMenu/navMenu";
import Arrow from "./Components/NavMenu/Components/Arrow/arrow";
import PageNavigation from "./Components/pageNavigation/pageNavigation";
import ChatImg from "./Components/pageNavigation/style/chat.png";
import Present from "./Components/pageNavigation/style/present.png";
import Search from "./Components/pageNavigation/style/search.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.navMenu = [
      { name: "СПОРТ", active: true, arrow: false },
      { name: "LIVE", active: false, arrow: false },
      { name: "TV ИГРЫ", active: false, arrow: true },
      { name: "РЕЗУЛЬТАТЫ", active: false, arrow: false },
      { name: "СТАТИСТИКА", active: false, arrow: false },
    ];
    this.pageNavigation = [
      { name: "Новости", bolder: false, img: false },
      { name: "О компании", bolder: false, img: false },
      { name: "Адреса", bolder: true, img: false },
      { name: "Платежи", bolder: false, img: false },
      { name: "Чат", bolder: false, img: ChatImg },
      { name: "Бонус 4%", bolder: true, img: Present },
      { name: "Поиск", bolder: false, img: Search },
    ];
  }
  render() {
    return (
      <div className="header">
        <div className="logoContainer">
          <Logo />
        </div>

        <div className="headerMain">
          <div className="headerTop">
            <div className="navContainer">
              <NavMenu navList={this.navMenu} />
            </div>
            <div className="timeLangContainer">
              <div className="rusFlagImg"></div>
              <Arrow />
              <div className="clockImg"></div>
              <div className="timeLine">13:50 (GMT+3)</div>
            </div>
          </div>
          <div className="headerBottom">
            <div className="headerBottomLeft">
              <PageNavigation navList={this.pageNavigation} />
            </div>
            <div className="headerBottomRight">
              <div className="phoneImg"></div>
              <div className="mobVersionText">Мобильная версия</div>
              <div className="android"></div>
              <div className="iphone"></div>
            </div>
          </div>
        </div>

        <div className="authorise">
          <div className="authoriseLeft">
            <input className="authoriseInput" defaultValue="Логин"></input>
            <div className="authoriseButton">
              <p>Войти</p>
            </div>
          </div>
          <div className="authoriseRight">
            <input className="authoriseInput" defaultValue="Пароль"></input>
            <a href="/" className="forgotPswrd">
              Забыли пароль?
            </a>
            <div className="authoriseButton">
              <p>Регистрация</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
