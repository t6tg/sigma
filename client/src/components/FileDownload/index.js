import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import "./style.css";
export function FileDownload() {
  return (
    <div>
      <div className="download_box">
        <div className="download_box_text">
          <h2>
            <DownloadOutlined /> Download File
          </h2>
          <b>xxxxxxxxxxxx</b>
          <br />
        </div>
      </div>
    </div>
  );
}
