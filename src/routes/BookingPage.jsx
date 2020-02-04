import React from "react";
import { Link } from "react-router-dom";

const BookingPage = () => {
  return (
    <div>
      <div>BookingPage</div>
      <Link to="/buytickets/bangalore/movieId/20200404/seatLayout">
        Select Seats
      </Link>
    </div>
  );
};

export default BookingPage;
