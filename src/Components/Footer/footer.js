import React, { Component } from "react";
import "./style/footer.scss";
import FooterFaq from "./Components/FooterFaq/footerFaq";
import { getIcon } from "../../Services/PngDrawer";
import Logo from "../Header/Components/Logo/logo";
import ImgDrawer from "./Components/ImgDrawer/imgDrawer";

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

    this.footerPartnersImg = {
      className: "footerPartnersImg",
      imgList: [
        "maxLine",
        "bamf",
        "tsmoki",
        "stalica",
        "bvf",
        "energetic",
        "neman",
        "sfc",
        "mmc",
      ],
    };
    this.footerContactsImg = {
      className: "footerContactsImg",
      imgList: [
        "youtube",
        "vk",
        "twitter",
        "instagram",
        "facebook",
        "odnokasniki",
      ],
    };
    this.footerPartnerSmallImg = {
      className: "footerPartnerSmallImg",
      imgList: [
        "logo21",
        "ipay",
        "masterCard",
        "visa",
        "erip",
        "belarusBank",
        "belPost",
        "greenCompany",
        "qiwi",
        "aGroup",
        "svyaznoy",
        "euroset",
        "ml",
      ],
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

        <div className="footerPartners">
          <ImgDrawer data={this.footerPartnersImg} />
        </div>
        <div className="footerContacts">
          <div className="footerLogo">
            <Logo />
          </div>
          <div className="footerContactsText">
            © <p className="footerContactsTextYear">2019</p> Букмекерская
            компания Maxline Все права защищены.
          </div>
          <div className="footerContactsImgContainer">
            <ImgDrawer data={this.footerContactsImg} />
          </div>
        </div>
        <div className="footerPartnerSmall">
          <ImgDrawer data={this.footerPartnerSmallImg} />
          <div className="footerPartnerSmallImgStamp">{getIcon("stamp")}</div>
        </div>
      </div>
    );
  }
}
