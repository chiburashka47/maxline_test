import React from "react";
import { getIcon } from "../../../../Services/PngDrawer";

export default function ImgDrawer({ data }) {
  return (
    <>
      {data.imgList.map((item, i) => {
        return (
          <div key={i} className={data.className}>
            {getIcon(item)}
          </div>
        );
      })}
    </>
  );
}
