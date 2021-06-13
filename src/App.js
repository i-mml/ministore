import "./App.css";
import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./pages/aboutUs/AboutUs";
import Articles from "./pages/Articles/Articles";
import Connection from "./pages/Connection/Connection";
import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import React from "react";
import orderTracking from "./pages/orderTracking/orderTracking";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main-container">
          <Switch>
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/productList" component={ProductList} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/connection" component={Connection} />
            <Route exact path="/orderTracking" component={orderTracking} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
