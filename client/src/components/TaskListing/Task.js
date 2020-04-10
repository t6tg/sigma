import React from "react";
import "./style.css";
import { Button, Tag } from "antd";
export default function Task() {
  return (
    <div>
      <div className="problem-box" style={{ marginTop: "20px" }}>
        <div className="problem-box_text">
          <h3>
            <b>
              1. Max-Min{" "}
              <Tag color="gold" style={{ float: "right" }}>
                Wrong Answer
              </Tag>
            </b>
          </h3>
          <h4>
            <b> Language : </b> C <br />
            <b> Limit-Time : </b> 1 Secound. <br />
            <b> Memory-Limit : </b> 10 MB.
            <br />
            <b> Result : </b> [ PPPPP-- ]
            <Button style={{ float: "right" }} type="primary">
              Submission
            </Button>
          </h4>
        </div>
      </div>
    </div>
  );
}
