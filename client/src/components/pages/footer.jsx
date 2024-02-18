import { useState, useEffect } from "react";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="myhome logo" />
            <h1>myhome</h1>
            <FontAwesomeIcon icon="coffee" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#">about us</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">privacy policy</a></li>
              <li><a href="#">imprint</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 myhome lettings ltd. all rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;