import "../../../styling/homepage.css";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { TbCamper } from "react-icons/tb";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiTent } from "react-icons/pi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="homeContainer">
      <h1>
        Explore our selection of boutique rentals to find your perfect home away
        from home.
      </h1>
      <div>
        <ul className="homeIcons">
          <li>
            <HiOutlineHome />
          </li>
          <li>
            <BsBuildings />
          </li>
          <li>
            <TbCamper />
          </li>
          <li>
            <PiCastleTurretLight />
          </li>
          <li>
            <PiTent />
          </li>
          <li>
            <HiOutlineHomeModern />
          </li>
        </ul>
      </div>
      <div className="homebox1">
        <h2>Popular properties</h2>
        <button>Book now</button>
      </div>

      <div className="home-cards">
        <div className="home-prop-cards">
          <img
            src="https://f7e5m2b4.rocketcdn.me/wp-content/uploads/2016/01/Modern-Australian-Farm-House-with-Passive-Solar-Design-1.jpg"
            alt="kookaburra ranch,queensland"
          />
          <div className="home-prop-cont">
            <h4>
              <b>Kookaburra Ranch</b>
            </h4>
            <p>Queensland, Australia</p>
            <br />
            <p>
              Bedrooms: 4
              <br />
              Bathrooms: 4
              <br />
              Guests: 4
              <br />
              Price per Night: 780€
            </p>
          </div>
        </div>
        <div className="home-prop-cards">
          <img
            src="https://st.hzcdn.com/simgs/pictures/exteriors/modern-homes-in-laguna-beach-j-kramer-corp-img~9e51960000f722cb_4-8314-1-1292123.jpg"
            alt="sunset spires, california"
          />
          <div className="home-prop-cont">
            <h4>
              <b>Sunset Spires</b>
            </h4>
            <p>California, USA</p>
            <br />
            <p>
              Bedrooms: 7
              <br />
              Bathrooms: 9
              <br />
              Guests: 14
              <br />
              Price per Night: 1300€
            </p>
          </div>
        </div>
        <div className="home-prop-cards">
          <img
            src="https://secure.uniquebookingservices.com/uf/properties/inkwell-cottage/header-xlg-v6/219733-inkwell-cottage-luxury-self-catering-cottage-burford.jpg"
            alt="inkwell cottage, oxfordshire"
          />
          <div className="home-prop-cont">
            <h4>
              <b>Inkwell Cottage</b>
            </h4>
            <p>Oxfordshire, England</p>
            <br />
            <p>
              Bedrooms: 2
              <br />
              Bathrooms: 1.5
              <br />
              Guests: 4
              <br />
              Price per Night: 200€
            </p>
          </div>
        </div>
      </div>

      <div className="homebox2">
        <h2>Why book with us?</h2>
        <div className="homebox2-cont">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="minial home interior with plants"
          />
          <div className="homebox2-icons">
            <FontAwesomeIcon icon={faComments} className="icon" />
            <p>direct contact with hosts</p>
            <FontAwesomeIcon icon={faShieldHalved} className="icon" />
            <p>secure payment options</p>
            <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />{" "}
            <p>transparant and fair pricing</p>
          </div>
          <div className="homebox2-icons2">
            <FontAwesomeIcon icon={faAward} className="icon" />
            <p>trusted and verified reviews</p>
            <FontAwesomeIcon icon={faUsers} className="icon" />
            <p>accessability and inclusivity</p>
            <FontAwesomeIcon icon={faSeedling} className="icon" />
            <p>eco-friedly and sustainable properties</p>
          </div>
        </div>
      </div>

      <div className="homebox3">
        <h2>Unlock your property with <span>myhome</span></h2>
        <div className="homebox3-cont">
          <div className="homebox3-text">
            <p>
              <span>myhome</span> is designed to empower property owners like you, providing
              a seamless avenue to showcase your unique space to travelers
              worldwide.
              <br/>
              <br/>
               Embark on a journey of hospitality excellence by
              signing up with <span>myhome </span>today. Watch as your property transforms
              into a sought-after destination, attracting global travelers
              seeking distinctive and memorable stays. Our user-friendly
              platform, transparent pricing, and secure transactions give you
              the peace of mind to focus on what you do best – providing an
              unforgettable experience for your guests. 
              <br/>
              <br/>
              Don't miss out on the
              opportunity to maximize your property's potential. Join our
              community of hosts and let your property shine on the global
              stage, captivating travelers with its unique charm and
              hospitality.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1633113215988-4eaddc3965d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="couple using computer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
