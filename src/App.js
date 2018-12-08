import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Layout/Navbar.js";
import HomePage from "./Pages/Home/HomePage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
