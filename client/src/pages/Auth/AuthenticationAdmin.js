import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//รูปแบบการ export ทำตามนี้เลยครับ
export default function (ComposedComponent) {
  class AuthenticationAdmin extends Component {
    static contextTypes = {
      router: PropTypes.object,
    };

    componentWillMount() {
      if (this.props.data) {
        if (this.props.data.role === "admin") {
          this.context.router.push("/");
        }
      }
    }

    //เช็ค props authenticated ไว้ที่นี้ด้วยนะครับ
    componentWillUpdate(nextProps) {
      if (nextProps.data) {
        if (nextProps.data.role === "admin") {
          this.context.router.push("/");
        }
      }
    }

    render() {
      // รูปแบบการทำเป็น HOC เราจะต้องเอา ส่ง ComposedComponent กลับไป
      // พร้อม props เดิมของ component นั้นๆ ด้วย
      return <ComposedComponent {...this.props} />;
    }
  }

  //map เข้ากับ authReducers
  function mapStateToProps(state) {
    return {
      authenticated: state.authReducers.authenticated,
      data: state.authReducers.data,
    };
  }

  return connect(mapStateToProps)(AuthenticationAdmin);
}
