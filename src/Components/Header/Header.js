import "./Header.css";

import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import { Link, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

const Header = () => {
  const [state, setState] = useState();

  const handleClick = (e) => {
    setState(e.key);
  };

  return (
    <Menu
      onClick={(e) => handleClick(e)}
      selectedKeys={state}
      mode="horizontal"
      className="header-container"
    >
      <Router>
        <Row justify="space-around" align="middle">
          <Col span={8} className="header-cols">
            <Menu.Item
              key="home"
              icon={<MailOutlined />}
              className="header-items"
            >
              <Link to="/">خانه</Link>
            </Menu.Item>
            <Menu.Item
              key="productList"
              icon={<AppstoreOutlined />}
              className="header-items"
            >
              <Link to="/productList">لیست محصولات</Link>
            </Menu.Item>
            <Menu.Item
              key="orderTracking"
              icon={<AppstoreOutlined />}
              className="header-items"
            >
              <Link to="/orderTracking">پیگیری سفارشات</Link>
            </Menu.Item>
          </Col>
          <Col span={6} style={{ textAlign: "center" }}>
            <span className="header-icon">our icon</span>
          </Col>
          <Col span={8} className="header-cols">
            <Menu.Item
              key="articles"
              icon={<AppstoreOutlined />}
              className="header-items"
            >
              <Link to="/articles">مقالات</Link>
            </Menu.Item>
            <Menu.Item
              key="aboutUs"
              icon={<AppstoreOutlined />}
              className="header-items"
            >
              <Link to="/aboutUS">درباره ما</Link>
            </Menu.Item>
            <Menu.Item
              key="conection"
              icon={<AppstoreOutlined />}
              className="header-items"
            >
              <Link to="/conection">تماس با ما</Link>
            </Menu.Item>
          </Col>
        </Row>
      </Router>
    </Menu>
  );
};

export default Header;
