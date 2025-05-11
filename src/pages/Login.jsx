import { useState } from "react";
import { login, getUser } from "../utils/auth";
import './Login.css'
const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = getUser();

    if (user?.email === email && user?.password === password) {
      login();      
      onLogin();
    } else {
      setError(alert("Invalid credentials. Please try again."));
    }
  };

  return (
    <>
      <div className="whole-container">
        <div className="left-container">
          <h2>Welcome back to Login</h2>
          <p style={{fontSize: '18px'}}>Its great to have you back</p>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email"/>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
          {error && <div className="login-error" style={{ color: "red" }}>{error}</div>}
          <div className="forget-password">
            <div className="input">
              <input type="checkbox" id="remember-me"/>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <p style={{textDecoration:'underline'}}>Forget Password</p>
          </div>
          <button onClick={handleLogin}>Login</button>
          <p>Don't have an account? <a href="/signup" className="create-account">Create one</a></p>
          <p>Or Login with</p>
          <div className="social">
            <span style={{color:"#f51585"}}>Facebook</span>
            <span style={{color:"#f51585"}}>Google</span>
          </div>
          
      </div>
        <div className="right-container"></div>
      </div>
    </>
  );
};

export default Login;
