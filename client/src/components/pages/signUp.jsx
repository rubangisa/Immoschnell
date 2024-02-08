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
    <div className="container">
      <h1>create your account</h1>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <div className="sub-container1">
            <div className="left-column">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="First name..." />
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Last name..." />
              <label htmlFor="dateOfBirt">Date of Birth</label>
              <input type="date" name="dataOfBirth" placeholder="" />
            </div>
            <div className="right-column">
              <label htmlFor="telephoneNumber">Telephone number</label>
              <input
                type="number"
                name="telephoneNumber"
                placeholder="Telephone number..."
              />
              <label htmlFor="email">email address</label>
              <input type="email" name="email" placeholder="email address..." />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password..."/>
            </div>
          </div>
          <div className="sub-container2">
            <div className="sub-containerP">
            <p>
            <IoIosCheckbox />  agree to the myhome's terms and conditions and myhome's privacy
                policy
              </p>
              <p>
              <MdCheckBoxOutlineBlank />  Sign up to receive myhome newsletters, offer and promotional
                material
              </p>
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
