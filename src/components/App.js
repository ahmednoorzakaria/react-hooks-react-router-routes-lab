import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/directors" component={Directors} />
          <Route path="/actors" component={Actors} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
