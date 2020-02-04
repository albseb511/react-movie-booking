import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>ALL MOVIE DETAILS</div>
      <Link to="/bangalore/movies/movieId">GOTO MOVIE</Link>
    </>
  );
};

export default Home;
