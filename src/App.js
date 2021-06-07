import "./App.css";
import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import React, { useEffect } from "react";

function App() {
  
  return (
    <>
      <Header /> 
      <div className="main-container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/aboutUs" component={AboutUs} />
          </Switch>
        </Router>
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
