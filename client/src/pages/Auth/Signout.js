import React, { Component } from "react";
import { connect } from "react-redux";
import { signout } from "../../redux/actions/authActions";

class Signout extends Component {
  //เมื่อเรียกใช้งาน Component นี้จะส่ง dispatch ไป signout ทันที
  //ทำแบบนี้มันง่ายดีครับ
  componentWillMount() {
    this.props.dispatch(signout());
  }
  render() {
    return <div>👋 Signout Complete See You Again!! </div>;
  }
}

export default connect()(Signout);
