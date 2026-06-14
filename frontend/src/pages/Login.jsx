import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import authImage from "../assets/auth-image.jpg";
import Logo from "../components/Logo";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/Dashboard");
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <div className="auth-page">
      <div className="auth-container login-layout">
        <div className="auth-image-card">
          <img
               src={authImage}
               alt="Breast Cancer Awareness"
               className="auth-image"
/>
        </div>

        

        <div className="auth-form-card">
          <h1>Login</h1>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span> ✉</span>
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span>🔒</span>
            </div>

            <button className="auth-btn" type="submit">
              Login
            </button>
          </form>

          <div className="auth-links">
            <Link to="/register">Create an account</Link>
            <a href="#">Forgot password</a>
          </div>
        </div>
      </div>
    </div>
  );
}