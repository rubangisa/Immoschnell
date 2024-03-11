import "./footer.css";
import myhome from "../../assets/my home-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={myhome} alt="myhome logo" />
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faThreads} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <li>
             <Link to="/about"> About us</Link>
            </li>
            <li>
             <Link to="/contacts">Contact us</Link>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 myhome lettings ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;