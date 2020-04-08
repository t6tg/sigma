import React from "react";
import "./style.css";
import { Button, Checkbox, Tag } from "antd";
export function TaskListing() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <Checkbox
        onChange={onChange}
        style={{ paddingTop: "15px", paddingLeft: "10px" }}
      >
        Hide successful task
      </Checkbox>
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
            <Button style={{ float: "right" }} type="primary">
              Submission
            </Button>
          </h4>
        </div>
      </div>
      <div className="problem-box" style={{ marginTop: "20px" }}>
        <div className="problem-box_text">
          <h3>
            <b>
              2. A + B{" "}
              <Tag color="green" style={{ float: "right" }}>
                successful
              </Tag>
            </b>
          </h3>
          <h4>
            <b> Language : </b> C <br />
            <b> Limit-Time : </b> 0.5 Secound. <br />
            <b> Memory-Limit : </b> 5 MB.
            <Button style={{ float: "right" }} type="primary">
              Submission
            </Button>
          </h4>
        </div>
      </div>
    </div>
  );
}
