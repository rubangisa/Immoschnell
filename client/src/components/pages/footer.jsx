import "./footer.css";
import myhome from "../../assets/my home-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
    <hr className="footer-hr"/>
      <div className="footer-content">
        <div className="footer-box">
          <div className="footer-logo">
            <img src={myhome} alt="myhome logo" />
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-info">
            <div className="footer-contact">
              <p>Wattstraße 11 
              <br />Berlin 13355 
              <br/>Germany</p>
              <br/>
              <p><a href="mailto:info@myhome.com">info@myhome.com</a></p>
              <p>(+49)  030 752 2151920</p>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-links">
            <ul>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Imprint</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Become a partner</a></li>
              <li><a href="#">Sustainability statement</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-box">
          <div className="footer-social">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTiktok} alt="tiktok" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faThreads} alt="threads" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faXTwitter} alt="xtwitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 myhome lettings ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
