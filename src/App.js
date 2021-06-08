import "./App.css";
import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./pages/aboutUs/AboutUs";
import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
import ProductList from "./pages/ProductList/ProductList";
import React from "react";
=======
import AboutUs from "./pages/aboutUs/AboutUs";
import React, { useEffect } from "react";
>>>>>>> 2f2d3f7bd89d8871520a89f577445d61e0df799f

function App() {
  
  return (
    <>
<<<<<<< HEAD
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
=======
      <Router>
        <Header />
        <Switch>
          <div className="main-container">
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/productList">
              <ProductList />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
        </Switch>
      </Router>
>>>>>>> 62515f31ea8e06b55026d38de69cf8e14cf30c51
    </>
  );
}

export default App;
