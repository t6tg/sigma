import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { Field, reduxForm } from "redux-form";

import { signin } from "../../redux/actions/authActions";
import renderField from "../../Utils/renderFields";

class Signin extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <div className="col-6 mx-auto">
          <div className="card mb-3">
            <h4 className="card-header">เข้าสู่ระบบ</h4>
            <div className="card-body">
              {this.renderAlert()}
              <Field
                name="username"
                component={renderField}
                type="text"
                label="Username"
              />
              <Field
                name="password"
                component={renderField}
                type="password"
                label="Password"
              />
            </div>
            <div className="card-footer text-center">
              <Button color="primary" onClick={handleSubmit(this.onSubmit)}>
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onSubmit = (values) => {
    this.props.dispatch(signin(values));
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Warning: </strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = "จำเป็นต้อง Username";
  }

  if (!values.password) {
    errors.password = "จำเป็นต้องกรอก Password !";
  }

  return errors;
}
const form = reduxForm({
  form: "signinForm",
  validate,
});

function mapStateToProps(state) {
  return {
    errorMessage: state.authReducers.error, //กรณี Signin ไม่ผ่าน
  };
}

export default connect(mapStateToProps)(form(Signin));
