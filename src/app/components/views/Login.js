import React from "react";

// Components
import Announce from "../common/Announce";
import Password from "../common/Password";
import Username from "../common/Username";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordErrors: [],
      usernameError: false,
      submitted: false
    };
  }

  validateSubmission = (e) => {
    // Get Password errors 
    // Get Required errors
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateSubmission(e);
  };

  render() {
    return (
      <div className="panel panel--form">
        <form
          className="form form--center"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <Username
            id="id-usr"
            label="Username"
            error={this.state.usernameError}
            parent={this}
          />
          <Password
            id="id-pass"
            label="Password"
            helpText="Password must include one capital letter, one lower case letter, and at least one number."
            errors={this.state.passwordErrors}
            parent={this}
          />
          <button>Submit</button>
        </form>
        <p>
          Don't have an account? <a href="#">Sign up</a> today
        </p>
        <Announce />
      </div>
    );
  }
}

export default Login;
