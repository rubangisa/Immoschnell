// ---------- addListing Page ----------

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlinePool } from "react-icons/md";
import { LiaHotTubSolid } from "react-icons/lia";
import { MdBalcony } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiFireplace } from "react-icons/gi";
import { GiGrandPiano } from "react-icons/gi";
import { GiPoolTableCorner } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GiKitchenScale } from "react-icons/gi";
import { MdLocalLaundryService } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { PiOfficeChairBold } from "react-icons/pi";
import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { FaSkiing } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { GiRingingAlarm } from "react-icons/gi";
import { RiFirstAidKitLine } from "react-icons/ri";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { FaFireExtinguisher } from "react-icons/fa";
import { MdBeachAccess } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import didier from '../../assets/giftrash.gif'
import { PiHouseSimple } from "react-icons/pi";
import "../../../styling/addListing.css";
import { uploadImages } from "../../apiCalls/cloudImageApi";
import { LoginContext } from "../../contexts/AppContext";
import { createListing } from "../../apiCalls/listingApi";

const AddListing = () => {
  const [allValues, setAllValues] = useState({
    name: "",
    streetName: "",
    apartmentNumber: "",
    postalCode: "",
    state: "",
    city: "",
    country: "",
    roomType: "",
    numberOfBedrooms: "",
    numberOfBeds: "",
    numberOfBathrooms: "",
    pricePerNight: "",
    selfCheckIn: "",
    allowPets: "",
    accessibilityFeatures: "",
    smokingAllowed: "",
    childrenAllowed: "",
    description: "",
    rating: "",
    numberOfRatings: "",
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const {login} = useContext(LoginContext)
  const [selectedImages, setSelectedImages] = useState([]);
  const [fileArray, setFileArray] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setFileArray((prevSelectedFilesArray) =>
      prevSelectedFilesArray.concat(selectedFilesArray)
    );
    console.log(selectedFilesArray);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    console.log(imagesArray);
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }
  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }
  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let imageUrlArray = [];
    imageUrlArray = await uploadImages(fileArray);

    const listing = {
      ...allValues,
      user: login.user._id, 
      images: imageUrlArray
    }
   console.log(listing)
   await createListing(listing)
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="addListing-container">
        <h1 className="addListing-tittle">Add property</h1>
        <div className="addListing-wrapper">
          <div className="add-left-container1">
            <div className="add-leftRow1">
              <div className="add-col leftCol1">
                <label htmlFor="name">Property name*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="name"
                  placeholder="enter property name..."
                  required
                />
                <label htmlFor="roomType">Room type*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="roomType"
                  placeholder="enter Room type..."
                  required
                />
              </div>
              <div className="add-col leftCol2">
                <label htmlFor="streetName">Street name*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="streetName"
                  placeholder="enter street name..."
                  required
                />
                <label htmlFor="numberOfBedrooms">Number of bedrooms*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="numberOfBedrooms"
                  placeholder="number of bedrooms..."
                  required
                />
              </div>
              <div className="add-col leftCol3">
                <label htmlFor="postalCode">Postal code*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="postalCode"
                  placeholder="enter postal code..."
                  required
                />
                <label htmlFor="numberOfBeds">Number of beds*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="number"
                  name="numberOfBeds"
                  placeholder="enter number of beds..."
                  required
                />
              </div>
            </div>
            <div className="add-leftRow2">
              <label htmlFor="description">Property description*</label> <br />
              <textarea
                className="add-textarea"
                onChange={changeHandler}
                name="description"
                id=""
                cols="80"
                rows="20"
                placeholder="enter Property description..."
                required
              ></textarea>
            </div>
            <p className="add-leftP">Amenities</p>
            <div className="add-row3">
              <div className="add-iconsRow add-iconsRow1">
                <div>
                  <MdOutlinePool />
                  <p className="icon-name">pool</p>
                </div>
                <div>
                  <LiaHotTubSolid />
                  <p className="icon-name">hot tub</p>
                </div>
                <div>
                  <MdBalcony />
                  <p className="icon-name">balcony</p>
                </div>
                <div>
                  <MdOutlineOutdoorGrill />
                  <p className="icon-name">bbq</p>
                </div>
                <div>
                  <FaUmbrellaBeach />
                  <p className="icon-name">
                    outdoor <br /> seating
                  </p>
                </div>
                <div>
                  <GiFireplace />
                  <p className="icon-name">fireplace</p>
                </div>
                <div>
                  <GiPoolTableCorner />
                  <p className="icon-name">
                    pool <br /> table
                  </p>
                </div>
                <div>
                  <GiGrandPiano />
                  <p className="icon-name">piano</p>
                </div>
              </div>
              <div className="add-iconsRow add-iconsRow2">
                <div>
                  <IoWifi />
                  <p className="icon-name">wifi</p>
                </div>
                <div>
                  <PiTelevisionSimpleBold />
                  <p className="icon-name">smart-tv</p>
                </div>
                <div>
                  <GiKitchenScale />
                  <p className="icon-name">full kitchen</p>
                </div>
                <div>
                  <MdLocalLaundryService />
                  <p className="icon-name">
                    laundry
                    <br />
                    facilities
                  </p>
                </div>
                <div>
                  <FaCar />
                  <p className="icon-name">
                    free
                    <br />
                    parking
                  </p>
                </div>
                <div>
                  <FaTachometerAlt />
                  <p className="icon-name">
                    metered
                    <br />
                    parking
                  </p>
                </div>
                <div>
                  <FaRegSnowflake />
                  <p className="icon-name">air-con</p>
                </div>
                <div>
                  <PiOfficeChairBold />
                  <p className="icon-name">office</p>
                </div>
              </div>
              <div className="add-iconsRow add-iconsRow3">
                <div>
                  <LiaUmbrellaBeachSolid />
                  <p className="icon-name">Beach front</p>
                </div>
                <div>
                  <FaSkiing />
                  <p className="icon-name">slope access</p>
                </div>
                <div>
                  <FaShower />
                  <p className="icon-name">shower</p>
                </div>
                <div>
                  <GiRingingAlarm />
                  <p className="icon-name">fire alarm</p>
                </div>
                <div>
                  <RiFirstAidKitLine />
                  <p className="icon-name">first aid</p>
                </div>
                <div>
                  <FaFireExtinguisher />
                  <p className="icon-name">fire extinguisher</p>
                </div>
                <div>
                  <MdBeachAccess />
                  <p className="icon-name">lake front</p>
                </div>
                <div>
                  <CgGym />
                  <p className="icon-name">Private gym</p>
                </div>
              </div>
            </div>
          </div>
          <div className="add-right-container2">
            <div className="add-rightRow1">
              <div className="add-col rightCol1">
                <label htmlFor="apartmentNumber">Apartment number*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="apartmentNumber"
                  placeholder="enter apartment number..."
                  required
                />
                <label htmlFor="numberOfBathrooms">Number of bathrooms</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="number"
                  name="numberOfBathrooms"
                  placeholder="enter number of bathrooms..."
                />
                <label htmlFor="accessibilityFeatures">
                  Accessibility features*
                </label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="accessibilityFeatures"
                  placeholder="enter accessibility features..."
                  required
                />
              </div>
              <div className="add-col rightCol2">
                <label htmlFor="state">State*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="state"
                  placeholder="enter state..."
                  required
                />
                <label htmlFor="pricePerNight">Price per night*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="pricePerNight"
                  placeholder="price per night..."
                  required
                />
                <label htmlFor="smokingAllowed">Smoking allowed*?</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="smokingAllowed"
                  placeholder="select options"
                  required
                />
              </div>
              <div className="add-col rightCol3">
                <label htmlFor="city">City*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="city"
                  placeholder="enter city..."
                  required
                />
                <label htmlFor="selfCheckIn">Self check in*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="selfCheckIn"
                  placeholder="select option"
                  required
                />
                <label htmlFor="childrenAllowed">Children allowed*?</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="childrenAllowed"
                  placeholder="select option"
                  required
                />
              </div>
              <div className="add-col rightCol4">
                <label htmlFor="country">Country*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="country"
                  placeholder="enter country..."
                  required
                />
                <label htmlFor="allowPets">Allow pets*</label>
                <input
                  className="addListing-input"
                  onChange={changeHandler}
                  type="name"
                  name="allowPets"
                  placeholder="select option"
                  required
                />
              </div>
            </div>
            <p className="add-rightP">Upload photos*</p>
            <div
              className="add-rightRow2 drag-area"
              onClick={() =>
                document.querySelector(".input-uploadPhoto").click()
              }
            >
              <div
                className="add-uploadPhotosPs"
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >
                <form>
                  {isDragging ||
                    (selectedImages.length > 0 &&
                      (selectedImages.length > 5 ? (
                        <p>
                          You can't upload more than 5 images! <br />
                          <span className="error">
                            please delete <b>{selectedImages.length - 5} </b>of
                            them
                          </span>
                        </p>
                      ) : (
                        <p
                          className="upload-btn"
                          onClick={() => {
                            console.log("Uploaded Images");
                          }}
                        >
                          <PiHouseSimple
                            className="PiHouseSimpleIcon"
                            color="rgb(6, 68, 38)"
                          />{" "}
                          Uploaded {selectedImages.length} Max{" "}
                          {selectedImages.length === 1 ? "" : "(5)"}
                        </p>
                      )))}
                  <input
                    className="input-uploadPhoto"
                    type="file"
                    multiple
                    accept="image/*"
                    hidden
                    onChange={onSelectFile}
                  />
                  <div className="imagesBox">
                    {selectedImages &&
                      selectedImages.map((image, index) => {
                        return (
                          <div key={image} className="addL1-image">
                            <img
                              className="addL-image2"
                              src={image}
                              height="200"
                              width="100"
                              alt="upload"
                            />
                            <button
                              className="imageBtn"
                              onClick={() =>
                                setSelectedImages(
                                  selectedImages.filter((e) => e !== image)
                                )
                              }
                            >
                              <span className="spanDel">delete</span>
                              <TiDelete />
                            </button>
                          </div>
                        );
                      })}
                  </div>
                  <p className="add-uploadPhotoP1">
                    drag your images here, or browse <FaCloudUploadAlt />
                  </p>
                  <p className="add-uploadPhotoP2">supported: jpg,jped,png</p>
                </form>
              </div>
            </div>
            <section className="fileName">
                    <p>{selectedImages.length}  Empty<img src={didier} alt="" className="deleteIcon" onClick={()=>{
                      setSelectedImages([])
                    } } /> </p>
                  </section>
            <div className="add-lastCol">
              <div className="add-lastColP">
                <p>fields marked with an *are required <br /> if you have any questions or need help, please <br /> <Link to="/contacts" className="contactUsLink"> contact us</Link></p>
              </div>
              <button className="add-lastColButton">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddListing;
