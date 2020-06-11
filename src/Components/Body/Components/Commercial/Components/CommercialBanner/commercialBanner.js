import React from "react";
import "./style/commercialBanner.scss";

export default function CommercialBanner({ data }) {
  return (
    <div className="commercialBannerContainer">
      <img className="commercialBannerimg" src={data.bg} alt="" />
      <p className="commercialBannerText">{data.text}</p>
    </div>
  );
}
