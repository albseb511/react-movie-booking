import React from "react";
import { Link } from "react-router-dom";

const BookingSummary = () => {
  return (
    <div>
      <div>BookingSummary</div>
      <Link to="/payment/summary">PAY</Link>
    </div>
  );
};

export default BookingSummary;
