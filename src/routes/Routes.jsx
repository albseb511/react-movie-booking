import React from "react";
import { Route, Switch } from "react-router-dom";
import BookingPage from "./BookingPage";
import BookingSummary from "./BookingSummary";
import BuyTickets from "./BuyTickets";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import OrderSummary from "./OrderSummary";
import NavBar from "../components/NavBar";

const Routes = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/:place/movies/:movieId" render={MovieDetails} />
        <Route
          path="/buytickets/:place/:movieId/:date"
          exact
          render={BookingPage}
        />
        <Route
          path="/buytickets/:place/:movieId/:date/seatLayout"
          exact
          render={BuyTickets}
        />
        <Route
          path="/buytickets/:place/:movieId/:date/summary"
          exact
          render={BookingSummary}
        />
        <Route path="/payment/:summary" render={OrderSummary} />
      </Switch>
    </>
  );
};

export default Routes;
