import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import EventHandling from "./components/EventHandling/EventHandling";
import ConditionalRender from "./components/ConditionalRender/ConditionalRender";
import FormController from "./components/FormController/FormController";

export default function App() {
  return (
    <Router>
        <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/event">
            <EventHandling />
          </Route>

          <Route path="/condition">
            <ConditionalRender />
          </Route>

          <Route path="/form-c">
            <FormController />
          </Route>

        </Switch>
    </Router>
  );
}