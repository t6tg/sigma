import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import "./style.css";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import LOGO from "../../../assets/logo.png";
class Navbar extends Component {
  state = {
    current: "home",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <nav className="menuBar">
          <div className="logo">
            <Link to="/">
              <img style={{ width: "130px" }} alt="logo" />
            </Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu />
            </div>
            <div className="rightMenu">
              <RightMenu />
            </div>
            <Button
              className="barsMenu"
              type="primary"
              onClick={this.showDrawer}
            >
              <span>
                <MenuOutlined style={{ fontSize: "16px", color: "#fff" }} />
              </span>
            </Button>
            <Drawer
              title="Coursedex"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <LeftMenu />
              <RightMenu />
            </Drawer>
          </div>
        </nav>
      </div>
    );
  }
}
export { Navbar };
