import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import "./style.css";
export function Announce() {
  return (
    <div>
      <div className="announce_box">
        <div className="announce_box_text">
          <h2>
            <AudioOutlined /> Announce
          </h2>
          <div className="announce">
            <b>xxxxxxxxxxxx</b> [ upadateAt 2020/04/04 - 14:48:32 ]
            <br />
            ooooooooooooooooooooooooooooooooooo ooooooooooooooooooooooooooooooo
          </div>
        </div>
      </div>
    </div>
  );
}
