import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form action="" className="login-form">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="login-input"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="login-input"
        />
        <button className="login-button">LOGIN</button>
      </form>
      <button className="login-register-button">
        <Link className="link" to="/register">
          REGISTER
        </Link>
      </button>
    </div>
  );
};

export default Login;
