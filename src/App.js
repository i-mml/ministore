import "./App.css";
import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./pages/aboutUs/AboutUs";
import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <div className="main-container">
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/">
              <div className="main-container">
                <Home />
              </div>
            </Route>
          </div>
        </Switch>

      </Router>
    </>
  );
}

export default App;
