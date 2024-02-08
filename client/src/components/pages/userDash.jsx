import { useState, useEffect } from "react";
import './userDash.css'
const UserDash = () => {
  const [propertyData, setPropertyData] = useState([{id:'test123', image:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',name:'cottonflower lane', location:'new jersey', price:300}]);
  const [userData, setUserData] = useState([{image:'https://images.unsplash.com/photo-1647888774545-96f662a65e15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'bugmakesthree',updated_at:'14.02.2024' }]);

  // useEffect(() => {
  //   fetch("property_API_URL")
  //     .then((response) => response.json())
  //     .then((data) => setPropertyData(data));

  //   fetch("user_API_URL")
  //     .then((response) => response.json())
  //     .then((data) => setUserData(data));
  // }, []);

  return (
    <div className="container">
      
    <div className="profile.box">
      <div className="user-data">
        {userData.map((user) => (
          <div key={user.id}>
          <img className="profile-pic" src={user.image} alt= {user.name} />
            <h2>welcome back, {user.name}</h2>
            <p>last login: {user.updated_at}</p>
            <button>manage profile</button>
          </div>
          
        ))}
        </div>
      </div>

      <div className="favourites">
        {propertyData.map((property) => (
          <div key={property.id}>
            <p>{property.name}</p> 
            <button>View Property</button>
          </div>
        ))}
        <button>manage favourites</button>
      </div>
    </div>
  );
};

export default UserDash;
