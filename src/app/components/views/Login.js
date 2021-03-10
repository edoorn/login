import Password from "../common/Password";
import Username from "../common/Username";

function Login() {
  return (
    <div className="panel panel--form">
      <form className="form form--center">
        <Password id="id-pass" label="Password" helpText="Must include..." />
        <Username id="id-usr" label="Username or Email" />
        <button>Submit</button>
      </form>
      <p>Don't have an account? <a href="#">Sign up</a> today</p>
    </div>
  );
}

export default Login;
