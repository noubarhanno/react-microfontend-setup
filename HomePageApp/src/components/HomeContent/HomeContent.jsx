import React, { Suspense, useEffect, useState } from "react";
import QuickBooking from "../QuickBooking/QuickBooking.jsx";
import "./HomeContent.scss";
// importing from the home page web pack exposed name / the name of the component
// from the react components app exposed components , get the name of a specific component you want to use
const MovieCard = React.lazy(() => import("components/MovieCard"));

const dummyItem = [{ name: "Dummy Movie" }];

const HomeContent = (props) => {
  const [movies, setMovies] = useState(dummyItem);

  // async - await is not undestood by webpack
  // we need to add configuration to make it trasnpiled by babel
  useEffect(async () => {
    // Add the logic to load the movies from server and set to the state
    const res = await fetch("http://localhost:5555/movies");
    const data = await res.json();
    setMovies(data);
  }, []);

  const movieClicked = (item) => {
    if (typeof props.movieClicked === "function") {
      props.movieClicked(item);
    }
  };

  const renderMovieList = () => {
    let items = movies.map((item) => {
      return (
        <div onClick={() => movieClicked(item)} key={item.name}>
          <MovieCard title={item.name} imageUrl={item.imageUrl}></MovieCard>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="home-content-container">
      <QuickBooking></QuickBooking>
      <div className="movies-container">
        <Suspense fallback={null}>{renderMovieList()}</Suspense>
      </div>
    </div>
  );
};

export default HomeContent;
