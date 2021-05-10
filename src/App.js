import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Place from "./components/containers/place/Place";
import Places from "./components/containers/places/Places";

export default function App(props) {
  return (
    <BrowserRouter basename="/eating-places">
      <Switch>
        <Route exact path="/" component={Places} />
        <Route exact path="/:name" component={Place} />
      </Switch>
    </BrowserRouter>
  );
}
