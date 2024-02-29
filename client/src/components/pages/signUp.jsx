// ---------- signUp page ----------

import React from "react";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import "../../../styling/signUp.css";
//import { useState } from "react";

const signUp = () => {
  //const setState = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="signUp-container">
      <h1 className="signUp-tittle">create your account</h1>
      <div className="signUp-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="sub-container1">
            <div className="signUp-left-column">
              <label htmlFor="firstname">First Name</label>
              <input className="signUp-input" type="text" name="firstname" placeholder="First name..." required/>
              <label htmlFor="lastname">Last Name</label>
              <input className="signUp-input" type="text" name="lastname" placeholder="Last name..." required/>
              <label htmlFor="dateOfBirt">Date of Birth</label>
              <input className="signUp-input" type="date" name="dataOfBirth" placeholder="" required/>
            </div>
            <div className="signUp-right-column">
              <label htmlFor="telephoneNumber">Telephone number</label>
              <input className="signUp-input"
                type="number"
                name="telephoneNumber"
                placeholder="Telephone number..." required
              />
              <label htmlFor="email">email address</label>
              <input className="signUp-input" type="email" name="email" placeholder="email address..." required/>
              <label htmlFor="password">Password</label>
              <input className="signUp-input"
                type="password"
                name="password"
                placeholder="password..." required/>
            </div>
          </div>
          <div className="sub-container2">
            <div className="sub-containerP">
              <div>
              <input type="checkBox" className=" accent-color"/> <span>agree to the myhome's terms and conditions and myhome's privacy
                policy</span>
              </div>
              <div>
                <input type="checkBox" className=" accent-color" required/> <span>Sign up to receive myhome newsletters, offer and promotional
                material</span>
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

export default signUp;
