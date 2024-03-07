// ---------- Login Page ----------

import { useContext, useState } from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { LiaApple } from "react-icons/lia";
import { userLogin } from "../../apiCalls/userApi";
import "../../../styling/login.css";
import { LoginContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatchLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      password: password,
      email: email,
    };

    const success = await userLogin(data, dispatchLogin);
    if (success) {
      navigate(-1);
    } else {
      setShowWarning(true);
    }
  };
  return (
    <div className="login-container">
      <h1 className="login-tittle">Log in</h1>
      <div className="login-wrapper">
        <div className="log-sub-container1 innerMedia">
          <form onSubmit={handleSubmit}>
            <div className="log-left-column">
              <label htmlFor="email">E-mail</label>
              <input
                onChange={handleEmailChange}
                className="login-input"
                type="email"
                name="email"
                placeholder="E-mail..."
                required
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={handlePasswordChange}
                className="login-input"
                type="password"
                name="password"
                placeholder="Password..."
                required
              />
            </div>
            <p className="warning" hidden={!showWarning}>
              Username or Password Incorrect!!
            </p>
            <div className="log-sub-containerButton">
              <button type="submit" className="log-submitButton">
                login
              </button>
            </div>
          </form>
          <div className="horizontal-line-container">
            <div className="horizontal-line"></div>
            <div className="word">or</div>
            <div className="horizontal-line"></div>
          </div>
          <div className="links-container">
            <a
              href="https://support.google.com/answer/2451065?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaGooglePlusG className="logIcon" color="rgb(6, 68, 38)" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <CiFacebook className="logIcon" color="rgb(6, 68, 38)" />
            </a>
            <a
              href="https://appleid.apple.com/"
              target="_blank"
              rel="noreferrer"
            >
              <LiaApple className="logIcon" color="rgb(6, 68, 38)" />
            </a>
          </div>
        </div>
        <div className="log-sub-container2 innerMedia"></div>
      </div>
    </div>
  );
};
export default Login;
