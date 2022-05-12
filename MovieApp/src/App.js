import React from "react";
import "./App.scss";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
const BookPage = React.lazy(() => import("seatapp/SeatSelection"));
const Homepage = React.lazy(() => import("homeapp/HomePage"));
const DetailsPage = React.lazy(() => import("detailsapp/DetailsPage"));

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
          <DetailsPage location={location}></DetailsPage>
        </React.Suspense>
      </Route>
      <Route path="/book">
        <React.Suspense fallback={null}>
          <BookPage></BookPage>
        </React.Suspense>
      </Route>
      <Route path="/">
        <React.Suspense fallback={null}>
          <Homepage movieClicked={movieClicked}></Homepage>
        </React.Suspense>
      </Route>
    </Switch>
  );
};

export default App;
