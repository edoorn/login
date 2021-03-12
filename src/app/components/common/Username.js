/**
 * Renders a username entry field
 *
 * @property {string} id - Unique machine name
 * @property {string} label - Label text
 * @property {boolean} error - Is this required field filled out?
 * @property {function} update - Update the value of this field
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

    this.input = React.createRef();
  }

  validate(callback) {
    const { parent } = this.props;
    const value = this.input.current.value;

    parent.setState({
      usernameError: value === ''
    }, () => {
      if (callback) {
        callback();
      }
    });
  };

  handleBlur = () => {
    const callback = () => {
      if (this.props.error) {
        announce("Username field is required", "polite");
      } else {
        announce('', 'polite');
      }
    }
    this.validate(callback);
  }

  render() {
    const { id, className, error, label, helpText, hideLabel, update } = this.props;

    let aria_describedby = '';
    if (helpText) {
      aria_describedby += `${id}-help`;
    } 
    if (helpText && error) {
      aria_describedby += ' ';
    }
    if (error) {
      aria_describedby += `${id}-error`;
    }
    
    return (
      <div className="field username">
        <label
          id={`${id}-lbl`}
          className={`label username__label ${hideLabel ? "visually-hidden" : "visible"} ${className ? className : ""}`}
          htmlFor={id}
        >
          {label}
        </label>
          
        {helpText &&
          <div className="note help">
            <p id={`${id}-help`} className="note__content">{helpText}</p>
          </div>
        }
        
        <input
          id={id}
          ref={this.input}
          className="input username__input"
          name={id}
          required
          aria-required="true"
          aria-invalid={error}
          type="text"
          {...(aria_describedby && {
            "aria-describedby": aria_describedby
          })}
          onFocus={() => {
            this.setState({ touched: true })
          }}
          onBlur={this.handleBlur}
          onChange={() => update(id, this.input.current.value)}
        />

        {error && (
          <p id={`${id}-error`} className="error error--inline">Error: This field is required</p>
        )}
      </div>
    );
  }
}

export default Username;
