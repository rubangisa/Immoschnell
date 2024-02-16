import { useState, useEffect } from "react";
import "./listingInfo.css";

const ListingInfo = () => {
  const [propertyData, setPropertyData] = useState([
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
        "hottub, wifi, fireplace, full kitchen, washing facilites, lake side, secure parking",
      userRating: 4.5,
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4990.716715127345!2d1.1790615206835688!3d51.286129046748954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47deb450937d6a8d%3A0xd375b0159f3216b9!2sWickhambreaux%2C%20Canterbury%2C%20UK!5e0!3m2!1sen!2sde!4v1708012969083!5m2!1sen!2sde",
    },
  ]);

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
      <div className="property-info">
        <h2>{propertyData[0].name}</h2>
        <p>{propertyData[0].price} € per night</p>
        <p>user rating: {propertyData[0].userRating}</p>
      </div>
      <div className="listing-grid-container">
        <div className="listing-info">
          <p>{propertyData[0].location}</p>
          <p>{propertyData[0].guests} guests</p>
          <p>{propertyData[0].bedrooms} bedrooms</p>
          <p>{propertyData[0].beds} beds</p>
          <p>{propertyData[0].bathrooms} bathrooms</p>
          <p>hosted by: {propertyData[0].hosts}</p>
        </div>
        <div className="main-image"></div>
        <div className="prop-images">
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
        <div className="booking-dates" dangerouslySetInnerHTML={{ __html: formHTML }}>
        </div>
        <div className="booking-location">
          <iframe
            src={propertyData[0].map}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="property-details"></div>
        <div className="property-amenities"></div>
      </div>
    </div>
  );
};

export default ListingInfo
