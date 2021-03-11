/**
 * Renders a username entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {string} [className] - Add an additional style class
 * @property {string} [helpText] - Instructions and additional context
 * @property {boolean} [hideLabel] - Make a label visually hidden
 */

 import React from "react";

 // helpers
 import { announce } from "../../helpers/helpers";

 class Username extends React.Component {
  constructor() {
    super();

    this.state = {
      touched: false,
    };
  }

  validate = (e) => {
    const { parent } = this.props;
    const value = e.target.value;

    if (value === '') {
      announce("Username field is required", "polite");
    } else {
      announce('', 'polite');
    }

    parent.setState({
      usernameError: value === ''
    });
  };

  render() {
    const { id, className, error, label, helpText, hideLabel } = this.props;

    return (
      <div className="username">
        <label
          id={`${id}-lbl`}
          className={`label username__label ${hideLabel ? "visually-hidden" : "visible"} ${className ? className : ""}`}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          id={id}
          className="input username__input"
          name={id}
          required
          aria-required="true"
          aria-invalid={error}
          type="text"
          {...(helpText && {
            "aria-describedby": `${id}-help`
          })}
          onBlur={this.validate}
        />

        {error && (
          <div>Error: This field is required</div>
        )}
  
        {helpText &&
          <div className="note">
            <p id={`${id}-help`} className="note__content">{helpText}</p>
          </div>
        }
      </div>
    );
  }
}

export default Username;
