import React, { Component } from "react";
import "./style/commercial.scss";
import CommercialTitle from "./Components/CommercialTitle/commercialTitle";
import GamesBanner from "./Components/GamesBanner/gamesBanner";
import betGamesBg from "./style/betGamesBg.png";
import tvBets from "./style/tvBets.png";
import CommercialBanner from "./Components/CommercialBanner/commercialBanner";
import comercialBg from "./style/commercialBg.png";
import { getIcon } from "../../../../Services/PngDrawer";

export default class Commercial extends Component {
  constructor(props) {
    super(props);
    this.tvBets = {
      bg: tvBets,
      text: [
        { name: "1 БЕТ", active: true },
        { name: "5 БЭТ", active: false },
        { name: "7 БЭТ", active: false },
        { name: "КЕНО", active: false },
      ],
    };
    this.betGames = {
      bg: betGamesBg,
      text: [
        { name: "7 ИЗ 42", active: true },
        { name: "6 ИЗ 60", active: false },
        { name: "5 ИЗ 36", active: false },
      ],
    };
    this.CommercialBanner = {
      bg: comercialBg,
      text: "Хамес Родригес хочет уйти из «Баварии» в конце сезона.",
    };
  }
  render() {
    return (
      <div className="commercialContainer">
        <div className="commercialBonus">
          <CommercialTitle leftText="Бонусы" rightText="Все бонусы" />
          <div className="bonusBanner"></div>
          <div className="switchContainer">
            <div className="switchElement active"></div>
            <div className="switchElement"></div>
            <div className="switchElement"></div>
            <div className="switchElement"></div>
            <div className="switchElement"></div>
            <div className="switchElement"></div>
          </div>
        </div>
        <div className="commercialGames">
          <CommercialTitle leftText="TV Игры" rightText="Все игры" />
          <GamesBanner item={this.tvBets} />
          <GamesBanner item={this.betGames} />
        </div>
        <div className="commercialNews">
          <CommercialTitle
            leftText="НОВОСТИ КОМПАНИИ"
            rightText="Все новости"
          />
          <CommercialBanner data={this.CommercialBanner} />
          <CommercialBanner data={this.CommercialBanner} />
          <CommercialBanner data={this.CommercialBanner} />
        </div>
        <div className="commercialSport">
          <CommercialTitle leftText="НОВОСТИ СПОРТА" rightText="Все бонусы" />
          <CommercialBanner data={this.CommercialBanner} />
          <CommercialBanner data={this.CommercialBanner} />
          <CommercialBanner data={this.CommercialBanner} />
        </div>
        <div className="commercialRating">
          <div className="commercialRatingTitle">
            <div className="commercialRatingLogo"></div>
            <div className="commercialRatingText">
              <p>Рейтинг</p>
              <p className="textBlue">Букмекеров</p>
            </div>
          </div>
          <div className="commercialRatingStars">
            <div className="ratingStarContainer">
              {getIcon("star", "30px", "30px", "30px", "30px")}
            </div>
            <div className="ratingStarContainer">
              {getIcon("star", "30px", "30px")}
            </div>
            <div className="ratingStarContainer">
              {getIcon("star", "30px", "30px")}
            </div>
            <div className="ratingStarContainer">
              {getIcon("star", "30px", "30px")}
            </div>
            <div className="ratingStarContainer">
              {getIcon("starTransponent", "30px", "30px")}
            </div>
          </div>
          <div className="commercialRatingMark">
            <p className="ratingMarkText">Оценка РБ</p>
            <p className="ratingMark">4/5</p>
          </div>
          <div className="commercialRatingBtn">Оставить отзыв</div>
        </div>
      </div>
    );
  }
}
