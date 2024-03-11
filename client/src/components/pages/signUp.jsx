import { useState } from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import "../../../styling/signUp.css";
import { signUp } from "../../apiCalls/userApi";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      password: password,
      email: email,
      phone: phone,
    };

    await signUp(data);
  };

  return (
    <div className="signUp-container">
      <h1 className="signUp-tittle">create your account</h1>
      <div className="signUp-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="sub-container1">
            <div className="signUp-left-column">
              <label htmlFor="firstName">First Name</label>
              <input
                className="signUp-input"
                onChange={handleFirstNameChange}
                type="text"
                name="firstName"
                placeholder="First name..."
                required
              />
              <label htmlFor="lastName">Last Name</label>
              <input
                className="signUp-input"
                onChange={handleLastNameChange}
                type="text"
                name="lastName"
                placeholder="Last name..."
                required
              />
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                className="signUp-input"
                onChange={handleDateOfBirthChange}
                type="date"
                name="dateOfBirth"
                placeholder=""
                required
              />
            </div>
            <div className="signUp-right-column">
              <label htmlFor="telephoneNumber">Telephone number</label>
              <input
                className="signUp-input"
                onChange={handlePhoneChange}
                type="number"
                name="telephoneNumber"
                placeholder="Telephone number..."
                required
              />
              <label htmlFor="email">email address</label>
              <input
                className="signUp-input"
                onChange={handleEmailChange}
                type="email"
                name="email"
                placeholder="email address..."
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="signUp-input"
                onChange={handlePasswordChange}
                type="password"
                name="password"
                placeholder="password..."
                required
              />
            </div>
          </div>
          <div className="sub-container2">
            <div className="sub-containerP">
              <div>
                <input type="checkBox" className=" accent-color" required />{" "}
                <span className="accent-color2">
                  agree to the myhome's terms and conditions and myhome's
                  privacy policy
                </span>
              </div>
              <div>
                <input type="checkBox" className=" accent-color" />{" "}
                <span className="accent-color2">
                  Sign up to receive myhome newsletters, offer and promotional
                  material
                </span>
              </div>
            </div>
            <div className="sub-containerButton">
              <button type="submit" className="submitButton">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
