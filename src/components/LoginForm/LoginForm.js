import { React } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form action="">
          <h4>Login</h4>
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
            ></input>
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
          </div>
          <div className="btn-lgn">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </form>
        <a href="/" className="forgot-pwd">
          Forgot Your Password?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
