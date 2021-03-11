/**
 * Renders a password entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {array} errors - Array of validation error messages
 * @property {string} helpText - Instructions for password validation
 * @property {string} [className] - Add an additional style class
 * @property {boolean} [hideLabel] - Make a label visually hidden
 * @property {function} validateInline - Password validation before submit
 */

import React from "react";

// helpers
import { getPasswordErrors, announce } from "../../helpers/helpers";

class Password extends React.Component {
  constructor() {
    super();

    this.state = {
      touched: false,
    };
  }

  validate = (e) => {
    const { parent } = this.props;
    const value = e.target.value;

    const passwordErrors = getPasswordErrors(value);

    if (passwordErrors.length) {
      const text = `Password error: ${passwordErrors.join(", ")}`;
      announce(text, "polite");
    } else {
      announce('', 'polite');
    }

    parent.setState({
      passwordErrors,
    });
  };

  render() {
    const { id, className, errors, label, helpText, hideLabel } = this.props;

    return (
      <div className="password">
        <label
          id={`${id}-lbl`}
          className={`label password__label ${
            hideLabel ? "visually-hidden" : "visible"
          } ${className ? className : ""}`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={id}
          className="input password__input"
          name={id}
          required
          aria-invalid={
            this.state.touched && errors.length > 0 ? "true" : "false"
          }
          aria-required="true"
          type="password"
          aria-describedby={`${id}-help`}
          onFocus={() => {
            this.setState({ touched: true });
          }}
          onBlur={this.validate}
        />
        {this.state.touched && errors.length > 0 && (
          <div>Error: {errors.join(", ")}</div>
        )}

        <div className="help">
          <p id={`${id}-help`} className="help__content">
            {helpText}
          </p>
        </div>
      </div>
    );
  }
}

export default Password;
