import React, { Component } from "react";
import "./style/footer.scss";
import FooterFaq from "./Components/FooterFaq/footerFaq";

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.faqHelp = {
      img: "help",
      title: "Помощь",
      desc: [
        "Maxline FAQ",
        "Условия",
        "Правила приёма ставок",
        "Техническая поддержка",
      ],
    };
    this.faqLink = {
      img: "link",
      title: "Ссылки",
      desc: ["О компании", "Новости", "Платежи", "Чат"],
    };
    this.faqHome = {
      img: "house",
      title: "Сайт",
      desc: ["Спорт", "Live", "Статистика", "Результаты", "Мобильная версия"],
    };
    this.faqEarth = {
      img: "earth",
      title: "Дополительные адреса",
      desc: ["Зеркало 1", "Зеркало 2", "Зеркало 3", "", ""],
    };
    this.faqBalance = {
      img: "human",
      title: "Счёт",
      desc: [
        "Регистрация",
        "Вход",
        "Пополнения счёта",
        "Вывод средств",
        "Демо счёт",
      ],
    };
    this.faqGames = {
      img: "tress",
      title: "TV Игры",
      desc: ["BetGames", "TVBet", "GoldenRace"],
    };
  }
  render() {
    return (
      <div className="footer">
        <div className="footerInfoRow">
          <FooterFaq data={this.faqHelp} />
          <FooterFaq data={this.faqLink} />
          <FooterFaq data={this.faqHome} />
        </div>
        <div className="footerInfoRow">
          <FooterFaq data={this.faqEarth} />
          <FooterFaq data={this.faqBalance} />
          <FooterFaq data={this.faqGames} />
        </div>

        <div className="footerPartners"></div>
        <div className="footerContacts"></div>
        <div className="footerPartnerSmall"></div>
      </div>
    );
  }
}
