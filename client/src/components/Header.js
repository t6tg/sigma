import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Collapse, NavbarToggler, NavbarBrand } from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  renderLinks() {
    if (this.props.authentication) {
      if (this.props.data.role === "student") {
        return [
          <li className="nav-item" key={2}>
            <Link to="/task" className="nav-link">
              Task
            </Link>
          </li>,
          <li className="nav-item" key={6}>
            <Link to="/signout" className="nav-link">
              Sign Out
            </Link>
          </li>,
        ];
      } else if (this.props.data.role === "teacher") {
        return [
          <li className="nav-item" key={2}>
            <Link to="/work" className="nav-link">
              แจ้งซ่อม
            </Link>
          </li>,
          <li className="nav-item" key={3}>
            <Link to="/workrepair" className="nav-link">
              งานซ่อม
            </Link>
          </li>,
          <li className="nav-item" key={4}>
            <Link to="/location" className="nav-link">
              สถานที่
            </Link>
          </li>,
          <li className="nav-item" key={5}>
            <Link to="/user" className="nav-link">
              ผู้ใช้งาน
            </Link>
          </li>,
          <li className="nav-item" key={6}>
            <Link to="/signout" className="nav-link">
              Sign Out
            </Link>
          </li>,
        ];
      } else if (this.props.data.role === "admin") {
        return [
          <li className="nav-item" key={6}>
            <Link to="/signout" className="nav-link">
              Sign Out
            </Link>
          </li>,
        ];
      }
    } else {
      //ถ้ายังไม่ได้ทำการ Signin จะแสดงเมนูเดียวเท่านั้น
      return (
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </li>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <NavbarBrand href="/">SigmaGrader</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <ul className="navbar-nav">{this.renderLinks()}</ul>
        </Collapse>
      </nav>
    );
  }
}

//authentication เช็คว่าเป็น true หรือ false
//data ตัวนี้จะได้ข้อมูล PAYLOAD จาก token ครับ
//ทั้งหมดทั้งมวลเราจัดการมาตั้งแต่ action, reducer แล้วครับ
function mapStateToProps(state) {
  return {
    authentication: state.authReducers.authenticated,
    data: state.authReducers.data,
  };
}

export default connect(mapStateToProps)(Header);
