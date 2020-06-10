import React from "react";
import "./style/pageNavigation.scss";

export default function PageNavigation({ navList }) {
  return navList.map((item, i) => {
    let className;
    item.bolder
      ? (className = "pageNavElement bolder")
      : (className = "pageNavElement");
    return (
      <div key={i} className={className}>
        {item.img ? (
          <div className="pageNavImgContainer">
            <img src={item.img} alt="" className="pageNavImg" />
          </div>
        ) : (
          ""
        )}
        {item.name}
      </div>
    );
  });
}
