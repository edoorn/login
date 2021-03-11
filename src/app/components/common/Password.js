/**
 * Renders a password entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {array} errors - Array of validation error messages
 * @property {string} helpText - Instructions for password validation
 * @property {function} update - Update the value of this field
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

    this.input = React.createRef();
  }

  validate(callback) {
    const { parent } = this.props;
    const value = this.input.current.value;

    const passwordErrors = getPasswordErrors(value);
    parent.setState({
      passwordErrors,
    }, () => {
      if (callback) {
        callback();
      }
    });
  };

  handleBlur = () => {
    const callback = () => {
      console.log(this.props.errors.length)
      if (this.props.errors.length) {
        const text = `Password error: ${this.props.errors.join(", ")}`;
        announce(text, "polite");
      } else {
        announce('', 'polite');
      }
    }
    this.validate(callback);
  }

  render() {
    const { id, className, errors, label, helpText, hideLabel, update } = this.props;

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
          ref={this.input}
          className="input password__input"
          name={id}
          required
          aria-invalid={errors.length > 0 ? "true" : "false"}
          aria-required="true"
          type="password"
          aria-describedby={`${id}-help`}
          onFocus={() => {
            this.setState({ touched: true });
          }}
          onBlur={this.handleBlur}
          onChange={() => update(id, this.input.current.value)}
        />
        {errors.length > 0 && (
          <div>{`Error: ${errors.join(", ")}`}</div>
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
