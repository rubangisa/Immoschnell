
import "../../../styling/homepage.css";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { BsBuildings } from "react-icons/bs";
import { TbCamper } from "react-icons/tb";
import { PiCastleTurretLight } from "react-icons/pi";
import { PiTent } from "react-icons/pi";

const Home = () => {
  return (
    <div className="homeContainer">
      <h2>
        Explore our selection of boutique rentals to find your perfect home away
        from home.
      </h2>
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
      <h2 className="pop-title">Popular properties</h2>
      <button>Book now</button>
      </div>
    </div>
    
  );
};

export default Home;
