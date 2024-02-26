import { useReducer } from "react";
import "./userDash.css";
import membpoints from '../images/mempoints_img.png';
import membership_img from '../images/membership_img.png';
import social from '../images/social-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const initialState = {
  propertyData: [
    {
      id: "test123",
      image:
        "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "cottonflower lane",
      location: "new jersey",
      price: 300,
    },
    {
      id: "test123",
      image:
        "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "cottonflower lane",
      location: "new jersey",
      price: 300,
    },
    {
      id: "test123",
      image:
        "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "cottonflower lane",
      location: "new jersey",
      price: 300,
    },
  ],
  userData: [
    {
      image:
        "https://images.unsplash.com/photo-1647888774545-96f662a65e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "bugmakesthree",
      updated_at: "14.02.2024",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PROPERTY_DATA":
      return { ...state, propertyData: action.payload };
    case "UPDATE_USER_DATA":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

const UserDash = () => {
  const [state] = useReducer(reducer, initialState);
  const { propertyData, userData } = state;

  return (
    <div className="dash-container">
    <h1> your dashboard</h1>
      <div className="grid-container">
        <div className="profile-box">
          <div className="user-data">
            {userData.map((user, index) => (
              <div key={index}>
                <img className="profile-pic" src={user.image} alt={user.name} /><h2>welcome back,
                <br />
                {user.name}</h2>
                <div className="user-info">
                  <p>
                    last login: {user.updated_at} <br /> number of visits: 6{" "}
                    <br /> host rating: 4.5
                  </p>
                  <button>manage profile</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="favourites-box">
          <h2 className="favourites-title">your favourites</h2>
          <div className="property-cards">
            {propertyData.map((property, index) => (
              <div key={index} className="property-card">
                <img src={property.image} alt={property.id} />
                <p>
                  {property.name}, {property.location}
                </p>
                <button>view property</button>
              </div>
            ))}
          </div>
          <button className="manage-favourites-button">
            manage favourites
          </button>
        </div>
        <div className="member-status">
          <h2 className="member-title">membership status</h2>
          <div className="mem-logo">
          <img src={membership_img} alt="membership badge" />
          </div>
          <p>platinum maestro</p>
          <button className="mem-button">more</button>
          <div className="mem-points">
          <img src={membpoints} alt="member points" />
          </div>
          <p>points earned</p>
          <button className="mem-button">use points</button>
        </div>
        <div className="your-listings">
          <h2 className="listings-title">your listings</h2>
          <div className="listing-cards">
            {propertyData.map((property, index) => (
              <div key={index} className="listing-card">
                <img src={property.image} alt={property.id} />
                <p>
                  {property.name}, {property.location}
                </p>
                <button>manage listing</button>
              </div>
            ))}
          </div>
          <button className="add-new-listing-button">add new listing</button>
        </div>
        <div className="socials">
  <h2 className="socials-title">socials</h2>
  <div className="social-icons">
    <FontAwesomeIcon icon={faArrowLeft} className="arrow-left" />
    <div className="social-img">
      <img src={social} alt="social media post" />
    </div>
    <FontAwesomeIcon icon={faArrowRight} className="arrow-right" />
  </div>
  <p className="socials-article">
    10 tips to make your home more eco-friendly
  </p>
</div>

        <div className="help-center">
          <h2 className="help-title">help center</h2>
          <div className="help-buttons">
            <button>faqs</button>
            <button>guidelines</button>
            <button>contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;
