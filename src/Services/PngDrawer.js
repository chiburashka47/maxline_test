import React from "react";

import star from "../style/img/Star.png";
import starTransponent from "../style/img/starTransponent.png";
import football from "../style/img/football.png";
import tennis from "../style/img/tennis.png";
import basketball from "../style/img/basketball.png";
import voleyball from "../style/img/voleyball.png";
import cup from "../style/img/cup.png";
import brazil from "../style/img/brazil.png";
import danmark from "../style/img/danmark.png";
import poland from "../style/img/poland.png";
import mans from "../style/img/mans.png";
import womans from "../style/img/womans.png";
import korea from "../style/img/korea.png";
import scotland from "../style/img/scotland.png";
import hokey from "../style/img/hokey.png";
import handball from "../style/img/handball.png";
import cybersport from "../style/img/cybersport.png";
import arrow from "../style/img/arrow.png";
import arrowGreen from "../style/img/arrowGreen.png";
import arrowDown from "../style/img/arrowDown.png";
import arrowDownGreen from "../style/img/arrowDownGreen.png";
import { ReactComponent as ArrowSvg } from "../style/img/arrowSvg.svg";

export const getIcon = (iconName, width, height) => {
  switch (iconName) {
    case "star":
      return (
        <img src={star} style={{ width: width, height: height }} alt=" " />
      );

    case "starTransponent":
      return (
        <img
          src={starTransponent}
          style={{ width: width, height: height }}
          alt=" "
        />
      );

    case "football":
      return (
        <img src={football} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "tennis":
      return (
        <img src={tennis} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "basketball":
      return (
        <img
          src={basketball}
          style={{ width: "14px", height: "14px" }}
          alt=" "
        />
      );

    case "voleyball":
      return (
        <img
          src={voleyball}
          style={{ width: "14px", height: "14px" }}
          alt=" "
        />
      );

    case "cup":
      return (
        <img src={cup} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "brazil":
      return (
        <img src={brazil} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "danmark":
      return (
        <img src={danmark} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "poland":
      return (
        <img src={poland} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "mans":
      return (
        <img src={mans} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "womans":
      return (
        <img src={womans} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "korea":
      return (
        <img src={korea} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "scotland":
      return (
        <img src={scotland} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "hokey":
      return (
        <img src={hokey} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "handball":
      return (
        <img src={handball} style={{ width: "14px", height: "14px" }} alt=" " />
      );

    case "cybersport":
      return (
        <img
          src={cybersport}
          style={{ width: "14px", height: "14px" }}
          alt=" "
        />
      );

    case "arrow":
      return (
        <img src={arrow} style={{ width: "7px", height: "14px" }} alt=" " />
      );

    case "arrowGreen":
      return (
        <img
          src={arrowGreen}
          style={{ width: "7px", height: "14px" }}
          alt=" "
        />
      );

    case "arrowSvg":
      return <ArrowSvg style={{ fill: "red" }} />;

    case "arrowDown":
      return (
        <img src={arrowDown} style={{ width: "15px", height: "7px" }} alt=" " />
      );

    case "arrowDownGreen":
      return (
        <img
          src={arrowDownGreen}
          style={{ width: "15px", height: "7px" }}
          alt=" "
        />
      );

    default:
      break;
  }
  return "Не получил картинку по iconName " + iconName;
};
