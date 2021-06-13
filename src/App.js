import "./App.css";
import "antd/dist/antd.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import AboutUs from "./pages/aboutUs/AboutUs";
import Articles from "./pages/Articles/Articles";
import Connection from "./pages/Connection/Connection";
import FooterComponent from "./Components/Footer/FooterComponent";
import Header from "./Components/Header/Header";
import Home from "./pages/Home/Home";
import HowToOrder from "./pages/HowToOrder/HowToOrder";
import OrderTracking from "./pages/orderTracking/OrderTracking";
import ProductList from "./pages/ProductList/ProductList";
import React from "react";

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
            <Route exact path="/orderTracking" component={OrderTracking} />
            <Route exact path="/HowToOrder" component={HowToOrder} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
