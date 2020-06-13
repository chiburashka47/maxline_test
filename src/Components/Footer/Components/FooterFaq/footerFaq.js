import React from "react";
import "./style/footerFaq.scss";
import { getIcon } from "../../../../Services/PngDrawer";

export default function FooterFaq({ data }) {
  console.log(data.desc);
  return (
    <div className="faqContainer">
      <div className="faqTitle">
        <div className="faqTitleImg">{getIcon(data.img)}</div>
        <div className="faqTitleText">{data.title}</div>
      </div>
      {data.desc.map((item, i) => {
        return (
          <div key={i} className="faqDescText">
            {item}
          </div>
        );
      })}
    </div>
  );
}
