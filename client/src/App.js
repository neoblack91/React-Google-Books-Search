import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/index";
import Saved from "./pages/Saved/index";
import JumboTron from "./components/jumbotron";
import shelf from "./Images/bookshelf.jpg";

function App() {
  return (
    <div
    className="landing-wrapper"
    style={{ backgroundImage: `url(${shelf})` }}
    >
    <Router>
      <JumboTron />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
