import React from "react";
import "./style/commercialTitle.scss";

export default function CommercialTitle({ leftText, rightText }) {
  return (
    <div className="commercialTitleContainer">
      <div className="commercialTitleTextLeft">{leftText}</div>
      <div className="commercialTitleTextRight">{rightText}</div>
    </div>
  );
}
