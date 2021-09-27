import { Redirect, Route } from "react-router-dom";

import { MovieList, MovieForm } from "./pages";

export const Routes = () => (
  <>
    <Route exact path="/">
      <Redirect to="/movies" />
    </Route>
    <Route path="/movies" exact component={MovieList} />
    <Route path="/movies/new" exact component={MovieForm} />
  </>
);
