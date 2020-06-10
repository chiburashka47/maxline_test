import React from "react";
import "./style/navMenu.scss";
import Arrow from "./Components/Arrow/arrow";

export default function NavMenu({ navList }) {
  return navList.map((item, i) => {
    let className;
    item.active
      ? (className = "navElement active")
      : (className = "navElement");
    return (
      <div key={i} className={className}>
        {item.name}
        {item.arrow ? <Arrow /> : ""}
      </div>
    );
  });
}
