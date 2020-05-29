import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object,
    };
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push("signin");
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push("signin");
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return {
      authenticated: state.authReducers.authenticated,
    };
  }
  return connect(mapStateToProps)(Authentication);
}
