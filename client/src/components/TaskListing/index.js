import React from "react";
import "./style.css";
import { Checkbox } from "antd";
import Task from "./Task";
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
      <Task />
      <Task />
    </div>
  );
}
