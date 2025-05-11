import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../utils/auth";
import './SignUp.css'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSignup = () => {
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long, include uppercase, lowercase, numbers, and symbols.");
      return;
    }

    saveUser(email, password);
    alert("Account created! Now login.");
    navigate("/login");
  };

  return (
    <div className="sign-up">
      <h2>Create Account</h2>
      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password" 
        type="password" 
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button onClick={handleSignup}>Create Account</button>
    </div>
  );
};

export default Signup;
