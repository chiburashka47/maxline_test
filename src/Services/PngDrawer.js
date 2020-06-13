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
import stalica from "../style/img/stalica.svg";
import bvf from "../style/img/bvf.png";
import energetic from "../style/img/energetic.png";
import neman from "../style/img/neman.png";
import sfc from "../style/img/sfc.png";
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
      return <img src={maxLine} alt=" " />;
    case "bamf":
      return <img src={bamf} alt=" " />;
    case "tsmoki":
      return <img src={tsmoki} alt=" " />;
    case "square":
      return <img src={square} alt=" " />;
    case "stalica":
      return <img src={stalica} alt=" " />;

    case "bvf":
      return <img src={bvf} alt=" " />;

    case "energetic":
      return <img src={energetic} alt=" " />;
    case "neman":
      return <img src={neman} alt=" " />;
    case "sfc":
      return <img src={sfc} alt=" " />;
    case "mmc":
      return <img src={mmc} alt=" " />;
    case "youtube":
      return <img src={youtube} alt=" " />;
    case "vk":
      return <img src={vk} alt=" " />;
    case "twitter":
      return <img src={twitter} alt=" " />;
    case "instagram":
      return <img src={instagram} alt=" " />;
    case "facebook":
      return <img src={facebook} alt=" " />;
    case "odnokasniki":
      return <img src={odnokasniki} alt=" " />;
    case "logo21":
      return <img src={logo21} alt=" " />;
    case "ipay":
      return <img src={ipay} alt=" " />;
    case "masterCard":
      return <img src={masterCard} alt=" " />;
    case "visa":
      return <img src={visa} alt=" " />;
    case "erip":
      return <img src={erip} alt=" " />;
    case "belarusBank":
      return <img src={belarusBank} alt=" " />;
    case "belPost":
      return <img src={belPost} alt=" " />;
    case "greenCompany":
      return <img src={greenCompany} alt=" " />;
    case "qiwi":
      return <img src={qiwi} alt=" " />;
    case "aGroup":
      return <img src={aGroup} alt=" " />;
    case "svyaznoy":
      return <img src={svyaznoy} alt=" " />;
    case "euroset":
      return <img src={euroset} alt=" " />;
    case "ml":
      return <img src={ml} alt=" " />;
    case "stamp":
      return <img src={stamp} alt=" " />;
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
