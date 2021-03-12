import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import View from './views/View';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <View view="login" title="Log In" />
        </Route>
        <Route path="/home">
          <View view="home" title="Welcome to Garden Wiki" />
        </Route>
        <Route path="/almanac">
          <View view="almanac" title="Old Farmer's Almanac" />
        </Route>
        <Route path="/frost">
          <View view="frost" title="2021 Seasonal Frost Dates" />
        </Route>
        <Route path="/zone">
          <View view="zone" title="Find Your Zone" />
        </Route>
        <Route path="/success">
          <View view="success" title="You have signed in!" />
        </Route>
      </Switch>
    </Router>
  );
}