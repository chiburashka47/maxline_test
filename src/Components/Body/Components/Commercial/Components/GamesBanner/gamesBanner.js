import React from "react";
import "./style/gamesBanner.scss";

export default function GamesBanner({ item }) {
  let { bg, text } = item;
  let elemClassName = "gamesBannerMenuElem";

  return (
    <div className="gamesBannerContainer">
      <img alt="" src={bg} className="gamesBannerBg"></img>
      <div className="gamesBannerMenu">
        {text.map((item, i) => {
          item.active
            ? (elemClassName = "gamesBannerMenuElem active")
            : (elemClassName = "gamesBannerMenuElem");
          return (
            <div key={i} className={elemClassName}>
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
