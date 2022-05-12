import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage.jsx";
import BookPage from "./components/BookPage/BookPage.jsx";
const Homepage = React.lazy(() => import("homeapp/HomePage"));

const App = () => {
  return (
    <Switch>
      <Route path="/details">
        <DetailsPage></DetailsPage>
      </Route>
      <Route path="/book">
        <BookPage></BookPage>
      </Route>
      <Route path="/">
        <React.Suspense fallback={null}>
          <Homepage></Homepage>
        </React.Suspense>
      </Route>
    </Switch>
  );
};

export default App;
