import React from "react";
import { Route, Switch } from "react-router-dom";
import BookingPage from "./BookingPage";
import BookingSummary from "./BookingSummary";
import BuyTickets from "./BuyTickets";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import OrderSummary from "./OrderSummary";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/:place/movies/:movieId" render={MovieDetails} />
        <Route path="/buytickets/:place/:movieId/:date" render={BookingPage} />
        <Route
          path="/buytickets/:place/:movieId/:date/seatLayout"
          render={BuyTickets}
        />
        <Route
          path="/buytickets/:place/:movieId/:date/summary"
          render={BookingSummary}
        />
        <Route path="/payment/:summary" render={OrderSummary} />
      </Switch>
    </>
  );
};

export default Routes;
