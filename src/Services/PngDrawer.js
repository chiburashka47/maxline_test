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
import field from "../style/img/field.png";
import play from "../style/img/play.png";
import tv from "../style/img/tv.png";
import weather from "../style/img/weather.png";
import wind from "../style/img/wind.png";
import timer from "../style/img/timer.png";
import drop from "../style/img/drop.png";
import stadium from "../style/img/stadium.png";
import barel from "../style/img/barel.png";
import circle from "../style/img/circle.png";
import help from "../style/img/help.png";
import link from "../style/img/link.png";
import house from "../style/img/house.png";
import earth from "../style/img/earth.png";
import human from "../style/img/human.png";
import tress from "../style/img/tress.png";
import maxLine from "../style/img/maxLine.png";
import bamf from "../style/img/bamf.png";
import tsmoki from "../style/img/tsmoki.png";
import skale from "../style/img/skale.png";
import greenRectangle from "../style/img/greenRectangle.png";
import redRectangle from "../style/img/redRectangle.png";
import square from "../style/img/square.png";
import stalica from "../style/img/stalica.png";
import bvf from "../style/img/bvf.png";
import energetic from "../style/img/energetic.png";
import neman from "../style/img/neman.png";
import sfc from "../style/img/arrowDownGreen.png";
import mmc from "../style/img/mmc.png";
import youtube from "../style/img/youtube.png";
import vk from "../style/img/vk.png";
import twitter from "../style/img/twitter.png";
import instagram from "../style/img/instagram.png";
import facebook from "../style/img/facebook.png";
import odnokasniki from "../style/img/odnokasniki.png";
import logo21 from "../style/img/21.png";
import ipay from "../style/img/ipay.png";
import visa from "../style/img/visa.png";
import masterCard from "../style/img/masterCard.png";
import erip from "../style/img/erip.png";
import belarusBank from "../style/img/belarusBank.png";
import belPost from "../style/img/belPost.png";
import greenCompany from "../style/img/greenCompany.png";
import qiwi from "../style/img/qiwi.png";
import aGroup from "../style/img/aGroup.png";
import svyaznoy from "../style/img/svyaznoy.png";
import euroset from "../style/img/euroset.png";
import ml from "../style/img/ml.png";
import stamp from "../style/img/stamp.png";
import footballWhite from "../style/img/footballWhite.png";

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

    case "field":
      return (
        <img src={field} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "play":
      return (
        <img src={play} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "tv":
      return <img src={tv} style={{ width: "16px", height: "16px" }} alt=" " />;
    case "weather":
      return (
        <img src={weather} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "wind":
      return (
        <img src={wind} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "timer":
      return (
        <img src={timer} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "drop":
      return (
        <img src={drop} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "skale":
      return (
        <img src={skale} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "greenRectangle":
      return (
        <img
          src={greenRectangle}
          style={{ width: "11.3px", height: "5.7px" }}
          alt=" "
        />
      );
    case "redRectangle":
      return (
        <img
          src={redRectangle}
          style={{ width: "11.3px", height: "5.7px" }}
          alt=" "
        />
      );
    case "stadium":
      return (
        <img src={stadium} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "barel":
      return (
        <img src={barel} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "circle":
      return (
        <img src={circle} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "help":
      return (
        <img src={help} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "link":
      return (
        <img src={link} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "house":
      return (
        <img src={house} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "earth":
      return (
        <img src={earth} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "human":
      return (
        <img src={human} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "tress":
      return (
        <img src={tress} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "maxLine":
      return (
        <img
          src={maxLine}
          style={{ width: "35.8px", height: "47.3px" }}
          alt=" "
        />
      );
    case "bamf":
      return (
        <img src={bamf} style={{ width: "48.4px", height: "49.3px" }} alt=" " />
      );
    case "tsmoki":
      return (
        <img
          src={tsmoki}
          style={{ width: "42.8px", height: "44.8px" }}
          alt=" "
        />
      );
    case "square":
      return (
        <img src={square} style={{ width: "14px", height: "14px" }} alt=" " />
      );
    case "stalica":
      return (
        <img
          src={stalica}
          style={{ width: "48px", height: "46.8px" }}
          alt=" "
        />
      );
    case "bvf":
      return (
        <img src={bvf} style={{ width: "68.5px", height: "44.3px" }} alt=" " />
      );
    case "energetic":
      return (
        <img
          src={energetic}
          style={{ width: "25.4px", height: "55.1px" }}
          alt=" "
        />
      );
    case "neman":
      return (
        <img
          src={neman}
          style={{ width: "37.6px", height: "47.8px" }}
          alt=" "
        />
      );
    case "sfc":
      return (
        <img src={sfc} style={{ width: "40.2px", height: "47.6px" }} alt=" " />
      );
    case "mmc":
      return (
        <img src={mmc} style={{ width: "66.3px", height: "32px" }} alt=" " />
      );
    case "youtube":
      return (
        <img
          src={youtube}
          style={{ width: "14.6px", height: "14.6px" }}
          alt=" "
        />
      );
    case "vk":
      return (
        <img src={vk} style={{ width: "14.6px", height: "14.6px" }} alt=" " />
      );
    case "twitter":
      return (
        <img
          src={twitter}
          style={{ width: "14.6px", height: "14.6px" }}
          alt=" "
        />
      );
    case "instagram":
      return (
        <img
          src={instagram}
          style={{ width: "14.6px", height: "14.6px" }}
          alt=" "
        />
      );
    case "facebook":
      return (
        <img
          src={facebook}
          style={{ width: "14.6px", height: "14.6px" }}
          alt=" "
        />
      );
    case "odnokasniki":
      return (
        <img
          src={odnokasniki}
          style={{ width: "8.62", height: "14.6px" }}
          alt=" "
        />
      );
    case "logo21":
      return (
        <img src={logo21} style={{ width: "21px", height: "17.5px" }} alt=" " />
      );
    case "ipay":
      return (
        <img src={ipay} style={{ width: "14px", height: "14px" }} alt=" " />
      );
    case "masterCard":
      return (
        <img
          src={masterCard}
          style={{ width: "17.4px", height: "10.8px" }}
          alt=" "
        />
      );
    case "visa":
      return (
        <img src={visa} style={{ width: "18.2px", height: "11.2px" }} alt=" " />
      );
    case "erip":
      return (
        <img src={erip} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "belarusBank":
      return (
        <img
          src={belarusBank}
          style={{ width: "15.4px", height: "15.4px" }}
          alt=" "
        />
      );
    case "belPost":
      return (
        <img src={belPost} style={{ width: "16px", height: "16px" }} alt=" " />
      );
    case "greenCompany":
      return (
        <img
          src={greenCompany}
          style={{ width: "15.4px", height: "10px" }}
          alt=" "
        />
      );
    case "qiwi":
      return (
        <img src={qiwi} style={{ width: "14.6px", height: "14.6px" }} alt=" " />
      );
    case "aGroup":
      return (
        <img
          src={aGroup}
          style={{ width: "14.5px", height: "11.7px" }}
          alt=" "
        />
      );
    case "svyaznoy":
      return (
        <img src={svyaznoy} style={{ width: "52px", height: "12px" }} alt=" " />
      );
    case "euroset":
      return (
        <img src={euroset} style={{ width: "50px", height: "8px" }} alt=" " />
      );
    case "ml":
      return <img src={ml} style={{ width: "20px", height: "20px" }} alt=" " />;
    case "stamp":
      return (
        <img src={stamp} style={{ width: "54px", height: "54.7px" }} alt=" " />
      );
    case "footballWhite":
      return (
        <img
          src={footballWhite}
          style={{ width: "16px", height: "16px" }}
          alt=" "
        />
      );

    default:
      break;
  }
  return "Не получил картинку по iconName " + iconName;
};
