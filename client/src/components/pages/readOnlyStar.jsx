import "./myBooking.css";
import { FaStar } from "react-icons/fa";


const ReadOnlyStar = ({ currentRating }) => {
 

  return (
    <div className="starContainer">
      {[...Array(5)].map((star, index) => {
        const currentIndex = index + 1;
        return (
          <label key={index}>
            <input
              className="radio-input"
              type="radio"
              // name="rating"
              value={currentIndex}
            />

            <FaStar
              className="readOnlyStar"
              size={25}
              color={currentIndex <= currentRating ? "#ffc107" : "#064426"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default ReadOnlyStar;
