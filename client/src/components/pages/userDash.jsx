import { useContext, useEffect, useState } from "react";
import "./userDash.css";
import membpoints from "../../assets/mempoints_img.png";
import membership_img from "../../assets/membership_img.png";
import social from "../../assets/social-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getListingsOfUser } from "../../apiCalls/listingApi";
import { LoginContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { getBookingsOfUser, getFavoriteBookingsOfUser, updateBookingFavorite } from "../../apiCalls/bookingApiCalls";

const UserDash = () => {
  const [propertyList, setPropertyList] = useState([]);
  const [favoritePropertyList, setFavoritePropertyList] = useState([]);

  const { login } = useContext(LoginContext);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pageItemArr, setPageItemArr] = useState([1]);


  const LIMIT = 3;
 

  useEffect(() => {
    if (login.loggedIn) {
      getListingsOfUser(login.user._id, currentPage, LIMIT).then((response) => {
        setPropertyList(response.data);
        const totalItems = response.numberOfItems;
        const pageCount = Math.ceil(totalItems / LIMIT);
        setTotalPage(pageCount);

        let newPageItemArr = [];
        for (let i = 1; i <= pageCount; i++) {
          newPageItemArr.push(i);
        }
        setPageItemArr(newPageItemArr);
      });
    } else {
      navigate("/login");
    }
  }, [currentPage]);

  useEffect(()=> {
    if(login.loggedIn) {
      getFavoriteBookingsOfUser(login.user._id, LIMIT).then((response)=> {
        console.log()
        setFavoritePropertyList(response.data)
      })
    }
  }, [])

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (e) => {
    setCurrentPage(parseInt(e.target.innerText));
  };

  const handleAddListing =  () => {
    navigate(`/addProperty`)
  }

  const handleContactUs = () => {
    navigate(`/contacts`)
  }

  const handleViewProperty =  (e) => {
    navigate(`/listing-info/${e.target.getAttribute("name")}`)
  }

  const handleManageFavorite = () => {
    navigate(`/my-booking`)
  }

  return (
    <div className="dash-container">
      <h1> Your dashboard</h1>
      <div className="grid-container">
        <div className="big-box">
          <div className="box-1">
            <div className="profile-box">
              <div className="user-data">
                <div>
                  <img
                    className="profile-pic"
                    src="https://images.unsplash.com/photo-1486432155089-343c871b640f?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={login.user.firstName}
                  />
                  <h2>
                    Welcome back, {login.user.firstName}
                  </h2>
                  <div className="user-info">
                    <p>date of birth:{" "}
                    {new Date(login.user.dateOfBirth).toLocaleDateString()}<br />
                      email: {login.user.email}  
                      <br /> phone: {login.user.phone}
                    </p>
                    <button>Manage profile</button>
                  </div>
                </div>
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
                <button onClick={handleManageFavorite} className="manage-favourites-button">
                  Manage favourites
                </button>
              </div>
              <div className="property-cards">
                {favoritePropertyList.map((booking, index) => (
                  <div key={index} className="property-card">
                    <img src={booking.listing.images[0]} alt={booking.listing._id} />
                    <p>
                      {booking.listing.name}, {booking.listing.city}
                    </p>
                    <button onClick={handleViewProperty} name={booking.listing._id}>View property</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="your-listings">
              <div className="title-button">
                <h2 className="listings-title">Your listings</h2>
                <button onClick={handleAddListing} className="add-new-listing-button" >
                  Add new listing
                </button>
              </div>
              <div className="listing-cards">
                {propertyList.map((property, index) => (
                  <div key={index} className="listing-card">
                    <img src={property.images[0]} alt={property._id} />
                    <p>
                      {property.name}, {property.city}
                    </p>
                    <button>Manage listing</button>
                  </div>
                ))}
              </div>
              <div className="dash-pagination">
                <a href="#" onClick={prevPage}>
                  &laquo;
                </a>
                {pageItemArr.map((item, index) => (
                  <a
                    key={index}
                    onClick={handlePageChange}
                    className={currentPage == item ? "active" : ""}
                    href="#"
                  >
                    {item}
                  </a>
                ))}
                <a href="#" onClick={nextPage}>
                  &raquo;
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserDash;
