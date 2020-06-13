import React from "react";
import "./style/matchTable.scss";
import Table from "./Components/Table/table";

export default function MatchTable({ data }) {
  return (
    <div className="matchTableContainer">
      <div className="matchTableMenu">
        <div className="matchTableMenuElem active">Все выборы</div>
        <div className="matchTableMenuElem">Форы</div>
        <div className="matchTableMenuElem">Тоталы</div>
        <div className="matchTableMenuElem">Четверти</div>
        <div className="matchTableMenuElem">Разное</div>
      </div>
      <Table data={data} />
      <div className="tableFooter"></div>
    </div>
  );
}
