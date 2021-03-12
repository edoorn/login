import React from "react";
import { getLoginError } from "../../helpers/helpers";
import { withRouter } from "react-router-dom";

// Components
import Password from "../common/Password";
import Username from "../common/Username";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordErrors: [],
      usernameError: false,
      renderErrorBlock: false
    };

    this.login = React.createRef();
    this.username = React.createRef();
    this.password = React.createRef();
  }

  complete = () => {
    this.props.history.push("/success");

  }

  renderErrorBlock = (type) => {
    this.setState({
      renderErrorBlock: true
    }, () => {
      const block = document.getElementById('login-form-error');
      const p = block.querySelector('p');

      // Allow for lots of variation in error message here
      switch (type) {
        case "fields":
          p.innerText = 'Some fields contain errors.';
          break;
        case "login":
          p.innerText = 'Username and password are incorrect.';
          break;
        default:
          break;
      }

      block.focus();
    });
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
      this.renderErrorBlock("fields");
    } else if (loginError) {
      this.renderErrorBlock("login");
    } else {
      this.setState({
        renderErrorBlock: false
      }, () => {
        this.complete();
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.username.current.validate();
    this.password.current.validate(this.validateForm);
  };

  render() {
    return (
      <div className="panel panel--form">
        {this.state.renderErrorBlock &&
          <div id="login-form-error" tabIndex="-1" className="note error error--block">
            <p></p>
          </div>
        }
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
          <button type="submit" className="btn">Log In</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
