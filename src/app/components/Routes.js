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
      </Switch>
    </Router>
  );
}