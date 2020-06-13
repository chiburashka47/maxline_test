import React from "react";
import "./style/table.scss";
import { getIcon } from "../../../../../../../../Services/PngDrawer";

export default function Table({ data }) {
  return (
    <>
      {data.map((item, i) => {
        return (
          <div key={i} className="matchTable">
            <div className="matchTableTitle">
              <div className="matchTableTitleImg">{getIcon("square")}</div>
              <div className="matchTableTitleText">{item.name}</div>
            </div>
            <div className="matchTableLineContainer">
              {item.lines.map((line, i) => {
                return (
                  <div key={i} className="matchTableLine">
                    {line.map((elem, i) => {
                      return (
                        <div key={i} className="matchTableElem">
                          {elem.elemValue ? (
                            <div className="matchTableElemDual">
                              <div className="matchTableElemKey">
                                {elem.elemKey}
                              </div>
                              <div className="matchTableElemValue">
                                {elem.elemValue}
                              </div>
                            </div>
                          ) : (
                            <div className="matchTableElemSolo">
                              <div className="matchTableElemKey">
                                {elem.elemKey}
                              </div>
                              {elem.elemKey2 ? (
                                <div className="matchTableElemKey">
                                  {elem.elemKey2}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
