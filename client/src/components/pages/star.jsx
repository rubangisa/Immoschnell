import { useState, useEffect } from "react";
import "./myBooking.css";
import { FaStar } from "react-icons/fa";
import {
  createPropertyReview,
  getPropertyReviewOfUser,
} from "../../apiCalls/propertyReviewApiCalls";

const Star = ({ bookingId, userId }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleChangeRating = async (e) => {
    const bookingId = e.target.getAttribute("name");
    const newRating = e.target.value;
    setRating(newRating);
    if (newRating > 0) {
      const data = {
        user: userId,
        booking: bookingId,
        rating: newRating,
      };
      createPropertyReview(data);
    }

    console.log(bookingId + rating);
  };

  useEffect(() => {
    getPropertyReviewOfUser(bookingId, userId).then((response) => {
      if (response.success) {
        setRating(response.data.rating);
      }
    });
  }, []);

  return (
    <div className="star">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              className="radio-input"
              type="radio"
              // name="rating"
              value={currentRating}
              name={bookingId}
              onClick={handleChangeRating}
            />

            <FaStar
              className="star"
              size={30}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#064426"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Star;
