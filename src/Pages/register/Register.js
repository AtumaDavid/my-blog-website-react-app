import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form action="" className="register-form">
        <label htmlFor="">Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          className="register-input"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          className="register-input"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          className="register-input"
        />
        <button className="register-button">REGISTER</button>
      </form>
      <button className="register-login-button">
        <Link className="link" to="/login">
          LOGIN
        </Link>
      </button>
    </div>
  );
};

export default Register;
