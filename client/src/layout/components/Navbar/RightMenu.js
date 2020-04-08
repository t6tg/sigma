import React, { Component } from "react";
import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  CalculatorOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

class LeftMenu extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal" className="desktop-menu">
          <SubMenu
            key="sub1"
            title={
              <span>
                <span>
                  <Avatar
                    style={{
                      color: "#fff",
                      backgroundColor: "#91d5ff",
                      marginRight: "10px",
                    }}
                  >
                    T
                  </Avatar>
                  Thanawat Gulati
                </span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/profile">
                <UserOutlined /> Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/score">
                <CalculatorOutlined />
                Score
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/logout">
                <LogoutOutlined /> Logout
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default LeftMenu;
