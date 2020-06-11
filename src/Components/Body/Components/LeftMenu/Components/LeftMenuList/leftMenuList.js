import React from "react";
import "./style/leftMenuList.scss";
import { getIcon } from "../../../../../../Services/PngDrawer";

export default function LeftMenuList({ list }) {
  return list.map((item, i) => {
    let textClassName,
      listMenuContainer = "listMenuContainer",
      arrowContainer = "arrowContainer";

    switch (item.type) {
      case "sport":
        listMenuContainer += " sport";
        textClassName = "listMenuTextSport";
        arrowContainer += " sport";
        break;

      case "country":
        listMenuContainer += " country";
        textClassName = "listMenuText";
        arrowContainer += " country";
        break;

      case "gender":
        listMenuContainer += " gender";
        textClassName = "listMenuText";
        break;

      default:
        console.log("без типа");
    }
    return (
      <div key={i} className={listMenuContainer}>
        <div className="listMenuImg">{getIcon(item.icon)}</div>
        <p className={textClassName}>{item.name}</p>
        {item.arrow ? (
          <div className={arrowContainer}>{getIcon(item.arrow)}</div>
        ) : (
          ""
        )}
      </div>
    );
  });
}
