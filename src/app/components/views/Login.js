import React from "react";
import { getLoginError } from "../../helpers/helpers";

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

    this.login = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  }

  complete = () => {
    console.log('SUCCESS!');
  }

  renderError = (type) => {
    switch (type) {
      case "fields":
        // Page error: list fields
        console.log('Some fields are missing or wrong.')
        break;
      case "login":
        // Page error: list fields
        console.log('You entered the wrong login info.')
        break;
      default:
        break;
    }
  }

  update = (id, value) => {
    this.setState({
      [id]: value
    });
  }

  validateForm = () => {
    const { username, password, usernameError, passwordErrors } = this.state;
    const loginError = getLoginError(username, password);

    if (usernameError || passwordErrors.length) {
      this.renderError("fields");
    } else if (loginError) {
      this.renderError("login");
    } else {
      this.complete();
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.password.current.validate();
    this.username.current.validate();
    this.setState({
      submitted: true
    });
    this.validateForm();
  };

  render() {
    return (
      <div className="panel panel--form">
        <form
          ref={this.login}
          className="form form--center"
          onSubmit={this.handleSubmit}
          noValidate
        >
          <Username
            id="username"
            ref={this.username}
            label="Username"
            error={this.state.usernameError}
            update={this.update}
            parent={this}
          />
          <Password
            id="password"
            ref={this.password}
            label="Password"
            helpText="Password must include one capital letter, one lower case letter, and at least one number."
            errors={this.state.passwordErrors}
            update={this.update}
            parent={this}
          />
          <button type="submit">Submit</button>
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
