import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Dash from "./screens/landing";




ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Dash} />
      
    </div>
  </Router>,
  document.getElementById("root")
);