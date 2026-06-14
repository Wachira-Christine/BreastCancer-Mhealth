import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import authImage from "../assets/auth-image.jpg";
import "./Auth.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account created successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container register-layout">

        <div className="auth-form-card">
          <h1>Sign Up</h1>

          <form onSubmit={handleRegister}>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />
              <span>✉</span>
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
              <span>🔒</span>
            </div>

            <button
              className="auth-btn"
              type="submit"
            >
              Create Account
            </button>
          </form>

          <div className="register-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </div>

        <div className="auth-image-card">
          <img
            src={authImage}
            alt="Breast Health Awareness"
            className="auth-image"
          />
        </div>

      </div>
    </div>
  );
}