import React from "react";

// Components
import Announce from "../common/Announce";
import Password from "../common/Password";
import Username from "../common/Username";

// helpers
import { getPasswordErrors } from "../../helpers/helpers";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordErrors: []
    };
  }

  validatePassword = (e) => {
    const value = e.target.value;

    const passwordErrors = getPasswordErrors(value);

    this.setState({
      passwordErrors
    });
  };

  validateSubmission = (e) => {
    // console.log(e);
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
            label="Username or Email"
          />
          <Password
            id="id-pass"
            label="Password"
            helpText="Password must include one capital letter, one lower case letter, and at least one number."
            errors={this.state.passwordErrors}
            validateInline={this.validatePassword}
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
