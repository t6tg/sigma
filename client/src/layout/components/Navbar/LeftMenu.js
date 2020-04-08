import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ExperimentOutlined } from "@ant-design/icons";
class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="desktop-menu">
          <Menu.Item key="onlinecourse">
            <Link to="/task">
              <ExperimentOutlined />
              Task
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default RightMenu;
