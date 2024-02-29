// ---------- Login Page ----------

import React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { LiaApple } from "react-icons/lia";
import "../../../styling/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-tittle">Log in</h1>
      <div className="login-wrapper">
        <div className="log-sub-container1 innerMedia">
        <form>
          <div className="log-left-column">
            
            <label htmlFor="email">E-mail</label>
            <input className="login-input" type="email" name="email" placeholder="E-mail..." required/>
            <label htmlFor="password">Password</label>
            <input className="login-input" type="password" name="password" placeholder="Password..." required/>
          </div>
          <div className="log-sub-containerButton">
            <button type="submit" className="log-submitButton">login</button>
          </div>

        </form>
          <div className="horizontal-line-container">
            <div className="horizontal-line"></div>
            <div className="word">or</div>
            <div className="horizontal-line"></div>
          </div>
          <div className="links-container">
            <a href="https://support.google.com/answer/2451065?hl=en" target="_blank" ><FaGooglePlusG className="logIcon" color="rgb(6, 68, 38)" /></a>
            <a href="https://www.facebook.com/" target="_blank" ><CiFacebook className="logIcon" color="rgb(6, 68, 38)"/></a>
            <a href="https://appleid.apple.com/" target="_blank" ><LiaApple className="logIcon"color="rgb(6, 68, 38)"/></a>       
          </div>
        </div>
        <div className="log-sub-container2 innerMedia"></div>
      </div>
    </div>
  );
};
export default Login;
