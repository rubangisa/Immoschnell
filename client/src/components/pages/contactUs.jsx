// ---------- signUp page ----------

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../../styling/contactUs.css";
//import { useState } from "react";

const contactPage = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_5690rte",
            "template_iuuc5c8",
            form.current,
            "VBJmtL-syLFfA5juq"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      };
  
  return (
    <div className="contact-container">
      <h1 className="contact-tittle">Contact Us</h1>
      <div className="contact-wrapper">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-container1">
            <div className="contact-left-column">
              <label htmlFor="firstName">First Name</label>
              <input className="contact-input" type="text" name="user_name1" placeholder="First name..." required />
              <label htmlFor="email">Email address</label>
              <input className="contact-input" type="email" name="user_email" placeholder="Email address..." required />
            </div>
            <div className="contact-right-column">
              <label htmlFor="name">Last Name</label>
              <input className="contact-input"
                type="name"
                name="user_name2"
                placeholder="Last Name..." required
              />
              <label htmlFor="telephone">Telephone Number</label>
              <input className="contact-input" type="number" name="user_telephone" placeholder="Telephone Number..." required/>
            </div>
          </div>
          <div className="contact-contact-container2">
            <label htmlFor="name">Your message</label> <br />
            <textarea className="contact-textarea" name="message" id="" cols="80" rows="20" placeholder=""></textarea>

          </div>
          <div className="contact-container3">
            <div className="contact-containerP">
              <p> once you have sent your message, one of our customer support team will get back to you</p>
              <p>please allow 1-3 working days for a response.</p>
            </div>
            <div className="contact-containerButton">
              <button type="submit" value="send" className="contact-lastColButton">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default contactPage;
