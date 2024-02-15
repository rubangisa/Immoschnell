import { useState, useEffect } from "react";
import "./listingInfo.css";

const UserDash = () => {
    const [propertyData, setPropertyData] = useState([
      {
        id: "test123",
        image1:
          "https://images.unsplash.com/photo-1472377723522-4768db9c41ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        image2:"https://media.houseandgarden.co.uk/photos/61893dfdf6acdd8ba4456021/master/w_1920%2Cc_limit/191127_hg_kate_haslett_shot_06print025x.jpg",
        image3:"https://media.houseandgarden.co.uk/photos/61893dfcd90b1c76b9d58e54/master/w_1920%2Cc_limit/2766596-house-6nov15_NgocMinhMgo_b.jpg",
        image4:"https://media.houseandgarden.co.uk/photos/627b7ef165b42a13fd5a8a90/master/w_1920%2Cc_limit/ideasMay13.jpg",
        name: "cottonflower lane",
        location: "new jersey",
        price: 300,
      },
      
    ]);

    return(
        <div className="grid-container">
        <div className="listing-info"></div>
        <div className="booking-dates"></div>
        <div className="booking-location"></div>
        <div className="property-image">
        <div className="wrapper">
        <nav className="img-nav">
        <a href="#image-1"><img className="nav-img" src={propertyData.image1} alt="prop1"/></a>
        <a href="#image-2"><img className="nav-img" src={propertyData.image2} alt="prop2"/></a>
        <a href="#image-3"><img className="nav-img" src={propertyData.image3} alt="prop1"/></a>
        <a href="#image-4"><img className="nav-img" src={propertyData.image4} alt="prop2"/></a>
        </nav>
        <div className="gallery">
        <img className="gallery-img" id="image-1" src={propertyData.image1} alt="prop1"/>
        <img className="gallery-img" id="image-2" src={propertyData.image2} alt="prop2"/>
        <img className="gallery-img" id="image-3" src={propertyData.image3} alt="prop3"/>
        <img className="gallery-img" id="image-4" src={propertyData.image4} alt="prop4"/>
        </div>
        </div>
        </div>

        </div>
    )
}