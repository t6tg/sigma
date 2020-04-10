import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { ExperimentOutlined, FireOutlined } from "@ant-design/icons";
class RightMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="desktop-menu">
          <Menu.Item key="task">
            <Link to="/task">
              <ExperimentOutlined />
              Tasks
            </Link>
          </Menu.Item>
          <Menu.Item key="quiz">
            <Link to="/quiz">
              <FireOutlined />
              Quiz
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default RightMenu;
