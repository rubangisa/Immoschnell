import { useReducer } from "react";
import "./listingInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faHouseFire } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";

const initialState = [
  {
    id: "test123",
    image1:
      "https://images.unsplash.com/photo-1472377723522-4768db9c41ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://media.houseandgarden.co.uk/photos/61893dfdf6acdd8ba4456021/master/w_1920%2Cc_limit/191127_hg_kate_haslett_shot_06print025x.jpg",
    image3:
      "https://media.houseandgarden.co.uk/photos/61893dfcd90b1c76b9d58e54/master/w_1920%2Cc_limit/2766596-house-6nov15_NgocMinhMgo_b.jpg",
    image4:
      "https://media.houseandgarden.co.uk/photos/627b7ef165b42a13fd5a8a90/master/w_1920%2Cc_limit/ideasMay13.jpg",
    image5:
      "https://media.houseandgarden.co.uk/photos/61893b5f62b737ababca1050/master/w_1920%2Cc_limit/su688_hg_kenbolan_bathroom2_hero05x.jpg",
    name: "cottonflower lane",
    location: "canterbury, kent",
    price: 300,
    guests: 6,
    bedrooms: 3,
    beds: 5,
    bathrooms: 1.5,
    hosts: "hannes and gertha",
    amenities:
      "hottub, wifi, fireplace, full kitchen, washing facilites, secure parking",
    userRating: 4.5,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4990.716715127345!2d1.1790615206835688!3d51.286129046748954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47deb450937d6a8d%3A0xd375b0159f3216b9!2sWickhambreaux%2C%20Canterbury%2C%20UK!5e0!3m2!1sen!2sde!4v1708012969083!5m2!1sen!2sde",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PROPERTY_DATA":
      return [action.payload];
    default:
      return state;
  }
};

const ListingInfo = () => {
  const [propertyData] = useReducer(reducer, initialState);

  const formHTML = `
    <form action="/action_page.php">
      <label for="check-in">check-in:</label>
      <input type="date" id="check-in" name="check-in">
      <label for="check-out">check-out:</label>
      <input type="date" id="check-out" name="check-out">
      <button type="submit">book now</button>
    </form>
  `;

  return (
    <div className="prop-listing-info">
      <div className="listing-grid-container">
        <div className="box-4">
          <div className="listing-info">
            <div className="property-info">
              <h2>{propertyData[0].name}</h2>
            </div>
            <p>{propertyData[0].location}</p>
            <p>{propertyData[0].price} € per night</p>
            <p>user rating: {propertyData[0].userRating}</p>
            <p>{propertyData[0].guests} guests</p>
            <p>{propertyData[0].bedrooms} bedrooms</p>
            <p>{propertyData[0].beds} beds</p>
            <p>{propertyData[0].bathrooms} bathrooms</p>
            <p>hosted by: {propertyData[0].hosts}</p>
            <hr />
           
          </div>
          <div className="vl"></div>
          <div
          className="booking-dates"
          dangerouslySetInnerHTML={{ __html: formHTML }}
        ></div>
        <hr />
        <div className="booking-location">
          <iframe
            src={propertyData[0].map}
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        </div>
        <div className="box-5">
        <div className="main-image">
        <img src="https://images.unsplash.com/photo-1472377723522-4768db9c41ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main-image" /></div>
        
          <div className="gallery">
            <img
              className="gallery-img"
              id="image-2"
              src={propertyData[0].image2}
              alt="prop2"
            />
            <img
              className="gallery-img"
              id="image-3"
              src={propertyData[0].image3}
              alt="prop3"
            />
            <img
              className="gallery-img"
              id="image-4"
              src={propertyData[0].image4}
              alt="prop4"
            />
            <img
              className="gallery-img"
              id="image-5"
              src={propertyData[0].image5}
              alt="prop5"
            />
          </div>
          </div>
       

        <div className="box-6">
        <div className="property-details">
          <p>
            escape to the idyllic countryside retreat of cottonflower lane in
            canterbury, kent, where luxury meets tranquility. this enchanting
            property boasts three bedrooms, five beds, and 1.5 bathrooms,
            accommodating up to six guests in style. hosted by the hospitable
            hannes and gertha, this haven offers a plethora of amenities
            including a private hot tub, high-speed wifi, a cozy fireplace, and
            a fully equipped kitchen. from serene lake views to secure parking,
            every detail has been carefully curated to ensure a seamless and
            unforgettable stay. immerse yourself in the beauty of the
            surrounding landscape and explore the historic village of
            wickhambreux, nestled in the heart of the countryside. known for its
            picturesque charm and historic beauty, wickhambreux offers a
            peaceful retreat away from the hustle and bustle of city life. with
            its quaint cottages, winding lanes, and centuries-old buildings, the
            village invites visitors to step back in time and experience a slice
            of traditional english life.
            <br />
            <br />
            
            with a stellar 4.5-star rating from previous guests, cottonflower
            lane promises an unparalleled blend of comfort, elegance, and
            natural charm for your next getaway. discover a sanctuary of
            serenity at cottonflower lane, where every corner is imbued with
            warmth and hospitality. unwind in the comfort of spacious bedrooms,
            gather around the crackling fireplace on chilly evenings, or soak
            your cares away in the indulgent hot tub under the starlit sky. with
            high-speed wifi and a fully equipped kitchen at your disposal, you
            can effortlessly blend relaxation with productivity. whether you're
            seeking adventure in the great outdoors or simply craving a peaceful
            retreat, cottonflower lane offers the perfect setting to create
            cherished memories with loved ones. come experience the magic of
            this hidden gem and let your worries melt away in its embrace.
          </p>
        </div>
          <div className="amen-icons">
          <FontAwesomeIcon icon={faShieldHalved}
          className="icon"
          title="verified host"
          />

            <FontAwesomeIcon
              icon={faDoorOpen}
              className="icon"
              title="self check-in"
            />

            <FontAwesomeIcon
            icon={faWifi}
            className="icon"
            title="high speed wifi"
          />
            <FontAwesomeIcon icon={faBath} className="icon" title="bath tub" />
            <FontAwesomeIcon
              icon={faHotTub}
              className="icon"
              title="private outdoor hot tub"
            />
           

            <FontAwesomeIcon
              icon={faHouseFire}
              className="icon"
              title="log fireplace"
            />
            <FontAwesomeIcon
              icon={faCar}
              className="icon"
              title="secure parking"
            />
            <FontAwesomeIcon
              icon={faKitchenSet}
              className="icon"
              title="full kitchen"
            />
            <FontAwesomeIcon
              icon={faDumbbell}
              className="icon"
              title="private gym"
            />
            <FontAwesomeIcon
              icon={faWheelchair}
              className="icon"
              title="wheelchair accessible"
            />

            <FontAwesomeIcon icon={faSeedling}
            className="icon"
            title="eco friendly"
            />

            <FontAwesomeIcon icon={faTv}
            className="icon"
            title="smart tv"
            />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
