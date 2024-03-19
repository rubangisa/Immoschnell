import { useNavigate } from "react-router-dom";
import "../../../styling/properties.css";
import { useEffect, useState, useContext } from "react";
import { IoBed } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbGrid3X3 } from "react-icons/tb";
import { getAllPropertyList } from "../../apiCalls/propertyApiCalls.js";
import { ImSpinner } from "react-icons/im";
import { SearchContext } from "../../contexts/AppContext.jsx";
import { IoSearchSharp } from "react-icons/io5";
import ReadOnlyStar from "./readOnlyStar.jsx";

export default function AllProperties() {
  const navigate = useNavigate();
  const { search, dispatchSearch } = useContext(SearchContext);
  const [searchFilter, setSearchFilter] = useState("");
  const [sort, setSort] = useState({
    sortBy: "rating",
    sortOrder: "descending",
  });
  const [propertyList, setPropertyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [pageItemArr, setPageItemArr] = useState([1]);

  const LIMIT = 6;

  useEffect(() => {
    getAllPropertyList(currentPage, LIMIT, search).then((response) => {
      setPropertyList(response.data);
      const totalItems = response.numberOfItems;
      const pageCount = Math.ceil(totalItems / LIMIT);
      setTotalPage(pageCount);

      let newPageItemArr = [];
      for (let i = 1; i <= pageCount; i++) {
        newPageItemArr.push(i);
      }
      setPageItemArr(newPageItemArr);

      setLoading(false);
    });
  }, [currentPage, search]);

  const openListingInfo = (id) => {
    navigate(`/listing-info/${id}`);
  };

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
    setLoading(true);
    setCurrentPage(parseInt(e.target.innerText));
  };

  const handleSort = (e) => {
    let newSort;
    if (e.target.value === "highest") {
      newSort = { sortBy: "pricePerNight", sortOrder: "descending" };
    } else if (e.target.value === "lowest") {
      newSort = { sortBy: "pricePerNight", sortOrder: "ascending" };
    } else if (e.target.value === "name-asc") {
      newSort = { sortBy: "name", sortOrder: "ascending" };
    } else if (e.target.value === "name-desc") {
      newSort = { sortBy: "name", sortOrder: "descending" };
    } else if (e.target.value === "popular") {
      newSort = { sortBy: "rating", sortOrder: "descending" };
    }
    setSort(newSort);
    dispatchSearch({ type: "sort", sort: newSort });
  };

  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
    dispatchSearch({ type: "keyword", keyword: e.target.value });
  };

  return (
    <div className="listingsbody">
      <h1 className="listingsh1">our properties</h1>
      <div className="search-and-sorting">
        <div className="search-container">
          <div className="search">
            <input
              type="text"
              name="find"
              onChange={handleSearch}
              value={searchFilter}
            />
            <IoSearchSharp className="search-icon" />
          </div>
        </div>
        <div className="sort">
          <select className="sorting" onChange={handleSort}>
            <option value="popular">Most Popular</option>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
            <option value="name-asc">Name Ascending</option>
            <option value="name-desc">Name Descending</option>
          </select>
        </div>
      </div>
      <div className="listings-card-container">
        {loading ? (
          <ImSpinner className="spin" />
        ) : (
          propertyList?.map((property, index) => (
            <div
              key={index}
              className="listings-card"
              onClick={() => openListingInfo(property._id)}
            >
              <div className="card-img">
                <img
                  src={
                    property.images[0] ||
                    "https://www.homelane.com/blog/wp-content/uploads/2022/11/box-house-design.jpg"
                  }
                  alt="property"
                />
              </div>
              <div className="card-content">
                <h3 className="property-name-listing">
                  {property.name.toLowerCase()}
                </h3>
                <p className="propertylocation">{property.city}</p>
                <div className="starAndPrice">
                  <ReadOnlyStar currentRating={property.rating} />
                  <p className="pricepernight">
                    {property.pricePerNight} € per night
                  </p>
                </div>
              </div>
              <div className="listing-icons">
                <div className="listing-icon">
                  <IoBed />
                  {property.numberOfBeds}
                </div>
                <div className="listing-icon">
                  <GiBathtub />
                  {property.numberOfBathrooms}
                </div>

                <div className="listing-icon">
                  <TbGrid3X3 />
                  {property.numberOfBedrooms}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
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
  );
}
