import React from "react";
const renderField = ({
  input,
  label,
  type,
  textarea,
  autoFocus,
  meta: { touched, error },
}) => {
  const textareaType = (
    <textarea {...input} placeholder={label} className="form-control" row="3" />
  );

  const inputType = (
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
      autoFocus={autoFocus}
    />
  );
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">{label}</label>
      <div className="col-sm-9">
        {textarea ? textareaType : inputType}
        {touched && error && <small className="text-danger">{error}</small>}
      </div>
    </div>
  );
};
export default renderField;
