/**
 * Renders a pop-up dialog box
 */

import React from "react";

// Helpers
import { focusable } from "../../helpers/helpers";

class Dialog extends React.Component {
  constructor() {
    super();

    // Create refs
    this.dialogRoot = React.createRef();

    // Set the initial state
    this.state = {
      focusIndex: 0,
    };

    // Handle focus
    this._focusableElements = [];
  }

  componentDidMount() {
    this._focusableElements = this.dialogRoot.current.querySelectorAll(
      focusable
    );
    this._focusableElements[0].focus();
  }

  focusElement = (index) => {
    this.setState(
      {
        focusIndex: index,
      },
      () => {
        this._focusableElements[index].focus();
      }
    );
  };

  checkKey = (e) => {
    const first = 0;
    const last = this._focusableElements.length - 1;
    const current = this.state.focusIndex;

    const ESCAPE = "Escape";
    const TAB = "Tab";
    const SHIFT = e.shiftKey;

    // Tab Key behavior
    if (e.key === TAB && !SHIFT) {
      e.preventDefault();
      if (current < last) {
        this.focusElement(current + 1);
      } else {
        this.focusElement(first);
      }
    }

    // Shift + Tab Key behavior
    if (e.key === TAB && SHIFT) {
      e.preventDefault();
      if (current > 0) {
        this.focusElement(current - 1);
      } else {
        this.focusElement(last);
      }
    }

    // Escape Key behavior
    if (e.key === ESCAPE) {
      this.closeDialog();
    }
  };

  closeDialog = () => {
    const { parent, callback } = this.props;

    parent.setState({
      showDialog: false,
    }, () => {
      if (callback) {
        callback();
      }
    });
  };

  render() {
    return (
      <div className="dialog__backdrop">
        <div
          id="dialog-root"
          ref={this.dialogRoot}
          className="dialog"
          role="dialog"
          aria-labelledby="dialog__heading"
          aria-modal="true"
          aria-describedby="dialog__description"
          onKeyDown={this.checkKey}
        >
          <div className="dialog__content">
            <h2 id="dialog__heading" className="dialog__title">
              Success
            </h2>
            <p id="dialog__description" className="dialog__description">
              You have successfully logged in.
            </p>

            <button className="btn" onClick={this.closeDialog}>
              Close
            </button>
          </div>
        </div>
      </div>

    );
  }
}

export default Dialog;
