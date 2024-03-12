import { useReducer } from "react";
import "./userDash.css";
import membpoints from "../../assets/mempoints_img.png";
import membership_img from "../../assets/membership_img.png";
import social from "../../assets/social-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  propertyData: [
    {
      id: "test123",
      image:
        "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Cottonflower Lane",
      location: "New Jersey",
      price: 300,
    },
    {
      id: "test123",
      image:
        "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Cottonflower Lane",
      location: "New Jersey",
      price: 300,
    },
    {
      id: "test123",
      image:
        "https://images.unsplash.com/photo-1580202313707-46a966af5c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Cottonflower Lane",
      location: "New Jersey",
      price: 300,
    },
  ],
  userData: [
    {
      image:
        "https://images.unsplash.com/photo-1647888774545-96f662a65e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bugmakesthree",
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
      <h1> Your dashboard</h1>
      <div className="grid-container">
        <div className="big-box">
          <div className="box-1">
            <div className="profile-box">
              <div className="user-data">
                {userData.map((user, index) => (
                  <div key={index}>
                    <img
                      className="profile-pic"
                      src={user.image}
                      alt={user.name}
                    />
                    <h2>
                      Welcome back:
                      <br />
                      {user.name}
                    </h2>
                    <div className="user-info">
                      <p>
                        Last login: {user.updated_at} <br /> Number of visits: 6{" "}
                        <br /> Host rating: 4.5
                      </p>
                      <button>Manage profile</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="member-status">
              <h2 className="member-title">Membership status</h2>
              <div className="mem-logo">
                <img src={membership_img} alt="membership badge" />
              </div>
              <p>Platinum maestro</p>
              <button className="mem-button">More</button>
              <div className="mem-points">
                <img src={membpoints} alt="member points" />
              </div>
              <p>Points earned</p>
              <button className="mem-button">Use points</button>
            </div>
                </div>
          <div className="box-2">
            <div className="favourites-box">
              <div className="title-button">
                <h2 className="favourites-title">Your favourites</h2>
                <button className="manage-favourites-button">
                  Manage favourites
                </button>
              </div>
              <div className="property-cards">
                {propertyData.map((property, index) => (
                  <div key={index} className="property-card">
                    <img src={property.image} alt={property.id} />
                    <p>
                      {property.name}, {property.location}
                    </p>
                    <button>View property</button>
                  </div>
                ))}
              </div>
                </div>

            <div className="your-listings">
              <div className="title-button">
                <h2 className="listings-title">Your listings</h2>
                <button className="add-new-listing-button">
                  Add new listing
                </button>
              </div>
              <div className="listing-cards">
                {propertyData.map((property, index) => (
                  <div key={index} className="listing-card">
                    <img src={property.image} alt={property.id} />
                    <p>
                      {property.name}, {property.location}
                    </p>
                    <button>Manage listing</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
                </div>
        <div className="box-3">
          <div className="socials">
          <div className="socials-title">
            <h2 >Socials</h2>
            </div>
            <div className="icon-image">
              <FontAwesomeIcon icon={faArrowLeft} className="arrows" />

              <img src={social} alt="social media post" />

              <FontAwesomeIcon icon={faArrowRight} className="arrows" />
            </div>
            <p className="socials-article">
              10 tips to make your home more eco-friendly
            </p>
          </div>

          <div className="help-center">
            <h2 className="help-title">Help center</h2>
            <div className="help-buttons">
              <button>FAQS</button>
              <button>Guidelines</button>
              <button>Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDash;