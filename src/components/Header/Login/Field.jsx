import React, { Component } from 'react';
import classNames from "classnames";

class Field extends Component {
  render() {
    const {
      id,
      labelText,
      type,
      placeholder,
      name,
      value,
      onChange,
      handleBlur,
      error
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{labelText}</label>
        <input
          type={type}
          className={classNames("form-control", {
            invalid: error
          })}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    );
  }
}

export default Field;
