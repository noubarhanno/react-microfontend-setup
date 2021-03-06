import React from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
const BookPage = React.lazy(() => import("seatapp/SeatSelection"));
const Homepage = React.lazy(() => import("homeapp/HomePage"));
const DetailsPage = React.lazy(() => import("detailsapp/DetailsPage"));
// always leave the react router been managed from the main app
// as all the consumed apps that are exposed need to have the same reference of the react router history and location instance

const App = () => {
  const history = useHistory();
  const location = useLocation();

  const movieClicked = (movie) => {
    history.push(`details/${movie.id}`);
  };
  return (
    <Switch>
      <Route path="/details">
        <React.Suspense fallback={null}>
          <DetailsPage routing={{ history, location }}></DetailsPage>
        </React.Suspense>
      </Route>
      <Route path="/book">
        <React.Suspense fallback={null}>
          <BookPage></BookPage>
        </React.Suspense>
      </Route>
      <Route path="/">
        <React.Suspense fallback={null}>
          <Homepage
            movieClicked={movieClicked}
            routing={{ history, location }}
          ></Homepage>
        </React.Suspense>
      </Route>
    </Switch>
  );
};

export default App;
