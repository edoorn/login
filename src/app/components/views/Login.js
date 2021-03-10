import Password from "../common/Password";
import Username from "../common/Username";

function Login() {
  return (
    <div>
      <form>
        <Password id="id-pass" label="Password" />
        <Username id="id-usr" label="Username or Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
